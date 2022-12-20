var express = require('express');
var router = express.Router();
var donationManagement = require('../utils/donationManagement');
const donationMgt = new donationManagement();

router.get('/',async(req,res) =>{
    
    donationMgt.getDonations().then((resp) =>{
        if(!resp){
            return res.status(400).send({
                message :"no donations yet",
                value: resp,
            });
        }else {
            return res.status(200).send( {
                message: "donations found",
                value: resp,
            });
        }
    });
});
router.post('/',async(req,res) =>{
    const donator = req.body.donator;
    const project = req.body.project;
    const montant = req.body.montant;
    donationMgt.addDonation(donator,project,montant).then((resp) =>{
        if(resp == null){
           return res.status(404).send({
            message: "donator or projct does not exist",
            value :resp,
           });
        }else if (resp){
            return res.status(200).send({
                message: "donation sent",
                value: resp
            });
        }else {
            return res.status(400).send({
                message:"donation failed to send",
                value: resp,
            })
        }
    })
});
router.get('/:id',async(req,res) =>{
    donationMgt.getDonationById(req.params.id).then((resp) =>{
        if(!resp){
            return res.status(400).send({
                message:"donation not found ",
                value: resp,
            });
        }else {
            return res.status(200).send({
                message: "donation found",
                value: resp,
            });
        }
    });
});
router.get('/bydonator/:donator',async(req,res) =>{
    donationMgt.getDonationByDonator(req.params.donator)
    .then((resp) =>{
        if(!resp){
            return res.status(400).send({
                message:"donation not found ",
                value: resp,
            });
        }else {
            return res.status(200).send({
                message: "donation found",
                value: resp,
            });
        }
    });
});
router.get('/byproject/:project',async(req,res) =>{
    donationMgt.getDonationByProject(req.params.project)
    .then((resp) =>{
        if(!resp){
            return res.status(400).send({
                message:"donation not found ",
                value: resp,
            });
        }else {
            return res.status(200).send({
                message: "donation found",
                value: resp,
            });
        }
    });
});
router.get('/bydate/:date',async(req,res) =>{
    const year = req.params.date.slice(0,4);
    const month = req.params.date.slice(5,7);
    const day = req.params.date.slice(8,10);
    console.log(day);
    donationMgt.getDonationByDate(year,month,day)
    .then((resp) =>{
        if(!resp){
            return res.status(400).send({
                message:"donation not found ",
                value: resp,
            });
        }else {
            return res.status(200).send({
                message: "donation found",
                value: resp,
            });
        }
    });
});
router.get('/bymontant/:montant',async(req,res) =>{
    
    donationMgt.getDonationByMontant(req.params.montant)
    .then((resp) =>{
        if(!resp){
            return res.status(400).send({
                message:"donation not found ",
                value: resp,
            });
        }else {
            return res.status(200).send({
                message: "donation found",
                value: resp,
            });
        }
    });
});
router.delete('/:id',async(req,res)=>{
    donationMgt.deleteDonationById(req.params.id)
    .then((resp) =>{
        if(resp){
            return res.status(200).send({message: "donation has been deleted",value: resp});
        }else {
            return res.status(400).send({
                message: "delete failed ",
                value :resp,
            });
        }
    });
});
router.delete('/deletebydonator/:donator',async(req,res)=>{
    donationMgt.deleteDonationDonator(req.params.donator)
    .then((resp) =>{
        if(resp){
            return res.status(200).send({message: "donation has been deleted",value: resp});
        }else {
            return res.status(400).send({
                message: "delete failed ",
                value :resp,
            });
        }
    });
});
router.delete('/deletebyproject/:project',async(req,res)=>{
    donationMgt.deleteDonationByProject(req.params.project)
    .then((resp) =>{
        if(resp){
            return res.status(200).send({message: "donation has been deleted",value: resp});
        }else {
            return res.status(400).send({
                message: "delete failed ",
                value :resp,
            });
        }
    });
});
module.exports = router;