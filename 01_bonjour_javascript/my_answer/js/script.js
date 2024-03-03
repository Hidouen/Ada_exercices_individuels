function askName(){
    let userName = prompt("Please enter your name :");
    let message = "👋 Bonjour " + userName;
    document.body.innerHTML += '<h2 id="welcome"></h2>';
    document.getElementById("welcome").innerText = message;
}
function askBirthYear(){
    let userYear = 0;
    let userMonth = 0;
    while (userYear == 0 || userYear < 1850 || userYear > 2023){
        userYear = parseInt(prompt("Enter your birth year ?"));
    }
    while (userMonth < 1 || userMonth > 12){
        userMonth = parseInt(prompt("Last question : what's your birth month ? (between 1 and 12)"));
    }
    let userAge = 2024 - userYear;
    if (userMonth > 2){
        userAge--;
    }
    message = "Wow ! Vous avez " + userAge + "ans, ça ne se voit pas 😉"
    document.body.innerHTML += '<h3 id="age"></h3>';
    document.getElementById("age").innerText = message;
}
askName();
askBirthYear();