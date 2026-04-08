const rock = document.querySelector(".rock-btn");
const paper = document.querySelector(".paper-btn");
const scissors = document.querySelector(".scissors-btn");
const container = document.querySelector(".btn-container")

const newDiv = document.createElement("div");

let playerScore = 0;
let computerScore =0;

// event listener that listens to clicks on rps button 

    let getHumanChoice = container.addEventListener('click', (event) => {
        let target = event.target;
        let humanChoice = null; 
        switch (target.id) {   
            case 'rock-btn':
                    newDiv.classList.add("selection");
                    newDiv.textContent = "Rock";
                    container.appendChild(newDiv); 
                    humanChoice = "Rock";
                    console.log(`this is human selection : ${humanChoice}`);
                    break;
            case 'paper-btn':
                    newDiv.classList.add("selection");
                    newDiv.textContent = "Paper";
                    container.appendChild(newDiv);
                    humanChoice = "Paper";
                    console.log(`this is human selection : ${humanChoice}`);
                    break;         
            case 'scissors-btn':
                    newDiv.classList.add("selection");
                    newDiv.textContent = "Scissors";
                    container.appendChild(newDiv);
                    humanChoice = "Scissors";
                    console.log(`this is human selection : ${humanChoice}`);
                    break;
            }
// function to get computer choice 

    let getComputerChoice = ()=>{
            const minCeiled = Math.ceil(1);
            const maxFloored = Math.floor(4);
            let number = Math.floor(Math.random() *(maxFloored -minCeiled) + minCeiled);
               
                let numberToMove= ()=>{
                    if(number === 1){
                        return "Rock";
                    }
                    else if (number ===2) {
                        return "Paper";
                    }
                    else{
                        return "Scissors";
                    }
                }  
                return numberToMove();
            }; 
            
    let ComputerChoice = getComputerChoice();
    console.log(`this is computer selection ${ComputerChoice}`);
            
           
// logic to get the winner and iterate the scores
    if( playerScore < 3 && computerScore < 3 ){
            if (ComputerChoice == "Rock" & humanChoice == "Paper") {
                playerScore++;
                console.log(`player score : ${playerScore}`);
                console.log(`computer score: ${computerScore}`);
                console.log("human win");
                // return playerScore++;
            }
            else if (ComputerChoice == "Paper" & humanChoice == "Scissors") {
                playerScore++;
                console.log(`player score : ${playerScore}`);
                console.log(`computer score: ${computerScore}`);
                console.log("human win");
                // return playerScore++;
            } 
            else if (ComputerChoice == "Scissors" & humanChoice == "Rock") {
                playerScore++;
                console.log(`player score : ${playerScore}`);
                console.log(`computer score: ${computerScore}`);
                console.log("human win");
                // return playerScore++;
            }
            else if (ComputerChoice == "Rock" & humanChoice == "Scissors") {
                computerScore++;
                console.log(`player score : ${playerScore}`);
                console.log(`computer score: ${computerScore}`);
                console.log("Computer win");
                // return computerScore++;
            }
            else if (ComputerChoice == "Paper" & humanChoice == "Rock") {
                computerScore++;
                console.log(`player score : ${playerScore}`);
                console.log(`computer score: ${computerScore}`);
                console.log("Computer win");
                // return computerScore++;
            }
            else if (ComputerChoice == "Scissors" & humanChoice == "Paper") {
                computerScore++;
                console.log(`player score : ${playerScore}`);
                console.log(`computer score: ${computerScore}`);
                console.log("Computer win");
                // return computerScore++;
            }else {
                console.log(`player score : ${playerScore}`);
                console.log(`computer score: ${computerScore}`);
                console.log("Draw");
            }
        } 
        else{
            console.log( console.log(`player score : ${playerScore} computer score : ${computerScore}`) );
            return 0 ;
        }
            
    });   
  ;

           
 // What about a playRound function that takes in humanChoice and ComputerChoice and everytime the function  




  