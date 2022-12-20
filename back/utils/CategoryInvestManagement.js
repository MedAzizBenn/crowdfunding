const categoryInvest = require('../models/categoryInvestors');

module.exports = class CategoryInvestManagement{
    constructor(){}
    async addCategoryInv(_name){
        let catInv = await categoryInvest.findOne({name: _name});
        console.log(catInv);
        if(catInv != null){
            return false;

        }
        else {
            var newCatInv = new categoryInvest();
            newCatInv.name = _name;
            newCatInv.save();
            return true;
        }
    } 
    async getAllCategoryInv(){
        let catInv = categoryInvest.find();
        console.log(catInv);
        if(catInv.length == 0){
            return false ;
        } 
        else {
            return catInv;
        };
    
}
    async getCategoryInvByID(_id){
        let catInv = await categoryInvest.findById(_id);
        console.log(catInv);
        if(catInv == null ){
            return false ;
        }
        else {
            return catInv;
        };
    } 
    async getCategoryInvByName(_name){
        let catInv = await categoryInvest.findOne({name: _name});
        console.log(catInv);
        if(catInv == null ){
            return false ;
        }else {
            return catInv;
        };
        
    }
    async deleteCategoryByID(_id){
        let catInv = await categoryInvest.deleteOne(categoryInvest.findById(_id));
        console.log(catInv);
        if(catInv.deletedCount == 0){
            return false;
        }
        return true;
    }
    async deleteCategoryInvByName(_name){
        let catInv = await categoryInvest.deleteOne(categoryInvest.findOne({name: _name}));
        console.log(catInv);
        if(catInv.deletedCount == 0){
            return false;
        }
        return true;
    }
    async updateCategoryInvById(_id,_name){
        let catInv = await categoryInvest.updateOne({_id: _id},{$set:{"name": _name}});
        if(!catInv.acknowledged){
            return null;
        }
        else if (catInv.modifiedCount == 0){
            return false
        }else{
            return true;
        }
    }


}
