const DriverRegistrationContract = artifacts.require('DriverRegistration')

contract('DriverRegistration', ([deployer, user]) => {
  it('has been deployed successfully', async () => {
    const driverRegistration = await DriverRegistrationContract.deployed()
    // if greeter exists then test passes
    assert(driverRegistration, 'contract was not deployed')
  })

  it('registers a driver', async () => {
    const driverRegistration = await DriverRegistrationContract.deployed()
    await driverRegistration.register(
      'Alex Turner',
      'Max Turner',
      'Imaginary Highway',
      '0',
      '0',
      '1669483949'
    )

    const newDriver = await driverRegistration.drivers(0)

    assert.equal(newDriver.name, 'Alex Turner', 'name not set properly')
    assert.equal(
      newDriver.parentName,
      'Max Turner',
      'parent name not set properly'
    )
    assert.equal(
      newDriver.permanentAddress,
      'Imaginary Highway',
      'permanent address not set properly'
    )
    assert.equal(newDriver.gender, '0', 'gender not set properly')
    assert.equal(newDriver.vehicleType, '0', 'vehicle type not set properly')
    assert.equal(newDriver.dob, '1669483949', 'DOB not set properly')
  })
})
