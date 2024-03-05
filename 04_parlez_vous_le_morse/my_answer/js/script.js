function getLatinCharacterList(str){
    let tab = [];
    for (i = 0; i < str.length; i++){
        tab[i] = str[i];
    }
    return tab;
}

console.log(getLatinCharacterList("Hello, world"));