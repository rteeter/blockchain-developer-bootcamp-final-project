# Design patterns used

## Access Control Design Patterns

- Restricted access to certain contract functions with the use of a modifier. In the `Allowance` function `depositEther`, only a parent can deposit Ether into the contract.

## Inheritance and Interfaces

- `Allowance` contract inherits the OpenZeppelin `ReentrancyGuard` contract to to prevent a re-entrancy attack https://swcregistry.io/docs/SWC-107.
