let username = prompt("What's your name ?");
let message = '👋 Bonjour ' + username;
document.body.innerHTML += '<h2 id="welcome"></h2>';
document.getElementById("welcome").innerText = message;