var Web3 = require("web3");
var net = require("net");
// 创建web3对象
var web3 = new Web3();
// 改成你自己的主目录
var ipcpath = "/home/zhangdaofeng/.ethereum/geth.ipc"
var socket = new net.Socket();
web3.setProvider(new Web3.providers.IpcProvider(ipcpath, socket));

// 要生成的账户数量
var numAccounts = 10;

var password = "12345";

for (var i = 0; i < numAccounts; i++) {
    web3.personal.newAccount(password, function(err, result) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
    });
}

socket.end();