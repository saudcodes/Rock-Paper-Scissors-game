const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
let playerChoice = document.querySelector("#playerchoice")
let playerPoints = document.querySelector("#playerpoints")

 
let playerSelection = "undefined";


rock.addEventListener("click",function () {
   const computerSelection = computerPlay();
    playerSelection = rock.textContent;
    playerChoice.textContent = playerSelection;
    console.log(round(playerSelection, computerSelection))
    console.log(playerScore)
  })
    
paper.addEventListener("click", function () {
     const computerSelection = computerPlay();
    playerSelection = paper.textContent;
    playerChoice.textContent = playerSelection;
    console.log(round(playerSelection, computerSelection))
    console.log(playerScore)
  })
    
scissors.addEventListener("click", function () {
     const computerSelection = computerPlay();
    playerSelection = scissors.textContent;
    playerChoice.textContent = playerSelection;
    console.log(round(playerSelection, computerSelection))
    console.log(playerScore)
  })


 let playerScore = 0;
let computerScore = 0;
playerPoints.textContent = playerScore;


    function computerPlay() {
      let randomNum = Math.floor(Math.random() * 3) + 1;
        if (randomNum === 1) {
            return "rock"
        }
        else if (randomNum === 2) {
            return "paper"
        }
        else if (randomNum === 3) {
            return "scissors"
        }
   }

const computerSelection = computerPlay();

    function round(playerSelection, computerSelection) {
        
        if (playerSelection === computerSelection) {
            return "Its a Tie, Try agian!!"
        }
        else if (playerSelection === "rock") {
            if (computerSelection === "scissors") {
                playerScore++
              
                return "you won Rock crushed Scissor"
            }
            else if (computerSelection === "paper") {
                computerScore++
                return "oops Paper won"
            }
        }
        else if (playerSelection === "paper") {
            if (computerSelection === "scissors") {
                computerScore++
                return "you lose Scissor won"
            }
            else if (computerSelection === "rock") {
                playerScore++
                return "you won Rock Lost" 
            }
        }
        else if (playerSelection === "scissors") {
            if (computerSelection === "rock") {
                computerScore++
                return "Computer chose Rock you lose"
            }
            else if (computerSelection === "paper") {
                playerScore++
                return "Computer chose Paper you win"
            }
        }

    }
    

console.log(round(playerSelection, computerSelection));
console.log(playerScore);




  

  