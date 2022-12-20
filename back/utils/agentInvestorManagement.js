const agentInvestor = require('../models/AgentInvestor');

module.exports = class agentInvestorManagement{
    constructor(){

    }
    async addAgentInvestor(_name,_email,_password,_position,_telephone,_walletPubKey,_walletPrivKey){
        let agInvestor = await agentInvestor.findOne({email: _email});
        if(agInvestor != null){
            return false;
        }else {
            try{
            var newAgI = new agentInvestor();
            newAgI.name = _name;
            newAgI.email = _email;
            newAgI.password = _password;
            newAgI.position = _position;
            newAgI.telephone = _telephone;
            newAgI.walletPubKey = _walletPubKey;
            newAgI.setWallet(_walletPrivKey);
            newAgI.setPassword(_password);
            newAgI.save();
            return true;
            }catch (err){
                console.log({error: err});
                return null;
            }

        }

    }
    async getAllAgentInvestors(){
        let agInvestor =  agentInvestor.find();
        if(agInvestor.length == 0){
            return false;
        }else {
            return agInvestor;
        }
    }
    async getAgentInvByID(_id){
        let agInvestor = await agentInvestor.findById(_id);
        if(agInvestor == null){
            return false;
        }
        return agInvestor;
    }
    async getAgentInvByEmail(_email){
        let agInvestor = await agentInvestor.findOne({email: _email})
        if(agInvestor == null){
            return false;
        }
        return agInvestor;
    }
    async getAgentInvByWallet(_wallet){
        let agInvestor = agentInvestor.findOne({walletPubKey: _wallet})
        if(agInvestor == null){
            return false;
        }
        return agInvestor;
    }
    async updateAgentInvById(_id,_name,_email,_position,_telephone){
        let agInvestor = await agentInvestor.updateOne({_id: _id},{$set:{"name": _name,"email":_email,
        "position":_position,"telephone": _telephone }});
        if(agInvestor.matchedCount == 0)
        {
            return null;
        }else if(agInvestor.modifiedCount == 0){
            return false;
        }else {
            return true;
        }
    }
    async updateAgentInvByEmail(_currentEmail,_name,_email,_position,_telephone){
        let agInvestor = await agentInvestor.updateOne({email: _currentEmail},{$set:{"name": _name,"email":_email,"position":_position,"telephone": _telephone }});
        if(agInvestor.matchedCount == 0)
        {
            return null;
        }else if(agInvestor.modifiedCount == 0){
            return false;
        }else {
            return true;
        }
    }
    async deleteAgentInvestrorById(_id){
        let agInvestor = await agentInvestor.deleteOne(agentInvestor.findOne({_id: _id}));

        console.log(agInvestor);
        if(agInvestor.deletedCount == 0){
            return false;
        }
        return true;
    }
    async updateWallet(_id,_currentWalletPubkey,_currentWalletPrivKey,_walletPubKey,_walletPrivKey){
        let agInvestor = await agentInvestor.findOne({_id:_id});
        console.log(agInvestor);
        if(agInvestor != null){
            if(agInvestor.validWallet(_walletPrivKey)){
                return false;
            }else {
                agInvestor.updateOne({walletPubKey : _currentWalletPubkey},{$set: {walletPubKey: _walletPubKey}});
                agInvestor.walletPubKey = _walletPubKey;
                agInvestor.setWallet(_walletPrivKey);
                agInvestor.save();
                return true;
            }
        }else {
            return null
        }
    }
    async resetPassword(_id, _password){
        const userExist = await agentInvestor.findOne({_id:_id});
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
}