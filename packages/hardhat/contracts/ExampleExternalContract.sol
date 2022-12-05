// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;  //Do not change the solidity version as it negativly impacts submission grading

contract ExampleExternalContract {

  bool public completed;

  function complete() public payable {
    completed = true;
  }

  function donation(address _to, uint price) external payable {
    payable(_to).call{value: address(this).balance}("");
  } 
}
