pragma solidity ^0.4.24;

contract SampleHack{

    address judge=0xdd870fa1b7c4700f2bd7f44238821c26f7392148;
    address organiser=msg.sender;
    string public hackathonName;
    uint public edition;
    uint public totalParticipants;

    mapping (address => uint) particpantScores;
    address[] finalParticipants;
    uint public finalIndex;

    address[] participants;
    uint public index;

    mapping (address=>bool) registered;
    mapping(address=>bool) isIn;

    function setHackName(string _name) public{
        hackathonName=_name;
    }

    function setEdition(uint _edition) public {
        edition=_edition;
    }

    function setParticipants(uint _number) public {
        totalParticipants=_number;
    }
    function tokenRequest() public returns(uint tokentoRequest){
       uint temp;
       for(uint i=0; i<finalIndex;i++){
           temp+=(particpantScores[finalParticipants[i]]);
       }
       temp=temp/finalIndex;
       return temp;
    }

    function setScores(address add,uint _score) public{
        particpantScores[add]=_score;
    }

    // only organiser
    function getRegistered () public view returns (bool){
       return registered[msg.sender];
    }
    function getState () public view returns (bool){
       return isIn[msg.sender];
    }

    // to do // only judges
    function allocateTokens (address _add, uint _tokens) public returns (bool){
        require(msg.sender==judge);
        particpantScores[_add]+=_tokens;
        return true;
    }

    function getScore(address _add) public view returns (uint _score){
        return particpantScores[_add];
    }

    function newParticipant() public returns (bool){
        participants.push(msg.sender);
        index+=1;
        registered[msg.sender]=true;
        return true;
    }

    // TO DO
    function endRegistration() public returns(bool){
        require(msg.sender==organiser);
        for(uint i=0;i<totalParticipants;i++){
          finalParticipants.push(participants[i]);
          isIn[participants[i]]=true;
        }
        index=0;
        return true;

    }

    // only judges
    /*
    function distributePrize() public returns(bool){
        require(msg.sender==organiser);
        address first;
        address second;
        address third;
        if(finalIndex>0){
        first=finalParticipants[0];}
        if(finalIndex>1){
        if(finalParticipants[])
        second=finalParticipants[1];}
        if(finalIndex>2){
        third=finalParticipants[2];}
        if(finalIndex>3){
       for(uint i=3; i<finalIndex;i++){
           if(particpantScores[third]<particpantScores[finalParticipants[i]]){
               if(particpantScores[second]<particpantScores[finalParticipants[i]]){
                   if(particpantScores[first]<particpantScores[finalParticipants[i]]){
                       first=finalParticipants[i];
                   }
                   else{
                       second=finalParticipants[i];
                   }
               }
               else{
                   third=finalParticipants[i];
               }
           }
       } }
       particpantScores[first]+=50;
       particpantScores[second]+=30;
       particpantScores[third]+=15;
       return true;
    }*/

}
