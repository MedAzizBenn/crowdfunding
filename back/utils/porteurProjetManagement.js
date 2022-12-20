const PorteurPr = require('../models/PorteurProjet');

module.exports =  class PorteurProjectManagement{
    constructor (){

    }
    async addPorteurProj(_name,_email,_password,_address,_gouvernorat,_city,_walletPubKy,_walletPrivKey,_telephone){
        let porteurPr = await PorteurPr.findOne({email: _email});
        if(porteurPr != null){
            return false;
        }
        else{
            var newPorteur = new PorteurPr();
            newPorteur.name = _name;
            newPorteur.email = _email;
            newPorteur.address = _address;
            newPorteur.password = _password;
            newPorteur.gouvernorat = _gouvernorat;
            newPorteur.city = _city;
            newPorteur.walletPubKy = _walletPubKy;
            newPorteur.walletPrivKey = _walletPrivKey;
            newPorteur.telephone = _telephone;
            newPorteur.status = false;
            newPorteur.setPassword(_password);
            newPorteur.setWallet(_walletPrivKey);
            newPorteur.save();
            return true;
        }
    }
    async getAllPorteurs(){
        let porteurPr = await PorteurPr.find();
        console.log(porteurPr);
        if(porteurPr.length == 0){
            return false;
        }
        return porteurPr;
    }
    async getPorteurById(_id){
        let porteurPr = await PorteurPr.findById(_id);
        if (porteurPr === null ){
            return false;
        }
        return porteurPr;
    }
    async getPorteurByEmail(_email){
        let porteurPr = await PorteurPr.findOne({email: _email});
        if (porteurPr === null ){
            return false;
        }
        return porteurPr;
    }
    async getPorteurByWallet(_wallet){
        let porteurPr = await PorteurPr.findOne({walletPubKey: _wallet});
        if(porteurPr === null ){
            return false;
        }
        return true;
    }
    async deletePorteurById(_id){
        let porteurPr = await PorteurPr.deleteOne(PorteurPr.findOne({_id: _id}));
        console.log(porteurPr);
        if(porteurPr.deletedCount == 0){
            return false;
        }
        return true;
    }
    async deletePorteurByEmail(_email){
        let porteurPr = await PorteurPr.deleteOne(PorteurPr.findOne({email: _email}));
        if(porteurPr.deletedCount == 0){
            return false;
        }
        return true;
    }
   async updatePorteurPrById(_id,_name,_email,_address,_gouvernorat,_city,_telephone){
        let porteurPr = await PorteurPr.updateOne({_id: _id},{$set:{"name": _name,"email": _email,"address":_address,
        "gouvernorat": _gouvernorat,"city": _city,"telephone": _telephone}});
        if(!porteurPr.acknowledged){
            return null;
        }
        else if (porteurPr.modifiedCount == 0){
            return false
        }else {
            return true;
        }
    }
    async updatePorteurPrByEmail(_currentEmail,_name,_email,_address,_gouvernorat,_city,_telephone){
        let porteurPr = await PorteurPr.updateOne({email: _currentEmail},{$set:{"name": _name,"email": _email,"address":_address,
        "gouvernorat": _gouvernorat,"city": _city,"telephone": _telephone}});
        console.log(porteurPr);
        if(!porteurPr.acknowledged){
            return null;
        }
        else if (porteurPr.modifiedCount == 0){
            return false
        }else{
            return true;
        }
    }
    async resetPassword(_id, _password){
        const userExist = await PorteurPr.findOne({_id:_id});
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
        const adminExist = await PorteurPr.findOne({"email": _email});
        console.log(adminExist);
        if(adminExist === null){
            return null;
        }
        const result =  adminExist.validPassword(_password);
        return result;
    }
    // async updateWalletById()
}