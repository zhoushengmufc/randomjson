var defaultWidth = 400;
var defaultHeight = 400;
function randomImage(width, sNumber, height) {
	var iWidth = width? width: defaultWidth;
	var iHeight = height? height: defaultHeight;
	return 'https://dummyimage.com/' + iWidth + 'x' + iHeight;
}
module.exports = randomImage;

