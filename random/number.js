var randomCount = require('./count');
var maxBits = 308;
var generalFNumber = 1;
var generalTNumber = 10;
function randomNumber(fNumber, sNumber, tNumber) {
	var conut;
	var numberRes;
	count = randomCount(fNumber, sNumber, tNumber, generalFNumber, generalTNumber, maxBits);
	return Math.floor(Math.pow(10, count-1) + Math.random() * (Math.pow(10, count) - Math.pow(10, count-1))); 
}
module.exports = randomNumber;