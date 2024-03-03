let userName = prompt("What's your name ?");
let message1 = '👋 Bonjour ' + userName;
document.body.innerHTML += '<h2 id="welcome"></h2>';
document.getElementById("welcome").innerText = message1;
let userAge = 2023 - parseInt(prompt("What's your year of birth ?"));
let message2 = "Vous avez " + userAge + "ans";
document.body.innerHTML += '<h3 id="age"></h3>';
document.getElementById("age").innerText = message2;