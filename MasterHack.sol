pragma solidity ^0.4.24;

contract Owned {

  address public creator = msg.sender;

  modifier onlyOwner {
    require(msg.sender == creator);
    _;
  }

}

contract SafeMath {
    uint256 constant public MAX_UINT256 =
    0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF;

    function safeAdd(uint256 x, uint256 y) pure internal returns (uint256 z) {
        if (x > MAX_UINT256 - y) revert();
        return x + y;
    }

    function safeSub(uint256 x, uint256 y) pure internal returns (uint256 z) {
        if (x < y) revert();
        return x - y;
    }

    function safeMul(uint256 x, uint256 y) pure internal returns (uint256 z) {
        if (y == 0) return 0;
        if (x > MAX_UINT256 / y) revert();
        return x * y;
    }
}

contract HackEvent is Owned,SafeMath {

 struct Hackathon{
        address ownerAdd;
        address contractAdd;
        uint8 edition;
        bool hasOwner;
        uint8 score;
        bool isActive;
    }
    mapping (bytes32 => Hackathon) hackathonRegistry;
    mapping (bytes32 => uint) hackIndex;
    bytes32[] activeHacks;

  function register(bytes32 _name, uint8 _edition, address _contractAdd, uint8 _score) public {
        var hackEvent=hackathonRegistry[_name];
        require(hackEvent.isActive==false);
        if(!hackEvent.hasOwner){
            hackathonRegistry[_name]=Hackathon(msg.sender,_contractAdd,_edition,true,_score,true);
            activeHacks.push(_name);
            hackIndex[_name]=activeHacks.length-1;
        }
       else{
           require(hackEvent.ownerAdd==msg.sender);
           hackEvent.edition=_edition;
           hackEvent.contractAdd=_contractAdd;
           hackEvent.isActive=true;
       }
    }
    
    
    function ownership(bytes32 _name) view returns (address){
        var a=hackathonRegistry[_name];
        return a.ownerAdd;
    }
    
    
    function owner() view returns (address){
        return creator;
    }
    
    function getActiveHacks() public view returns (bytes32[]){
        return activeHacks;
    }
    
    function endHack(bytes32 _name, uint8 _score) public{
        var hackEvent=hackathonRegistry[_name];
        hackEvent.score=(hackEvent.score+_score)/2;
        hackEvent.isActive=false;
    }
    
    //Token Allocation
    
  mapping (address=>uint256) registry;
  
  string constant  _name="Hack";
  string constant  _syme="HCK";

  uint8 constant  _dec=2;
  uint256 constant  _total=10000*10**_dec;
  uint256 _left=_total;
  event Transfer(address indexed _from, address indexed _to, uint256 _value);
  event Approval(address indexed _owner, address indexed _spender, uint256 _value);

function name() view returns(string){
  return _name;
}

function symbol() view returns(string){
  return _syme;
}
function decimals() view returns(uint8){
  return _dec;
}
function totalSupply() view returns(uint256){
  return _total;
}
function balanceOf(address _addr) view returns(uint){
  return registry[_addr];

}

//to do
function getTokens(bytes32 _name,uint _score){
    //var hackEvent=hackathonRegistry[_name];
    //require(hackEvent.isActive==true);
     uint256 x=registry[msg.sender];
     registry[msg.sender]=x+_score;
    }
    

    

 function transfer(address _to, uint _value, bytes _data, string _custom_fallback) public returns (bool success) {
      
    if(isContract(_to)) {
        if (balanceOf(msg.sender) < _value) revert();
        registry[msg.sender] = safeSub(balanceOf(msg.sender), _value);
        registry[_to] = safeAdd(balanceOf(_to), _value);
        assert(_to.call.value(0)(bytes4(keccak256(_custom_fallback)), msg.sender, _value, _data));
        emit Transfer(msg.sender, _to, _value, _data);
        return true;
    }
    else {
        return transferToAddress(_to, _value, _data);
    }
}
  

  // Function that is called when a user or another contract wants to transfer funds .
  function transfer(address _to, uint _value, bytes _data) public returns (bool success) {
      
    if(isContract(_to)) {
        revert();
    }
    else {
        return transferToAddress(_to, _value, _data);
    }
}
function transfer(address _to, uint _value) public returns (bool ok){
    bytes memory empty;
    if(isContract(_to)) {
        revert();
    }
    else {
        return transferToAddress(_to, _value, empty);
    }

}
function isContract(address _addr) private view returns (bool is_contract) {
      uint length;
      assembly {
            //retrieve the size of the code on target address, this needs assembly
            length := extcodesize(_addr)
      }
      return (length>0);
}
  
  
  
  function transferToAddress(address _to, uint _value, bytes _data) private returns (bool success) {
    if (balanceOf(msg.sender) < _value) revert();
    registry[msg.sender] = safeSub(balanceOf(msg.sender), _value);
    registry[_to] = safeAdd(balanceOf(_to), _value);
    emit Transfer(msg.sender, _to, _value, _data);
    return true;
  }
  

event Transfer(address indexed from, address indexed to, uint value, bytes indexed data);

    

}
