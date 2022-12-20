const Donation = require ('../models/Donation');
const donatorManagement = require('./donatorManagement');
const projectManagement = require('./projectManagement');
const projectMgt = new projectManagement();
const donatorMgt = new donatorManagement();

module.exports = class DonationManagement{
     
    constructor() {

    }
    async addDonation(_idDonator,_idProject,_montant){
        if(donatorMgt.getDonatorById(_idDonator)!= false && projectMgt.getProjectById(_idProject)!= false)
        {
            try{
                var newDonation = new Donation();
                newDonation.donator = _idDonator;
                newDonation.project = _idProject;
                newDonation.montant = _montant;
               await projectMgt.updateDonation(_idProject,_montant);
               newDonation.save();

                return true;
            }
            catch(err){
                return null;
            }
        
        }else {
            return false;
        }
}
    async getDonations(){
        let donation = await Donation.find();
        console.log
        if(donation.length ==0 )  {
            return false;
        }else {
            return donation;
        }
    }
    async getDonationById(_id){
        let donation = await Donation.findById(_id);
        if(donation == null){
            return false ;
        }else {
            return donation;
        }
    }
    async getDonationByDonator(_idDonator){
        let donation = await Donation.find({donator: _idDonator});
        console.log(donation);
        if(donation.length == 0){
            return false ;
        }else {
            return donation;
        }
    }
    async getDonationByProject(_idProject){
        let donation = await Donation.find({project: _idProject});
        if(donation.length == 0){
            return false ;
        }else {
            return donation;
        }
    }
    async getDonationByDate(_year,_month,_day){
        const ourDate = new Date(_year,_month,_day);
        const filters= {
            date: {
                $eq: ourDate
            },
        };
        let donation = await Donation.find({}).where(filters);
        console.log(donation);
        if(donation.length == 0){
            return false ;
        }else {
            return donation;
        }
    }
    async getDonationByMontant(_montant){
        let donation = await Donation.find({montant: _montant})
        if(donation.length == 0){
            return false ;
        }else {
            return donation;
        }
    }
    async deleteDonationById(_id){
        let donation =await Donation.deleteOne(Donation.findOne({_id: _id}));
        if(donation.deletedCount == 0){
            return false;
        }
        return true;
    }
    async deleteDonationDonator(_idDonator){
        let donation = await Donation.deleteMany({donator: _idDonator});
        console.log(donation);
        if(donation.deletedCount == 0){
            return false;
        }
        return true;
    }
    async deleteDonationByProject(_idProject){
        let donation = await Donation.deleteMany({project: _idProject});
        if(donation.deletedCount == 0){
            return false;
        }
        return true;
    }

}