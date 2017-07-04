var Web3 = require("web3");
// 创建web3对象
var web3 = new Web3();
// 连接到以太坊节点
web3.setProvider(new Web3.providers.HttpProvider("http://localhost:8545"));

// 要生成的账户数量
var numAccounts = 10;

var password = "12345";

for (var i = 0; i < numAccounts; i++) {
    var account = web3.personal.newAccount(password);
    console.log(account);
}