const path = require("path");
require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

const mnemonic = process.env.MNEMONIC;
const RPC_URL = process.env.RPC_URL;

module.exports = {
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    base_sepolia: {
      provider: function () {
        return new HDWalletProvider(
          mnemonic,
          RPC_URL
        );
      },
      network_id: 84532,
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
