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
console.log(getComputerChoice());

// let getHumanChoice = ()=>{

// }s