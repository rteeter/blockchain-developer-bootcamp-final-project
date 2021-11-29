const Allowance = artifacts.require("Allowance");
const truffleAssert = require('truffle-assertions');

const {
  SECONDS_IN_WEEK,
  TimedEvm
} = require("../utils/test");


contract("Allowance", function (accounts) {
  let evm;
  let allowance;
  const [parent, child] = accounts;
  const BN = web3.utils.BN;
  const toBN = web3.utils.toBN;

  beforeEach(async function () {
    await beforeEachSetup(undefined);
  });

  async function beforeEachSetup(provider) {
    if (provider) {
      Allowance.setProvider(provider);
    }
    allowance = await Allowance.new(parent, child);
  };

  /**
   * Setup EVM and accounts for a testcase that needs to verify a time lockout of withdrawing Ether
   */
  async function setupEvm(start = new Date()) {
    evm = new TimedEvm(start, accounts);
    const [parent, child] = accounts;
    await evm.setupAccounts();
    await evm.fundAccount(parent, toBN("1034439500000000000"));
    await evm.fundAccount(child, toBN("10134439500000000000"));
  };

  /**
   * Verify Allowance contract has been deployed.
   */
  it("should assert true", async function () {
    await Allowance.deployed();
    return assert.isTrue(true);
  });

  /**
   * Verify Allowance's `depositEther` function by sending 15 ETH to the contract.
   */
  it("should send 15 ETH to contract from parent's address", async () => {
      const allowanceInstance = await Allowance.deployed();
      const balanceParentPre = await web3.eth.getBalance(parent);
      const receipt = await allowanceInstance.depositEther({value: new BN(15).toString(), from: parent});
      const gasUsed = receipt.receipt.gasUsed;
      const tx = await web3.eth.getTransaction(receipt.tx);
      const gasPrice = new BN(tx.gasPrice);
      const gasFee = gasPrice.mul(new BN(gasUsed));
      const balanceParentPost = await web3.eth.getBalance(parent);
      assert.equal(new BN(balanceParentPre).toString(), new BN(balanceParentPost).add(new BN('15').add(new BN(gasFee))).toString(), "ETH not deposited!");
  });

  /**
   * Verify Allowance's `withdrawEther` function will fail when withdrawing more than 5 ETH.
   */
  it("should NOT withdraw more than 5 ETH from contract into child's address", async () => {
    const allowanceInstance = await Allowance.deployed();
    await truffleAssert.reverts(allowanceInstance.withdrawEther(new BN(6).toString(), child));
  });

  /**
   * Verify Allowance's `withdrawEther` function by withdrawing 3 ETH from the contract.
   */
  it("should withdraw 3 ETH from contract into child's address", async () => {
    const allowanceInstance = await Allowance.deployed();
    const balanceChildPre = await web3.eth.getBalance(child);
    await allowanceInstance.withdrawEther(new BN(3).toString(), child);
    const balanceChildPost = await web3.eth.getBalance(child);
    assert.equal(new BN(balanceChildPre).toString(), new BN(balanceChildPost).sub(new BN('3')).toString(), "ETH not withdrawn!");
  });

  /**
   * Verify Allowance's `withdrawEther` function will fail when withdrawing more than 1x/week.
   */
  it("should NOT withdraw more than 1x/week into child's address", async () => {
    const allowanceInstance = await Allowance.deployed();
    await truffleAssert.reverts(allowanceInstance.withdrawEther(new BN(3).toString(), child));
  });

  /**
   * Verify Allowance's `withdrawEther` function will pass when withdrawing after 1 week has passed from prior withdraw.
   */
  it("should be able to withdraw allowance 1x/week into child's address", async () => {
    await setupEvm();
    await beforeEachSetup(evm.provider);
    await allowance.depositEther({value: new BN(15).toString(), from: parent});
    const balanceChildPre = await evm.web3.eth.getBalance(child);
    await allowance.withdrawEther(new BN(3).toString(), child);
    const balanceChildPost = await evm.web3.eth.getBalance(child); 
    assert.equal(new BN(balanceChildPre).toString(), new BN(balanceChildPost).sub(new BN('3')).toString(), "ETH not withdrawn!");
    await evm.increaseTime(SECONDS_IN_WEEK * 1);
    await allowance.withdrawEther(new BN(3).toString(), child);
    const balanceChildPostW2 = await evm.web3.eth.getBalance(child);
    assert.equal(new BN(balanceChildPost).toString(), new BN(balanceChildPostW2).sub(new BN('3')).toString(), "ETH not withdrawn!");
  });
});
