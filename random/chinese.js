var randomCount = require('./count');
// 常用288字
var str = '的一是在不了有和人这中大为上个国我以要他时来用们生到作地于出就分对成会可主发年动同工也能下过子说产种面而方后多定行学法所民得经十三之进着等部度家电力里如水化高自二理起小物现实加量都两体制机当使点从业本去把性好应开它合还因由其些然前外天政四日那社义事平形相全表间样与关各重新线内数正心反你明看原又么利比或但质气第向道命此变条只没结解问意建月公无系军很情者最立代想已通并提直题党程展五果料象员革位入常文总次品式活设及管特件长求老头基资边流路级少图山统接知较长将组见计别她手角期根论运农指几九区强放决西被干做必战先回则任取据处队南给色光门即保治北造百规热领七海地口东导器压志世金增争';
var maxBits = 288;
var generalFNumber = 5;
var generalTNumber = 20;
function randomString(fNumber, sNumber, tNumber) {
	var count;
	var res = '';

	count = randomCount(fNumber, sNumber, tNumber, generalFNumber, generalTNumber, maxBits);
	while (count) {
		res += str[randomCount(0, ',287', 287)]
		count--;
	}
	return res;
}
module.exports = randomString;