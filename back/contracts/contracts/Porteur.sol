// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/AccessControl.sol";

import "hardhat/console.sol";

contract Porteur is AccessControl {
    bytes32 internal constant PORTEUR_ROLE = keccak256("PORTEUR_ROLE");
    bytes32 internal constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    address private owner;
    uint256 public index;
    struct porteur {
        address wallet;
        string name;
    }

    mapping(string => porteur) internal porteurList;

    constructor() {
        owner = msg.sender;
        index = 0;
    }

    function add(string memory _id, string memory _name) public returns (bool) {
        require(porteurList[_id].wallet == address(0x00), "porteur does exist");
        porteurList[_id].wallet = msg.sender;
        porteurList[_id].name = _name;
        index++;
        _setupRole(PORTEUR_ROLE, msg.sender);
        return true;
    }

    function getByID(string memory _id) public view returns (porteur memory) {
            return porteurList[_id];
        
    }

    function update(
        string memory _id,
        string memory _name,
        address _wallet
    ) public onlyRole(PORTEUR_ROLE) returns (bool) {
        require(msg.sender == porteurList[_id].wallet, "porteur not mismatch");
        porteurList[_id].wallet = _wallet;
        porteurList[_id].name = _name;
        _revokeRole(PORTEUR_ROLE, msg.sender);
        _setupRole(PORTEUR_ROLE, address(_wallet));
        return true;
    }

    function deleteByPorteur(string memory _id)
        public
        onlyRole(PORTEUR_ROLE)
        returns (bool)
    {
        require(msg.sender == porteurList[_id].wallet, "porteur not mismatch");
        delete porteurList[_id];
        _revokeRole(ADMIN_ROLE, msg.sender);
        index--;
        return true;
    }

    function deleteByAdmin(string memory _id)
        public
        onlyRole(ADMIN_ROLE)
        returns (bool)
    {
        delete porteurList[_id];
        _revokeRole(PORTEUR_ROLE, msg.sender);
        index--;
        return true;
    }
}
