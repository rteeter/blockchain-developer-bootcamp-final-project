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
const BYTECODE = "0x6080604052674563918244f4000060055562093a8060065534801561002357600080fd5b50604051610b8a380380610b8a83398181016040528101906100459190610139565b600160008190555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050610179565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610106826100db565b9050919050565b610116816100fb565b811461012157600080fd5b50565b6000815190506101338161010d565b92915050565b600080604083850312156101505761014f6100d6565b5b600061015e85828601610124565b925050602061016f85828601610124565b9150509250929050565b610a02806101886000396000f3fe60806040526004361061007b5760003560e01c8063722b488f1161004e578063722b488f1461012c57806398ea5fca14610157578063a4d66daf14610161578063ce56c4541461018c5761007b565b80630d66808714610080578063237b5e96146100ab578063363bda64146100d657806360f96a8f14610101575b600080fd5b34801561008c57600080fd5b506100956101b5565b6040516100a291906104d4565b60405180910390f35b3480156100b757600080fd5b506100c06101bb565b6040516100cd9190610530565b60405180910390f35b3480156100e257600080fd5b506100eb6101e1565b6040516100f891906104d4565b60405180910390f35b34801561010d57600080fd5b506101166101e7565b6040516101239190610530565b60405180910390f35b34801561013857600080fd5b5061014161020d565b60405161014e91906104d4565b60405180910390f35b61015f610213565b005b34801561016d57600080fd5b506101766102b9565b60405161018391906104d4565b60405180910390f35b34801561019857600080fd5b506101b360048036038101906101ae91906105a8565b6102bf565b005b60065481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60045481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60035481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029a90610645565b60405180910390fd5b346003546102b19190610694565b600381905550565b60055481565b60026000541415610305576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102fc90610736565b60405180910390fd5b600260008190555081471015610350576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610347906107a2565b60405180910390fd5b816005541015610395576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161038c90610834565b60405180910390fd5b6006546004546103a59190610694565b4210156103e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103de906108c6565b60405180910390fd5b60008173ffffffffffffffffffffffffffffffffffffffff168360405161040d90610917565b60006040518083038185875af1925050503d806000811461044a576040519150601f19603f3d011682016040523d82523d6000602084013e61044f565b606091505b5050905080610493576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161048a90610978565b60405180910390fd5b826003546104a19190610998565b600381905550426004819055505060016000819055505050565b6000819050919050565b6104ce816104bb565b82525050565b60006020820190506104e960008301846104c5565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061051a826104ef565b9050919050565b61052a8161050f565b82525050565b60006020820190506105456000830184610521565b92915050565b600080fd5b610559816104bb565b811461056457600080fd5b50565b60008135905061057681610550565b92915050565b6105858161050f565b811461059057600080fd5b50565b6000813590506105a28161057c565b92915050565b600080604083850312156105bf576105be61054b565b5b60006105cd85828601610567565b92505060206105de85828601610593565b9150509250929050565b600082825260208201905092915050565b7f4e6f742074686520706172656e74210000000000000000000000000000000000600082015250565b600061062f600f836105e8565b915061063a826105f9565b602082019050919050565b6000602082019050818103600083015261065e81610622565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061069f826104bb565b91506106aa836104bb565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156106df576106de610665565b5b828201905092915050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b6000610720601f836105e8565b915061072b826106ea565b602082019050919050565b6000602082019050818103600083015261074f81610713565b9050919050565b7f436f6e747261637420646f65736e2774206861766520656e6f75676820455448600082015250565b600061078c6020836105e8565b915061079782610756565b602082019050919050565b600060208201905081810360008301526107bb8161077f565b9050919050565b7f43616e6e6f74207769746864726177206d6f7265207468616e20436f6e74726160008201527f637420616d6f756e740000000000000000000000000000000000000000000000602082015250565b600061081e6029836105e8565b9150610829826107c2565b604082019050919050565b6000602082019050818103600083015261084d81610811565b9050919050565b7f43616e6e6f74207769746864726177206d6f7265207468616e2031782f77656560008201527f6b00000000000000000000000000000000000000000000000000000000000000602082015250565b60006108b06021836105e8565b91506108bb82610854565b604082019050919050565b600060208201905081810360008301526108df816108a3565b9050919050565b600081905092915050565b50565b60006109016000836108e6565b915061090c826108f1565b600082019050919050565b6000610922826108f4565b9150819050919050565b7f4574686572207472616e73666572206661696c65640000000000000000000000600082015250565b60006109626015836105e8565b915061096d8261092c565b602082019050919050565b6000602082019050818103600083015261099181610955565b9050919050565b60006109a3826104bb565b91506109ae836104bb565b9250828210156109c1576109c0610665565b5b82820390509291505056fea264697066735822122080b1aec76f0a0b4af477091f506ebf62fe697264e06b5ebf6b4d323670be6f0964736f6c634300080a0033";
let allowanceInstance;
const Allowance = new web3.eth.Contract(ABI, allowanceInstance);
const web3 = new Web3(window.ethereum);

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

