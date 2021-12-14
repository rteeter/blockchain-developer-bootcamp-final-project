// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

/// @title Contract for managing a parent/child allowance
/// @author Rachel Teeter
/// @notice The limit and lockTime are currently hardcoded, but will be able to set in future versions
/// @dev Inherits the ReentrancyGuard contract from @openzeppelin
contract Allowance is ReentrancyGuard {
  /// @notice Parent and child addresses set in frontend
  address public parent;
  address public child;

  uint public childBalance;
  uint public timeOfWithdraw;

  /// @notice The limit is set to 5, and represents how much ETH can be withdrawn from the contract at one time
  // TODO: Remove hardcoded amount and set as a constructor
  uint public limit = 5;

  /// @notice The lockTime is set to 7 days, and represents how long an account must wait between withdraws from the contract
  // TODO: Remove hardcoded amount and set as a constructor
  uint public lockTime = 7 days;

  modifier isParent() {
    require(msg.sender == parent, "Not the parent!");
    _;
  }

  constructor(address _parent, address _child) {
    parent = _parent; 
    child = _child;
  }

  /// @notice Deposits Ether into contract
  /// @dev Only the parent account can deposit Ether into contract
	function depositEther() payable public isParent {
    childBalance = childBalance + msg.value;
	}

  /// @notice Withdraw Ether from contract
  /// @param _amount The amount that is deposited into the given address
  /// @param _address The account in which the Ether is deposited into
  function withdrawEther(uint _amount, address _address) public nonReentrant {
    // TODO: Differientiate between parent and child address; parent account can withdraw ETH without time and amount limitations
    // TODO: Child address can withdraw up to 5 ETH a week, and doesn't have with 5 ETH all at once
  
    /// @dev The amount in the contract must be over or equal to the requested withdrawl amount
    require(address(this).balance >= _amount, "Contract doesn't have enough ETH");

    /// @dev The amount requested must be less than set limit amount (5 ETH)
    require(limit >= _amount, "Cannot withdraw more than Contract amount");

    /// @dev The withdraw must only execute if last withdraw was over or equal to 1 week ago
    require(block.timestamp >= timeOfWithdraw + lockTime, "Cannot withdraw more than 1x/week");

    /// @dev Check to make sure execution of transfer is a success, otherwise revert
    (bool success, ) = payable(_address).call{value: _amount}("");
    require(success, "Ether transfer failed");

    childBalance = childBalance - _amount;
    timeOfWithdraw = block.timestamp;
	}
}
