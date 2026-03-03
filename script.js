let humanScore = 0;
let computerScore = 0;


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
}
// console.log(getComputerChoice());

let getHumanChoice = ()=>{
    let text = prompt("What's your choice? ");
    let choice = text.toLowerCase();
    // console.log(choice);
    return choice;
}
// console.log(getHumanChoice());

let playRound = (humanChoice,computerChoice)=>{
    console.log("This is human choice: " + humanChoice);
    // console.log(computerChoice);
    return [humanChoice,computerChoice];
}

const humanSelection = getHumanChoice();
console.log(humanSelection);
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
