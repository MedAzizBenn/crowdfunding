const Agent = require('../models/AgentCO');

module.exports = class agentCoManagement{
    constructor(){}
    async addAgent(_name,_email,_password,_address,_gouvernorat,_city,_position,_telephone){
        let agentExist = await Agent.findOne({email:_email});
        console.log(agentExist);
        if(agentExist != null){
            return false;
        }
        else{
            var newAgent = new Agent();
            newAgent.name = _name;
            newAgent.email = _email;
            newAgent.password = _password;
            newAgent.address = _address;
            newAgent.gouvernorat = _gouvernorat;
            newAgent.city = _city;
            newAgent.position = _position;
            newAgent.telephone = _telephone;
            newAgent.setPassword(_password);
            newAgent.save();
            return true;
        }
    }
    async getAllAgents(){
        let agents = await Agent.find();
        if(agents === null){
            return false;
        }
        else {
            return agents;
        }
    }
    async getAgentById(_id){
        let agentExist = await Agent.findById(_id);
        if(agentExist === null){
            return false;
        }
        else {
            return agentExist;
        }
    }
    async getAgentByEmail(_email){
        let agentExist = await Agent.findOne({email: _email});
        if(agentExist === null  ){
            return false;
        }
        return agentExist;
    }
    async deleteAgentByEmail(_email){
        let agentDelete = await Agent.deleteOne(Agent.findOne({"email": _email}));
        if(agentDelete.deletedCount==0){
            return false;
        }
        else{
            return true;
        }
    }
    async deleteAgnetById(_id){
        let agentDelete = await Agent.deleteOne(Agent.findOne({"_id": _id}));
        if(agentDelete.deletedCount== 0){
            return false;
        }
        else {
            return true;
        }
    }
    async updateById(_id,_name,_email,_address,_gouvernorat,_city,_position,_telephone){
        let adminUpdate = await Agent.updateOne({_id: _id},{$set:{"name": _name,"email": _email,"address": _address,
        "gouvernorat": _gouvernorat,"city": _city,"position": _position,"telephone": _telephone}});
        console.log(adminUpdate);
        if(!adminUpdate.acknowledged){
            return null;
        }
        else if(adminUpdate.modifiedCount==0){
            return false;
        }
        else{
            return true
        }
    }
    async updateByEmail(_currentEmail,_name,_email,_address,_gouvernorat,_city,_position,_telephone){
        let adminUpdate = await Agent.updateOne({email: _currentEmail}, {$set:{
            "name": _name,
            "email": _email,
            "address": _address,
            "gouvernorat": _gouvernorat,
            "city": _city,
            "position": _position,
            "telephone": _telephone
        }});
        if(!adminUpdate.acknowledged){
            return null;
        }else if (adminUpdate.modifiedCount==0){
            return false;
        }
        else {
            return true;
        }
    }
    async resetpasswordById(_id,_password){
        const agentExist = await Agent.findOne({_id: _id});
        if(agentExist != null){
            console.log(agentExist);
            const result =await  agentExist.validPassword(_password);
            if(!result){
                await agentExist.setPassword(_password);
                await agentExist.save();
                return true;
            }else{
                return false;
            }
        }
        else{
            return null;
        }
    }

}
