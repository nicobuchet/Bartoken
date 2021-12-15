const Bartoken = artifacts.require("Bartoken");

module.exports = function (deployer) {
  deployer.deploy(Bartoken);
};
