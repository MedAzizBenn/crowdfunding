const {ethers,Wallet } = require("ethers");

 const donatorJSON = require('../abi/Donator.json')
// const DonatorAbi = req
require("dotenv").config
module.exports = class DonatorWeb3Management{
    constructor(){
        this.Provider = process.env.PROVIDER;
        this.PrivateKey = process.env.PRIVATE_KEY;
        this.ContractAddress= process.env.DONATOR_ADDRESS;
        this.provider = new ethers.providers.JsonRpcProvider(this.Provider);

    }
    async createAccount(){
        try{

              //await this.provider.getNetwork()
              const wallet = new Wallet.createRandom().connect(this.provider);
              console.log(wallet);
              /*let  balance = await this.provider.getBalance(wallet.address);*/
              // console.log('address:', wallet.address);
              // console.log('mnemonic:', wallet.mnemonic.phrase);
              // console.log('privateKey:', wallet.privateKey);
              // console.log('balance:', ethers.utils.formatEther(balance));
              /*let  signer =new  Wallet(this.PrivateKey);
              let account = signer.connect(this.provider);
             const tx = {
                  to: wallet.address,
                  value: ethers.utils.parseEther("1.0"),
              }
              const transaction = await account.sendTransaction(tx);
              const rslt = await transaction.wait();
              console.log(rslt);*/
              console.log("here");
              console.log(wallet);
              return wallet;
          }catch (err){
              return false;
          }
         
      }
    
    async addDonator(id,privKey){
        try{ 
            await this.provider.getNetwork()
            let signer = new Wallet(privKey);
            let account = signer.connect(this.provider);
            const donator = new ethers.Contract(this.ContractAddress,donatorJSON,
            account);
            const tx = await donator.add(id);
            await tx.wait();
            return true;    
        }catch (err){
            return false;
        }

    }
    async updateDonator(id,privKey,donation){
        try{
            await this.provider.getNetwork();
            let wallet = new Wallet(privKey).connect(this.provider);
            const donator = new ethers.Contract(this.ContractAddress,donatorJSON,wallet);
            let amount = ethers.utils.parseEther(donation.toString());
            const tx = await donator.update(id,wallet.address,donation);
            await tx.wait();
            return true;
        }catch(err){
            return false
        }
    }
    async deleteDonator(id,privKey ){
        try{
            await this.provider.getNetwork();
            let wallet = new Wallet(privKey).connect(this.provider);
            const donator = new ethers.Contract(this.ContractAddress, donatorJSON, wallet);
            const tx = await donator.deleteByDonator(id,wallet.address);
            await tx.wait();
            return true;
        }catch(err){
            return false;
        }
    }
    async deleteByAdmin(id){
        try{
            await this.provider.getNetwork();
            let wallet = new Wallet(this.PrivateKey).connect(this.provider);
            const donator = new ethers.Contract(this.ContractAddress, donatorJSON,wallet);
            const tx = await donator.deleteByAdmin(id);
            await tx.wait();
            return true;
        }catch(err) {
            return false;
        }
    }

}