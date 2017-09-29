var randomCount = require('./count');
var str = 'abcdefghijklmnopqrstuvwxyz';
var maxBits = 26;
var generalFNumber = 5;
var generalTNumber = 20;
function randomString(fNumber, sNumber, tNumber) {
	var count;
	var res = '';
	count = randomCount(fNumber, sNumber, tNumber, generalFNumber, generalTNumber, maxBits);
	while (count) {
		res += str[randomCount(0, ',25', 25)]
		count--;
	}
	return res;
}
module.exports = randomString;