require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {

    },
    localhost: {
      url:`http://127.0.0.1:8545`,
      account:[0x06dcc6b694d1c5dba462ab94ca66a14a3db66f6cb3ec2a50d2d90ba2e7ce147e,0x84c93f3a2a29974e0284fd2f25f0001b3a6cfa2cbeea523bea3bc265934f9eb4]
    },
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};
