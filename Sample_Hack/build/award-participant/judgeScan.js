let judge_hash_code = -1;
let team_hash_code = -1;

let bIsJudgeLogedIn = false;
let bIsJudgeModeEnabled = false;
let bIsTeamQRScanned = false;

let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
var master_add="0xff3a1fa2f9a5bc23dabb015605c90c090a17915c"
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
				"name": "_add",
				"type": "address"
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

var account,accounts;
window.onload = function () {
if (typeof web3 === 'undefined') {
document.getElementById('metamask').innerHTML = 'You need <a href="https://metamask.io/">MetaMask</a> browser plugin to run this example'
}
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

	console.log("hi")
})
}
scanner.addListener('scan', function (content)
{
    //alert("Value:"+content);
    if(bIsTeamQRScanned){
        EnableScoreTeamMode();
    }

    if(!bIsJudgeLogedIn)
    {
        let qrCode = content.toString();
        let code_array = qrCode.split("ethereum:");

        let ether_code = code_array[code_array.length - 1];
        ether_code = ether_code.split("@")[0];

        judge_hash_code = ether_code;
        bIsJudgeLogedIn = true;
        console.log("Judge Hash code : " +  judge_hash_code);
        EnterJudgingMode();
    }
    else if(bIsJudgeModeEnabled && !bIsTeamQRScanned)
    {
        let qrCode = content.toString();
        let code_array = qrCode.split("ethereum:");

        let ether_code = code_array[code_array.length - 1];
        ether_code = ether_code.split("@")[0];

        if(ether_code == judge_hash_code){
            return;
        }

        team_hash_code = ether_code;
        bIsTeamQRScanned = true;
        console.log("Team hash Code : " + team_hash_code);
    }

});

Instascan.Camera.getCameras().then(function (cameras)
{
    if (cameras.length > 0)
    {
        const BACK_CAMERA = 0;
        scanner.start(cameras[BACK_CAMERA]);
    } else
    {
        console.error('No cameras found.');
    }
})
.catch(function (e)
{
    console.error(e);
});

function EnableScoreTeamMode()
{
    CameraStatus(false);
    ScoreBoardState(true);
}

function EnterJudgingMode()
{
    let judgeHeaderBlock = document.getElementById("judge-header-title");
    judgeHeaderBlock.innerHTML = "<h2>Please Scan the Team QR Code for scoring</h2>";

    let buttonElement = document.getElementById("logout-button");
    buttonElement.style.display = "block";

    bIsJudgeModeEnabled = true;
}

function OnLogOutPressed()
{
    bIsJudgeLogedIn = false;
    bIsJudgeModeEnabled = false;

    judge_hash_code = -1;
    team_hash_code = -1;

    let judgeHeaderBlock = document.getElementById("judge-header-title");
    judgeHeaderBlock.innerHTML = "<h2>Please Scan the Hackathon QR Code</h2>";

    let buttonElement = document.getElementById("logout-button");
    buttonElement.style.display = "none";

    CameraStatus(true);
    ScoreBoardState(false);
}

function OnScoreButtonClicked(aScoreValue)
{

    bIsTeamQRScanned = false;

    try {
    //instantiate and connect to contract address via Abi

    var myAbi = web3.eth.contract(abi);

    var myfunction = myAbi.at(master_add);

    //call the set function of our SimpleStorage contract

    myfunction.transfer(''+team_hash_code ,aScoreValue,{from:account}, function (error, result) {

    if (!error) {

    console.log(result);

    } else {

    console.log(error);

    }

    })

    } catch (err) {

    document.getElementById("xvalue").innerHTML = err;

    }
    CameraStatus(true);
    ScoreBoardState(false);
}

function CameraStatus(status)
{
    let displayState = "none";
    if(status){
        displayState = "block";
    }

    let videoHeaderFile = document.getElementById("video-preview");
    videoHeaderFile.style.display = displayState;
}

function ScoreBoardState(status)
{
    let displayState = "none";
    if(status){
        displayState = "block";
    }

    let hashIdElement = document.getElementById("team-hash-id");
    hashIdElement.innerHTML = "<h2> Team hash ID : " + team_hash_code + "</h2>";
    hashIdElement.style.display = displayState;

    let scoringButtonsElement = document.getElementById("scoring-buttons-id");
    scoringButtonsElement.style.display = displayState;
}
