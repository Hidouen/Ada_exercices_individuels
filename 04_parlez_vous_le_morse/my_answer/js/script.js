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
	'Z':'--..',
    '0':'-----',
    '1':'.----',
    '2':'..---',
    '3':'...--',
    '4':'....-',
    '5':'.....',
    '6':'-....',
    '7':'--...',
    '8':'---..',
    '9':'----.'
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
    '....': "H",
    '-----':"0",
    '.----':"1",
    '..---':"2",
    '...--':"3",
    '....-':"4",
    '.....':"5",
    '-....':"6",
    '--...':"7",
    '---..':"8",
    '----.':"9"
  }

function encodeText() {
    const textToEncode = document.getElementById('textToEncode').value.toUpperCase();
    let encodedText = "";

    for (let i = 0; i < textToEncode.length; i++) {
        const char = textToEncode[i];
        if (char === ' ') {
            encodedText += '/';
        } else if (latinToMorse[char]) {
            encodedText += latinToMorse[char] + ' ';
        }
    }

    document.getElementById('encodedResult').textContent = encodedText;
}

function decodeMorse() {
    const morseToDecode = document.getElementById('morseToDecode').value;
    const morseWords = morseToDecode.split('/');

    let decodedText = "";

    for (let i = 0; i < morseWords.length; i++) {
        const morseChars = morseWords[i].trim().split(' ');
        for (let j = 0; j < morseChars.length; j++) {
            const char = morseToLatin[morseChars[j]];
            if (char) {
                decodedText += char;
            }
        }
        decodedText += ' ';
    }

    document.getElementById('decodedResult').textContent = decodedText.trim();
}