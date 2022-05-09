require('@nomiclabs/hardhat-waffle');
require('dotenv').config({ path: '.env' });

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: ALCHEMY_API_URL,
      accounts: [WALLET_PRIVATE_KEY],
    },
  },
};
