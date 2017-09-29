function numberRange(minNumber, maxNumber, orNumbers) {
	if (minNumber && maxNumber) {
		var minDigit = getDigit(minNumber);
		var maxDigit = getDigit(maxNumber);
		var digit = Math.max(minDigit, maxDigit);
		var minNumber = Number(minNumber);
		var maxNumber = Number(maxNumber);
		var tempMin;
		var tempMax;
		if (minNumber > maxNumber) {
			tempMax = maxNumber;
			tempMin = minNumber;
			minNumber = tempMax;
			maxNumber = tempMin;
		}
		return parseFloat((minNumber + Math.random() * (maxNumber - minNumber)).toFixed(digit));
	}
	else {
		var orNumbersArr = orNumbers.split(',');
		var randomIndex = Math.floor(Math.random() * orNumbersArr.length);
		return Number(orNumbersArr[randomIndex]);
	}
}
function getDigit(numberStr) {
	var numberArr = numberStr.split('.');
	if (numberArr.length === 1) {
		return 0;
	}
	else {
		return numberArr[1].length;
	}
}
module.exports = numberRange;