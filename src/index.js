const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};

function decode(expr) {
	let i = 0,
		j = 0,
		encodedLetter = '',
		answer = [];
	let str = expr.split('');
	let encodedLetterMorse = '';
	let length = str.length / 10;
	for (i = 0; i < length; i++) {
		encodedLetter = str.splice(0, 10);
		for (j = 0; j < 10; j += 2) {
			if (encodedLetter[j] == '*') {
				answer.push(" ");
				break;
			}
			if (encodedLetter[j] == 1 && encodedLetter[j + 1] == 1) {
				encodedLetterMorse += '-';
				continue;
			} else if (encodedLetter[j] == 1 && encodedLetter[j + 1] == 0) {
				encodedLetterMorse += '.';
				continue;
			}
		}
		answer.push(MORSE_TABLE[encodedLetterMorse]);
		encodedLetterMorse = '';
	}
	return answer.join('');
}

module.exports = {
	decode
}