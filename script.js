const rock = document.querySelector(".rock-btn");
const paper = document.querySelector(".paper-btn");
const scissors = document.querySelector(".scissors-btn");
const container = document.querySelector(".btn-container")

const newDiv = document.createElement("div");

rock.addEventListener("click", () => {
    newDiv.classList.add("selection");
    newDiv.textContent = "Rock";
    container.appendChild(newDiv);
    return "Rock";
});

paper.addEventListener("click", () =>{
    newDiv.classList.add("selection");
    newDiv.textContent = "Paper";
    container.appendChild(newDiv);
});

scissors.addEventListener("click", ()=>{
    newDiv.classList.add("selection");
    newDiv.textContent = "Scissors";
    container.appendChild(newDiv);
});

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
console.log(getComputerChoice());
console.log(newDiv.textContent);