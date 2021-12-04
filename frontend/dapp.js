const ABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_parent",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_child",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "child",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "childBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "limit",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "lockTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "parent",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "timeOfWithdraw",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "depositEther",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "withdrawEther",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
];
const BYTECODE = '0x60806040526005805562093a8060065534801561001b57600080fd5b50604051610ac0380380610ac0833981810160405281019061003d9190610131565b600160008190555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050610171565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100fe826100d3565b9050919050565b61010e816100f3565b811461011957600080fd5b50565b60008151905061012b81610105565b92915050565b60008060408385031215610148576101476100ce565b5b60006101568582860161011c565b92505060206101678582860161011c565b9150509250929050565b610940806101806000396000f3fe60806040526004361061007b5760003560e01c8063722b488f1161004e578063722b488f1461012c57806398ea5fca14610157578063a4d66daf14610161578063ce56c4541461018c5761007b565b80630d66808714610080578063237b5e96146100ab578063363bda64146100d657806360f96a8f14610101575b600080fd5b34801561008c57600080fd5b506100956101b5565b6040516100a2919061047e565b60405180910390f35b3480156100b757600080fd5b506100c06101bb565b6040516100cd91906104da565b60405180910390f35b3480156100e257600080fd5b506100eb6101e1565b6040516100f8919061047e565b60405180910390f35b34801561010d57600080fd5b506101166101e7565b60405161012391906104da565b60405180910390f35b34801561013857600080fd5b5061014161020d565b60405161014e919061047e565b60405180910390f35b61015f610213565b005b34801561016d57600080fd5b506101766102b9565b604051610183919061047e565b60405180910390f35b34801561019857600080fd5b506101b360048036038101906101ae9190610552565b6102bf565b005b60065481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60045481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60035481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029a906105ef565b60405180910390fd5b346003546102b1919061063e565b600381905550565b60055481565b81471015610302576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f9906106e0565b60405180910390fd5b816005541015610347576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161033e90610772565b60405180910390fd5b600654600454610357919061063e565b421015610399576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039090610804565b60405180910390fd5b60008173ffffffffffffffffffffffffffffffffffffffff16836040516103bf90610855565b60006040518083038185875af1925050503d80600081146103fc576040519150601f19603f3d011682016040523d82523d6000602084013e610401565b606091505b5050905080610445576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043c906108b6565b60405180910390fd5b8260035461045391906108d6565b60038190555042600481905550505050565b6000819050919050565b61047881610465565b82525050565b6000602082019050610493600083018461046f565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006104c482610499565b9050919050565b6104d4816104b9565b82525050565b60006020820190506104ef60008301846104cb565b92915050565b600080fd5b61050381610465565b811461050e57600080fd5b50565b600081359050610520816104fa565b92915050565b61052f816104b9565b811461053a57600080fd5b50565b60008135905061054c81610526565b92915050565b60008060408385031215610569576105686104f5565b5b600061057785828601610511565b92505060206105888582860161053d565b9150509250929050565b600082825260208201905092915050565b7f4e6f742074686520706172656e74210000000000000000000000000000000000600082015250565b60006105d9600f83610592565b91506105e4826105a3565b602082019050919050565b60006020820190508181036000830152610608816105cc565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061064982610465565b915061065483610465565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156106895761068861060f565b5b828201905092915050565b7f436f6e747261637420646f65736e2774206861766520656e6f75676820455448600082015250565b60006106ca602083610592565b91506106d582610694565b602082019050919050565b600060208201905081810360008301526106f9816106bd565b9050919050565b7f43616e6e6f74207769746864726177206d6f7265207468616e20436f6e74726160008201527f637420616d6f756e740000000000000000000000000000000000000000000000602082015250565b600061075c602983610592565b915061076782610700565b604082019050919050565b6000602082019050818103600083015261078b8161074f565b9050919050565b7f43616e6e6f74207769746864726177206d6f7265207468616e2031782f77656560008201527f6b00000000000000000000000000000000000000000000000000000000000000602082015250565b60006107ee602183610592565b91506107f982610792565b604082019050919050565b6000602082019050818103600083015261081d816107e1565b9050919050565b600081905092915050565b50565b600061083f600083610824565b915061084a8261082f565b600082019050919050565b600061086082610832565b9150819050919050565b7f4574686572207472616e73666572206661696c65640000000000000000000000600082015250565b60006108a0601583610592565b91506108ab8261086a565b602082019050919050565b600060208201905081810360008301526108cf81610893565b9050919050565b60006108e182610465565b91506108ec83610465565b9250828210156108ff576108fe61060f565b5b82820390509291505056fea2646970667358221220f70a2075e7ef02b60bb9e923413e96a4fb2d7fccebdab9a7932353b5fd6463db64736f6c634300080a0033';
const web3 = new Web3(window.ethereum);
const Allowance = new web3.eth.Contract(ABI);

