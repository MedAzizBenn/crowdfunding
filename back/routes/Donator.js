var express = require('express');
var router = express.Router();
var donatorManagement  = require('../utils/donatorManagement');
const donatorMgt = new donatorManagement();
const passport = require('passport');
const jwt = require("jsonwebtoken");
var ObjectID = require('mongodb').ObjectID;


const multer = require('multer');

const Storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req,file,cb) =>{
        cb(null,file.originalname);
    }
});

const FilesStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/files")
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname)
    },
  });


const avatar  = multer({
    storage: Storage,
    limits: {
        fileSize: 2000000,
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(jpg|png|JPG|PNG|JPEG|jpeg)$/)) 
        {
            return cb(new  Error('this is not the correct format of file'));
        }
        cb(undefined,true)
    }
});

const files  = multer({
    storage: FilesStorage,
    limits: {
        fileSize: 2000000,
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(pdf|txt|doc|docx)$/)) 
        {
            return cb(new  Error('this is not the correct format of file'));
        }
        cb(undefined,true)
    }
});

const Mpfiles  = multer({
    storage: FilesStorage,
    limits: {
        fileSize: 2000000,
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(mp4|mp3)$/)) 
        {
            return cb(new  Error('this is not the correct format of file'));
        }
        cb(undefined,true)
    }
});

router.get('/google/callback',passport.authenticate('google',{
    successRedirect: process.env.CLIENT_URI,
    failureRedirect: '/login/failed',
}));

router.post('/login',async(req,res) =>{
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;
    const donatorMgt = new donatorManagement();
    donatorMgt.validatePasswordByEmail(email,password)
    .then((resp) =>{
        if(resp === null ){
            res.status(404).send({
                message : "email not found",
                value : resp,
            });
        }else if (resp){
            const payload = {
                "email": email,
                "role": "donator",
            };
            jwt.sign(payload, "secret",{expiresIn:'12h'},(err,token)=>{
                if(err) {
                    res.status(403).send({message: "an error occured"});
                }else {
                    res.status(200).send({token: token});
                }
            })
        }
    })
})
router.get('/login/success',async(req,res) =>{
    console.log(req.user);
    
    if(req.user){
        return res.status(200).send({
            error: false,
            message: "Successfully loged in ",
            user: req.user,
        });
    }else {
        res.status(403).send({
            error: true,
            message : "not authroized",
        });
    }
});
router.get('/login/failed',async(req,res) =>{
    res.status(401).json({
        error:true,
        message:"log in failure",
    });
});
router.get('/google',passport.authenticate('google',['profile','email']));

router.get('/logout', (req,res) =>{
    req.logOut();
    res.redirect(process.env.CLIENT_URI);
})
router.get('/',async(req,res) =>{
    donatorMgt.getDonators().then((resp) =>{
        if(!resp){
            return res.status(400).json({
                message: "no donators yet",
                value: resp
            });
        }else {
            return res.status(200).json(resp);
        }
    });
});



router.post('/',avatar.single('profilePic'),async(req,res) =>{
    console.log(req.file);
    const name = req.body.name;
    const lastName = req.body.lastName;
    const gender = req.body.gender;

    const email = req.body.email
    const password = req.body.password;
    const address = req.body.address;
    const gouvernorat = req.body.gouvernorat;
    const city = req.body.city;
    const zipCode = req.body.zipcode;
    const profession = req.body.profession;
    const telephone = req.body.telephone;
    const company = req.body.company;
    const description = req.body.description;


    donatorMgt.addDonator(name,lastName,gender,
        email,
        password,
        address,
        zipCode,
        gouvernorat,
        city,
        profession,
        telephone,
        company,
        description
        )
        .then((resp) =>{
            if(!resp){
                return res.status(400).send("email does exist");
            }else {
                return res.status(201).send({
                    message:"user created",
                    value: resp
                });
            }
        });
});

router.put('/uploadprofile/:id',avatar.single('profilePic'),async(req,res) =>{
    const photo = req.file.path;
    const id = req.params.id;
    donatorMgt.addProfilePic(id,photo).then((resp) =>{
        if(resp == null){
            res.status(404).send("donator not found");
        }
        else if(!resp) {
            return res.status(400).send( {
                message : "donator not found",
                value: resp
            });
        }
        else {
            return res.status(200).send({message :" upload profile image succeed ", value: resp});
        }
    });
});

router.put('/uploadcover/:id',avatar.single('coverPic'),async(req,res) =>{
    const photo = req.file.path;
    const id = req.params.id;
    donatorMgt.addCoverPic(id,photo).then((resp) =>{
        if(resp == null){
         

            res.status(404).send("donator not found");
        }
        else if(!resp) {
            return res.status(400).send( {

                message : "donator not found",
                value: resp
            });
        }
        else {
            return res.status(200).send({message :" upload cover image succeed ", value: resp});
        }
    });
});

router.put('/uploadfiles/:id',files.array('file',3),async(req,res) =>{
    console.log(req.file);
    const file = req.file.path;
    const id = req.params.id;
    donatorMgt.addFile(id,file).then((resp) =>{
        if(resp == null){
            res.status(404).send("donator not found");
        }
        else if(!resp) {
            return res.status(400).send( {

                message : "donator not found",
                value: resp
            });
        }
        else {
            return res.status(200).send({message :" upload file image succeed ", value: resp});
        }
    });
});





