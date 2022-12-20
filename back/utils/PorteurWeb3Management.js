const  {ethers,Wallet} = require("ethers");
const porteurJson = require('../abi/Porteur.json');

require("dotenv").config;

module.exports = class PorteurWeb3Management{
    constructor(){
        this.Provider = process.env.PROVIDER;
        this.PrivateKey = process.env.PRIVATE_KEY;
        this.ContractAddress= process.env.PORTEUR_ADDRESS;
        this.provider = new ethers.providers.JsonRpcProvider(this.Provider);
    }

    async createAccount(){
        try{
            
            await this.provider.getNetwork()
            const wallet = new Wallet.createRandom().connect(this.provider);
            let  balance = await this.provider.getBalance(wallet.address);
            console.log('address:', wallet.address);
            console.log('mnemonic:', wallet.mnemonic.phrase);
            console.log('privateKey:', wallet.privateKey);
            console.log('balance:', ethers.utils.formatEther(balance));
            let  signer =new  Wallet(this.PrivateKey);
            let account = signer.connect(this.provider);
            const tx = {
                to: wallet.address,
                value: ethers.utils.parseEther("1.0"),
            }
            const transaction = await account.sendTransaction(tx);
            const rslt = await transaction.wait();
            console.log(rslt);
            return wallet;
        }catch(err){
            return false;
        }
    }

    async add(id,privKey){
        try{ 
            await this.provider.getNetwork()
            let signer = new Wallet(privKey);
            let account = signer.connect(this.provider);
            const porteur = new ethers.Contract(this.ContractAddress,donatorJSON,
            account);
            const tx = await porteur.add(id);
            await tx.wait();
            return true;    
        }catch (err){
            return false;
        }

    }
    async update(id,privKey,amount){
        try{
            await this.provider.getNetwork();
            let wallet = new Wallet(privKey).connect(this.provider);
            const porteur = new ethers.Contract(this.ContractAddress,donatorJSON,wallet);
            let amount = ethers.utils.parseEther(donation.toString());
            const tx = await porteur.update(id,wallet.address,amount);
            await tx.wait();
            return true;
        }catch(err){
            return false
        }
    }
    async delete(id,privKey ){
        try{
            await this.provider.getNetwork();
            let wallet = new Wallet(privKey).connect(this.provider);
            const porteur = new ethers.Contract(this.ContractAddress, donatorJSON, wallet);
            const tx = await porteur.deleteByPorteur(id,wallet.address);
            await tx.wait();
            return true;
        }catch(err){
            return false;
        }
    }
}