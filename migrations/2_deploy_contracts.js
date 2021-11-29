const Allowance = artifacts.require("Allowance");

module.exports = function (deployer, network, accounts) {
  const parent = accounts[0];
  const child = accounts[1];
  deployer.deploy(Allowance, parent, child);
};
