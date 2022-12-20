const CategoryProj = require('../models/CategoryProj');
const project = require('../models/Project');
const porteur = require('../models/PorteurProjet');
module.exports = class ProjectManaggement {
    constructor() {
        
    }

    async addProject(_titre,_porteur,_description,_maxcap,_currentAmount,_delay,_categoryId,_photo){
        let proj = await project.findOne({titre: _titre});
        let port = await porteur.findById(_porteur);
        let catproj = await CategoryProj.findById(_categoryId);
        if(proj != null && port != null && catproj !=null){
            return false;
        }else {
            var newProj = new project();
            newProj.titre = _titre;
            newProj.porteur = _porteur;
            newProj.description  = _description;
            newProj.maxcap = _maxcap;
            newProj.currentAmount=_currentAmount;
            newProj.delay = _delay;
            newProj.category = _categoryId;
            newProj.photo = _photo
            newProj.save();
            return true;
        }
    }
    async addPhoto(_id,_photo){
        let proj = project.updateOne({"_id":_id},{$set:{"photo": _photo}});
        console.log(proj);
        if(!proj.acknowledged){
            return null;
        }else if (!proj){
            return false;
        }else {
            return true;
        }
    }
    
    async getAllprojects(){
        let proj = await project.find()
        if(proj.length == 0){
            return false ;
        }
        return proj;
    }
    async getProjectById(_id){
        console.log('lala');
        let proj  = await project.findById(_id);
        if (proj == null ){
            return false;
        }else {
            console.log(proj.currentAmount);

            return proj;
        }
    }

    async getProjectByTitre(_titre){
        let proj = await project.findOne({titre: _titre});
        if(proj === null){
            return false;
        }else {
            return proj;
        }
    }
    async getProjectByCategory(_categoryName){
        let cat = await CategoryProj.findOne({name: _categoryName});
        console.log(cat);
        if(cat != null){
            let proj = await project.find({category: cat._id});
            if(proj.length !=0 ){
                return proj
            }
            else return false;
        }else {
            return null;
        }
    }
    async updateProject(_id,_titre,_description,_maxcap,_delay,_category){
        let proj = await project.updateOne({_id: _id},{$set:{"titre": _titre,"description": _description,"maxcap":_maxcap,"delay":_delay,"category":_category}});
        console.log(proj)
        if(!proj.acknowledged){
            return null;
        }
        else if (proj.modifiedCount==0){
            return false;
        }
        else {
            return true;
        }
    }

    async updateDonation(_idProj,_donatedAmount){
        let currentAmount=this.getProjectById(_idProj).then(async(resp)=>{
            if(resp==false)
            {
                return false;

            }
            else
            {
                let newAmount=resp.currentAmount+_donatedAmount;
                let proj = await project.updateOne({_id: _idProj},{$set:{"currentAmount": newAmount}});
                if(!proj.acknowledged){
                    return null;
                }
                else if (proj.modifiedCount==0){
                    return false;
                }
                else {
                    return true;
                }
            }

        });
            
    }



    async deleteProjectById(_id){
        let proj = await project.deleteOne(project.findById(_id));
        if(proj.deletedCount == 0){
            return false;
        }else return true;
    }
}