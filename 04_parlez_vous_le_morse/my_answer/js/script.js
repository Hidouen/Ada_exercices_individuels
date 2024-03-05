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

function displayResult(letter){
    letter = letter.toUpperCase();
    console.log(letter);
    let message = "'" + letter + "' character in morse code is '" + translateLatinCharacter(letter) + "'";
    document.body.innerHTML += '<h3 id="answer"></h3>';
    document.getElementById("answer").innerText = message;
}

displayResult('A');