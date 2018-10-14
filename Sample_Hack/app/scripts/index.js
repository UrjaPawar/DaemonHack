// Import the page's CSS. Webpack will know what to do with it.
import '../styles/app.css'

// Import libraries we need.
import { default as Web3 } from 'web3'
import { default as contract } from 'truffle-contract'

// Import our contract artifacts and turn them into usable abstractions.
import SampleHackArtifact from '../../build/contracts/SampleHack.json'

// MetaCoin is our usable abstraction, which we'll use through the code below.
const hack = contract(SampleHackArtifact)

var addr="0x464e13ad4fae7b99cb773818ccf70fe2c251cb52"
var abi=[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "add",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "name",
				"type": "string"
			}
		],
		"name": "HackathonsRegistered",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_score",
				"type": "uint8"
			}
		],
		"name": "endHack",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "getAdd",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "add",
				"type": "address"
			}
		],
		"name": "getHackName",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "bytes32"
			},
			{
				"name": "_score",
				"type": "uint256"
			}
		],
		"name": "getTokens",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_edition",
				"type": "uint8"
			},
			{
				"name": "_contractAdd",
				"type": "address"
			}
		],
		"name": "register",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_owner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_spender",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			},
			{
				"name": "_data",
				"type": "bytes"
			},
			{
				"name": "_custom_fallback",
				"type": "string"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "ok",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			},
			{
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "creator",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "isActive",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "MAX_UINT256",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			}
		],
		"name": "ownership",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]


const master = contract({abi: abi})
//master.setProvider(this.web3.currentProvider);

let accounts
let account
var deployedContractadd;

const App = {
  start: function () {
   const self = this

    // Bootstrap the MetaCoin abstraction for Use.
    hack.setProvider(web3.currentProvider)
    hack.defaults({from: account})
    master.setProvider(web3.currentProvider)
    //master.setProvider(web3.currentProvider)



    // Get the initial account balance so it can be displayed.
    web3.eth.getAccounts(function (err, accs) {
      if (err != null) {
        alert('There was an error fetching your accounts.')
        return
      }

      if (accs.length === 0) {
        alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.")
        return
      }

      accounts = accs
      account = accounts[0]

      self.hackActive()
      console.log("hi")
    })
  },
hackActive: function(){
  console.log("HEY")
  var inst;
  master.at(addr).then(function (instance) {
    inst=instance;
    return instance.isActive.call({from:account})
  }).then(function (value){
    console.log(value)
    if(value==true){
      var x = document.getElementById("new-hide")
      if (x.style.display === "none") {
          x.style.display = "block"
      } else {
          x.style.display = "none"
      }
      var y = document.getElementById("showlater")
    y.style.display = "block"
    }
  }).then(function(){
    inst.getAdd.call({from:account}).then(function(result){
      console.log(result)
      var d = document.getElementById('qr')
      var x = '<img src=\'https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl='+result+'&choe=UTF-8\'>'
      d.innerHTML = x
    })
  }).catch(function (e) {
    console.log(e)
  })
},
  getScore: function (message) {
    console.log("hey")
    var add = document.getElementById('add').value
    console.log(add)
    let _instance
    hack.deployed().then(function (instance) {
      _instance = instance
      return _instance.getScore.call(add)
    }).then(function (value) {
      console.log(value.toNumber())
      const balanceElement = document.getElementById('balance')
      balanceElement.innerHTML = value.valueOf()
    }).catch(function (e) {
      console.log(e)
    })
  },

createDefault: function(){
  var hname =  document.getElementById('hname').value
  var version =  document.getElementById('version').value
  var add_
  hack.new({from: account}).then(function (instance)
  {console.log("hey")
    return instance}).then(function(inst)
    {
      inst.setHackName(hname,{from: account}).then(function()
      {
        inst.setEdition(version,{from: account}).then(function()
        {
            var x = document.getElementById("new-hide")
            if (x.style.display === "none") {
                x.style.display = "block"
            } else {
                x.style.display = "none"
            }

            var y = document.getElementById("showlater")
          y.style.display = "block"
          add_ = inst.address
          var d = document.getElementById('qr')
          var x = '<img src=\'https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl='+add_+'&choe=UTF-8\'>'
          d.innerHTML = x
        }).then(function(){
          master.at(addr).then(function(instance_){
            instance_.register(hname,version,add_,{from:account})
          }).then(function(result){
            if(result==true){
              var x = document.getElementById("new-hide")
              if (x.style.display === "none") {
                  x.style.display = "block"
              } else {
                  x.style.display = "none"
              }
            }
          })
        })
    })
})
},

  setScore: function () {
    const self = this

    const amount = parseInt(document.getElementById('amt').value)
    const receiver = document.getElementById('amt').value

    let _instance
    hack.deployed().then(function (instance) {
      _instance = instance
      return _instance.setScores(amount, { from: account })
    }).then(function () {

    }).catch(function (e) {
      console.log(e)
    })
  }
}

window.App = App

window.addEventListener('load', function () {
  if (typeof web3 !== 'undefined') {
    console.warn(
      'Using web3 detected from external source.')
    window.web3 = new Web3(web3.currentProvider)
  } else {
    console.warn(
      'No web3 detected. Falling back to http://127.0.0.1:9545.'
    )
    window.web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'))

  }

  App.start()
})
