function askNumber(){
    let givenNumber = 'a';
    while (isNaN(givenNumber)){
        givenNumber = parseInt(prompt("Please enter a number"));
    }
    console.log(givenNumber);
}

askNumber();