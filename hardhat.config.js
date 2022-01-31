require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten:{
      url: "https://eth-ropsten.alchemyapi.io/v2/3ANZS5xHguG6R4EYhqygdyDPqhTHziDD",
      accounts: [''] //private key
    }
  }
};
