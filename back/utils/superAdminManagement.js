const superAdmin = require('../models/SuperAdmin');

module.exports = class superAdminManagement{

    constructor(){

    }
    async addAdmin(_name,_email,_password,_address,_position,_telephone){
        let adminExist = await superAdmin.findOne({email: _email});
        console.log(adminExist);
        if(adminExist != null){
            return false;
        }
        else{
            var newAdmin = new superAdmin();
            newAdmin.name = _name;
            newAdmin.email = _email;
            newAdmin.password = _password
            newAdmin.address = _address;
            newAdmin.position = _position;
            newAdmin.telephone = _telephone;
            newAdmin.setPassword(_password);
            newAdmin.save();
            return true;
        }
    }
    async getAllAdmins(){
        let result = await superAdmin.find();
        if(result === null){
            return false;
        }else{
            return result;
        }
    }
    async getAdminById(_id){
        let admin = await superAdmin.findById(_id);
        if(admin === null){
            return false;
        }
        return admin
    }
    async getAdminbyEmail(_email){
        let admin = await superAdmin.findOne({email: _email});
        if(admin === null){
            return false;
        }
        return admin;
    }
    async deleteById(_id){
        let  adminDelete = await superAdmin.deleteOne(superAdmin.findOne({"_id": _id}));
        console.log(adminDelete);
        if(adminDelete.deletedCount==0){
            return false;
        }
        else {
            return true;
        }
    }
    async deleteByEmail(_email){
        let  adminDelete =await superAdmin.deleteOne(superAdmin.findOne({'email': _email}));
        console.log(adminDelete);
        if (adminDelete.deletedCount==0){
            return false ;
        }
        else {
            return true;
        }
    }
    async updateById(_id,_name,_email,_address,_position,_telephone){
        let adminUpdate = await superAdmin.updateOne({_id: _id},{$set:{"name":_name,"email":_email,"address": _address,"position":_position,"telephone":_telephone}});
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
    async updateByEmail(_currendEmail,_name,_email,_address,_position,_telephone){
        let adminUpdate = await superAdmin.updateOne({email: _currendEmail},{$set:{"name":_name,"email":_email,"address": _address,"position":_position,"telephone":_telephone}});
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
    async resetPasswordById(_id, _password){
        const userExist = await superAdmin.findOne({_id:_id});
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
        const adminExist = await superAdmin.findOne({"email": _email});
        console.log(adminExist);
        if(adminExist === null){
            return null;
        }
        const result =  adminExist.validPassword(_password);
        return result;
    }
}