const DriverRegistration = artifacts.require('DriverRegistration')

module.exports = function (deployer) {
  deployer.deploy(DriverRegistration)
}
