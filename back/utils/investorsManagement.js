const Investors = require('../models/Investor');

module.exports = class InvesotrsManagement{
    constructor(){

    }

    async addInvestors(_description,_category,_investorsList){
            var newInvestors = new Investors();
            newInvestors.description = _description;
            newInvestors.category = _category;
            _investorsList.forEach(elmt => newInvestors.investorsList.push(elmt));
            newInvestors.save()
            return true;
        
    } 
    async getAll(){
        let invesotrExsit = await Investors.find();
        console.log(invesotrExsit)
        if(invesotrExsit.length !=0){
            return invesotrExsit;
        }
        else {
            return false;
        }
    }
    async getById(_id){
        let invesotrExsit = await Investors.findById(_id);
        if(invesotrExsit == null){
            return false;
        }
        return invesotrExsit;
    }
    async getByWallet(_walletPubKey){
        let invesotrExsit = await Investors.find({walletPubKey: _walletPubKey});
        if(invesotrExsit == null){
            return false;
        }
        return invesotrExsit;    
    }
    async deleteById(_id){
        let invesotrExsit = await Investors.deleteOne(Investors.findOne({_id: _id}));

        console.log(invesotrExsit);
        if(invesotrExsit.deletedCount == 0){
            return false;
        }
        return true;
    }
    async deleteByWallet(_id){
        let invesotrExsit = await Investors.deleteOne(Investors.findOne({walletPubKey: _walletPubKey}));
        console.log(invesotrExsit);
        if(invesotrExsit.deletedCount == 0){
            return false;
        }
        return true;
    }
    async updateById(_id,_description, _logo,_category,_investorsList){
        let invesotrExsit = await Investors.updateOne({"_id": _id},{$set:{"description": _description,"logo": _logo,"category":_category,
        "investorsList": _investorsList}});
        console.log(invesotrExsit);
        if(invesotrExsit.matchedCount == 0){
            return null;
        }
        else if (invesotrExsit.modifiedCount == 0){
            return false
        }else {
            return true;
        }
    }
    async updateWallet(_id,_currentWalletPubkey,_currentWalletPrivKey,_walletPubKey,_walletPrivKey){
        let invesotrExsit = await Investors.findOne({_id:_id});
        console.log(donator);
        if(invesotrExsit != null){
            if(invesotrExsit.validWallet(_walletPrivKey)){
                return false;
            }else {
                invesotrExsit.updateOne({walletPubKey : _currentWalletPubkey},{$set: {walletPubKey: _walletPubKey}});
                invesotrExsit.walletPubKey = _walletPubKey;
                invesotrExsit.setWallet(_walletPrivKey);
                invesotrExsit.save();
                return true;
            }
        }else {
            return null
        }
    }
}