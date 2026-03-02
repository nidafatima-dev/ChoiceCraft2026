let stone= document.querySelector("#stone");
let paper= document.querySelector("#paper");
let scissors= document.querySelector('#scissors');
let display= document.querySelector("#display");
let comDisplay= document.querySelector("#comDisplay");
let resetBtn = document.querySelector("#reset");
let userScoreDisplay = document.querySelector("#user-score-val");
let compScoreDisplay = document.querySelector("#comp-score-val");

let userChoice = null;
let compScore= 0;
let userScore= 0;

stone.addEventListener("click", ()=>{
    userChoice= 0;
    let compChoice= Math.floor(Math.random() * 3);
    
    //stone 0, paper=1, scissors=3
    if(compChoice=== 0)
    {
        comDisplay.textContent= "stone 🪨";
        setTimeout(() =>{
        display.textContent= "draw";
        }, 1000);
        compChoice=0;
    userChoice=0;
    }
    else if(compChoice=== 1)
    {
        comDisplay.textContent= "paper 📄";
        setTimeout(() =>{
        display.textContent= "lose";
        }, 1000);
        userScore--;
        compScore++;
    }
    else
    {
        comDisplay.textContent= "scissors ✂️";
        setTimeout(() =>{
        display.textContent= "win";
        }, 1000);
        userScore++;
        compScore--;
    }

    userScoreDisplay.textContent = userScore;
compScoreDisplay.textContent = compScore;
});


paper.addEventListener("click", ()=>{
    userChoice= 1;
    let compChoice= Math.floor(Math.random() * 3);
    
    //stone 0, paper=1, scissors=3
    if(compChoice=== 0)
    {
        comDisplay.textContent= "stone 🪨";
        setTimeout(() =>{
        display.textContent= "win";
        }, 1000);
        userScore++;
        compScore--;
    }
    else if(compChoice=== 1)
    {
        comDisplay.textContent= "paper 📄";
        setTimeout(() =>{
        display.textContent= "draw";
        }, 1000);
        compChoice=0;
        userChoice=0;
    }
    else
    {
        comDisplay.textContent= "scissors ✂️";
        setTimeout(() =>{
        display.textContent= "lose";
        }, 1000);
        userScore--;
        compScore++;
    }
    userScoreDisplay.textContent = userScore;
compScoreDisplay.textContent = compScore;
});

scissors.addEventListener("click", ()=>{
    userChoice= 2;
    let compChoice= Math.floor(Math.random() * 3);
    
    //stone 0, paper=1, scissors=3
    if(compChoice=== 0)
    {
        comDisplay.textContent= "stone 🪨";
        setTimeout(() =>{
        display.textContent= "lose";
        }, 1000);
        userScore--;
        compScore++;
    }
    else if(compChoice=== 1)
    {
        comDisplay.textContent= "paper 📄";
        setTimeout(() =>{
        display.textContent= "win";
        }, 1000);
        userScore++;
        compScore--;
    }
    else
    {
        comDisplay.textContent= "scissors ✂️";
       setTimeout(() =>{
        display.textContent= "draw";
        }, 1000);
        compChoice=0;
        userChoice=0;
    }
    userScoreDisplay.textContent = userScore;
compScoreDisplay.textContent = compScore;
});

resetBtn.addEventListener("click", () => {
    display.textContent = "0";
    comDisplay.textContent = "?";
    // Reset the variables
    userScore = 0;
    compScore = 0;
    // Update the screen
    userScoreDisplay.textContent = "0";
    compScoreDisplay.textContent = "0";
});