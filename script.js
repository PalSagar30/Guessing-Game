let input = document.getElementById("input");

let btn = document.getElementById("btn");

let wrng =document.querySelector(".wrng");

let guesses =document.getElementById("guesses");

let answer = Math.floor(Math.random()*100)+1;

let numberGuess = 0;


btn.addEventListener("click" ,() =>{
    guessNumber();
})
function guessNumber(){
    if(input.value<1 || input.value > 100 || isNaN(input.value)){
        wrng.innerHTML = "Enter between 1 to 100";
    }
    else{
        numberGuess ++;
         guesses.innerHTML = "No. of Guess: " + numberGuess;

         if(input.value > answer){
            wrng.innerHTML = "You guessed too high";
            input.value = " ";
         }
         else if(input.value < answer){
            wrng.innerHTML = "You guessed too Low";
            input.value = " ";
         }
         else{
            wrng.innerHTML = "Wow !!!! Your guess is correct";

            setTimeout(()=>{
                resetGame();
            },5000)
         }
    }
}

function resetGame(){
    numberGuess=0;
    answer = Math.floor(Math.random()*100)+1;
    input.value="";
    guesses.innerHTML = "No. of Guess: "
}