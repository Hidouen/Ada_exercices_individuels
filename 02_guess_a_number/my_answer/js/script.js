
function askNumberToGuess(){
    let toGuessNumber = 51;
    while (toGuessNumber < 0 || toGuessNumber > 50 || isNaN(toGuessNumber)){
        toGuessNumber = parseInt(prompt("Player 1 : Please enter a number between 0 and 50", "0 < ? < 50"));
        if (toGuessNumber < 0 || toGuessNumber > 50){
            alert("The number is outside of the range (between 0 to 50)");
        }
        else if (isNaN(toGuessNumber)){
            alert("It's not a number");
        }
    }
    return(toGuessNumber);
}

// function askNumber(){
//     let numberP2;
//     do {
//         numberP2 = parseInt(prompt("Player 2 : Try to guess the player 1 number"));
//         if (isNaN(numberP2)){
//             alert("It's not a number");
//         }
//     } while (isNaN(numberP2))
//     return numberP2;
// }

function didIWin(givenNumber, toGuessNumber){
    if (givenNumber < toGuessNumber){
        return false;
    }
    else if (givenNumber > toGuessNumber){
        return false;
    }
    else{
        return true;
    }
}

function gamePlay(){
    const toGuessNumber = askNumberToGuess();
    let givenNumber = 0;
    let attempts = 0;
    let result = false;

    document.getElementById("GuessTheNumber").addEventListener("submit", function(event) {
        event.preventDefault(); // Pour empêcher le rechargement de la page
        givenNumber = parseInt(document.getElementById("givenNumber").value);
        result = didIWin(givenNumber, toGuessNumber);
        if (result === false){
            attempts++;
            document.getElementById("attempts").innerHTML = "False. Attempts = " + attempts;
        }
        else{
            document.getElementById("attempts").innerHTML = "TRUE ! Congratulations !";
        }
      });
}

gamePlay();