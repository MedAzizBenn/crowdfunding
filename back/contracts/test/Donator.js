const {
    time,
    loadFixture,
  } = require("@nomicfoundation/hardhat-network-helpers");
  const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
  const { expect } = require("chai");
const { ethers } = require("hardhat");

  describe("Donator", function(){
    async function deploy(){
        const [owner, otherAccount] = await ethers.getSigners();
        const Donator = await ethers.getContractFactory("Donator");
        const donator = await Donator.connect(owner).deploy();
        await donator.deployed();
        return {donator,owner,otherAccount};
    }

    describe("Deployment", function(){
        it("Shoud set the right owner",async function(){
            const {donator,owner} = await loadFixture(deploy);
            expect(await donator.owner()).to.equal(owner.address);
        });
        it("should index set be zero",async function(){
            const {donator} = await loadFixture(deploy);
            expect(await donator.index()).to.equal(0);
        })
        it("owner should be in the admin role",async function(){
            const {donator, owner} = await loadFixture(deploy);
            expect(await donator.hasRole(ethers.utils.keccak256(ethers.utils.toUtf8Bytes('ADMIN_ROLE')),owner.address)).to.equal(true);
        });

    });
    describe("Donator creation",function(){
        it("should succeed for creation new donator",async function(){
            const {donator,otherAccount} = await loadFixture(deploy);
            expect(await donator.connect(otherAccount).add("dsjfkl")).not.reverted;
        });
        it("should fail for creation same donator",async function(){
            const {donator,otherAccount} = await loadFixture(deploy);
            expect(await donator.connect(otherAccount).add("dsjfkl")).reverted;
        });
        it("should succeed for the Donator role add",async function(){
            const {donator,otherAccount} = await loadFixture(deploy);
            await donator.connect(otherAccount).add("sfdgdg");
            expect(await donator.hasRole(ethers.utils.keccak256(ethers.utils.toUtf8Bytes("DONATOR_ROLE")),otherAccount.address)).to.equal(true);
        });
    });
    describe("Update Donator",function(){
        it("should succeed for updating donator",async function(){
            const {donator,owner,otherAccount} = await loadFixture(deploy);
            await donator.connect(otherAccount).add("sfdgdg");
            expect (await donator.connect(otherAccount).update("sfdgdg",owner.address,0)).not.reverted;
        });
        it("sould faile for updating non existant donator",async function(){
            const {donator,owner,otherAccount} = await loadFixture(deploy);
            await donator.connect(otherAccount).add("sfdgdg");
            await donator.connect(otherAccount).update("sfdgdgaaaa",owner.address).reverted;
        })
        it("should revoke Donator role from the old wallet and give it the role to new address",async function(){
            const {donator,owner,otherAccount} = await loadFixture(deploy);
            await donator.connect(otherAccount).add("sfdgdg");
            await donator.connect(otherAccount).update("sfdgdg",owner.address,0);
            expect(await donator.hasRole(ethers.utils.keccak256(ethers.utils.toUtf8Bytes("DONATOR_ROLE")),otherAccount.address)).to.equal(false);
        });
        it("should fail for not beeing in DONATOR_ROLE",async function(){
            const {donator,owner,otherAccount} = await loadFixture(deploy);
            await donator.connect(otherAccount).add("sfdgdg");
            await donator.connect(owner).update("sfdgdgaaaa",owner.address).reverted;
        });
    })

  });
