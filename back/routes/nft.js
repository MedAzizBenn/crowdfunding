const express = require('express');
const nftManagement = require('../utils/nftManagement');
router = express.Router();
const nftMgt = new nftManagement();
router.get('/',async(req,res) =>{
    nftMgt.getallNft().then((resp) =>{
        if(!resp){
            return res.status(400).send({
                message: "not nfts yet",
                value :resp,
            });
        }else {
            res.status(200).send( {
                message: "nfts found",
                value :resp,
            });
        }
    });
});
router.post('/',async(req,res) =>{
    const donator = req.body.donator;
    const metadata = req.body.metadata;
    const address = req.body.address;
    const type = req.body.type;
    nftMgt.mintNft(donator,metadata,address,type)
    .then((resp) =>{
        if(!resp){
            return res.status(400).send({
                message: "nft address exists",
                value :resp,
            });
        }else {
            return res.status(201).send({
                message: "nft has been minted",
                value :resp,
            });
        }
    });
});
router.get('/:address', async(req,res) =>{
    nftMgt.getNftByAddress(req.params.address)
    .then((resp) =>{
        if(!resp){
            return res.status(400).send({message: "nft not found",value: resp});
        }else {
            return res.status(200).send({
                message: "nft found",
                value :resp,
            });
        }
    });
});
router.get('/nftbydonator/:donator',async(req,res) =>{
    nftMgt.getNftByDonator(req.params.donator)
    .then((resp) =>{
        if(!resp){
            return res.status(400).send({
                message: "not NFTs yet",
                value :resp,
            });
        }else {
            return res.status(200).send({
                message: "NFTs found",
                value: resp,
            });
        }
    });
});
router.delete('/:address', async(req,res) =>{
    nftMgt.burnNft(req.params.address)
    .then((resp) =>{
        if(!resp){
            return res.status(400).send({
                message: "Burn failed",
                value : resp,
            });
        }else {
            return res.status(200).send({
                message: "Burn complete",
                value :resp,
            });
        }
    });
});
module.exports = router;