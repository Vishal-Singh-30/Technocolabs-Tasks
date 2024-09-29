const getUserChoice = (userInput)=>{
    userInput = userInput.toLowerCase();
    if(userInput == "rock" | userInput =="paper" | userInput == "scissors" | userInput == "bomb"){
        return(userInput);
    }else{
        return("Wrong user input ! ");
    }

}


const getComputerChoice = ()=>{
    let randomNumber = Math.floor(Math.random()*3);
    if(randomNumber == 0){
        return("rock");
    }else if(randomNumber == 1){
        return("paper");
    }else if(randomNumber == 2){
        return("scissors");
    }

}


function determineWinner(userChoice, computerChoice){
    if(userChoice == "bomb"){
        return("USER WON USING CHEAT!!");
    }

    if(userChoice == computerChoice){
        return("The game was a tie!");
    }

    if(userChoice == "rock"){
        if(computerChoice == "paper"){
            return("Computer WON!");
        }else{
            return("User WON!");
        }

    }

    if(userChoice == "paper"){
        if(computerChoice == "scissors"){
            return("Computer WON!");
        }else if(computerChoice == "rock"){
            return("User WON!");
        }

    }

    if(userChoice == "scissors"){
        if(computerChoice == "rock"){
            return("Computer WON!");
        }else if(computerChoice == "paper"){
            return("User WON!");
        }

    }
    

}

function playGame(){
    let userChoice = getUserChoice("rock");
    let computerChoice = getComputerChoice();

    console.log(userChoice);
    console.log(computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
    
}

playGame();