router.get('/:id', async(req,res) =>{
    donatorMgt.getDonatorById(req.params.id).then((resp) =>{
        if(!resp){
            return res.status(400).send({
                message:"donator does not exist",
                value: resp
            });
        }
        else {
            console.log(resp.coverPic);
            return res.status(200).send({
                message:"donator exist",
                value: resp
            });
        }
    });
})
router.get('/getbyemail/:email', async (req,res) =>{
    donatorMgt.getDonatorByEmail(req.params.email).then((resp) =>{
        if (!resp){
            return res.status(400).send({
                message:"donator does not exist",
                value: resp
            });
        }else {
            return res.status(200).send({
                message : "donator exist",
                value: resp,
            });
        }
    });
});
router.get('/getbywallet/:wallet',async(req,res) => {
    donatorMgt.getDonatorByWallet(req.params.wallet).then((resp) =>{
        if (!resp){
            return res.status(400).send({
                message:"donator does not exist",
                value: resp
            });
        }else {
            return res.status(200).send({
                message : "donator exist",
                value: resp,
            });
        }
    });
});
router.delete('/:id', async(req,res)=>{
    donatorMgt.deleteDonatorById(req.params.id).then((resp) =>{
        if(!resp){
            return res.status(400).send({
                message: "could not delete donator",
                value: resp,
        });
        }else {
            return res.status(200).send({
                message : "donator has been deleted",
                value: resp,
            });
        }
    })
});
router.put('/:id',async(req,res) =>{
    console.log(req.body.donator)

    const name = req.body.donator.name;
    const lastName = req.body.donator.lastName;
    const gender = req.body.donator.gender;

    const email = req.body.donator.email;
    const address = req.body.donator.address;
    const zipCode = req.body.donator.zipCode;
    const gouvernorat = req.body.donator.gouvernorat;
    const city = req.body.donator.city;
    const telephone = req.body.donator.telephone;
    const id = req.params.id
    const profession=req.body.donator.profession;
    const company = req.body.donator.company;
    const description = req.body.donator.description;

    donatorMgt.updateDonatorById(id, name,lastName,gender,email,address,zipCode,gouvernorat,city,profession,telephone,company,description)
    .then((resp) =>{
        if(resp == null){
            return res.status(404).send({
                message: "donator not found",
                value :resp,
            });
        }else if (!resp) {
            return res.status(400).send({
                message: "update failed",
                value: resp,
            });
        }else {
            return res.status(200).send({
                message: "update done",
                value : resp,
            });
        }
    });
});
router.put('/updatebyemail/:email', async(req,res) =>{
   
    const name = req.body.donator.name;
    const lastName = req.body.donator.lastName;
    const gender = req.body.donator.gender;

    const address = req.body.donator.address;
    const zipCode = req.body.donator.zipCode;
    const gouvernorat = req.body.donator.gouvernorat;
    const city = req.body.donator.city;
    const telephone = req.body.donator.telephone;
    const email = req.params.email
    const profession=req.body.donator.profession;
    const company = req.body.donator.company;
    const description = req.body.donator.description;

    donatorMgt.updateDonatorById(id, name,lastName,gender,email,address,zipCode,gouvernorat,city,profession,telephone,company,description)
    .then((resp) =>{
        if(resp == null){
            return res.status(404).send({
                message: "donator not found",
                value :resp,
            });
        }else if (!resp) {
            return res.status(400).send({
                message: "update failed",
                value: resp,
            });
        }else {
            return res.status(200).send({
                message: "update done",
                value : resp,
            });
        }
    })});


router.put('/updatewallet/:id', async(req,res) =>{
    const currentPubkey = req.body.currentPubKey;
    const currentPrivKey = req.body.currentPrivKey;
    const newPubKey = req.body.newPubKey;
    const newPrivKey = req.body.newPrivKey;
    donatorMgt.updateWallet(req.params.id,currentPubkey, currentPrivKey,newPubKey,newPrivKey)
    .then((resp) =>{
        if(resp == null){
            return res.status(404).send({
                message: "donator not found",
                value :resp,
            });
        }else if (!resp) {
            return res.status(400).send({
                message: "update failed",
                value: resp,
            });
        }else {
            return res.status(200).send({
                message: "update done",
                value : resp,
            });
        }
    })});
// router.put('/updatewallet/:id',async (req,res) =>{
//     const id = req.params.id
//     const currentPubkey = req.body.currentPubKey;
//     const currentPrivKey = req.body.currentPrivKey;
//     const newPubKey = req.body.newPubKey;
//     const newPrivKey = req.body.newPrivKey;
//         donatorMgt.resetPassword(id,currentPubkey,currentPrivKey,newPubKey,newPrivKey)
//         .then((resp) =>{
//             if(resp == null) {
//                 res.status(404).send({
//                     message: "donator does not exist",
//                     value :resp,
//                 });
//             } else if(resp){
//                 return res.status(200).send({
//                     message: "wallet has been updated",
//                     value: resp,
//                 });
//             }else {
//                 return res.status(400).send({
//                     message : "wallet is the same ",
//                     value :resp,
//                 });
//             }
//         });
// });
router.put('/resetpassword/:id',async(req,res) =>{
    const id= req.params.id;
    const currentpassword = req.body.currentpassword;
    const confirmpassword = req.body.confirmpassword;
  
    const newpassword = req.body.newpassword;
    const confirmnewpassword = req.body.confirmnewpassword;
    
    if((currentpassword == confirmpassword ) && ( newpassword == confirmnewpassword )){
        donatorMgt.resetPassword(id,newpassword)
        .then((resp) =>{
            if(resp == null){
                res.status(400).send({
                    message:" user not found",
                });
            }else if (resp){
                res.status(200).send({
                    message: "password has been update",
                });
            }else {
                res.status(401).send({
                    message: "password is the same thanks to put a new one",
                });
            }
        });
    }
});

module.exports = router;