// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

 import "../node_modules/hardhat/console.sol";
 import "@openzeppelin/contracts/access/AccessControl.sol";

contract Donator is AccessControl {
    bytes32 internal constant DONATOR_ROLE = keccak256("DONATOR_ROLE");
    bytes32 internal constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    address public owner;
    struct donator {
        address wallet;
        uint256 totalDonations;
    }
    uint256 public index;
    event donationLog(address _donator, uint256 _amount);
    mapping(string => donator) internal donatorList;

    constructor() {
        owner = msg.sender;
        _setupRole(ADMIN_ROLE, owner);
    }

    function add(string memory _id) public returns (bool) {
        require(
            donatorList[_id].wallet == address(0x00),
            "the donator does exist"
        );
        donatorList[_id].wallet = msg.sender;
        donatorList[_id].totalDonations = 0;
        index++;
        _setupRole(DONATOR_ROLE,msg.sender);
        return true;
    }

    function getByID(string memory _id) public view returns (donator memory) {
        return donatorList[_id];
    }

    function update(
        string memory _id,
        address _wallet,
        uint256 _totalDonations
    ) public onlyRole(DONATOR_ROLE) returns (bool) {
        require(
            msg.sender == donatorList[_id].wallet,
            "the saved donator not mismatch"
        );
        require(_wallet != address(0x00));

        donatorList[_id].totalDonations = _totalDonations;
        donatorList[_id].wallet = _wallet;
        _revokeRole(DONATOR_ROLE, msg.sender);
        _setupRole(DONATOR_ROLE,donatorList[_id].wallet);

        return true;
    }

    function deleteByDonator(string memory _id, address _wallet)
        public
        onlyRole(DONATOR_ROLE)
        returns (bool)
    {
        require(msg.sender == _wallet, "this is donator");
        require(
            donatorList[_id].wallet == msg.sender,
            "the saved donator not mismatch"
        );
        delete donatorList[_id];
        _revokeRole(DONATOR_ROLE, msg.sender);

        index--;
        return true;
    }

    function deleteByAdmin(string memory _id)
        public
        onlyRole(ADMIN_ROLE)
        returns (bool)
    {
        require(hasRole(ADMIN_ROLE, msg.sender), "User is not admin");
        delete donatorList[_id];
        _revokeRole(DONATOR_ROLE, msg.sender);
        index--;
        return true;
    }

    function addDonation(uint256 _amount, string memory _id)
        external
        returns (uint256)
    {
        require(
            msg.sender == donatorList[_id].wallet,
            "only the donator can add donation amount"
        );
        donatorList[_id].totalDonations += _amount;
        emit donationLog(msg.sender, _amount);
        return donatorList[_id].totalDonations;
    }
}
