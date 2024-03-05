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

const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H"
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

function translateMorseCharacter(str){
    return morseToLatin[str];
}

function getMorseCharacterList(str){
    let tab = [];
    let j = 0;
    let k = 1;
    for (i = 0; i < str.length; i++){
        if (str[i] === '.' || str[i] === '-'){
            tab[j] = str[i];
            k = 1;
            if (i + k < str.length && (str[i + k] === '.' || str[i + k] === '-')){
                while (str[i + k] === '.' || str[i + k] === '-'){
                    tab[j] += str[i + k];
                    k++;
                }
                i += k;
            }
            j++;
        }
        else if (str[i] === ' '){
            ;
        }
        else if (str[i] === '/'){
            if (j > 0){
                if (tab[j - 1] != " "){
                    tab[j] = " ";
                    j++;
                }
            }
        }
        else {
            tab[j] = "$";
            j++;
        }
    }
    return tab;
}


function isALetter(caractere) {
    return /[A-Z]/.test(caractere);
}

function encode(str){
    let strInMorse = "";
    let tabStr = getLatinCharacterList(str);
    for (i = 0; i < tabStr.length; i++){
        if (isALetter(tabStr[i])){
            strInMorse += translateLatinCharacter(tabStr[i]);
            strInMorse += ' ';
        }
        else if (tabStr[i] === ' '){
            strInMorse += '/';
        }
    }
    return strInMorse;
}

function decode(str){
    let latinStr = "";
    let tabStr = getMorseCharacterList(str);
    for (i = 0; i < tabStr.length; i++){
        if (tabStr[i] === " "){
            latinStr += tabStr[i];
        }
        else if (isALetter(translateMorseCharacter(tabStr[i]))){
            latinStr += translateMorseCharacter(tabStr[i]);
        }
    }
    return latinStr;
}

function displayResult(str){
    let message = '"' + str + '" in Latin characters is : "' + decode(str) + '"';
    document.body.innerHTML += '<h3 id="answer"></h3>';
    document.getElementById("answer").innerText = message;
}

displayResult(".... . .-.. .-.. --- /.-- --- .-. .-.. -..");