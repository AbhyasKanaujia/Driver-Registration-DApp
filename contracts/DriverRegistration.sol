// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract DriverRegistration is Ownable {
    enum VehicleType {
        privateVehicle,
        commercialVehicle
    }

    enum Gender {
        male,
        female,
        nonBinary
    }

    Driver[] public drivers;

    struct Driver {
        string name;
        string parentName;
        string permanentAddress;
        Gender gender;
        VehicleType vehicleType;
        uint256 dob;
        uint256 validUntil;
    }

    event driverRegistered(
        string _name,
        string _parentName,
        string _permanentAddress,
        Gender _gender,
        VehicleType _vehicleType,
        uint256 _dob,
        uint256 _validUntil
    );

    function register(
        string memory _name,
        string memory _parentName,
        string memory _permanentAddress,
        Gender _gender,
        VehicleType _vehicleType,
        uint256 _dob
    ) public {
        uint256 ageFiftyOn = _dob + (50 * 31536000);
        uint256 _validUntil = ageFiftyOn;

        if (_vehicleType == VehicleType.privateVehicle) {
            uint256 twentyYearsOn = block.timestamp + (20 * 3153600);
            if (twentyYearsOn < ageFiftyOn) _validUntil = twentyYearsOn;
        } else {
            uint256 threeYearsOn = block.timestamp + (3 * 3153600);
            if (threeYearsOn < ageFiftyOn) _validUntil = threeYearsOn;
        }

        drivers.push(
            Driver(
                _name,
                _parentName,
                _permanentAddress,
                _gender,
                _vehicleType,
                _dob,
                _validUntil
            )
        );

        emit driverRegistered(
            _name,
            _parentName,
            _permanentAddress,
            _gender,
            _vehicleType,
            _dob,
            _validUntil
        );
    }

    function getDriver(uint256 _id) public view returns (Driver memory) {
        return drivers[_id];
    }
}
