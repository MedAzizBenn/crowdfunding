const nft = require('../models/NFT');

module.exports = class nftManagement{
    constructor(){}
    async mintNft(_idDonator,_metadataURI,_address,_type){
        let nftExist = await nft.findOne({address: _address});
        if(nftExist != null){
            return false;
        }else {
            var newNft = new nft();
            newNft.donator = _idDonator;
            newNft.address = _address;
            newNft.metadata = _metadataURI;
            newNft.type = _type;
            newNft.save();
            return true;
        }   
    }
    async getallNft(){
        let nftExist = await nft.find();
        if(nftExist.length == 0){
            return false;
        }else {
            return nftExist;
        }
    }
    async getNftByAddress(_address){
        let nftExist = await nft.findOne({address: _address});
        console.log(nftExist);
        if(nftExist == null){
            return false;
        }else {
            return nftExist;
        }
    }
    async getNftByDonator(_IdDonator){
        let nftExist = await nft.find({donator: _IdDonator});
        if(nftExist.length == 0){
            return false;
        }else {
            return nftExist;
        }
    }
   async burnNft(_address){
        let nftExist = await nft.deleteOne(nft.findOne({address: _address}));
        if(nftExist.deletedCount == 0){
            return false;
        }else {
            return true;
        }
   }
}