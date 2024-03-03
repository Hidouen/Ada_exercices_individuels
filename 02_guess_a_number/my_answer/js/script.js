function askNumber(){
    let givenNumber = 'a';
    while (isNaN(givenNumber)){
        givenNumber = parseInt(prompt("Please enter a number"));
        if (isNaN(givenNumber)){
            alert("That's not a number");
        }
    }
    return givenNumber;
}
function didIWin(givenNumber, goodNumber){
    if (givenNumber < goodNumber){
        alert("Plus grand");
        return false;
    }
    else if (givenNumber > goodNumber){
        alert("Plus petit");
        return false;
    }
    else {
        alert("Bravo ! Vous avez deviné le nombre");
        return true;
    }
}

function gamePlay(){
    let givenNumber;
    let goodNumber = 22;
    do {
        givenNumber = askNumber();
    } while (didIWin(givenNumber, goodNumber) === false)
}

gamePlay();