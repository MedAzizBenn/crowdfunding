var categoryProjManagement = require('../utils/CategoryProjManagement');
var express = require('express');
var router = express.Router();

router.get('/',async(req,res) =>{
    const categoryMgt = new categoryProjManagement();
    categoryMgt.getAllCategoryProj().then((resp) =>{
        if(!resp){
            return res.status(400).send("no category project");
        }else {
            return res.status(200).send({message: "category project found",value: resp}) ;
        }
    });
});
router.get('/:id',async(req,res) =>{
    const categoryMgt = new categoryProjManagement();
    const id = req.params.id;
    categoryMgt.getCategoryProjByID(id).then((resp) =>{
        if(!resp){
             return res.status(400).send({message: "category not found",value: resp});
        }else {
            return res.status(200).send({messag:"category found",value: resp});
        }
    });
});
router.get('/getbyname/:name', async(req,res) =>{
    const categoryMgt = new categoryProjManagement();
    const name = req.params.name;
    categoryMgt.getCategoryProjByName(name).then((resp) =>{
        if(!resp) {
            return res.status(400).send({message: "category not found",value: resp});
        }
        else {
            return res.status(200).send({message: "category found",value: resp});
        }
    });
});
router.post('/',async (req,res) =>{
    const categoryMgt = new categoryProjManagement();
    const name = req.body.name;
    categoryMgt.addCategoryProj(name).then((resp) =>{
        if(resp){
            return res.status(201).send({message: "category created", value: resp});
        }
        else {
            return res.status(400).send({message: "category exists",value: resp});
        }
    });
});
router.delete('/:id',async(req,res) =>{
    const categoryMgt = new categoryProjManagement();
    const id = req.params.id;
    categoryMgt.deleteCategoryByID(id).then((resp) =>{
        if(!resp){
            return res.status(400).send({message: "delete failed", value: resp});
        }else 
        {
            return res.status(200).send({
                message: "delete ok",
               value: resp,
            });
        }
    })
});
router.delete('/deletebyname/:name',async(req,res) =>{
    const categoryMgt = new categoryProjManagement();
    const name = req.params.name;
    categoryMgt.deleteCategoryProjByName(name).then((resp) =>{
        if(!resp){
            return res.status(400).send({message: "delete failed", value: resp});
        }else 
        {
            return res.status(200).send({
                message: "delete ok",
               value: resp,
            });
        }
    })
});
module.exports = router;
