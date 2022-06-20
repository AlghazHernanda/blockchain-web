//https://eth-rinkeby.alchemyapi.io/v2/YqYnSZq59r9U_qVrqMu_IEx-A08F17k3
//e94d4344ce5efbc72e913ef1454aaa0c05fcafebbd1ac563316a1a1cca240274

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks:{
    rinkeby:{
      url:'https://eth-rinkeby.alchemyapi.io/v2/YqYnSZq59r9U_qVrqMu_IEx-A08F17k3',
      accounts:['e94d4344ce5efbc72e913ef1454aaa0c05fcafebbd1ac563316a1a1cca240274']
    }
  }
};