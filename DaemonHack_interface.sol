pragma solidity ^0.4.24;

/* Hack Event contract interface */

contract Hackathon{
    
    bytes32 public _hackathonName;
    uint public _edition;
    uint public _totalParticipants;
    uint public _allocatedTokens;
    
    mapping (address => uint) particpantScores;
    mapping(address => uint) tokenBalances;
    
    address[] participants;
    mapping(address=>bytes32) resumeLink;
    
    function addParticipant (address _add, uint _score) public returns (bool ok);
    function allocateTokens (address _add, uint _tokens) public returns (bool ok);
    function getScore(address _add) public view returns (uint _score);
    function newParticipant(address _add, bytes32 _url) public returns(bool ok);
    function endRegistration() public returns(bool ok);
    function getParticipants() public returns(bytes32[]);
    function getUrl(address _add) public returns(bytes32);
    function endHackathon() public returns (bool ok);
    
    event PartcipantAdded(address _add, uint _score);
    event TokensAllocated(address _add, uint _tokens);
}
