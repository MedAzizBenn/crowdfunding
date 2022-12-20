var express = require('express');
var agentCoManagement = require('../utils/agentCOManagement');
var router = express.Router();

router.get('/',async (req,res) => {
    const agentMgt = new agentCoManagement();
    agentMgt.getAllAgents().then((resp) =>{
        if(resp== null ){
            res.status(400).send({
                message: "user",
                value: resp,
            });
        }else{
            res.status(200).send(resp);
        }
    });
});
router.post('/',async (req,res) => {
    const agentMgt = new agentCoManagement();
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const address = req.body.address;
    const gouvernorat = req.body.gouvernorat;
    const city = req.body.city;
    const position = req.body.position;
    const telephone = req.body.telephone;

    agentMgt.addAgent(name,email,password,address,gouvernorat,city,position,telephone).then((resp) =>{
        if(!resp){
            res.status(400).send({
                message: "user does exist",
                value: resp,
            });
        }else{
            res.status(201).send({
                message : "user is created",
                value: resp
            })
        }
    })
});
router.get('/:id',async(req,res) =>{
    const id = req.params.id;
    const agentMgt = new agentCoManagement();
    agentMgt.getAgentById(id).then((resp) =>{
        if(!resp) {
            res.status(400).send({
                message:"user not found",
                value: resp,
            });
        }
        else{
            res.status(200).send({
                message: "user found",
                value: resp,
            });
        }
    })
})
router.get('/getbyemail/:email',async(req,res) =>{
    const email = req.params.email;
    const agentMgt = new agentCoManagement();
    agentMgt.getAgentByEmail(email).then((resp) =>{
        if(!resp) {
            res.status(400).send({
                message:"user not found",
                value: resp,
            });
        }
        else{
            res.status(200).send({
                message: "user found",
                value: resp,
            });
        }
    });
});
router.delete('/:id', async(req,res) =>{
    const id = req.params.id;
    const agentMgt = new agentCoManagement();
    agentMgt.deleteAgnetById(id).then((resp) =>{
        if(!resp){
            res.status(400).send({
                message: "AgentCO not found",
                value: resp,
            });
        }
        else{
            res.status(200).send({
                message: "agent deleted",
                value: resp
            });
        }
    });
});

router.delete('/deletebyemail/:id', async(req,res) =>{
    const email = req.params.email;
    const agentMgt = new agentCoManagement();
    agentMgt.deleteAgentByEmail(email).then((resp) =>{
        if(!resp){
            res.status(400).send({
                message: "AgentCO not found",
                value: resp,
            });
        }
        else{
            res.status(200).send({
                message: "agent deleted",
                value: resp
            });
        }
    });
});
router.put('/:id',async (req,res) =>{
    const id = req.params.id;
    const name = req.body.name;
    const email = req.body.email;
    const address = req.body.address;
    const gouvernorat = req.body.gouvernorat;
    const city = req.body.city;
    const position = req.body.position;
    const telephone = req.body.telephone;
    const agentMgt = new agentCoManagement();
    agentMgt.updateById(id,
        name,
        email,
        address,
        gouvernorat,
        city,
        position,
        telephone)
    .then((resp) =>{
        if(resp == null ){
            res.status(404).send({
                message: "agent not found",
                value : resp,
            });
        }else if (!resp){
            res.status(404).send({
                message: "update not possible",
                value: resp,
            });
        }else{
            res.status(200).send({
                message: "agent has been updated",
                value : resp,
            });
        }
    });

});
router.put('/updatebyemail/:email', async(req,res) =>{ 
    const emailCurrent = req.params.email;
    const name = req.body.name;
    const email = req.body.email;
    const address = req.body.address;
    const gouvernorat = req.body.gouvernorat;
    const city = req.body.city;
    const position = req.body.position;
    const telephone = req.body.telephone;
    const agentMgt = new agentCoManagement();
    agentMgt.updateByEmail(emailCurrent,
        name,
        email,
        address,
        gouvernorat,
        city,
        position,
        telephone)
    .then((resp) =>{
        if(resp == null ){
            res.status(404).send({
                message: "agent not found",
                value : resp,
            });
        }else if (!resp){
            res.status(404).send({
                message: "update not possible",
                value: resp,
            });
        }else{
            res.status(200).send({
                message: "agent has been updated",
                value : resp,
            });
        }
    });

});
router.put('/resetpassword/:id',async(req,res) =>{
    const id = req.params.id;
    const currentPassword = req.body.currentpassword;
    const confirmCurrentPassword = req.body.confirmpassword;
    const newPassword = req.body.newpassword;
    const confirmNewPassword= req.body.confirmnewpassword;
    if((currentPassword == confirmCurrentPassword ) && ( newPassword == confirmNewPassword )){
        agentMgt = new agentCoManagement();
        agentMgt.resetpasswordById(id,newPassword).then((resp) =>{
            console.log(resp);
            if(resp == null){
                res.status(400).send({message: "wrong agent please check"});
            }
            else if (resp){
                res.status(200).send({message: "password reset ", value: resp});
            }
            else{
                res.status(401).send({
                    message: "password is the same thanks to put a new password",
                    value: resp
                  });
            }
        });
    }
});


module.exports = router;    