const getPairAddresses = document.getElementById('get-parent-child-addresses');
getPairAddresses.onclick = async () => {
    const mmAccount = document.getElementById('mm-account');
	const parent = document.getElementById('input-pair-parent').value;
	const child = document.getElementById('input-pair-child').value;

	const pairAddresses = document.getElementById('pair-addresses');
	pairAddresses.innerHTML = 'Parent: ' + parent + ' Child: ' + child;

	Allowance.setProvider(window.ethereum);
	Allowance.deploy({
		data: BYTECODE,
		arguments: [parent, child]
	})
	.send({
		from: mmAccount,
		gas: 1500000,
		gasPrice: '30000000000000'
	}, function(error, transactionHash){})
	.on('error', function(error){})
	.on('transactionHash', function(transactionHash){})
	.on('receipt', function(receipt){
	   console.log(receipt.contractAddress) // contains the new contract address
	})
	.on('confirmation', function(confirmationNumber, receipt){})
	.then(function(newContractInstance){
		console.log(newContractInstance.options.address) // instance with the new contract address
	});
}

window.addEventListener('load', function() {
    if (typeof window.ethereum !== 'undefined') {
      console.log('window.ethereum is enabled');
      if (window.ethereum.isMetaMask === true) {
        console.log('MetaMask is active');
        let mmDetected = document.getElementById('mm-detected');
        mmDetected.innerHTML += 'MetaMask Is Available!';
      } else {
        console.log('MetaMask is not available');
        let mmDetected = document.getElementById('mm-detected');
        mmDetected.innerHTML += 'MetaMask Not Available!';
      }
    } else {
      console.log('window.ethereum is not found');
      let mmDetected = document.getElementById('mm-detected');
      mmDetected.innerHTML += '<p>MetaMask Not Available!<p>';
    }
})

const mmEnable = document.getElementById('mm-connect');
mmEnable.onclick = async () => {
    await ethereum.request({ method: 'eth_requestAccounts'})
    const mmAccount = document.getElementById('mm-account');
    mmAccount.innerHTML = 'My Account: ' + ethereum.selectedAddress;
}

const getmmBalance = document.getElementById('get-balance');
getmmBalance.onclick = async () => {
    web3.eth.getBalance(ethereum.selectedAddress, function(err, result) {
        if (err) {
          console.log(err);
        } else {
            value = web3.utils.fromWei(result, "ether") + " ETH";
            console.log(web3.utils.fromWei(result, "ether") + " ETH");
        }
    })
    var mmBalance = document.getElementById('mm-balance');
    mmBalance.innerHTML = 'MetaMask Balance: ' + value;
}

const getContractBalance = document.getElementById('get-contract-balance');
getContractBalance.onclick = async () => {
	// this is erroring
	const contractBalance = await web3.eth.getBalance(address(this));
	const contractBalance0 = document.getElementById('contract-balance-0');
    contractBalance0.innerHTML = 'Contract Balance: ' + contractBalance;
}

const submitAllowance = document.getElementById('send-allowance');
submitAllowance.onclick = async () => {
	const mmBalance = web3.eth.getBalance(ethereum.selectedAddress, function(err, result) {
        if (err) {
          console.log(err);
        } else {
            value = web3.utils.fromWei(result, "ether") + " ETH";
            console.log(web3.utils.fromWei(result, "ether") + " ETH");
        }
    })
	const mmBalance0 = document.getElementById('mm-balance');
	mmBalance0.innerHTML = 'MetaMask Balance: ' + mmBalance;
	const contractBalance = await web3.eth.getBalance(address(this));
	const contractBalance1 = document.getElementById('contract-balance-1');
	contractBalance1.innerHTML = 'Contract Balance: ' + contractBalance;

	Allowance.methods.depositEther();
	
	const mmBalancePost = web3.eth.getBalance(ethereum.selectedAddress, function(err, result) {
        if (err) {
          console.log(err);
        } else {
            value = web3.utils.fromWei(result, "ether") + " ETH";
            console.log(web3.utils.fromWei(result, "ether") + " ETH");
        }
    })
	const mmBalancePost0 = document.getElementById('mm-balance-post');
  	mmBalancePost0.innerHTML = 'New MetaMask Balance: ' + mmBalancePost;
  	const contractBalancePost = await web3.eth.getBalance(address(this));
	const contractBalancePost0 = document.getElementById('contract-balance-post-2');
  	contractBalancePost0.innerHTML = 'New Contract Balance: ' + contractBalancePost;
}

const withdrawEther = document.getElementById('withdraw-allowance');
withdrawEther.onclick = async () => {
	const withdrawAmount = document.getElementById('requested-amount').value;
    const targetAddress = document.getElementById('target-address');
	const withdrawInfo = document.getElementById('withdraw-info');
    withdrawInfo.innerHTML = 'Withdrawing: ' + withdrawAmount + ' into ' + targetAddress;

	Allowance.methods.withdrawEther(withdrawAmount, targetAddress);
  
	const contractBalancePost = await web3.eth.getBalance(address(this));
  	const contractBalancePost = document.getElementById('contract-amount-post');
	contractBalancePost.innerHTML = 'Contract Balance: ' + contractBalancePost;

	const childBalancePost = document.getElementById('child-amount-post');
  	childBalancePost.innerHTML = 'Child Balance: ' + value;
}
