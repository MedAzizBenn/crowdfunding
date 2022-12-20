var express = require('express');
var router = express.Router();
var InvesotrsManagement = require('../utils/investorsManagement');
const investorsMgt = new InvesotrsManagement();

router.get('/',async(req,res) =>{
    investorsMgt.getAll().then((resp) =>{
        if(!resp){
            return res.status(400).send({
                message: "no investors yet",
                value: resp
            });
        }else {
            return res.status(200).send({
                message: "investors found",
                value: resp
            });
        }
    });
});
router.post('/',async(req,res) =>{
    const description = req.body.description;
    const category = req.body.category;
    const investorsList = req.body.investorsList;
    investorsMgt.addInvestors(
        description,
        category,
        investorsList
        )
        .then((resp) =>{
            if(!resp){
                return res.status(400).send("creation failed");
            }else {
                return res.status(201).send({
                    message:"investors created",
                    value: resp
                });
            }
        });
});
router.get('/:id', async(req,res) =>{
    investorsMgt.getById(req.params.id).then((resp) =>{
        if(!resp){
            return res.status(400).send({
                message:"invesotrs does not exist",
                value: resp
            });
        }
        else {
            return res.status(200).send({
                message:"invesotrs exist",
                value: resp
            });
        }
    });
});
router.get('/getbywallet/:wallet',async(req,res) => {
    investorsMgt.getByWallet(req.params.wallet).then((resp) =>{
        if (!resp){
            return res.status(400).send({
                message:"invesotrs does not exist",
                value: resp
            });
        }else {
            return res.status(200).send({
                message : "invesotrs exist",
                value: resp,
            });
        }
    });
});
router.delete('/:id', async(req,res)=>{
    investorsMgt.deleteById(req.params.id).then((resp) =>{
        if(!resp){
            return res.status(400).send({
                message: "could not delete investors",
                value: resp,
        });
        }else {
            return res.status(200).send({
                message : "investors has been deleted",
                value: resp,
            });
        }
    });
});
router.put('/:id',async(req,res) =>{
    const description = req.body.description;
    const logo = req.body.logo;
    const category = req.body.category;
    const investorsList = req.body.investorsList;
    const id = req.params.id
    investorsMgt.updateById(
        id,
        description,
        logo,
        category,
        investorsList 
    )
    .then((resp) =>{
        if(resp == null){
            return res.status(404).send({
                message: "investors not found",
                value :resp,
            });
        }else if (!resp) {
            return res.status(400).send({
                message: "investors failed",
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
router.put('/updatewallet/:id', async(req,res) =>{
    const currentPubkey = req.body.currentPubKey;
    const currentPrivKey = req.body.currentPrivKey;
    const newPubKey = req.body.newPubKey;
    const newPrivKey = req.body.newPrivKey;
    investorsMgt.updateWallet(req.params.id,currentPubkey, currentPrivKey,newPubKey,newPrivKey)
    .then((resp) =>{
        if(resp == null){
            return res.status(404).send({
                message: "investors not found",
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

module.exports = router