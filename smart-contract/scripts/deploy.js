const { ethers } = require('hardhat');

const main = async () => {
  const dogeFactory = await ethers.getContracyFactory('Dogecoin');
  const dogeContract = await dogeFactory.deploy();
  console.log('Dogecoin deployed to:', dogeContract.address);
};
