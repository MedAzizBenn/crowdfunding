const categoryProj = require('../models/CategoryProj');

module.exports = class CategoryProjManagement{
    constructor(){}
    async addCategoryProj(_name){
        let catProj = await categoryProj.findOne({name: _name});
        console.log(catProj);
        if(catProj != null){
            return false;

        }
        else {
            var newCatProj = new categoryProj();
            newCatProj.name = _name;
            newCatProj.save();
            return true;
        }
    } 
    async getAllCategoryProj(){
        let catProj = categoryProj.find();
        console.log(catProj);
        if(catProj.length == 0){
            return false;
        }return catProj
    }
    async getCategoryProjByID(_id){
        let catProj = await categoryProj.findById(_id);
        console.log(catProj);
        if(catProj == null ){
            return false ;
        }
        else {
            return catProj;
        };
    } 
    async getCategoryProjByName(_name){
        let catProj = await categoryProj.findOne({name: _name});
        console.log(catProj);
        if(catProj == null ){
            return false ;
        }else {
            return catProj;
        };
        
    }
    async deleteCategoryByID(_id){
        let catProj = await categoryProj.deleteOne(categoryProj.findById(_id));
        console.log(catProj);
        if(catProj.deletedCount == 0){
            return false;
        }
        return true;
    }
    async deleteCategoryProjByName(_name){
        let catProj = await categoryProj.deleteOne(categoryProj.findOne({name: _name}));
        console.log(catProj);
        if(catProj.deletedCount == 0){
            return false;
        }
        return true;
    }
    async updateCategoryProjById(_id,_name){
        let catProj = await CategoryProj.updateOne({_id: _id},{$set:{"name": _name}});
        if(!catProj.acknowledged){
            return null;
        }
        else if (catProj.modifiedCount == 0){
            return false
        }else{
            return true;
        }
    }


}
