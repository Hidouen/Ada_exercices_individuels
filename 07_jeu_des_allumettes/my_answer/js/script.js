let matches = 50;

function removeMatches(matchesToRemove) {
    matches -= matchesToRemove;
    if (matches < 0) {
        matches = 0;
    }
}