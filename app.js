exports.appMap = function(){
var Walter = 'Hello. I’ve got Faceblock and Instantgam. I’m too old for the other ones';
var Jesse = "Yo! I’ve got ‘em all. Tooter, Faceblock, Instantgam, Snaptalk";
var Saul = "I’m on LankedOn for Business. And I have an Instantgam account for my cats. Oh, and Faceblock for my ex-husbands";
var Gus = "I use Tooter and Instantgam. My customers aren’t on the others, so I can’t get them to engage with my brand there";

var WalterApps = Walter.replace(/Hello. I’ve got /g, "").replace(/ and/g, "").replace(/. I’m too old for the other ones/g,"").split(" ");
var JesseApps = Jesse.replace(/Yo! I’ve got ‘em all. /g, "").split(", ");
var SaulApps = Saul.replace(/I’m on /g,"").replace(/for Business. And I have an /g,"").replace(/account for my cats. Oh, and /g,"").replace(/ for my ex-husbands/g,"").split(" ");
var GusApps = Gus.replace(/I use /g,"").replace(/ and/g,"").replace(/. My customers aren’t on the others, so I can’t get them to engage with my brand there/g,"").split(" ");

// var appMap = {"Walter": WalterApps,
              // "Jesse": JesseApps,
              // "Saul": SaulApps,
              // "Gus": GusApps};

var appMap = [{name: "Walter", apps: WalterApps},{name: "Jesse", apps: JesseApps},{name:"Saul",apps: SaulApps},{name:"Gus",apps: GusApps}];

// for(x=0;x<appMap.length;x++){
  // for(var data in appMap[x]){
    // console.log(appMap[x][data]);
  // }
  // console.log(appMap[x]);
  // for(x=0;x<WalterApps;X)
// }
// console.log(appMap);
return appMap;
};
exports.dataMap = function(){
  var Walter = "It was 67MB. Is that everything? I’m busy, you know";
  var Jesse = "Damn, it was like 300MB. Dat Snaptalk is a data hog, yo.";
  var Saul = "I think 283MB. That’s what the guy at the store said. I think it means MegaBites.";
  var Gus = "Around 150MB. I have the receipts if you need more precise figures.";

  var WalterData = Walter.replace(/\D/g,"");
  var JesseData = Jesse.replace(/\D/g,"");
  var SaulData = Saul.replace(/\D/g,"");
  var GusData = Gus.replace(/\D/g,"");

// var dataMap = {"Walter": WalterData,
//               "Jesse": JesseData,
//               "Saul": SaulData,
//               "Gus": GusData};

var dataMap = [{name: "Walter", data: WalterData},{name: "Jesse", data:JesseData},{name:"Saul", data:SaulData},{name:"Gus",data:GusData}];
  // var test = WalterD.replace(/\D/g,"");
 // var Data = [];
  // for(var data in dataMap){
// Data.push(dataMap[data]);
  // }
  // console.log(Data.sort(function(a,b){
    // return a - b;
  // }));
// var sorted  = dataMap.keys(hash).sort(function(a,b){
  // return hash[a] - hash[b];
// });
  // console.log(dataMap);
return dataMap;
};
exports.processedMap = function(appMap,dataMap){
  // console.log(appMap);
  var processedMap = [{name: "Walter", data: dataMap.Walter, apps: appMap.Walter},
                      {name:"Jesse",data:dataMap.Jesse, apps: appMap.Jesse},
                      {name:"Saul",data:dataMap.Saul, apps: appMap.Saul},
                      {name:"Gus",data:dataMap.Gus, apps: appMap.Gus}];

                      // console.log(processedMap);
                      return processedMap;


};
exports.mostData = function(dataMap){
var mostData = dataMap.sort(function(a,b){
return b.data - a.data;
});
return mostData[0];
};
exports.leastData = function(dataMap){
var leastData = dataMap.sort(function(a,b){
return a.data - b.data;
});
return leastData[0];
};
exports.mostApps = function(appMap){
  var mostApps = appMap.sort(function(a,b){
    return b.apps.length - a.apps.length;
  });
  return mostApps[0];
};
exports.leastApps = function(appMap){
  var leastApps = appMap.sort(function(a,b){
    return a.apps.length - b.apps.length;
  });
  // console.log(leastApps[0]);
  return leastApps[0];
};
exports.NONFaceblockUsers = function(appMap){
  for(x=0;x<appMap.length;x++){
    if(appMap[x].apps.indexOf('Faceblock') === -1){
      return appMap[x].name;
    }

  }
};
exports.FaceblockUsers = function(appMap){
var fbUsers = [];
  for(x=0;x<appMap.length;x++){
    if(appMap[x].apps.indexOf('Faceblock') > -1){
      fbUsers.push(appMap[x].name);
    }
    // console.log(fbUsers[x]);
  }
  return fbUsers;
};