const getPairAddresses = document.getElementById('submit-pair-addresses');
getPairAddresses.onclick = async () => {
    const mmAccount = ethereum.selectedAddress;
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
		from: mmAccount
	}, function(error, transactionHash){})
	.on('error', function(error){})
	.on('transactionHash', function(transactionHash){})
	.on('receipt', function(receipt){
	   console.log(receipt.contractAddress)
	})
	.on('confirmation', function(confirmationNumber, receipt){})
	.then(function(newContractInstance){
		allowanceInstance = newContractInstance;
		console.log(newContractInstance.options.address)
	});
}

const mmEnable = document.getElementById('mm-connect');
mmEnable.onclick = async () => {
    await ethereum.request({method: 'eth_requestAccounts'})
    const mmAccount = document.getElementById('mm-account');
    mmAccount.innerHTML = 'My Account: ' + ethereum.selectedAddress;
}

const getmmBalance = document.getElementById('get-mm-balance');
getmmBalance.onclick = async () => {
	let value;
    web3.eth.getBalance(ethereum.selectedAddress, function(err, result) {
        if (err) {
          console.log(err);
        } else {
            value = web3.utils.fromWei(result, "ether") + " ETH";
            console.log(web3.utils.fromWei(result, "ether") + " ETH");
			var mmBalance = document.getElementById('mm-balance');
			mmBalance.innerHTML = 'MetaMask Balance: ' + value;
        }
    })
}

const getContractBalance = document.getElementById('get-contract-balance');
getContractBalance.onclick = async () => {
	const contractBalanceAmt = await web3.eth.getBalance(allowanceInstance.options.address);
	const contractInfo = document.getElementById('contract-info');
    contractInfo.innerHTML = 'Contract Balance: ' + web3.utils.fromWei(contractBalanceAmt);
}

const submitAllowance = document.getElementById('deposit-allowance');
submitAllowance.onclick = async () => {
	const depositedAmount = document.getElementById('input-deposit-amount').value;
	const depositedInfo = document.getElementById('deposit-info');
	depositedInfo.innerHTML = 'Depositing ' + depositedAmount + ' into contract';

	await allowanceInstance.methods.depositEther().send({value: web3.utils.toWei(depositedAmount), from: ethereum.selectedAddress});
	
	const mmBalanceAmt = await web3.eth.getBalance(ethereum.selectedAddress, function(err, result) {
        if (err) {
          console.log(err);
        } else {
            value = web3.utils.fromWei(result, "ether") + " ETH";
            console.log(web3.utils.fromWei(result, "ether") + " ETH");
        }
    })
	const mmBalancePostDeposit = document.getElementById('mm-balance-post-deposit');
  	mmBalancePostDeposit.innerHTML = 'New MetaMask Balance: ' + web3.utils.fromWei(mmBalanceAmt);
	const contractBalanceAmt = await web3.eth.getBalance(allowanceInstance.options.address);
	const contractBalancePostDeposit = document.getElementById('contract-balance-post-deposit');
  	contractBalancePostDeposit.innerHTML = 'New Contract Balance: ' + web3.utils.fromWei(contractBalanceAmt);
}

const withdrawEther = document.getElementById('withdraw-allowance');
withdrawEther.onclick = async () => {
	const withdrawAmount = document.getElementById('input-request-amount').value;
    const targetAddress = document.getElementById('target-address').value;
	const withdrawInfo = document.getElementById('withdraw-info');
    withdrawInfo.innerHTML = 'Withdrawing: ' + withdrawAmount + ' into ' + targetAddress;

	await allowanceInstance.methods.withdrawEther(web3.utils.toWei(withdrawAmount), targetAddress).send({from: ethereum.selectedAddress});
  
	const contractBalanceAmt = await web3.eth.getBalance(allowanceInstance.options.address);
  	const contractBalancePostWithdraw = document.getElementById('contract-balance-post-withdraw');
	contractBalancePostWithdraw.innerHTML = 'New Contract Balance: ' + web3.utils.fromWei(contractBalanceAmt);

	const childBalancePostWithdraw = document.getElementById('child-amount-post-withdraw');
	await web3.eth.getBalance(targetAddress, function(err, result) {
        if (err) {
          console.log(err);
        } else {
            value = web3.utils.fromWei(result, "ether") + " ETH";
            console.log(web3.utils.fromWei(result, "ether") + " ETH");
			childBalancePostWithdraw.innerHTML = 'New Child Balance: ' + value;
        }
    })
}
