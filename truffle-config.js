const path = require("path");
require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

const mnemonic = process.env.MNEMONIC;
const alchemyKey = process.env.ALCHEMY;

module.exports = {
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    mumbai: {
      provider: function () {
        return new HDWalletProvider(
          mnemonic,
          `https://polygon-mumbai.g.alchemy.com/v2/${alchemyKey}`
        );
      },
      network_id: 80001,
    },
    goerli: {
      provider: function () {
        return new HDWalletProvider(
          "clean script pink doll tower flock game under meadow apart sweet paddle",
          "https://eth-goerli.g.alchemy.com/v2/XEL7Bu2in_J0nt2Lnpd3TW4O8TG7GLdj"
        );
      },
      network_id: 5,
    },
    ganache: {
      host: "127.0.0.1",
      port: 8545, 
      network_id: "*",
    },
  },
  compilers: {
    solc: {
      version: "0.8.0", // specify a different version of solc here
    },
  },
};
