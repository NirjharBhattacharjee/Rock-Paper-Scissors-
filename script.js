let getComputerChoice = ()=>{
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(4);
    let number = Math.floor(Math.random() *(maxFloored -minCeiled) + minCeiled);
    return number;
}
console.log(getComputerChoice());