var express = require('express');
var userManagement = require("../utils/userManagement");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const usermgt = new userManagement();
  usermgt.getAllUsers().then((resp) =>{
    res.status(200).send(resp);
  })

});

router.post('/',function(req,res,next){
  const name = req.body.name;
  const email = req.body.email;
  var err;
  const password = req.body.password;
  const usermgt = new userManagement();
  usermgt.addUser(name,email,password)
  .then((result) => {
    if(result){
      res.status(201).send({
        message: "user has been created"
      });
    }
    else{
      res.status(400).send(JSON.stringify("user excist"));
    }
  });

});
router.get('/:id',function(req,res,next){
  const id = req.params.id;
  usermgt = new userManagement();
  usermgt.getUserById(id).then((resp) =>{
    if(!resp){
      res.status(400).send({
        message: "user does not exist",
      });
      return;
    }
    else{
      res.status(200).send({
        message: "user exist",
        value: resp,
      });
      return;
    }
  });  
});
router.get('/getbyemail/:email',function(req,res,next){
  const email = req.params.email;
  usermgt = new userManagement();
  usermgt.getUserByEmail(email.toString()).then((resp) =>{
    if(!resp){
      res.status(400).send({
        message: "user does not exist",
      });
    }
    else{
      res.status(200).send({
        message: "used found",
        value: resp
      });
    }
  });
});

router.delete('/:id',function(req,res){
  const id = req.params.id;
  usermgt = new userManagement();
  usermgt.deleteUserById(id).then((resp)=>{
    if(!resp){
      res.status(400).send({
        message: 'user does not exist',
        value: resp,
      });
    }
    else{
      res.status(200).send({
        message:"user has been deleted",
        value: resp,
      });
    }
  });
});
router.delete('/deletebyemail/:email',function(req,res){
  const email = req.params.email;
  usermgt = new userManagement();
  usermgt.deleteUserByEmail(email).then((resp)=>{
    if(resp){
      res.status(200).send({
        message: "user has been deleted",
        value: resp,
      });
    }
    else{
      res.status(400).send({
        message:"user not found",
        value: resp,
      });
    }
  });
});
router.put('/:id',function(req,res){
  const id = req.params.id;
  const name = req.body.name;
  const email = req.body.email;
  usermgt= new userManagement();
  usermgt.updateUserById(id,name,email).then((resp) =>{
    if(resp){
      res.status(200).send({
        message: "user has been updated",
        value: resp
      });
    }
    else{
      res.status(400).send({
        message: "update not possible",
        value: resp
      });
    }
  });
});
router.put('/updatebyemail/:email',function(req,res){
  const currentemail = req.params.email;
  const name = req.body.name;
  const email = req.body.email;
  usermgt= new userManagement();
  usermgt.updateUserByEmail(name,email,currentemail).then((resp) =>{
    if(resp){
      res.status(200).send({
        message: "user has been updated",
        value: resp
      });
    }
    else{
      res.status(400).send({
        message: "update not possible",
        value: resp
      });
    }
  });
});
router.put('/resetpassword/:id',function(req,res){
  const id = req.params.id;
  const currentpassword = req.body.currentpassword;
  const confirmpassword = req.body.confirmpassword;

  const newpassword = req.body.newpassword;
  const confirmnewpassword = req.body.confirmnewpassword;

  if((currentpassword == confirmpassword ) && ( newpassword == confirmnewpassword )){
    usermgt = new userManagement();
    usermgt.resetPasswordById(id,newpassword).then((resp)=>{
      console.log(resp);
      if(resp == null ){
        res.status(400).send({
          message: "user not found",
        });
      }
      else if(resp){
        res.status(200).send({
          message: "password has been updated",
          value: resp
        });
      }else{
        res.status(401).send({
          message: "password is the same thanks to put a new password",
          value: resp
        });
      }
    });
  }else{
    res.status(403).send({
      message: "wrong password confirmation",
    })
}
});



module.exports = router;
