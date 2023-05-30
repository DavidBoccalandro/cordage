function generateAlphabet() {
	const startCharCode = 'A'.charCodeAt(0);
	const endCharCode = 'Z'.charCodeAt(0);
	const alphabet = [];

	for (let charCode = startCharCode; charCode <= endCharCode; charCode++) {
		const letter = String.fromCharCode(charCode);
		alphabet.push(letter);
	}

	return alphabet;
}

export function createGlossaryMap() {
	const alphabet = generateAlphabet();
	const glossary = new Map();
	alphabet.forEach((letter) => glossary.set(letter, []));
	return glossary;
}
