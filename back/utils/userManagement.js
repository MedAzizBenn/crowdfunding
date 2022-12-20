const User = require('../models/User');
const mongoose = require('mongoose');
const { findOne } = require('../models/User');

module.exports = class userManagement{
    constructor(){

    };
    async addUser(_name,_email,_password){

        let userExists = await User.findOne({email: _email});
        if(userExists != null){
            return false;
        }
        else{
            var newUser= new User();
            newUser.name = _name;
            newUser.email = _email;
            newUser.password = _password;
            newUser.setPassword(_password);
            newUser.save();
            return true;
        
        }
    }
    async getUserById(_id){
        let  userExist =await User.findOne({_id: _id});
        if(userExist == null){
            return false;
        }
        else {
            return userExist;
        }
    }
    async getUserByEmail(_email){
        let  userExist = await User.findOne({'email': _email});
        console.log(userExist);
        if(userExist === null){
            return false;
        }
        else {
            return userExist;
        }
    }
    async deleteUserById(_id){
        let  userDelete = await User.deleteOne(User.findOne({"_id": _id}));
        console.log(userDelete);
        if(userDelete.deletedCount==0){
            return false;
        }
        else {
            return true;
        }
    }
    async deleteUserByEmail(_email){
        let  userDelete =await User.deleteOne(User.findOne({'email': _email}));
        console.log(userDelete);
        if (userDelete.deletedCount==0){
            return false ;
        }
        else {
            return true;
        }
    }
    async updateUserById(_id,_name,_email){
        let updateUser = await User.updateOne({"_id": _id},{$set: {"name":_name,"email":_email,}});
        console.log(updateUser.modifiedCount);
        if(updateUser.modifiedCount==0){
            return false;
        }
        else{
            return true;
        }
    }
    async updateUserByEmail(_name,_email,_currentEmail){
        let updateUser = await User.updateOne({"email": _currentEmail}, {$set: {"name": _name, "email": _email}});
        console.log(updateUser);
        if(updateUser.modifiedCount==0){
            return false;
        }
        else{
            return true;
        }
    }
    async getAllUsers(){
        let users = await User.find();
        if(users === null){
            return false;
        }
        else{
            return users;
        }
    }
    async resetPasswordById(_id, _password){
        const userExist = await User.findOne({_id:_id});
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