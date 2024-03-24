function removeMatches(matchesToRemove, matchesHeap) {
    matchesHeap -= matchesToRemove;
    if (matchesHeap < 0) {
        matchesHeap = 0;
    }
    return matchesHeap;
}

function askPlayer(playerNb) {
    let matchesToRemove;
    while (!validAnswer(matchesToRemove)) {
        matchesToRemove = parseInt(prompt(`Player ${playerNb} : how many matches you want to remove ?`));
        if (isNaN(matchesToRemove)) {
            alert("Error : it's not a number. Try again");
        }
        else if (!validAnswer(matchesToRemove)) {
            alert("Error : Please remove between 1 to 6 matches");
        }
    }
    return matchesToRemove;
}

function validAnswer(matchesToRemove) {
    if (matchesToRemove >= 1 && matchesToRemove <= 6) {
        return true;
    }
    return false;
}


function launchGame() {
    let matchesHeap = 50;
    let player = 0;
    let answer;
    alert("Welcome to the Matches Game");
    alert("The Matches Game starts with a heap of 50 matches. Each one his turn, 2 players remove between 1 to 6 matches from the heap. The one who removes the last match wins the game.");
    while (matchesHeap > 0) {
        if (player > 1) {
            player = 0;
        }
        answer = askPlayer(player + 1);
        matchesHeap = removeMatches(answer, matchesHeap);
        player++;
    }
    alert(`Player ${player} wins ! BRAVO !`);
}

launchGame();