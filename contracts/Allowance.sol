// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Allowance is ReentrancyGuard {
  address public parent;
  address public child;

  uint public childBalance;
  uint public limit = 5;
  uint public lockTime = 7 days;
  uint public timeOfWithdraw;

  constructor(address _parent, address _child) {
    parent = _parent; 
    child = _child;
  }

	function depositEther() payable public {
    require(msg.sender == parent, "Not the parent!");
    childBalance = childBalance + msg.value;
	}
  
  function withdrawEther(uint _amount, address _address) public {
    // TODO: differientiate between parent and child address
    // parent can withdrawl ETH without time and amount limitations
    require(address(this).balance >= _amount, "Contract doesn't have enough ETH");
    require(limit >= _amount, "Cannot withdraw more than Contract amount");
    require(block.timestamp >= timeOfWithdraw + lockTime, "Cannot withdraw more than 1x/week");
    (bool success, ) = payable(_address).call{value: _amount}("");
    require(success, "Ether transfer failed");
    childBalance = childBalance - _amount;
    timeOfWithdraw = block.timestamp;
	}
}
