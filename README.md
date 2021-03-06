# Allowance DApp

## Project Description
Allowance dApp streamlines the transfer of funds from a "parent" address to a "child" address
- Set a "parent" and "child" account
- Parent account, deposit ETH into contract
- Withdraw ETH out of contract, with limitations on how much and when

## Accessing the project
https://allowance-dapp.netlify.app/

## Demo
https://loom.com/share/497296b691754e8c9d9dd60a578de415

## Directory structure
```
.
├── contracts/              // Solidity smart contracts
├── docs/
│   ├── avoiding_common_attacks.md
│   └── design_pattern_decisions.md
├── migrations/             // Truffle migrations
├── frontend/               // Web App
├── test/                   // Mocha + Chai contract tests
├── utils/                  // Test utility
├── deployed_addresses.txt  // Contract addresses on Ropsten
├── README.md               // You are here!
├── ...
```

# Usage
Clone repository to local directory:
```sh
git clone https://github.com/rteeter/blockchain-developer-bootcamp-final-project.git
```

## Install dependencies
*Prerequisite: You must have node.js and npm installed*
```sh
npm install -g truffle
```
Install Live Server as an extension in Visual Studio Code

## Running locally
Navigate into blockchain-developer-bootcamp-final-project folder
```sh
npm install
truffle compile
```
- Navigate to the `frontend` folder and select the `index.html` file
- Open Live Server by right clicking `index.html` and selecting "Open with Live Server"
- The DApp should open a new or window within your default browser

## Important Things to Consider
When interacting with the DApp:
- You will need two MetaMask accounts: one for the parent account, one for the child account
- Make sure to switch both MetaMask accounts to the Ropsten blockchain network
- If in need of test ETH: https://faucet.ropsten.be/

## Run unit tests
```sh
truffle test
```
