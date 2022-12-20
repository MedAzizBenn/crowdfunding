const Donator = require('../models/Donator');
const DonatorWeb3Management = require('./DonatorWeb3Management');
const donatorWeb3Mgt = new DonatorWeb3Management();
const methodOverride=require('method-override');
const multer=require('multer');
const GridFsStorage=require('multer-gridfs-storage');
var ObjectId = require('mongodb').ObjectID;

module.exports = class DonatorManagement {
    constructor(){

    }
    async addDonator(_name,_lastName,_gender,_email,_password,_address,
        _zipCode,
        _gouvernorat,
        _city,
        _profession,
        _telephone,
        _company,
        _description){
            const donatorWeb3Mgt = new DonatorWeb3Management();

            let donatorMgt = await Donator.findOne({email:_email});
            let walletDonator = await donatorWeb3Mgt.createAccount();

            console.log(donatorMgt);
            console.log(walletDonator);
            if(donatorMgt != null){
                console.log(1)
                return false;
            }
            else if(walletDonator==false){
                console.log(2)
                return false;
            }
            else {
                var donator = new Donator()
                donator.name = _name;
                donator.lastName = _lastName;
                donator.gender=_gender;
                donator.email = _email;
                donator.password = _password;
                donator.address = _address;
                donator.walletPubKey = walletDonator.address;
                donator.walletPrivKey = walletDonator.privateKey
                donator.zipCode = _zipCode;
                donator.gouvernorat = _gouvernorat;
                donator.city = _city;
                donator.profession = _profession;
                donator.telephone = _telephone;
                donator.company = _company;
                donator.description = _description;
                donator.profilePic="photo";
                donator.coverPic="photo";
                donator.setPassword(_password);
                donator.setWallet(walletDonator.privateKey);
                donator.save();
                const dont = await Donator.findOne({email: _email});
                donatorWeb3Mgt.addDonator(donator._id, walletDonator.privateKey);
                return true;
            }
    }
    async getDonators(){
        let donator = await Donator.find();
        console.log(donator)
        if(donator.length !=0){
            return donator;
        }
        else {
            return false;
        }
    }

    async getDonatorById(_id){
        let donator = await Donator.findById(_id);
        if(donator == null){
            return false;
        }
        return donator;
    }
    async getDonatorByWallet(_walletPubKey){
        let donator = await Donator.find({walletPubKey: _walletPubKey});
        if(donator == null){
            return false;
        }
        return donator;    
    }
    async getDonatorByEmail(_email){
        let donator = await Donator.find({email: _email});
        if(donator == null){
            return false;
        }
        return donator;  
    }
 
    async deleteDonatorById(_id){
        let dnt = await Donator.findById(_id);
        let donator = await Donator.deleteOne(Donator.findOne({_id: _id}));

        console.log(donator);
        if(donator.deletedCount == 0){
            return false;
        }
        let result  = await donatorWeb3Mgt.deleteDonator(dnt._id,dnt.getWallet());
        if(result)
            return true;
    }
    async deleteDonatorByWallet(_walletPubKey){
        let dnt = await Donator.findOne({walletPubKey: _walletPubKey});

        let donator = await Donator.deleteOne(Donator.findOne({walletPubKey: _walletPubKey}));
        console.log(donator);
        if(donator.deletedCount == 0){
            return false;
        }
        let result  = await donatorWeb3Mgt.deleteDonator(dnt._id,dnt.getWallet());
        if(result)
            return true;
    }
    async deleteDonatorByEmail(_email){
        let dnt = await Donator.findOne({email: _email});

        let donator = await Donator.deleteOne(Donator.findOne({email: _email}));
        console.log(donator);
        if(donator.deletedCount == 0){
            return false;
        }
        let result  = await donatorWeb3Mgt.deleteDonator(dnt._id,dnt.getWallet());

        if(result)
            return true;
    }
    async updateDonatorById(_id,_name,_gender,_lastName,_email,_address,_zipCode,_gouvernorat,_city,_profession,_telephone,_company,_description){
        let dnt = await Donator.findOne({id: _id});
        let donator = await Donator.updateOne({"_id": _id},{$set:{"name": _name,"lastName": _lastName,"gender":_gender,"email": _email,"address":_address,
        "zipCode":_zipCode,"gouvernorat": _gouvernorat,"city": _city,"profession":_profession,"telephone": _telephone,"company": _company,"description": _description}});
        console.log(donator);
        if(donator.matchedCount == 0){
            return null;
        }
        else if (donator.modifiedCount == 0){
            return false
        }else {
            return true;
        }
    }
    async updateDonatorByEmail(_id,_name,_gender,_lastName,_email,_address,_zipCode,_gouvernorat,_city,_profession,_telephone,_company,_description){
        let dnt = await Donator.findOne({id: _id});
        let donator = await Donator.updateOne({email: _email},{$set:{"name": _name,"lastName": _lastName,"gender":_gender,"email": _email,"address":_address,
        "zipCode":_zipCode,"gouvernorat": _gouvernorat,"city": _city,"profession":_profession,"telephone": _telephone,"company": _company,"description": _description}});
        console.log(donator);
        if(donator.matchedCount == 0){
            return null;
        }
        else if (donator.modifiedCount == 0){
            return false
        }else {
            return true;
        }
    }
    async updateWallet(_id,_currentWalletPubkey,_currentWalletPrivKey,_walletPubKey,_walletPrivKey){
        let donator = await Donator.findOne({_id:_id});
        console.log(donator);
        if(donator != null){
            if(donator.validWallet(_walletPrivKey)){
                return false;
            }else {
                Donator.updateOne({walletPubKey : _currentWalletPubkey},{$set: {walletPubKey: _walletPubKey}});
                donator.walletPubKey = _walletPubKey;
                donator.setWallet(_walletPrivKey);
                donator.save();
                return true;
            }
        }else {
            return null
        }
    }
    async updateWalletByID(_id,_currentWalletPubkey,_currentWalletPrivKey,_walletPubKey,_walletPrivKey){
        let donator = await Donator.findOne({_id: _id});
        if(donator == null){
            return null;
        }
        result = donator.validWallet(_walletPrivKey)
        console.log(result);
        if(!result){
            donator.walletPubKey = _walletPubKey
            // donator.walletPrivKey = _walletPrivKey
            donator.setWallet(_walletPrivKey);
            donator.save()
            return true;
        }
        else 
        {
            return false;
        }
    }
    async resetPassword(_id, _password){
        const userExist = await Donator.findOne({_id:_id});
        if(userExist != null){
        console.log(userExist);
            const result =await userExist.validPassword(_password);
            if(!result){
            
                userExist.setPassword(_password);
                userExist.save()
                return true;
            }
            else{
                return false;
            }
            }
        else{
            return null;
        }   
    }
    async validatePasswordByEmail(_email,_password){
        const porteur = await Donator.findOne({"email": _email});
        console.log(porteur);
        if(porteur === null){
            return null;
        }
        const result =  porteur.validPassword(_password);
        return result;
    }

    async addProfilePic(_id,_photo){
        let donator =await Donator.updateOne({"_id":_id},{$set:{"profilePic": _photo}});
        console.log(donator);
        if(!donator.acknowledged){
            return null;
        }else if (!donator){
            return false;
        }else {
            return true;
        }
    }
    async addCoverPic(_id,_photo){
        let donator = await Donator.updateOne({"_id": _id},{$set:{"coverPic":_photo}});
        if (!donator){
            return false;
        }else {
            return true;
        }
    }

    async addFile(_id,_file){
        let donator = await Donator.updateOne({"_id": _id},{$set:{"attachements":_file}});
        if (!donator){
            return false;
        }else {
            return true;
        }
    }

  
    
}


