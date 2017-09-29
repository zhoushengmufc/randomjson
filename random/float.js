function randomFloat(intDigit, decDigit) {
	var intDigit = intDigit? intDigit: 2;
	var decDigit = decDigit? decDigit: 2;
	var intNumber = Math.floor(Math.random() * Math.pow(10, intDigit));
	return intNumber + parseFloat(Math.random().toFixed(decDigit));
}
module.exports = randomFloat;