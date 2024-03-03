function askNumber(){
    let numberP2;
    do {
        numberP2 = parseInt(prompt("Player 2 : Try to guess the player 1 number"));
        if (isNaN(numberP2)){
            alert("It's not a number");
        }
    } while (isNaN(numberP2))
    return numberP2;
}

function didIWin(givenNumber, toGuessNumber){
    if (givenNumber < toGuessNumber){
        alert("bigger");
        return false;
    }
    else if (givenNumber > toGuessNumber){
        alert("smaller");
        return false;
    }
    else{
        alert("Congrats' ! You guessed the number");
        return true;
    }
}

function askNumberToGuess(){
    let toGuessNumber = 51;
    while (toGuessNumber < 0 || toGuessNumber > 50 || isNaN(toGuessNumber)){
        toGuessNumber = parseInt(prompt("Player 1 : Please enter a number between 0 and 50", "0 < ? < 50"));
        if (toGuessNumber < 0 || toGuessNumber > 50 || isNaN(toGuessNumber)){
            alert("it's not a number or the number is outside of the range (between 0 to 50)");
        }
    }
    return(toGuessNumber);
}

function gamePlay(){
    const toGuessNumber = askNumberToGuess();
    let givenNumber = 0;
    do {
        givenNumber = askNumber();
    } while (didIWin(givenNumber, toGuessNumber) === false)

}

gamePlay();