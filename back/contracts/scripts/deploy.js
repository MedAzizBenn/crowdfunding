// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = hre.ethers.utils.parseEther("1");

  const Lock = await hre.ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  const Donator = await hre.ethers.getContractFactory("Donator");
  const donator = await Donator.deploy();
  await donator.deployed();
  await lock.deployed();

  const Porteur = await hre.ethers.getContractFactory("Porteur");
  const porteur = await Porteur.deploy();
  await porteur.deployed();
  console.log("Lock with 1 ETH deployed to:", lock.address);
  console.log("Donator has been deployed:",donator.address);
  console.log("Porteur has been deployed:",porteur.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
