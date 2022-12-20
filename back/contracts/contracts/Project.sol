// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "hardhat/console.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

import "./Porteur.sol";

contract Project is AccessControl ,Porteur {
    address private owner;

    struct projectCategory {
        string description;
        string name;
    }
    struct project {
        string id;
        string idOwner;
        projectCategory category;
        uint256 maxCap;
        uint256 delay;
        uint256 createdAt;
    }

    // projectCategory[] private categoryList;
    mapping(string  => projectCategory) internal categoryList;
    project[] internal projectList;
    // mapping(string => mapping (uint=>project)) projectList;
    uint256 public indexProject;

    constructor() {
        owner = msg.sender;
        indexProject = 1;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
    function addCategory(string  memory _id, string memory name, string memory description) public onlyRole (Porteur.ADMIN_ROLE) {
        require(bytes(_id).length == 12,"error id category");
        categoryList[_id].name = name;
        categoryList[_id].description = description;  
    }
    function addProject(string memory _idPorteur,string memory _id,string memory _category,
    uint256 _maxcap, uint256 delay) public onlyRole(Porteur.PORTEUR_ROLE){
        require(Porteur.porteurList[_id].wallet != address(0x00) ,"user not found");
        require(keccak256(abi.encodePacked(categoryList[_category].name)) != keccak256(abi.encodePacked("")),"category does not exist");
        project memory pr;
        pr.id = _id;
        pr.idOwner = _idPorteur;
        pr.category = categoryList[_category];
        pr.delay = delay;
        pr.maxCap = _maxcap;
        pr.createdAt = block.timestamp;
        projectList.push(pr);
        indexProject++;
    }
}
