# Allowance DApp

## Project Description
Allowance dApp streamlines the transfer of funds from a "parent" address to a "child" address
- Set a "parent" and "child" account
- Parent account, deposit ETH into contract
- Withdraw ETH out of contract, with limitations on how much and when

## Demo
<!-- link to Loom video walkthrough -->

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

## Install dependencies

*Prerequisite: You must have node.js and npm installed*

```sh
npm install -g truffle
npm i -g --only=prod https-localhost # Only if running the app locally
```

## Accessing the project
https://allowance-dapp.netlify.app/

## Running locally

*Prerequisite: You must run a local blockchain like Ganache in the background*

```sh
truffle compile
truffle migrate
cd frontend/
serve . # May need sudo depending on OS
```

Open `localhost`, switch Metamask to your local blockchain network, and connect

### Create a frontend/.env file containing the following

```
const INFURA_PROJECT_ID=<insert_yours_here>
const CONTRACT_ADDRESS_ROPSTEN=<from_truffle_migrate>
const CONTRACT_ADDRESS_LOCAL=<from_ganache>
```

## Run unit tests

```sh
truffle test
```
