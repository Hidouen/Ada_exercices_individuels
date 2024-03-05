const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

function translateLatinCharacter(letter){
    return latinToMorse[letter];
}

function getLatinCharacterList(str){
    let tab = [];
    for (i = 0; i < str.length; i++){
        tab[i] = str[i];
    }
    return tab;
}

function isALetter(caractere) {
    return /[A-Z]/.test(caractere);
}

function encode(str){
    let tabStr = getLatinCharacterList(str);
    let strInMorse = "\n";
    for (i = 0; i < tabStr.length; i++){
        if (isALetter(tabStr[i])){
            strInMorse += translateLatinCharacter(tabStr[i]);
            strInMorse += ' ';
        }
        else if (tabStr[i] === ' '){
            strInMorse += '\n';
        }
    }
    return strInMorse;
}

function displayResult(str){
    str = str.toUpperCase();
    let message = '"' + str + '" in morse code is :' + encode(str);
    document.body.innerHTML += '<h3 id="answer"></h3>';
    document.getElementById("answer").innerText = message;
}

displayResult("Hello World");