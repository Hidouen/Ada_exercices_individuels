function askName(){
    let userName = prompt("What's your name ?");
    let message = "👋 Bonjour " + userName;
    document.body.innerHTML += '<h2 id="welcome"></h2>';
    document.getElementById("welcome").innerText = message;
}
function askBirthYear(){
    let userYear = 0;
    while (userYear == 0 || userYear < 1850 || userYear > 2023){
        userYear = parseInt(prompt("And what is your year of birth ?"));
    }
    let userAge = 2024 - userYear;
    message = "Wow ! Vous avez " + userAge + "ans, ça ne se voit pas 😉"
    document.body.innerHTML += '<h3 id="age"></h3>';
    document.getElementById("age").innerText = message;
}
askName();
askBirthYear();