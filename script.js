const rock = document.querySelector(".rock-btn");
const paper = document.querySelector(".paper-btn");
const scissors = document.querySelector(".scissors-btn");
const container = document.querySelector(".btn-container")

const newDiv = document.createElement("div");

let round = () => {
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
            
            if (ComputerChoice == "Rock" & humanChoice == "Paper") {
                return console.log("human win");
            }
            else if (ComputerChoice == "Paper" & humanChoice == "Scissors") {
                return console.log("human win");
            } 
            else if (ComputerChoice == "Scissors" & humanChoice == "Rock") {
                return console.log("human win");
                
            }
            else if (ComputerChoice == "Rock" & humanChoice == "Scissors") {
                return console.log("Computer win");
            }
            else if (ComputerChoice == "Paper" & humanChoice == "Rock") {
                return console.log("Computer win");
            }
            else if (ComputerChoice == "Scissors" & humanChoice == "Paper") {
                return console.log("Computer win");
            }else {
                return console.log("Draw");
            }
            });
        };
round();
    
        
    

  