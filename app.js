exports.appMap = function(){
var Walter = 'Hello. I’ve got Faceblock and Instantgam. I’m too old for the other ones';
var Jesse = "Yo! I’ve got ‘em all. Tooter, Faceblock, Instantgam, Snaptalk";
var Saul = "I’m on LankedOn for Business. And I have an Instantgam account for my cats. Oh, and Faceblock for my ex-husbands";
var Gus = "I use Tooter and Instantgam. My customers aren’t on the others, so I can’t get them to engage with my brand there";

var WalterApps = Walter.replace(/Hello. I’ve got /g, "").replace(/ and/g, "").replace(/. I’m too old for the other ones/g,"").split(" ");
var JesseApps = Jesse.replace(/Yo! I’ve got ‘em all. /g, "").split(", ");
var SaulApps = Saul.replace(/I’m on /g,"").replace(/for Business. And I have an /g,"").replace(/account for my cats. Oh, and /g,"").replace(/ for my ex-husbands/g,"").split(" ");
var GusApps = Gus.replace(/I use /g,"").replace(/ and/g,"").replace(/. My customers aren’t on the others, so I can’t get them to engage with my brand there/g,"").split(" ");


console.log(GusApps);
};
