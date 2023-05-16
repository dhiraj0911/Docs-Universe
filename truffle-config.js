const path = require("path");
require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "clean script pink doll tower flock game under meadow apart sweet paddle";
// const alchemyKey = "XEL7Bu2in_J0nt2Lnpd3TW4O8TG7GLdj";

module.exports = {
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    mumbai: {
      provider: function () {
        return new HDWalletProvider(
          mnemonic,
          "https://polygon-mumbai.g.alchemy.com/v2/g5OuSq_e4E-J7W0gRlcXXHTkL6_HsdA0"
        );
      },
      network_id: 80001,
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
