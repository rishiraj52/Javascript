//Declaring all the needed variables
let computerresult=0;
let playerresult=0;
let computerselection,playerselection;

const start = document.querySelector('.readybutton');
let finalresult = document.querySelector('.result');
const gamesection = document.querySelector('.option');
let playerpoints = document.querySelector("#playerpoint");
let comppoints = document.querySelector("#comppoint");
let final = document.createElement('p');
let playagain = document.createElement('button');
let current = document.createElement("p");
current.setAttribute('id','current')

//When start button is clicked the full game section is visible
start.addEventListener('click',startfunction);
function startfunction(){
    document.getElementById("fullgame").style.display = "block";
}

//Listening to User Options selection
const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    game(button.id,computerPlay());
    if(computerresult===5 || playerresult===5)
        gameresult(computerresult,playerresult);
  });
});

//Point calculation and display
function game(playerselection,computerselection){
    const result=playround(computerselection, playerselection);
    if(result === "You Lose"){
        current.textContent= "Uhoh.. You lost this round :( "+ computerselection+ " beats " + playerselection;
        computerresult+=1;
    }
    else if (result === "You Win"){
        current.textContent= "Wohooo!! You won this round :) "+ playerselection+ " beats " + computerselection;
        playerresult+=1;
    }
    gamesection.append(current);
    playerpoints.textContent= "Your points: "+ playerresult;
    comppoints.textContent= "Computer points: "+ computerresult;
}


//Returns a random result from the array
function computerPlay(){
    const result=["Rock", "Paper", "Scissors","Lizard","Spock"];
    return result[Math.floor(Math.random()*result.length)];
}


//Returns the outcome based on user and computer selection
function playround(computerselection,playerselection){
    if(computerselection==="Rock" && playerselection==="Scissors" || 
        computerselection==="Paper" && playerselection==="Rock" ||
        computerselection==="Scissors" && playerselection==="Paper"||
        computerselection==="Rock" && playerselection==="Lizard" ||
        computerselection==="Lizard" && playerselection==="Spock" ||
        computerselection==="Spock" && playerselection==="Scissors" ||
        computerselection==="Scissors" && playerselection==="Lizard" ||
        computerselection==="Lizard" && playerselection==="Paper" ||
        computerselection==="Paper" && playerselection==="Spock" ||
        computerselection==="Spock" && playerselection==="Rock" ||
        computerselection==="Rock" && playerselection==="Scissors"
    )
        return "You Lose"
    else if(
        playerselection==="Rock" && computerselection==="Scissors" || 
        playerselection==="Paper" && computerselection==="Rock" ||
        playerselection==="Scissors" && computerselection==="Paper"||
        playerselection==="Rock" && computerselection==="Lizard" ||
        playerselection==="Lizard" && computerselection==="Spock" ||
        playerselection==="Spock" && computerselection==="Scissors" ||
        playerselection==="Scissors" && computerselection==="Lizard" ||
        playerselection==="Lizard" && computerselection==="Paper" ||
        playerselection==="Paper" && computerselection==="Spock" ||
        playerselection==="Spock" && computerselection==="Rock" ||
        playerselection==="Rock" && computerselection==="Scissors"
    )
        return "You Win"
    else
        current.textContent="Its a Tie!! Try again";
        
}

//Displays Final Game result
function gameresult(computer,player){
    current.remove();
    if(computer>player){
        final.textContent="Try again!! Computer won and You lost";    
        playagain.textContent="Try Again"  
    }
    else{
        final.textContent="YAYYYY!! Computer Lost and You Won :)";
        playagain.textContent="Play Again"  
    }
    finalresult.append(final);
    finalresult.append(playagain);
    playagain.addEventListener('click',restartgame);
}

//Resarts the Game
function restartgame(){
    //alert("restart game");
    comppoints.textContent=" ";
    playerpoints.textContent=" ";
    playerresult=0;
    computerresult=0;
    final.remove();
    playagain.remove();
    document.getElementById("fullgame").style.display = "none";
}





