const ssABI = [
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
		"name": "depositEther",
		"outputs": [],
		"stateMutability": "payable",
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
]

const ssAddress;

var web3 = new Web3(window.ethereum);
const Allowance = new web3.eth.Contract(ssABI, ssAddress);
Allowance.setProvider(window.ethereum);

window.addEventListener('load', function() {
    if (typeof window.ethereum !== 'undefined') {
      console.log('window.ethereum is enabled');
      if (window.ethereum.isMetaMask === true) {
        console.log('MetaMask is active');
        let mmDetected = document.getElementById('mm-detected');
        mmDetected.innerHTML += 'MetaMask Is Available!';
        var web3 = new Web3(window.ethereum);
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
    var mmParentAccount = document.getElementById('mm-parent-account');
    mmParentAccount.innerHTML = 'Parent Account: ' + ethereum.selectedAddress;
  }

const mmSubmit = document.getElementById('submit-address-button');
mmSubmit.onclick = async () => {
    var mmInput = document.getElementById('input-address-box').value;
    var mmChildAccount = document.getElementById('mm-child-account');
    mmChildAccount.innerHTML = 'Child Account: ' + mmInput;
}

const getParentBalance = document.getElementById('get-parent-balance');
getParentBalance.onclick = async () => {
    var web3 = new Web3(window.ethereum);
    web3.eth.getBalance(ethereum.selectedAddress, function(err, result) {
        if (err) {
          console.log(err);
        } else {
            value = web3.utils.fromWei(result, "ether") + " ETH";
            console.log(web3.utils.fromWei(result, "ether") + " ETH");
        }
      })
    var parentBalance = document.getElementById('mm-parent-balance');
    parentBalance.innerHTML = 'Parent Balance: ' + value;
}

const getChildBalance = document.getElementById('get-child-balance');
getChildBalance.onclick = async () => {
    var web3 = new Web3(window.ethereum);
    childAddress = document.getElementById('input-address-box').value;
    web3.eth.getBalance(childAddress, function(err, result) {
        if (err) {
          console.log(err)
        } else {
            value = web3.utils.fromWei(result, "ether") + " ETH";
            console.log(web3.utils.fromWei(result, "ether") + " ETH");
        }
    })
    var childBalance = document.getElementById('mm-child-balance');
    childBalance.innerHTML = 'Child Balance: ' + value;
}

const submitAllowance = document.getElementById('send-allowance');
submitAllowance.onclick = async () => {
  // How is the amount of ETH specified?
  Allowance.depositEther();
  contractValue = Allowance.getBalance();
  var web3 = new Web3(window.ethereum);
  web3.eth.getBalance(ethereum.selectedAddress, function(err, result) {
      if (err) {
        console.log(err);
      } else {
          value = web3.utils.fromWei(result, "ether") + " ETH";
          console.log(web3.utils.fromWei(result, "ether") + " ETH");
      }
    })
  var parentBalance = document.getElementById('mm-parent-balance');
  parentBalance.innerHTML = 'Parent Balance: ' + value;
  var parentBalancePost = document.getElementById('mm-parent-balance-post');
  parentBalancePost.innerHTML = 'Parent Balance: ' + value;
  var contractBalance = document.getElementById('contract-amount');
  contractBalance.innerHTML = 'Contract Balance: ' + contractValue;
}

const withdrawEther = document.getElementById('withdraw-allowance');
withdrawEther.onclick = async () => {
    var inputAmt = document.getElementById('input-allowance-box').value;
    var withdrawAmount = document.getElementById('withdraw-amount');
    withdrawAmount.innerHTML = 'Wtihdrawing: ' + inputAmt;

  var web3 = new Web3(window.ethereum);
  childAddress = document.getElementById('mm-child-account');

  var inputAddress = document.getElementById('child-address').value;
  var targetAddress = document.getElementById('withdraw-address');
  targetAddress.innerHTML = 'Withdrawing to: ' + inputAddress;

  // How to import contract into JS?
  Allowance.withdrawEther(withdrawAmount, targetAddress);
  
  contractValue = Allowance.getBalance();
  var contractBalancePost = document.getElementById('contract-amount-post');
  contractBalancePost.innerHTML = 'Contract Balance: ' + contractValue;

  web3.eth.getBalance(childAddress, function(err, result) {
      if (err) {
        console.log(err)
      } else {
          value = web3.utils.fromWei(result, "ether") + " ETH";
          console.log(web3.utils.fromWei(result, "ether") + " ETH");
      }
  })
  var childBalancePost = document.getElementById('child-amount-post');
  childBalancePost.innerHTML = 'Child Balance: ' + value;
}
