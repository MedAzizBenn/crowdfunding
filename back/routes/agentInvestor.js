var express = require('express');
var router = express.Router();
const agentInvestor = require('../utils/agentInvestorManagement');
const agentIMgt = new agentInvestor();
router.get('/',async(req,res) =>{
    agentIMgt.getAllAgentInvestors()
    .then((resp) =>{
        if(!resp){
            return res.status(400).send({
                message: "email does exist",
                value: resp,
            });
        }else {
            return res.status(200).send({
                message: "agents investors found",
                value: resp,
            });
        }
    });
}); 

router.post('/',async(req,res) =>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const position = req.body.position;
    const telephone = req.body.telephone;
    const walletPubKey = req.body.walletPubKey;
    const walletPrivKey = req.body.walletPrivKey;
    agentIMgt.addAgentInvestor(name,email,password,position,telephone,walletPubKey,walletPrivKey)
    .then((resp) =>{
        if(!resp){
            return res.status(400).send({
                message: "agent investor failed to be created",
                value: resp,
            });
        }else {
            return res.status(201).send({
                message: "agent investor has been created",
                value: resp,
            });
        }
    });
}); 
router.get('/:id',async(req,res) =>{
    agentIMgt.getAgentInvByID(req.params.id)
    .then((resp) =>{
        if(!resp){
            return res.status(400).send({
                message: "no agent investor found",
                value: resp,
            });
        }else {
            return res.status(200).send({
                message: "agent inv found",
                value :resp,
            });
        }
    });
}); 

router.get('/getbyemail/:email',async(req,res) =>{
    agentIMgt.getAgentInvByEmail(req.params.email)
    .then((resp) =>{
        if(!resp){
            return res.status(400).send({
                message: "no agent investor found",
                value: resp,
            });
        }else {
            return res.status(200).send({
                message: "agent inv found",
                value :resp,
            });
        }
    });
}); 
router.get('/getbywallet/:wallet',async(req,res) =>{
    agentIMgt.getAgentInvByWallet(req.params.wallet)
    .then((resp) =>{
        if(!resp){
            return res.status(400).send({
                message: "no agent investor found",
                value: resp,
            });
        }else {
            return res.status(200).send({
                message: "agent inv found",
                value :resp,
            });
        }
    });
}); 
router.put('/:id',async(req,res) =>{
    const name = req.body.name;
    const email = req.body.email;
    const position = req.body.position;
    const telephone = req.body.telephone;
    agentIMgt.updateAgentInvById(req.params.id,name,email,position,telephone)
    .then((resp) =>{
        if(resp == null){
            return res.status(404).send({
                message: "agent investor not found",
                value: resp,
            });
        }else if (!resp){
            return res.status(400).send({
                message: "update failed",
                value: resp,
            });
        }else {
            return res.status(200).send({
                message: "update succeed",
                value: resp,
            });
        }
    });
});
router.put('/updatebyemail/:email',async(req,res) =>{
    const name = req.body.name;
    const email = req.body.email;
    const position = req.body.position;
    const telephone = req.body.telephone;
    agentIMgt.updateAgentInvByEmail(req.params.email,name,email,position,telephone)
    .then((resp) =>{
        if(resp == null){
            return res.status(404).send({
                message: "agent investor not found",
                value: resp,
            });
        }else if (!resp){
            return res.status(400).send({
                message: "update failed",
                value: resp,
            });
        }else {
            return res.status(200).send({
                message: "update succeed",
                value: resp,
            });
        }
    });
});
router.put('/updatewallet/:id', async(req,res) =>{
    const currentPubkey = req.body.currentPubKey;
    const currentPrivKey = req.body.currentPrivKey;
    const newPubKey = req.body.newPubKey;
    const newPrivKey = req.body.newPrivKey;
    agentIMgt.updateWallet(req.params.id,currentPubkey, currentPrivKey,newPubKey,newPrivKey)
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
router.delete('/:id',async(req,res) =>{
    agentIMgt.deleteAgentInvestrorById(req.params.id).then((resp) =>{
        if(!resp){
            return res.status(400).send({
                message: "delete failed",
                value: resp,
            });
        }else {
            return res.status(200).send({
                message: "delete succeed",
                value: resp,
            });
        }
    });
});
router.put('/resetpassword/:id',async(req,res) => {
    const id= req.params.id;
    const currentpassword = req.body.currentpassword;
    const confirmpassword = req.body.confirmpassword;
  
    const newpassword = req.body.newpassword;
    const confirmnewpassword = req.body.confirmnewpassword;
    
    if((currentpassword == confirmpassword ) && ( newpassword == confirmnewpassword )){
        agentIMgt.resetPassword(id,newpassword)
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