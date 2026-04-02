const rock = document.querySelector(".rock-btn");
const paper = document.querySelector(".paper-btn");
const scissors = document.querySelector(".scissors-btn");
const container = document.querySelector(".btn-container")

const newDiv = document.createElement("div");

rock.addEventListener("click", () => {
    newDiv.classList.add("selection");
    newDiv.textContent = "Rock";
    container.appendChild(newDiv);
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

