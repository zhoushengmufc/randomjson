function randomCount(fNumber, sNumber, tNumber, generalFNumber, generalTNumber, maxBits) {
	var count;
	if (tNumber !== undefined) {
		fNumber = Number(fNumber);
		tNumber = Number(tNumber);
		count = Math.floor(fNumber + Math.random() * (tNumber - fNumber + 1));
	}
	else if (sNumber !== undefined) {
		fNumber = Number(fNumber);
		count = Math.floor(fNumber + Math.random() * (maxBits - fNumber + 1));
	}
	else if (fNumber !== undefined) {
		fNumber = Number(fNumber);
		count = fNumber;
	}
	else {
		count = Math.floor(generalFNumber + Math.random() * (generalTNumber - generalFNumber + 1));
	}
	return count;
}
module.exports = randomCount;