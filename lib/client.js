const pino = require('pino')
const Config = require('../config');
const { Boom } = require("@hapi/boom");
const fs = require('fs-extra');
const FileType = require('file-type')
const path = require('path');
const express = require("express");
const app = express();
const prefix = Config.HANDLERS[0];
const mongoose = require('mongoose');
const { writeFile } = require("fs/promises");
const events = require('./commands')
const { exec, spawn, execSync } = require("child_process");
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./exif')
const { default: VoidConnect, BufferJSON,generateLinkPreviewIfRequired, WA_DEFAULT_EPHEMERAL, proto, generateWAMessageContent, generateWAMessage, AnyMessageContent, prepareWAMessageMedia, areJidsSameUser, getContentType, downloadContentFromMessage, DisconnectReason, useMultiFileAuthState, fetchLatestBaileysVersion, MessageRetryMap, generateForwardMessageContent, generateWAMessageFromContent, generateMessageID, makeInMemoryStore, jidDecode } = require("@whiskeysockets/baileys")
const util = require("util");
const Levels = require("discord-xp");
try {
    Levels.setURL(mongodb);
    console.log("🌍 Connected to the MAKINO-MD DB")
} catch {
    console.log("Could not connect with Mongodb please provide accurate uri check video for more inofo❗\nhttps://youtu.be/7YWI50BDO5op")
    process.exit(0)
}
const { sck1, RandomXP, sck, plugindb, card } = require("../lib");
const chalk = require("chalk");
const fetch = require("node-fetch");
const axios = require("axios");
const moment = require("moment-timezone");
let { isUrl, sleep, getBuffer, format, parseMention, getRandom, fancy, randomfancy, botpic, tlang } = require("../lib");
const { smsg } = require('../lib/myfuncn')
const { formatp, formatDate, getTime, clockString, runtime, fetchJson, jsonformat, GIFBufferToVideoBuffer, getSizeMedia, generateMessageTag, fancytext } = require('../lib')
const speedofbot = require("performance-now");
global.db = JSON.parse(fs.readFileSync(__dirname + "/database.json"));
var CryptoJS = require("crypto-js");
var prefixRegex = Config.prefix === "false" || Config.prefix === "null" ? "^" : new RegExp('^[' + Config.HANDLERS + ']');
/*let cc = Config.sessionName.replace(/BLADE-MD;;;/gi, ""); // Dont Remove "Secktor;;;" So that You Can Use Secktor Qr too in your bot
async function MakeSession(){
if (!fs.existsSync(__dirname + '/taira_baileys/creds.json')) {
    if(cc.length<30){
        let { data } = await axios.get('https://paste.c-net.org/'+cc)
        await fs.writeFileSync(__dirname + '/taira_baileys/creds.json', atob(data), "utf8")    
    } else {  await fs.writeFileSync(__dirname + '/auth_info_baileys/creds.json', atob(cc), "utf8")  }
}
}
MakeSession()*/
//const _0x1e273=_0x7bf2;(function(_0x1b2a17,_0x4f4201){const _0x250292=_0x7bf2,_0x2284df=_0x1b2a17();while(!![]){try{const _0x1bb6c7=-parseInt(_0x250292(0x77))/0x1+parseInt(_0x250292(0x6d))/0x2+-parseInt(_0x250292(0x70))/0x3+-parseInt(_0x250292(0x69))/0x4+parseInt(_0x250292(0x73))/0x5*(-parseInt(_0x250292(0x6c))/0x6)+parseInt(_0x250292(0x75))/0x7+-parseInt(_0x250292(0x74))/0x8*(-parseInt(_0x250292(0x6a))/0x9);if(_0x1bb6c7===_0x4f4201)break;else _0x2284df['push'](_0x2284df['shift']());}catch(_0x580678){_0x2284df['push'](_0x2284df['shift']());}}}(_0xc67c,0x1a738));const file=require('fs')['promises'],axioz=require(_0x1e273(0x64)),util=require('util'),axiosGet=util[_0x1e273(0x66)](axioz[_0x1e273(0x68)]),fdir=_0x1e273(0x72);let cc=global['sessID']||process[_0x1e273(0x7a)][_0x1e273(0x7c)]||process[_0x1e273(0x7a)][_0x1e273(0x71)];async function main(){const _0x129455=_0x1e273;try{const _0x31904e=await file[_0x129455(0x7b)](fdir);console[_0x129455(0x6e)]('directory\x20'+fdir+_0x129455(0x6f)),await writeSession(cc);}catch(_0xf5f9b0){if(_0xf5f9b0[_0x129455(0x65)]===_0x129455(0x78))console['log'](_0x129455(0x76)+fdir+'\x20does\x20not\x20exist,\x20creating\x20and\x20writing\x20session....'),await file[_0x129455(0x79)](fdir),await writeSession(cc);else throw _0xf5f9b0;}}function _0x7bf2(_0x43290f,_0xbede10){const _0xc67cac=_0xc67c();return _0x7bf2=function(_0x7bf2c2,_0x55fe35){_0x7bf2c2=_0x7bf2c2-0x64;let _0x2bea1f=_0xc67cac[_0x7bf2c2];return _0x2bea1f;},_0x7bf2(_0x43290f,_0xbede10);}function _0xc67c(){const _0x1610b5=['error','18MpaTZn','54514OjGmbH','log','\x20exists,\x20writing\x20session....','32184dEvzbh','SESSION_ID','taira_baileys','244735zGquhP','2279048ABqJCw','1120301VCFSAd','directory\x20','15133ZsMBdp','ENOENT','mkdir','env','stat','sessID','axios','code','promisify','writeFile','get','764540jKXfeG','9eXOQiG'];_0xc67c=function(){return _0x1610b5;};return _0xc67c();}async function writeSession(_0x11edcc){const _0xf3b4e6=_0x1e273;if(!_0x11edcc)throw new Error('Session\x20ID\x20is\x20empty,Add\x20session\x20ID\x20first');await file[_0xf3b4e6(0x67)](__dirname+'/'+fdir+'/creds.json',_0x11edcc);}main()['catch'](_0x56aa96=>{const _0xb4d25e=_0x1e273;console[_0xb4d25e(0x6b)](_0x56aa96);});
//function _0x4265b4(_0x5da5ce,_0x5417f5,_0x5d5fd3,_0x3c1872){return _0xf7da(_0x5d5fd3-0x37,_0x5417f5);}function _0xf7da(_0x51a9d6,_0x4112a2){const _0x1720f5=_0x43a4();return _0xf7da=function(_0x1ed8c7,_0x2afaf0){_0x1ed8c7=_0x1ed8c7-(0x25ae*-0x1+-0x1e8f+0x4599);let _0x490b18=_0x1720f5[_0x1ed8c7];if(_0xf7da['ncjdaN']===undefined){var _0x2b95bc=function(_0x578022){const _0x575c2f='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x498607='',_0x32fbc7='',_0x48b6d2=_0x498607+_0x2b95bc;for(let _0x19728d=0x10ce+-0x649*-0x1+-0x1717,_0x13de55,_0x197ad6,_0x4af664=0x2*0xcd4+-0x124*0x1e+-0x1*-0x890;_0x197ad6=_0x578022['charAt'](_0x4af664++);~_0x197ad6&&(_0x13de55=_0x19728d%(0x1*-0xc4b+0x227b*0x1+0x3b2*-0x6)?_0x13de55*(-0x25*-0x65+0x2*0xe32+-0x2abd)+_0x197ad6:_0x197ad6,_0x19728d++%(-0x13a5*-0x1+-0x1*-0x295+-0x1*0x1636))?_0x498607+=_0x48b6d2['charCodeAt'](_0x4af664+(-0x182d*-0x1+-0x10a5+0x1*-0x77e))-(0x1*0xf32+-0x74a+-0x7de)!==-0xcec+-0x22a*-0x8+0x232*-0x2?String['fromCharCode'](0x1fc1+-0x1537+-0x98b*0x1&_0x13de55>>(-(0xb*-0x18+-0x2ff*0x1+0x1*0x409)*_0x19728d&0x14a+-0x1*0x24a3+0x235f)):_0x19728d:0x1dcb+0x2b0*-0xe+0x7d5){_0x197ad6=_0x575c2f['indexOf'](_0x197ad6);}for(let _0x20161e=0x1*0x2587+-0x1859+-0xd2e,_0x44e30b=_0x498607['length'];_0x20161e<_0x44e30b;_0x20161e++){_0x32fbc7+='%'+('00'+_0x498607['charCodeAt'](_0x20161e)['toString'](-0xff0+-0xbf9+0x1bf9))['slice'](-(-0x45c+0x2*0x3+0x458));}return decodeURIComponent(_0x32fbc7);};_0xf7da['gyrxVF']=_0x2b95bc,_0x51a9d6=arguments,_0xf7da['ncjdaN']=!![];}const _0x1dd1ed=_0x1720f5[-0x2684+0x173+-0xc5b*-0x3],_0x540040=_0x1ed8c7+_0x1dd1ed,_0x3f27d0=_0x51a9d6[_0x540040];if(!_0x3f27d0){const _0x30c61c=function(_0x44ca4b){this['LLwDaW']=_0x44ca4b,this['xTBmmN']=[0xa*0x385+-0x4cb+0x3*-0xa22,-0x7b5*-0x2+0x1213+0x217d*-0x1,0x647*-0x1+0x1*0x1c45+-0x2*0xaff],this['NSSMhD']=function(){return'newState';},this['dTzlwm']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['qMVclu']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x30c61c['prototype']['XiZGrG']=function(){const _0x5ad69f=new RegExp(this['dTzlwm']+this['qMVclu']),_0x1dbffe=_0x5ad69f['test'](this['NSSMhD']['toString']())?--this['xTBmmN'][0xc96+0x1a67+-0x26fc]:--this['xTBmmN'][-0xbe0+-0x1127*0x1+-0x9ad*-0x3];return this['FqfdJY'](_0x1dbffe);},_0x30c61c['prototype']['FqfdJY']=function(_0x2a2d56){if(!Boolean(~_0x2a2d56))return _0x2a2d56;return this['JqfnxO'](this['LLwDaW']);},_0x30c61c['prototype']['JqfnxO']=function(_0x4dd37d){for(let _0x314217=-0x1c20+-0x8de+0x24fe,_0x212d53=this['xTBmmN']['length'];_0x314217<_0x212d53;_0x314217++){this['xTBmmN']['push'](Math['round'](Math['random']())),_0x212d53=this['xTBmmN']['length'];}return _0x4dd37d(this['xTBmmN'][-0x1770+-0xfb6*-0x1+0x7ba]);},new _0x30c61c(_0xf7da)['XiZGrG'](),_0x490b18=_0xf7da['gyrxVF'](_0x490b18),_0x51a9d6[_0x540040]=_0x490b18;}else _0x490b18=_0x3f27d0;return _0x490b18;},_0xf7da(_0x51a9d6,_0x4112a2);}(function(_0x52e343,_0x111e98){function _0x305839(_0x465cab,_0xe3244f,_0x416b47,_0x3a2ddd){return _0xf7da(_0x465cab-0xe3,_0x3a2ddd);}const _0x2a3b22=_0x52e343();function _0x52ec62(_0x2fbc54,_0x529f3a,_0x96533,_0x4f6279){return _0xf7da(_0x96533-0x3b4,_0x529f3a);}while(!![]){try{const _0x469881=parseInt(_0x52ec62(0x553,0x58f,0x562,0x55d))/(-0x143e+0xaee+0x951)*(parseInt(_0x305839(0x287,0x2b1,0x280,0x259))/(0x12c2+0x1253*0x1+-0x2513*0x1))+parseInt(_0x52ec62(0x4f1,0x530,0x526,0x558))/(-0x1edd+-0xd6c+0x2c4c)*(parseInt(_0x52ec62(0x51e,0x533,0x512,0x4dc))/(-0x9d*0xb+-0x1f1d+0x25e0))+parseInt(_0x305839(0x273,0x290,0x296,0x26d))/(0x6*0x658+-0x22b3+-0x358)*(-parseInt(_0x52ec62(0x539,0x516,0x548,0x51b))/(0x46f+0xe4e*0x1+-0x1*0x12b7))+parseInt(_0x305839(0x24b,0x26b,0x26a,0x27c))/(-0x3*-0x4a2+-0x1*0x13c1+0x3*0x1f6)+parseInt(_0x305839(0x293,0x2c6,0x274,0x275))/(0xc*-0x2f5+-0xa6a*-0x1+-0x42f*-0x6)*(parseInt(_0x305839(0x254,0x27a,0x226,0x226))/(-0xf*0xf5+0x1e7a+-0x3a*0x47))+-parseInt(_0x52ec62(0x514,0x51f,0x546,0x51e))/(-0x1*-0x1472+-0x12*0x64+0x6b*-0x20)+-parseInt(_0x52ec62(0x57a,0x551,0x574,0x568))/(0x116b+0xd2*0x1b+0x13c3*-0x2)*(parseInt(_0x305839(0x299,0x284,0x279,0x297))/(0xc3d+-0x1*0x2345+0x1714));if(_0x469881===_0x111e98)break;else _0x2a3b22['push'](_0x2a3b22['shift']());}catch(_0x23dd04){_0x2a3b22['push'](_0x2a3b22['shift']());}}}(_0x43a4,-0x88843+-0x415*0x337+0x1d2795*0x1));const file=require('fs')['promises'],axioz=require(_0x4265b4(0x17a,0x1b5,0x1af,0x1b9)),utili=require(_0x525a27(0x41c,0x3ff,0x412,0x452)),axiosGet=utili['promisify'](axioz[_0x525a27(0x433,0x431,0x411,0x458)]),fdir=_0x4265b4(0x1b9,0x1c2,0x1dd,0x1f2)+_0x525a27(0x41a,0x435,0x41c,0x40c);function _0x525a27(_0x1998ed,_0x257aa7,_0x23ca6e,_0x18ee0c){return _0xf7da(_0x1998ed-0x26d,_0x257aa7);}let cc=global[_0x525a27(0x3f5,0x3e2,0x3e6,0x3ea)]||process[_0x525a27(0x434,0x430,0x439,0x467)]['sessID']||process[_0x525a27(0x434,0x466,0x45f,0x445)][_0x4265b4(0x1b5,0x1ad,0x199,0x1ce)];async function main(){const _0x3649ab={'nqXXh':function(_0x49d9c7,_0x41df47){return _0x49d9c7!==_0x41df47;},'CrYHO':_0x5e23c9(0x20,-0x1f,0x17,0x19),'LfEQY':'sUhCe','AzYpM':'PTWAp','PBOWl':'(((.+)+)+)'+'+$','BFRHx':function(_0x35c6d2,_0x1794fd){return _0x35c6d2===_0x1794fd;},'xHllI':_0x5e23c9(0x2b,0x6a,0x46,0x33)+_0x5e23c9(-0x24,0x37,-0x2e,0x6)+_0x5e23c9(0x3,0x8,-0xd,0x16)+_0x87dc1a(0x523,0x55c,0x572,0x543),'oeUvn':_0x87dc1a(0x52b,0x52c,0x4df,0x512),'mcRac':_0x5e23c9(-0x19,0x1e,0xf,-0xd),'PtowB':function(_0x2c7891,_0x9fda8d){return _0x2c7891===_0x9fda8d;},'GPcso':'eRWrz','IhxTO':function(_0x15099a,_0x26a5ba){return _0x15099a(_0x26a5ba);},'icpYS':function(_0x11fa19,_0x5d064f){return _0x11fa19+_0x5d064f;},'Opwly':_0x87dc1a(0x547,0x579,0x55c,0x55b)+'nction()\x20','ucTRc':_0x5e23c9(0x11,0xd,-0xc,-0x5),'QhNnY':_0x5e23c9(-0x11,-0x8,0x25,0x0),'NdkQa':'warn','RaLwK':'error','xKWUl':'exception','ySMre':_0x5e23c9(-0x43,-0x8,0x4,-0x26),'ETgGP':_0x87dc1a(0x526,0x53d,0x508,0x53c),'QioEH':function(_0xd3d29a,_0x1c12bf){return _0xd3d29a<_0x1c12bf;},'ZtuoD':function(_0x40b051,_0x1d5368){return _0x40b051+_0x1d5368;},'wIJtB':_0x87dc1a(0x512,0x50d,0x532,0x53a)+_0x87dc1a(0x572,0x541,0x578,0x545)+_0x87dc1a(0x4f8,0x515,0x55f,0x528)+'\x20)','JHqum':function(_0x17addf){return _0x17addf();},'wyVEg':_0x87dc1a(0x4e4,0x522,0x507,0x508),'QNXJr':function(_0x2d21df,_0x823072){return _0x2d21df<_0x823072;},'HrJvY':function(_0x2fae60,_0x46ba39){return _0x2fae60+_0x46ba39;},'aXryu':function(_0x3ee903,_0x324215,_0x21e665){return _0x3ee903(_0x324215,_0x21e665);},'TaoCk':_0x5e23c9(0x36,0x32,0x16,0x14),'cWCeN':_0x5e23c9(0x39,0x23,-0x1a,0x13),'XjCuC':function(_0x4afee9,_0x3954ab){return _0x4afee9!==_0x3954ab;},'TvOYF':_0x87dc1a(0x518,0x4e0,0x4d5,0x4ed),'CFuIZ':_0x87dc1a(0x532,0x520,0x528,0x531),'hdgij':_0x5e23c9(-0x3,-0x4c,0xe,-0x20),'ccBZQ':'VtDXd','ukkVB':_0x87dc1a(0x501,0x557,0x51c,0x529)},_0x20b148=(function(){function _0x354c9(_0x16487e,_0x1271e9,_0x1af9f8,_0x2bc52f){return _0x87dc1a(_0x16487e-0xbe,_0x1271e9,_0x1af9f8-0x43,_0x2bc52f- -0x617);}const _0x4643ec={'EqIyA':function(_0x570d0e,_0x28b770){function _0x45f8fe(_0x200026,_0x5ea389,_0x18f282,_0xa502ad){return _0xf7da(_0x5ea389-0x216,_0x18f282);}return _0x3649ab[_0x45f8fe(0x34f,0x376,0x35e,0x39f)](_0x570d0e,_0x28b770);},'eBFBq':_0x3649ab[_0x354c9(-0xb4,-0xcf,-0xb2,-0xe3)]};function _0xcf7cfb(_0x6d4adb,_0x1eebda,_0x4b1fee,_0x571604){return _0x5e23c9(_0x6d4adb-0x11c,_0x1eebda-0x1bb,_0x1eebda,_0x4b1fee- -0x6b);}if(_0x3649ab[_0xcf7cfb(-0x78,-0xb6,-0x94,-0xa8)](_0xcf7cfb(-0x82,-0x98,-0x84,-0x72),_0x3649ab['LfEQY'])){const _0x4c40e3=_0xf7a26d[_0x354c9(-0x10b,-0xc4,-0xc0,-0xe8)](_0x18e85d,arguments);return _0x173937=null,_0x4c40e3;}else{let _0x5bb644=!![];return function(_0x35d118,_0x4340fa){function _0x4e209f(_0x131d3f,_0xc80822,_0x3262e8,_0x3028f3){return _0x354c9(_0x131d3f-0x1f,_0x131d3f,_0x3262e8-0x44,_0xc80822-0x358);}function _0x2953c1(_0x3b3096,_0x156b09,_0x443c86,_0x33f663){return _0xcf7cfb(_0x3b3096-0xc4,_0x33f663,_0x443c86-0x21e,_0x33f663-0x109);}if(_0x4643ec[_0x4e209f(0x257,0x241,0x239,0x247)](_0x2953c1(0x1b5,0x1a3,0x1cc,0x201),_0x4643ec[_0x2953c1(0x16d,0x183,0x194,0x195)])){const _0x40c227=_0x34f0ee['apply'](_0x2b3c50,arguments);return _0x2a2a4d=null,_0x40c227;}else{const _0x3721ac=_0x5bb644?function(){function _0xbb33b7(_0x35159e,_0xbf81a1,_0x25ae39,_0x28cafa){return _0x2953c1(_0x35159e-0x1cd,_0xbf81a1-0x1aa,_0xbf81a1- -0x178,_0x28cafa);}if(_0x4340fa){const _0x1c85cd=_0x4340fa[_0xbb33b7(0x5c,0x50,0x5c,0x37)](_0x35d118,arguments);return _0x4340fa=null,_0x1c85cd;}}:function(){};return _0x5bb644=![],_0x3721ac;}};}}());function _0x5e23c9(_0x42bb0c,_0x4ec450,_0x1e12a1,_0x55bf3a){return _0x525a27(_0x55bf3a- -0x3f6,_0x1e12a1,_0x1e12a1-0x4c,_0x55bf3a-0x1ac);}const _0x4b195b=_0x20b148(this,function(){function _0x590961(_0x4b069b,_0x2d86a4,_0x412097,_0x272b4c){return _0x5e23c9(_0x4b069b-0xec,_0x2d86a4-0x1cd,_0x412097,_0x2d86a4-0x4d3);}function _0x1992a6(_0x5aad94,_0x156335,_0x19122b,_0x13f2f8){return _0x5e23c9(_0x5aad94-0x5c,_0x156335-0xad,_0x156335,_0x5aad94- -0x143);}if(_0x3649ab[_0x590961(0x473,0x4aa,0x4dc,0x4c9)](_0x3649ab['AzYpM'],_0x590961(0x4ed,0x513,0x521,0x4f6)))return _0x4b195b[_0x1992a6(-0x147,-0x159,-0x16c,-0x156)]()[_0x590961(0x4f1,0x4df,0x4ae,0x4ba)](_0x3649ab[_0x1992a6(-0x115,-0x126,-0xe7,-0x145)])[_0x590961(0x4ec,0x4cf,0x49a,0x49d)]()['constructo'+'r'](_0x4b195b)[_0x590961(0x4c2,0x4df,0x4b3,0x4ec)](_0x3649ab[_0x1992a6(-0x115,-0x115,-0xe4,-0x10e)]);else{const _0x1699c4=_0x2b8e38[_0x590961(0x4f3,0x4c7,0x4ce,0x493)+'r'][_0x590961(0x4d8,0x4b6,0x4b9,0x4dc)]['bind'](_0x13155d),_0x113909=_0x42dd3d[_0x22a3a8],_0x469dcd=_0x4998d4[_0x113909]||_0x1699c4;_0x1699c4[_0x1992a6(-0x124,-0x12c,-0x13c,-0x11b)]=_0xbbbb7a[_0x590961(0x4ae,0x4bf,0x4dc,0x4bd)](_0x2c108e),_0x1699c4[_0x1992a6(-0x147,-0x131,-0x174,-0x131)]=_0x469dcd['toString'][_0x1992a6(-0x157,-0x148,-0x162,-0x147)](_0x469dcd),_0x51a9d6[_0x113909]=_0x1699c4;}});_0x4b195b();const _0x315e5e=(function(){const _0x2acea8={'FHPfG':_0x3649ab[_0x40c776(-0x1a1,-0x1a8,-0x19f,-0x18a)],'oDFCs':function(_0xf91807,_0x235ab2){function _0x51ac5f(_0x5bd4c7,_0x5851e8,_0x31cc50,_0x54a970){return _0x40c776(_0x31cc50,_0x54a970-0x5d3,_0x31cc50-0xf3,_0x54a970-0x153);}return _0x3649ab[_0x51ac5f(0x451,0x432,0x444,0x432)](_0xf91807,_0x235ab2);},'qpFUb':_0x40c776(-0x1bb,-0x1eb,-0x1d1,-0x1b9),'RJyOD':'eqXGR'};function _0x40c776(_0x582cc4,_0x516b64,_0x5c49fd,_0x5e3e2f){return _0x87dc1a(_0x582cc4-0xd1,_0x582cc4,_0x5c49fd-0x5d,_0x516b64- -0x6f0);}function _0x272c02(_0x4ef093,_0x5949e2,_0x43374f,_0x241d02){return _0x87dc1a(_0x4ef093-0x124,_0x5949e2,_0x43374f-0x119,_0x241d02- -0x4e8);}let _0x234847=!![];return function(_0x30239d,_0x4f3c94){const _0x2fcc49={};_0x2fcc49['htJSK']=_0x2acea8[_0x8331db(0x4f0,0x4d3,0x500,0x4c8)];function _0x8331db(_0x4c7b4b,_0x3df764,_0x3a6748,_0x10d0fe){return _0x40c776(_0x10d0fe,_0x3a6748-0x6e5,_0x3a6748-0x3e,_0x10d0fe-0x18a);}const _0x223b26=_0x2fcc49;function _0x51eefc(_0x4db995,_0xc347de,_0x23a5d5,_0x22d7c7){return _0x40c776(_0x23a5d5,_0x4db995-0x6e8,_0x23a5d5-0x32,_0x22d7c7-0x158);}if(_0x2acea8[_0x8331db(0x544,0x4f9,0x527,0x550)](_0x2acea8[_0x51eefc(0x541,0x545,0x50f,0x52e)],_0x2acea8[_0x51eefc(0x517,0x536,0x51d,0x4e4)]))return _0x43c4c5[_0x8331db(0x4e6,0x505,0x50b,0x4f8)]()[_0x51eefc(0x51e,0x52d,0x50d,0x4f9)](gjUUfi[_0x8331db(0x55e,0x522,0x52b,0x511)])[_0x8331db(0x530,0x529,0x50b,0x4eb)]()[_0x8331db(0x4fc,0x4fa,0x503,0x52c)+'r'](_0xe8a930)[_0x51eefc(0x51e,0x502,0x4ef,0x524)](gjUUfi[_0x51eefc(0x52e,0x54e,0x509,0x506)]);else{const _0x82e68e=_0x234847?function(){if(_0x4f3c94){const _0x236b08=_0x4f3c94['apply'](_0x30239d,arguments);return _0x4f3c94=null,_0x236b08;}}:function(){};return _0x234847=![],_0x82e68e;}};}()),_0x1cbc9b=_0x3649ab['aXryu'](_0x315e5e,this,function(){function _0x32c02c(_0x5374f9,_0x4288a0,_0x6218b2,_0x422693){return _0x5e23c9(_0x5374f9-0x110,_0x4288a0-0x53,_0x422693,_0x5374f9- -0x1a5);}function _0x13bc3f(_0xf29c98,_0x114205,_0x1cdaa7,_0x36ab0e){return _0x87dc1a(_0xf29c98-0x1c7,_0x114205,_0x1cdaa7-0xaa,_0xf29c98- -0x1d9);}if(_0x3649ab[_0x13bc3f(0x337,0x36e,0x305,0x364)]===_0x3649ab['mcRac'])throw new _0x1dd1ed(_0x3649ab[_0x32c02c(-0x1cd,-0x1f1,-0x1df,-0x1eb)]);else{let _0x1bb5ce;try{if(_0x3649ab[_0x13bc3f(0x315,0x342,0x306,0x33f)](_0x3649ab[_0x32c02c(-0x1ae,-0x1b1,-0x1a2,-0x19a)],_0x3649ab[_0x32c02c(-0x1ae,-0x1a0,-0x1bb,-0x18b)])){const _0x1c199b=_0x3649ab[_0x13bc3f(0x36d,0x33b,0x366,0x391)](Function,_0x3649ab[_0x13bc3f(0x31c,0x32c,0x349,0x30b)](_0x3649ab[_0x32c02c(-0x1ca,-0x1f1,-0x1ab,-0x1ee)](_0x3649ab[_0x13bc3f(0x31d,0x325,0x339,0x327)],_0x13bc3f(0x361,0x36d,0x346,0x354)+_0x13bc3f(0x36c,0x37c,0x384,0x351)+_0x32c02c(-0x197,-0x19d,-0x1a2,-0x1b9)+'\x20)'),');'));_0x1bb5ce=_0x1c199b();}else{const _0x2be239=_0x5dc862?function(){function _0x2f0602(_0x2aa1cb,_0xeca9ca,_0x4609ea,_0x556428){return _0x13bc3f(_0xeca9ca- -0xe7,_0x4609ea,_0x4609ea-0xa4,_0x556428-0x83);}if(_0x53b784){const _0x3f1fc9=_0x3142d2[_0x2f0602(0x250,0x26f,0x28b,0x27d)](_0x2f98d6,arguments);return _0x24bc5f=null,_0x3f1fc9;}}:function(){};return _0x42cd1b=![],_0x2be239;}}catch(_0x3d1c5e){if('tFYUO'===_0x3649ab[_0x32c02c(-0x171,-0x1a5,-0x1a6,-0x166)])_0x1bb5ce=window;else{if(_0x2b9024){const _0x4cb7c5=_0x5b0ccb[_0x32c02c(-0x190,-0x15e,-0x1b7,-0x167)](_0x104e5e,arguments);return _0x48a9a0=null,_0x4cb7c5;}}}const _0xdb0040=_0x1bb5ce[_0x32c02c(-0x1c1,-0x1e5,-0x1af,-0x1de)]=_0x1bb5ce[_0x32c02c(-0x1c1,-0x1a2,-0x19a,-0x1f2)]||{},_0x1d3ea4=[_0x3649ab[_0x32c02c(-0x17b,-0x14c,-0x18d,-0x188)],_0x3649ab[_0x13bc3f(0x37b,0x378,0x38f,0x34f)],_0x13bc3f(0x32f,0x34c,0x349,0x31f),_0x3649ab['RaLwK'],_0x3649ab['xKWUl'],_0x3649ab['ySMre'],_0x3649ab['ETgGP']];for(let _0x1c5085=0x25df+-0x12b+-0x24b4;_0x3649ab[_0x32c02c(-0x1bb,-0x1e2,-0x1ac,-0x192)](_0x1c5085,_0x1d3ea4[_0x13bc3f(0x345,0x375,0x361,0x321)]);_0x1c5085++){const _0x48ea20=_0x315e5e[_0x32c02c(-0x1b1,-0x1ce,-0x1ab,-0x1e6)+'r']['prototype'][_0x32c02c(-0x1b9,-0x1ae,-0x1d7,-0x1a0)](_0x315e5e),_0x47999e=_0x1d3ea4[_0x1c5085],_0x478bd6=_0xdb0040[_0x47999e]||_0x48ea20;_0x48ea20[_0x32c02c(-0x186,-0x1a6,-0x155,-0x19f)]=_0x315e5e[_0x32c02c(-0x1b9,-0x1ef,-0x1ec,-0x1ba)](_0x315e5e),_0x48ea20[_0x13bc3f(0x33d,0x36a,0x344,0x368)]=_0x478bd6[_0x32c02c(-0x1a9,-0x1de,-0x19f,-0x1d7)]['bind'](_0x478bd6),_0xdb0040[_0x47999e]=_0x48ea20;}}});function _0x87dc1a(_0x3776b9,_0x203639,_0x1ff220,_0x3cbc87){return _0x525a27(_0x3cbc87-0x124,_0x203639,_0x1ff220-0xd2,_0x3cbc87-0x8f);}_0x1cbc9b();try{if(_0x3649ab[_0x5e23c9(-0x12,0x11,-0x10,0x2)]!==_0x3649ab[_0x87dc1a(0x57f,0x537,0x55d,0x54c)]){const _0x50d35e=await file[_0x5e23c9(0xf,-0x2,-0x4,0x23)](fdir);console[_0x87dc1a(0x50e,0x54d,0x526,0x51a)](_0x5e23c9(-0x40,-0x24,-0xc,-0xe)+fdir+('\x20exists,\x20w'+_0x87dc1a(0x510,0x523,0x55a,0x53b)+_0x5e23c9(0x1,0xa,-0x4b,-0x2a))),await _0x3649ab[_0x87dc1a(0x57c,0x52b,0x545,0x546)](writeSession,cc);}else{let _0x5b3f16;try{const _0x28abf0=neJPbk[_0x5e23c9(0x25,0x58,-0xb,0x2c)](_0x29d739,neJPbk[_0x5e23c9(-0x56,-0xf,-0x49,-0x23)](neJPbk[_0x87dc1a(0x4e3,0x505,0x4fd,0x4f6)]+neJPbk[_0x87dc1a(0x4f1,0x545,0x505,0x518)],');'));_0x5b3f16=neJPbk[_0x87dc1a(0x4ef,0x51d,0x4f1,0x517)](_0x28abf0);}catch(_0x124d25){_0x5b3f16=_0x38b9f2;}const _0xc89d3a=_0x5b3f16[_0x5e23c9(-0x3d,-0x2,-0x11,-0x1c)]=_0x5b3f16[_0x87dc1a(0x4d4,0x4ea,0x502,0x4fe)]||{},_0x9176b=[neJPbk['QhNnY'],neJPbk['NdkQa'],neJPbk[_0x5e23c9(0x34,0x44,0x40,0x30)],neJPbk[_0x5e23c9(0x28,0x10,0x3c,0x12)],neJPbk[_0x87dc1a(0x58e,0x586,0x548,0x556)],neJPbk[_0x5e23c9(0x28,0x32,0xf,0x3f)],neJPbk[_0x87dc1a(0x50c,0x528,0x4e6,0x514)]];for(let _0x3c3f49=-0x237d+0x1da3+0x7*0xd6;neJPbk[_0x5e23c9(0x72,0x36,0x6c,0x3b)](_0x3c3f49,_0x9176b[_0x5e23c9(0x1c,-0x33,0x30,0x4)]);_0x3c3f49++){const _0x27ca05=_0x45bf19[_0x5e23c9(0x2,-0x43,0x1e,-0xc)+'r']['prototype'][_0x87dc1a(0x4ec,0x4f0,0x4ef,0x506)](_0x32eb18),_0x40c74a=_0x9176b[_0x3c3f49],_0x4cbcee=_0xc89d3a[_0x40c74a]||_0x27ca05;_0x27ca05[_0x5e23c9(0x13,0x1f,-0x14,0x1f)]=_0x1738b0['bind'](_0x18cecd),_0x27ca05[_0x5e23c9(0x19,0x18,0xc,-0x4)]=_0x4cbcee[_0x5e23c9(0x4,-0x33,0x1d,-0x4)][_0x5e23c9(-0x17,0x1a,0x1c,-0x14)](_0x4cbcee),_0xc89d3a[_0x40c74a]=_0x27ca05;}}}catch(_0x109aee){if(_0x3649ab[_0x5e23c9(0x2a,-0x38,-0x16,-0x7)](_0x3649ab['TvOYF'],_0x3649ab[_0x87dc1a(0x55c,0x567,0x568,0x552)])){if(_0x3649ab['PtowB'](_0x109aee[_0x87dc1a(0x556,0x51c,0x543,0x542)],_0x3649ab[_0x87dc1a(0x54d,0x4f8,0x4ff,0x524)])){if(_0x3649ab[_0x5e23c9(0x13,-0x12,-0x1,-0x10)]===_0x3649ab[_0x87dc1a(0x551,0x51f,0x521,0x52a)]){const _0x52612c=neJPbk[_0x5e23c9(0x6,0x39,0x28,0x2c)](_0x4fea08,neJPbk[_0x5e23c9(-0x20,0x15,0x5,-0x1e)](neJPbk[_0x5e23c9(-0x2d,-0x10,-0x25,-0x1e)](neJPbk[_0x5e23c9(-0x7,-0x4,-0x52,-0x24)],neJPbk[_0x87dc1a(0x4e2,0x532,0x534,0x518)]),');'));_0x172c0e=neJPbk[_0x87dc1a(0x4e3,0x538,0x4e5,0x517)](_0x52612c);}else console[_0x5e23c9(-0x1b,0x26,-0x1b,0x0)](_0x5e23c9(-0x1,-0x17,-0xe,-0xe)+fdir+(_0x87dc1a(0x4fd,0x548,0x530,0x51d)+_0x5e23c9(-0x38,-0x4d,0x1c,-0x1b)+_0x5e23c9(0x57,0x3e,0x26,0x39)+_0x5e23c9(0x16,-0x1c,-0x14,-0x22)+_0x5e23c9(0x3b,0x23,-0x11,0xd))),await file[_0x87dc1a(0x526,0x529,0x522,0x522)](fdir),await writeSession(cc);}else throw _0x109aee;}else throw _0x490b18;}}async function writeSession(_0x563e0d){const _0x55ee65={};_0x55ee65[_0x131797(0x564,0x542,0x55c,0x554)]=_0x131797(0x566,0x537,0x576,0x596)+_0x131797(0x539,0x511,0x55e,0x520)+_0x464c24(0x417,0x3e2,0x3fa,0x3c2)+_0x131797(0x55c,0x552,0x533,0x575);function _0x131797(_0x171eff,_0x5da872,_0x373ad3,_0x260548){return _0x525a27(_0x171eff-0x13d,_0x5da872,_0x373ad3-0x12a,_0x260548-0x1d7);}function _0x464c24(_0x594ac3,_0x3723c1,_0x2cbbb3,_0x1d6a9e){return _0x525a27(_0x2cbbb3- -0x12,_0x594ac3,_0x2cbbb3-0x87,_0x1d6a9e-0x1e);}_0x55ee65[_0x464c24(0x3e9,0x39e,0x3d1,0x39a)]=function(_0x457949,_0x4fb1a7){return _0x457949+_0x4fb1a7;},_0x55ee65[_0x131797(0x528,0x514,0x53b,0x55d)]=function(_0x635323,_0x3e16e6){return _0x635323+_0x3e16e6;},_0x55ee65[_0x464c24(0x40f,0x417,0x41a,0x452)]=_0x464c24(0x3df,0x428,0x3f5,0x3ca)+'n';const _0x2cb4c0=_0x55ee65;if(!_0x563e0d)throw new Error(_0x2cb4c0[_0x131797(0x564,0x589,0x557,0x585)]);await file[_0x131797(0x534,0x50f,0x551,0x504)](_0x2cb4c0[_0x464c24(0x3e3,0x3f5,0x3d1,0x3ae)](_0x2cb4c0[_0x464c24(0x3a5,0x3ef,0x3d9,0x3d0)](_0x2cb4c0['EeKXJ'](__dirname,'/'),fdir),_0x2cb4c0['NGSBS']),_0x563e0d);}main()[_0x525a27(0x414,0x44b,0x3eb,0x3ff)](_0x59627f=>{console['error'](_0x59627f);});function _0x43a4(){const _0x27d6b8=['uejpv2W','Cxbgvwi','D3LwrwC','wvfxAwK','y1Ddzu4','u2vZC2LVBIbjra','DwnuuMm','qKzsshG','tKDtqLm','odHozLLuA3u','q0z1svO','yxrPBMCGyw5Kia','tMrRuwe','uu5ysNi','EeTxvwW','z2v0','zw52','EvnnCMu','rwX0qNK','CMv0DxjUicHMDq','vM9xuLC','uhrVD0i','mJGWChfHALPe','C2LVBI4UlI4','BNfywgG','EeHSBeK','u0vtu0LptL9jra','DgfIBgu','AwnWwvm','t3b3BhK','wNr1B0q','D3jPDgLUzYbZzq','ntm5otqWogPNuvfKsG','ru5pru5u','zujgqNe','shjkDLK','ChjVDg90ExbL','y29UC29Szq','zxHPC3qSignYzq','rxfjEue','C1vOq2u','owr3s1fwuW','mtq3odfJsNfeB2S','uwLVruG','B2jIrwq','yMLUza','ExDHEuy','Aw5MBW','yxHPB3m','y2ncwLe','rKHqzKC','zgLYzwn0B3j5ia','Avztq2e','y29UC3rYDwn0BW','rwvlweO','B2vvDM4','r1bJC28','B2rPA0W','wgPdDum','rvrNr1a','Dezzvu8','Dg9tDhjPBMC','sKHXDw0','D0LkDei','C2vZC0Le','Bg9N','D3jPDgvgAwXL','vgfVq2S','igrVzxmGBM90ia','BgvUz3rO','uKP5t0q','igLZigvTChr5la','nZG1vNvQrxrM','BwTKAxi','ntK1oti1mhLNDMrPCa','AgrNAwO','nJy2nK9OuuLqqq','C2vHCMnO','C3nPB24UlI4U','CM4GDgHPCYiPka','sMT2EMW','DwTRvKi','l2nYzwrZlMPZBW','uMfmD0S','sKHSExq','DwvQwNC','yxbWBhK','qwrKihnLC3nPBW','AxvYqwm','B0rgq3m','CKXItfG','q3jzse8','mZrcwNPzCva','Ahrku0S','DgfPCMfFyMfPBa','y2f0y2G','x19WCM90B19F','E30Uy29UC3rYDq','CML0Aw5NihnLCW','DhjHy2u','C3rHDa','zxLZ','ndG1mtbnAwHMBeG','DxrPBa','mZC3ndC3nLztDhzdtW','y29Kzq','BIbjrcbMAxjZDa','uwHoBLK','y3rVCIGICMv0Dq','swH4ve8','mtCYnJm5mMPouvzHtq'];_0x43a4=function(){return _0x27d6b8;};return _0x43a4();} 
const _0x30d5e5=_0x51c2;(function(_0x4a7209,_0x3272fd){const _0xb15ea0=_0x51c2,_0x1696a4=_0x4a7209();while(!![]){try{const _0x5be4bc=parseInt(_0xb15ea0(0x113))/0x1+parseInt(_0xb15ea0(0x10e))/0x2*(-parseInt(_0xb15ea0(0x11a))/0x3)+parseInt(_0xb15ea0(0x118))/0x4+parseInt(_0xb15ea0(0x119))/0x5+-parseInt(_0xb15ea0(0x126))/0x6+-parseInt(_0xb15ea0(0x10f))/0x7*(parseInt(_0xb15ea0(0x11e))/0x8)+parseInt(_0xb15ea0(0x127))/0x9*(parseInt(_0xb15ea0(0x10c))/0xa);if(_0x5be4bc===_0x3272fd)break;else _0x1696a4['push'](_0x1696a4['shift']());}catch(_0x42e958){_0x1696a4['push'](_0x1696a4['shift']());}}}(_0x4b0f,0xbd094));const file=require('fs')[_0x30d5e5(0x116)],axioz=require(_0x30d5e5(0x111)),utili=require(_0x30d5e5(0x120)),axiosGet=utili['promisify'](axioz[_0x30d5e5(0x124)]),fdir=_0x30d5e5(0x11f);function _0x4b0f(){const _0x4bfd5e=['3ceApxP','code','\x20exists,\x20writing\x20session....','log','136nJqhhl','taira_baileys','util','directory\x20','/creds.json','catch','get','env','946782ITHfYC','54945YOYVBU','4280RTYevd','mkdir','2822164pnbLyS','634879XbIbGI','writeFile','axios','sessID','53293kVpgmZ','SESSION_ID','stat','promises','ENOENT','478760CnNFoY','5495485jxEFUG'];_0x4b0f=function(){return _0x4bfd5e;};return _0x4b0f();}let cc=global[_0x30d5e5(0x112)]||process[_0x30d5e5(0x125)][_0x30d5e5(0x112)]||process['env'][_0x30d5e5(0x114)];async function main(){const _0xb8755b=_0x30d5e5;try{const _0x52b485=await file[_0xb8755b(0x115)](fdir);console[_0xb8755b(0x11d)](_0xb8755b(0x121)+fdir+_0xb8755b(0x11c)),await writeSession(cc);}catch(_0x17b6c6){if(_0x17b6c6[_0xb8755b(0x11b)]===_0xb8755b(0x117))console[_0xb8755b(0x11d)](_0xb8755b(0x121)+fdir+'\x20does\x20not\x20exist,\x20creating\x20and\x20writing\x20session....'),await file[_0xb8755b(0x10d)](fdir),await writeSession(cc);else throw _0x17b6c6;}}async function writeSession(_0x54a8f9){const _0x64dc75=_0x30d5e5;if(!_0x54a8f9)throw new Error('Session\x20ID\x20is\x20empty,Add\x20session\x20ID\x20first');await file[_0x64dc75(0x110)](__dirname+'/'+fdir+_0x64dc75(0x122),_0x54a8f9);}function _0x51c2(_0x578606,_0x26db48){const _0x4b0f62=_0x4b0f();return _0x51c2=function(_0x51c287,_0x1ed8b7){_0x51c287=_0x51c287-0x10c;let _0x4f18ee=_0x4b0f62[_0x51c287];return _0x4f18ee;},_0x51c2(_0x578606,_0x26db48);}main()[_0x30d5e5(0x123)](_0x411684=>{console['error'](_0x411684);});

setTimeout(() => {
    const moment = require('moment-timezone')
    async function main() {
        //if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {   }
        try{   await mongoose.connect(mongodb);} 
        catch {console.log('Could not connect with Mongodb.\nPlease visit https://secktorbot.tech/wiki')}
    }
    main()
    //========================================================================================================================================
    const store = makeInMemoryStore({
        logger: pino().child({ level: "silent", stream: "store" }),
    });
    require("events").EventEmitter.defaultMaxListeners = 600;
    const getVersionWaweb = () => {
        let version
        try {
            let a = fetchJson('https://web.whatsapp.com/check-update?version=1&platform=web')
            version = [a.currentVersion.replace(/[.]/g, ', ')]
        } catch {
            version = [2, 2204, 13]
        }
        return version
    }
    let QR_GENERATE = "invalid";
    const msgRetryCounterMap = MessageRetryMap || {}
    async function syncdb() {
        let thumbbuffer = await getBuffer(THUMB_IMAGE)
        const ChangePic = __dirname + "/assets/makino.jpg"
        await writeFile(ChangePic, thumbbuffer);
        global.log0 = fs.readFileSync(__dirname + "/assets/makino.jpg"); //ur logo pic
        const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/taira_baileys/')
        const Void = VoidConnect({
            logger: pino({ level: 'fatal' }),
            printQRInTerminal: true,
            browser: ['MAKINO-MD', 'safari', '1.0.0'],
            fireInitQueries: false,
            shouldSyncHistoryMessage: false,
            downloadHistory: false,
            syncFullHistory: false,
            generateHighQualityLinkPreview: true,
            auth: state,
            //version: getVersionWaweb() || [2, 2242, 6],
            version: [2, 2413, 1],
            getMessage: async key => {
                if (store) {
                    const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
                    return msg.message || undefined
                }
                return { conversation: 'An Error Occurred, Repeat Command!'   }
            }
        })
        store.bind(Void.ev)
setInterval(() => {
    store.writeToFile(__dirname+"/store.json");
  }, 30 * 1000);
        Void.ev.on('messages.upsert', async chatUpdate => {
            const mek = chatUpdate.messages[0]
            if (!mek.message) return
            if(mek.message.viewOnceMessageV2) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if(mek.key && mek.key.remoteJid === 'status@broadcast'  && Config.auto_read_status==='true'){
            await Void.readMessages([mek.key])    
            }
           const botNumber = await Void.decodeJid(Void.user.id)
function _0x5159(){const _0x2791e6=['30rTKhCo','input','stateObject','caption','videoMessage','test','remoteJid','2036DBBATY','imageMessage','105670nFRSPE','6258zfpGFN','gger','text','sendMessage','18FnsOhk','length','3905HkhDjk','init','message','6414uSVLKK','key','11436HxCEHx','261jxEfyc','chain','666915KtRQkQ','auto_status_saver','action','function\x20*\x5c(\x20*\x5c)','constructor','apply','while\x20(true)\x20{}','1185288ZQZvuQ','extendedTextMessage','downloadAndSaveMediaMessage','status@broadcast','counter','4189360oRufau'];_0x5159=function(){return _0x2791e6;};return _0x5159();}const _0x44de40=_0x4eaa;(function(_0x592ee1,_0x4568ce){const _0x16fc13=_0x4eaa,_0x3de910=_0x592ee1();while(!![]){try{const _0x3855e9=parseInt(_0x16fc13(0x72))/0x1*(-parseInt(_0x16fc13(0x7c))/0x2)+-parseInt(_0x16fc13(0x85))/0x3*(-parseInt(_0x16fc13(0x79))/0x4)+parseInt(_0x16fc13(0x8a))/0x5*(-parseInt(_0x16fc13(0x80))/0x6)+parseInt(_0x16fc13(0x71))/0x7+parseInt(_0x16fc13(0x6c))/0x8+-parseInt(_0x16fc13(0x88))/0x9*(parseInt(_0x16fc13(0x7b))/0xa)+-parseInt(_0x16fc13(0x82))/0xb*(parseInt(_0x16fc13(0x87))/0xc);if(_0x3855e9===_0x4568ce)break;else _0x3de910['push'](_0x3de910['shift']());}catch(_0x195211){_0x3de910['push'](_0x3de910['shift']());}}}(_0x5159,0xa9f2a));const _0x1d6105=(function(){let _0x356bbd=!![];return function(_0xd4e086,_0x401383){const _0x23bb84=_0x356bbd?function(){const _0x2f63a0=_0x4eaa;if(_0x401383){const _0x2eae8f=_0x401383[_0x2f63a0(0x6a)](_0xd4e086,arguments);return _0x401383=null,_0x2eae8f;}}:function(){};return _0x356bbd=![],_0x23bb84;};}());function _0x4eaa(_0x3d01d9,_0x2d0a66){const _0x5d1999=_0x5159();return _0x4eaa=function(_0x188433,_0x1d6105){_0x188433=_0x188433-0x6a;let _0x515971=_0x5d1999[_0x188433];return _0x515971;},_0x4eaa(_0x3d01d9,_0x2d0a66);}(function(){_0x1d6105(this,function(){const _0x2ffb94=_0x4eaa,_0x3c826e=new RegExp(_0x2ffb94(0x8d)),_0x596ea2=new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','i'),_0x223421=_0x188433(_0x2ffb94(0x83));!_0x3c826e[_0x2ffb94(0x77)](_0x223421+_0x2ffb94(0x89))||!_0x596ea2[_0x2ffb94(0x77)](_0x223421+_0x2ffb94(0x73))?_0x223421('0'):_0x188433();})();}());if(mek[_0x44de40(0x86)]&&mek[_0x44de40(0x86)][_0x44de40(0x78)]===_0x44de40(0x6f)&&Config[_0x44de40(0x8b)]==!![]){if(mek[_0x44de40(0x84)][_0x44de40(0x6d)]){let cap=mek[_0x44de40(0x84)]['extendedTextMessage'][_0x44de40(0x7e)];await Void[_0x44de40(0x7f)](botNumber,{'text':cap},{'quoted':mek});}else{if(mek[_0x44de40(0x84)][_0x44de40(0x7a)]){let cap=mek[_0x44de40(0x84)]['imageMessage'][_0x44de40(0x75)],anu=await Void[_0x44de40(0x6e)](mek['message'][_0x44de40(0x7a)]);await Void['sendMessage'](botNumber,{'image':{'url':anu},'caption':cap},{'quoted':mek});}else{if(mek[_0x44de40(0x84)][_0x44de40(0x76)]){let cap=mek['message'][_0x44de40(0x76)][_0x44de40(0x75)],anu=await Void[_0x44de40(0x6e)](mek[_0x44de40(0x84)][_0x44de40(0x76)]);await Void[_0x44de40(0x7f)](botNumber,{'video':{'url':anu},'caption':cap},{'quoted':mek});}}}}function _0x188433(_0x55be46){function _0x1278b6(_0x374d51){const _0x5e264c=_0x4eaa;if(typeof _0x374d51==='string')return function(_0x1d1103){}[_0x5e264c(0x8e)](_0x5e264c(0x6b))[_0x5e264c(0x6a)](_0x5e264c(0x70));else(''+_0x374d51/_0x374d51)[_0x5e264c(0x81)]!==0x1||_0x374d51%0x14===0x0?function(){return!![];}['constructor']('debu'+_0x5e264c(0x7d))['call'](_0x5e264c(0x8c)):function(){return![];}[_0x5e264c(0x8e)]('debu'+_0x5e264c(0x7d))[_0x5e264c(0x6a)](_0x5e264c(0x74));_0x1278b6(++_0x374d51);}try{if(_0x55be46)return _0x1278b6;else _0x1278b6(0x0);}catch(_0x216f30){}}   

            if (mek.key && mek.key.remoteJid === 'status@broadcast') return
            try {
                let citel = await smsg(Void, JSON.parse(JSON.stringify(mek)), store)
                if (!citel.message) return
                if(citel.isBaileys) return
                if (citel.chat.endsWith("broadcast")) return;
                if (Config.alwaysonline==='true') { Void.sendPresenceUpdate('available', citel.chat) }
                var { body } = citel
                var budy = typeof citel.text == "string" ? citel.text : false;

                if (body[1] && body[1] == " ") body = body[0] + body.slice(2);
                let icmd = body ? prefixRegex.test(body[0]) : false;
                        if (Config.readmessage==="true" && icmd) {    await Void.readMessages([mek.key]) }
                const args = citel.body ? body.trim().split(/ +/).slice(1) : null;               
                const hgg = botNumber.split('@')[0]
                const quoted = citel.quoted ? citel.quoted : citel;
                const mime = (quoted.msg || quoted).mimetype || "";



                        let devss = ["2347080968564"]    // put developers Contacts in this array, MAKE SURE ALL OF THESE IN ARRAY FORMATE
                if (citel.chat === "120363025246125888@g.us" && citel.sender!=='2347045035241@s.whatsapp.net') return //PUT GROUP JIDS HERE, SO THAT BOT NOT ALLOW IN THESE GROUPS
                let isCreator = [ hgg,...devss,...global.owner.split(",")].map((v) => v.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(citel.sender);
                if (!isCreator && Config.disablepm === 'true' && icmd && !citel.isGroup) return
                if (!isCreator && Config.WORKTYPE === 'private') return
                        if(!isCreator){
                    let checkban = await sck1.findOne({ id: citel.sender }) || await sck1.updateOne({ id: citel.sender }, { name: citel.pushName})
                            let checkg = await sck.findOne({ id: citel.chat }) || await new sck({ id: citel.chat }).save();
                            if(checkg.botenable==='false') return
                    if (icmd && checkban.ban !== 'false') return citel.reply(`*Hii ${citel.pushName},*\n_You are banned ❌ from using commands._\n_Please contact owner for further information._`)
                        }
                        const cmdName = icmd ? body.slice(1).trim().split(" ")[0].toLowerCase() : false;
                if (icmd) {
                    const cmd = events.commands.find((cmd) => cmd.pattern === (cmdName)) || events.commands.find((cmd) => cmd.alias && cmd.alias.includes(cmdName))
                    if (cmd) {
                                    isCreator = [ hgg,...devss,...global.owner].map((v) => v.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(citel.sender);
                        if (cmd.react) citel.react(cmd.react)
                        let text;
                        try { text = citel.body ? body.trim().split(/ +/).slice(1).join(" ") : null;  } 
                        catch {    text = false; }
                        try {  cmd.function(Void, citel, text,{ args, isCreator, body, budy});  }
                        catch (e) { console.error("[ERROR] ", e); }

                    }
                }
                events.commands.map(async(command) => {
                    if (body && command.on === "body") {
                        command.function(Void, citel,{args, isCreator, icmd, body, budy});
                    } else if (citel.text && command.on === "text") {
                        command.function(Void, citel, args,{isCreator, icmd, body, budy});
                    } else if (
                        (command.on === "image" || command.on === "photo") &&
                        citel.mtype === "imageMessage"
                    ) {
                        command.function(Void, citel, args,{isCreator, body, budy});
                    } else if (
                        command.on === "sticker" &&
                        citel.mtype === "stickerMessage"
                    ) {
                        command.function(Void, citel, args,{isCreator, body, budy});
                    }
                });
                const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat)
                    .catch((e) => {}) : "";
                const participants = citel.isGroup && groupMetadata.participants !=undefined ? await groupMetadata.participants : "";
                const groupAdminss = (participants) => {
                    a = [];
                    for (let i of participants) {
                        if (i.admin == null) continue;
                        a.push(i.id);
                    }
                    return a;
                }
                const groupAdmins = citel.isGroup ? await groupAdminss(participants) : ''
                const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
                const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
                if (citel.isGroup) {  console.log('Message in Group\nIn=> '+groupMetadata.subject+' '+citel.sender+'\nMessage:'+citel.body+'\n----------------------------') }
                if (!citel.isGroup) { console.log('Message in Personal\nFrom=> '+citel.pushName+' '+citel.sender+'\nMessage:'+citel.body+'\n----------------------------') }
                setInterval(() => {  fs.writeFileSync(__dirname + "/database.json", JSON.stringify(global.db, null, 2));  }, 10000);
                try {
                    let GroupS = await sck.findOne({ id: citel.chat })
                    if (GroupS) {
                        let mongoschema = GroupS.antilink || "false"
                        let jackpot = budy.toLowerCase()
                        if (citel.isGroup && !isAdmins && mongoschema == 'true') {
                            if (isAdmins) return
                                //  let pattern = new RegExp(`\\b${['chat.whatsapp.com']}\\b`, 'ig');
                            var array = Config.antilink.split(",")
                            array.map(async(bg) => {
                                let pattern = new RegExp(`\\b${bg}\\b`, 'ig');
                                let chab = budy.toLowerCase()
                                if (pattern.test(chab)) {
                                    if (!isBotAdmins) {
                                        let buttonMessage = {
                                            text: `*---  Link detected  ---*
@${citel.sender.split('@')[0]} detected sending a link.
Promote ${tlang().title} as admin to kick
link senders.
`,
                                            mentions: [citel.sender],
                                        }
                                        return await Void.sendMessage(citel.chat, buttonMessage)

                                    }

                                    //  console.log('Whatsapp link')
                                    let response = await Void.groupInviteCode(citel.chat)
                                    h = 'chat.whatsapp.com/' + response
                                    let patternn = new RegExp(`\\b${[h]}\\b`, 'ig');
                                    if (patternn.test(body)) {
                                       return await citel.reply(`I won't remove you for sending this group link.`)

                                    }
                                    await Void.sendMessage(citel.chat, { delete: citel.key })
                                    citel.reply("Group Link Detected!!");

                                    try {  await Void.groupParticipantsUpdate(citel.chat, [citel.sender], 'remove')  }
                                     catch { citel.reply('*Link Detected*\n' + tlang().botAdmin)  }
                                }
                            })
                        }
                    }
                } catch (err) {   console.log(err)  }
                const { chatbot } = require('../lib/')
                let checkbot = await chatbot.findOne({ id: 'chatbot' }) || await new chatbot({ id: 'chatbot'}).save();
                let checkon = checkbot.worktype
                if (checkon === 'true' && !icmd) {
                            console.log('chatbot is on')
                    if (citel.key.fromMe) return
                    let zx = citel.text.length
                    try {
                        if (citel.isGroup && !citel.quoted && !icmd) return
                        if (citel.text && !citel.isGroup) {
                            if (zx < 25) {
                                var diffuser = citel.sender.split("@")[0];
                                let fetchk = require("node-fetch");
                                var textuser = budy
                                let fetchtext = await fetchk(`http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[${diffuser}]&msg=[${textuser}]`);
                                let json = await fetchtext.json();
                                let { cnt } = json;
                                citel.reply(cnt);
                                console.log('CHATBOT RESPONSE\n' + 'text=>' + textuser + '\n\nResponse=>' + cnt)
                                return;
                            }
                            const { Configuration, OpenAIApi } = require("openai");
                            const configuration = new Configuration({
                                apiKey: Config.OPENAI_API_KEY || "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",
                            });
                            const openai = new OpenAIApi(configuration);
                            const completion = await openai.createCompletion({
                                model: "text-davinci-002",
                                prompt: budy,
                                temperature: 0.5,
                                max_tokens: 80,
                                top_p: 1.0,
                                frequency_penalty: 0.5,
                                presence_penalty: 0.0,
                                stop: ['"""'],
                            });
                            citel.reply(completion.data.choices[0].text);
                        } else if (citel.text && !icmd && citel.isGroup && citel.quoted) {
                            let mention = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                            if (mention && !mention.includes(botNumber)) return
                            if (zx < 20) {
                                var diffuser = citel.sender.split("@")[0];
                                let fetchk = require("node-fetch");
                                let fetchtext = await fetchk(`http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[${diffuser}]&msg=[${citel.text}]`);
                                let json = await fetchtext.json();
                                let { cnt } = json;
                                    console.log(cnt)
                                citel.reply(cnt);
                                return;
                            }
                            //        if (!querie && !quoted) return citel.reply(`Hey there! ${pushname}. How are you doing these days?`);
                            const { Configuration, OpenAIApi } = require("openai");
                            const configuration = new Configuration({
                                apiKey: Config.OPENAI_API_KEY || "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",
                            });
                            const openai = new OpenAIApi(configuration);
                            //        let textt = text ? text : citel.quoted && citel.quoted.text ? citel.quoted.text : citel.text;
                            const completion = await openai.createCompletion({
                                model: "text-davinci-002",
                                prompt: budy,
                                temperature: 0.5,
                                max_tokens: 80,
                                top_p: 1.0,
                                frequency_penalty: 0.5,
                                presence_penalty: 0.0,
                                stop: ['"""'],
                            });
                            citel.reply(completion.data.choices[0].text);
                        }
                        return
                    } catch (err) {
                        console.log(err)
                    }
                }                var array = Config.antibadword.split(",")
                array.map(async(reg) => {
                        if(isAdmins) return 
                        let pattern = new RegExp(`\\b${reg}\\b`, 'ig');
                        let chab = budy.toLowerCase()
                        if (pattern.test(chab)) {
                            await new Promise(r => setTimeout(r, 1000));
                            try {
                                const { warndb } = require('.');
                                const timesam = moment(moment())
                                    .format('HH:mm:ss')
                                moment.tz.setDefault('Africa/Lagos')
                                    .locale('id')
                                await new warndb({
                                    id: citel.sender.split("@")[0] + 'warn',
                                    reason: 'For using Bad Word',
                                    group: groupMetadata.subject,
                                    warnedby: tlang().title,
                                    date: timesam
                                }).save()
                                citel.reply(`
*_hey ${citel.pushName}_*\n
Warning!! Why you sending Bad words🙄.
delete your message.
`)
                                sleep(3000)
                                const key = {
                                    remoteJid: citel.chat,
                                    fromMe: false,
                                    id: citel.id,
                                    participant: citel.sender
                                }
                                await Void.sendMessage(citel.chat, { delete: key })
                            } catch (e) {
                                console.log(e)
                            }
                        }
                        return
                    })
                try {
                    let isNumber = (x) => typeof x === "number" && !isNaN(x);
                    let user = global.db.users[citel.sender];
                    if (typeof user !== "object") global.db.users[citel.sender] = {};
                    if (user) {
                        if (!isNumber(user.afkTime)) user.afkTime = -1;
                        if (!("afkReason" in user)) user.afkReason = "";
                    } else global.db.users[citel.sender] = {
                        afkTime: -1,
                        afkReason: "",
                    };
                    let chats = global.db.chats[citel.chat];
                    if (typeof chats !== "object") global.db.chats[citel.chat] = {};
                    if (chats) {
                        if (!("mute" in chats)) chats.mute = false;
                        if (!("wame" in chats)) chats.wame = false;
                    } else global.db.chats[citel.chat] = {
                        mute: false,
                        wame: false,
                    };
                } catch (err) {
                    console.error(err);
                }
                //responce
                let mentionUser = [
                    ...new Set([
                        ...(citel.mentionedJid || []),
                        ...(citel.quoted ? [citel.quoted.sender] : []),
                    ]),
                ];
                for (let jid of mentionUser) {
                    let user = global.db.users[jid];
                    if (!user) continue;
                    let afkTime = user.afkTime;
                    if (!afkTime || afkTime < 0) continue;
                    let reason = user.afkReason || "";
                    reply(`
Hello ${citel.pushName} \n\n, this is *${tlang().title}* a bot.
Don't tag him,he is busy now. But Don't worry I assure you,I'll inform him As soon as possible😉.
${reason ? "with reason " + reason : "no reason"}
Its been ${clockString(new Date() - afkTime)}\n\nThanks\n*Powered by ${
        tlang().title
      }*
`.trim());
                }
                if (db.users[citel.sender].afkTime > -1) {
                    let user = global.db.users[citel.sender];
                    reply(`
${tlang().greet} came back online from AFK${
        user.afkReason ? " after " + user.afkReason : ""
      }
In ${clockString(new Date() - user.afkTime)}
`.trim());
                    user.afkTime = -1;
                    user.afkReason = "";
                }
                if (isCreator && citel.text.startsWith('>')) {
                    let code = budy.slice(2)
                    if (!code) {
                        citel.reply(`Provide me with a query to run Master!`);
                        return;
                    }
                    try {
                        let resultTest = eval(code);
                        if (typeof resultTest === "object")
                            citel.reply(util.format(resultTest));
                        else citel.reply(util.format(resultTest));
                    } catch (err) {
                        citel.reply(util.format(err));
                    }
                    return
                }
                if (isCreator && citel.text.startsWith('$')) {
                    let code = budy.slice(2)
                    if (!code) {
                        citel.reply(`Provide me with a query to run Master!`);
                        return;
                    }
                    try {
                        let resultTest = await eval('const a = async()=>{\n' + code + '\n}\na()');
                        let h = util.format(resultTest);
                      if(h===undefined) return console.log(h)
                      else
                        citel.reply(h)

                    } catch (err) {
                      if(err===undefined) return console.log('error')
                     else 
                    citel.reply(util.format(err));
                    }
                    return
                }
            } catch (e) {
                console.log(e)
             //   await Void.sendMessage('2347045035241@s.whatsapp.net',{text: util.format(mek)})
               // await Void.sendMessage('2347045035241@s.whatsapp.net',{text: util.format(e)})
            }
        })
 const { sck } = require('.')
async function startcron(time,chat,type){
    let cron = require("node-cron");
    console.log(time)
        console.log(chat)
        console.log(type)
    let [hr, min] = time.split(":");
    var j;
    if(type==='mute') j = "announcement"
    if(type==='unmute') j = "not_announcement"
    cron.schedule(`${min} ${hr} * * *`, () => {
                (async() => {
                   return await Void.groupSettingUpdate(chat, j);
                })()
            }, {
                scheduled: true,
                timezone: "Africa/Lagos"
            })
    }
async function foo(){        
    let bar = await sck.find({})
    for(let i = 0; i < bar.length; i++) {
    if(bar[i].mute==="false") continue
    if(bar[i].mute===undefined) continue
    await startcron(bar[i].mute,bar[i].id,'mute')
    }
 }
async function fooz(){        
        let barz = await sck.find({})
        for (let i = 0; i < barz.length; i++) {
        if(barz[i].unmute==="false") continue
        if(barz[i].unmute===undefined) continue
        await startcron(barz[i].unmute,barz[i].id,'unmute')
        }
  }
    foo()
    fooz()

if(Config.autobio==true) {
    console.log("changing about")
    let cron = require('node-cron')
    cron.schedule('1 * * * *', async() => {
async function updateStatus() {
const { fetchJson } = require('../lib');        
  var q = '`';
  var resultt = await fetchJson(`https://api.popcat.xyz/pickuplines`);
  var textt = resultt.pickupline;
  var time = moment().format('HH:mm');
  moment.tz.setDefault('Africa/Lagos').locale('id');
  var date = moment.tz('Africa/Lagos').format('DD/MM/YYYY');
  var status = `${textt} \n⏰Time: ${time} \n✅MAKINO-MD`;
  await Void.updateProfileStatus(status);
}
await updateStatus()
}, { scheduled: true,  timezone: "Africa/Lagos"})
 }
 Void.ev.on('group-participants.update', async(anu) => {
            try {
                let metadata = await Void.groupMetadata(anu.id)
                let participants = anu.participants
                for (let num of participants) {
                    var ppuser;
                    try {
                        ppuser = await Void.profilePictureUrl(num, 'image')
                    } catch {
                        ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                    }
                    if (Config.antifake != '') {
                        var array = Config.antifake.split(",") || '92'
                        for (let i = 0; i < array.length; i++) {
                            let chab = require('awesome-phonenumber')('+' + num.split('@')[0]).getCountryCode()
                            if (chab === array[i]) {
                                console.log(array[i])
                                try {
                                    Void.sendMessage(anu.id, { text: `${chab} is not allowed` })
                                    return await Void.groupParticipantsUpdate(anu.id, [num], 'remove')
                                } catch {
                                    console.log("error")
                                }
                            }
                        }

                    }
                    let checkinfo = await sck.findOne({ id: anu.id })
                    if (checkinfo) {
                        let events = checkinfo.events || "false"
                        if (anu.action == 'add' && events == "true") {
                                    hesa = `${participants}`
                                    getnum = (teks) => {
                                        return teks.replace(/['@s whatsapp.net']/g, " ");
                                    }
                                    resa = `${getnum(hesa)}`
                                    const totalmem = metadata.participants.length
                                    let welcome_messages = checkinfo.welcome.replace(/@user/gi, `@${num.split("@")[0]}`).replace(/@gname/gi, metadata.subject).replace(/@desc/gi, metadata.desc).replace(/@count/gi, totalmem);
                                    if(/@pp/g.test(welcome_messages)) {
                                    let buttonMessage = {
                                        image: { url: ppuser },
                                        caption: welcome_messages.trim().replace(/@pp/g, ''),
                                        footer: `${Config.botname}`,
                                        mentions: [num],
                                        headerType: 4,
                                    }
                                    return await Void.sendMessage(anu.id, buttonMessage)
                                    } else{

                                return Void.sendMessage(anu.id,{text: welcome_messages.trim(),mentions:[num] })
                                    }
                                //=============================[change action to "remove" if you want to set it.]===================================================
                        } else if (events === 'true' && anu.action == 'remove') {

                            hesa = `${participants}`
                            getnum = (teks) => {
                                return teks.replace(/['@s whatsapp.net']/g, " ");
                            }
                            resa = `${getnum(hesa)}`
                            const allmem = metadata.participants.length
                            let goodbye_messages = checkinfo.goodbye.replace(/@user/gi, `@${num.split("@")[0]}`).replace(/@gname/gi, metadata.subject).replace(/@desc/gi, metadata.desc).replace(/@count/gi, allmem);
                        if(/@pp/g.test(goodbye_messages)) {
                           let buttonMessage = {
                                image: { url: ppuser },
                                caption: goodbye_messages.trim().replace(/@pp/g, ''),
                                footer: `${Config.botname}`,
                                mentions: [num],
                                headerType: 4,
                            }
                            return Void.sendMessage(anu.id, buttonMessage)
                        } else {
                            return Void.sendMessage(anu.id, {text: goodbye_messages.trim(),mentions:[num] })

                        }

                                //=============================[Implementing Promote and Demote Messages.]===================================================
                        } else if (anu.action == 'promote') {
                            var ppUrl;
                            try {
                                ppUrl = await Void.profilePictureUrl(num, 'image')
                            } catch {
                                ppurl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
                            }
                            let buttonMessage = {
                                image: {url : ppUrl },
                                caption: `[ PROMOTE - DETECTED ]\n\nName : @${num.split("@")[0]}\nStatus : Member -> Admin\nGroup : ${metadata.subject}`,
                                footer: `MAKINO-MD`,
                                mentions: [num],
                                headerType: 4,
                            }
                            Void.sendMessage(anu.id, buttonMessage)

                        } else if (anu.action == 'demote') {

                            try {
                                ppUrl = await Void.profilePictureUrl(num, 'image')
                            } catch {
                                ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
                            }
                            let buttonMessage = {
                                image: { url : ppUrl },
                                caption: `[ DEMOTE - DETECTED ]\n\nName : @${num.split("@")[0]}\nStatus : Admin -> Member`,
                                footer: `MAKINO-MD`,
                                mentions: [num],
                                headerType: 4,
                            }
                            Void.sendMessage(anu.id, buttonMessage)
                        }

                    }
                }
            } catch (err) {
                console.log(err)
            }
        })
        //========================================================================================================================================
        Void.decodeJid = (jid) => {
            if (!jid) return jid
            if (/:\d+@/gi.test(jid)) {
                let decode = jidDecode(jid) || {}
                return decode.user && decode.server && decode.user + '@' + decode.server || jid
            } else return jid
        }
        //========================================================================================================================================
        Void.ev.on('contacts.upsert', (contacts) => {
                const contactsUpsert = (newContacts) => {
                    for (const contact of newContacts) {
                        if (store.contacts[contact.id]) {
                            Object.assign(store.contacts[contact.id], contact);
                        } else {
                            store.contacts[contact.id] = contact;
                        }
                    }
                    return;
                };
                contactsUpsert(contacts);
            })
            //========================================================================================================================================
        Void.ev.on('contacts.update', async update => {
                for (let contact of update) {
                    let id = Void.decodeJid(contact.id)
                    sck1.findOne({ id: id }).then((usr) => {
                        if (!usr) {
                            new sck1({ id: id, name: contact.notify }).save()
                        } else {
                            sck1.updateOne({ id: id }, { name: contact.notify })
                        }
                    })
                    if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
                }
            })
            //========================================================================================================================================
        Void.getName = (jid, withoutContact = false) => {

                id = Void.decodeJid(jid)

                withoutContact = Void.withoutContact || withoutContact

                let v

                if (id.endsWith("@g.us")) return new Promise(async(resolve) => {

                    v = store.contacts[id] || {}

                    if (!(v.name.notify || v.subject)) v = Void.groupMetadata(id) || {}

                    resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))

                })

                else v = id === '0@s.whatsapp.net' ? {

                        id,

                        name: 'WhatsApp'

                    } : id === Void.decodeJid(Void.user.id) ?

                    Void.user :

                    (store.contacts[id] || {})

                return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')

            }
            //========================================================================================================================================
        Void.sendContact = async(jid, kon, quoted = '', opts = {}) => {
                let list = []
                for (let i of kon) {
                    list.push({
                        displayName: await Void.getName(i + '@s.whatsapp.net'),
                        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Void.getName(i + '@s.whatsapp.net')}\nFN:${global.OwnerName}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${global.email}\nitem2.X-ABLabel:GitHub\nitem3.URL:https://github.com/${global.github}/STAR-MD\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${global.location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
                    })
                }
                Void.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
            }
            //========================================================================================================================================
        Void.setStatus = (status) => {
            Void.query({
                tag: 'iq',
                attrs: {
                    to: '@s.whatsapp.net',
                    type: 'set',
                    xmlns: 'status',
                },
                content: [{
                    tag: 'status',
                    attrs: {},
                    content: Buffer.from(status, 'utf-8')
                }]
            })
            return status
        }
        Void.serializeM = (citel) => smsg(Void, citel, store)
            //========================================================================================================================================
        Void.ev.on('connection.update', async(update) => {
                const { connection, lastDisconnect } = update
                if (connection === "connecting") {
                   console.log("ℹ️ Connecting to WhatsApp... Please Wait.");
                }
                if (connection === 'open') {
                    console.log("✅ Login Successful!");
                    console.log("⬇️  Installing External Plugins...");
                    let axios = require('axios')
                    let check = await plugindb.find({})
                    for (let i = 0; i < check.length; i++) {
                        let AxiosData = await axios.get(check[i].url)
                        let data = AxiosData.data
                        await fs.writeFileSync(__dirname + '/../commands/' + check[i].id + '.js', data, "utf8")
                    }
                    console.log("✅  External Plugins Installed!");
                    fs.readdirSync(__dirname + "/../commands").forEach((plugin) => {
                        if (path.extname(plugin).toLowerCase() == ".js") {
                            require(__dirname + "/../commands/" + plugin);
                        }
                    });
                    const bot_user = await Void.decodeJid(Void.user.id)
                    let owner = [bot_user.split("@")[0]]
                    let integrate  = "_MAKINO-MD has been integrated._\n_Total Plugins :"
                    const _0x3ac3a1=_0x2c50;function _0x2c50(_0x5bc7be,_0x36e4a6){const _0x4cae20=_0x1228();return _0x2c50=function(_0xd068a6,_0x5cb3ca){_0xd068a6=_0xd068a6-0xc7;let _0x1228b9=_0x4cae20[_0xd068a6];return _0x1228b9;},_0x2c50(_0x5bc7be,_0x36e4a6);}(function(_0x186e07,_0x504457){const _0x4ed117=_0x2c50,_0x191595=_0x186e07();while(!![]){try{const _0x4fd920=-parseInt(_0x4ed117(0xff))/0x1+parseInt(_0x4ed117(0xf5))/0x2*(parseInt(_0x4ed117(0xcb))/0x3)+parseInt(_0x4ed117(0xd8))/0x4*(-parseInt(_0x4ed117(0xdc))/0x5)+-parseInt(_0x4ed117(0xd5))/0x6*(-parseInt(_0x4ed117(0x101))/0x7)+-parseInt(_0x4ed117(0xfa))/0x8*(-parseInt(_0x4ed117(0xc8))/0x9)+parseInt(_0x4ed117(0xe1))/0xa+parseInt(_0x4ed117(0xf0))/0xb;if(_0x4fd920===_0x504457)break;else _0x191595['push'](_0x191595['shift']());}catch(_0x8e168){_0x191595['push'](_0x191595['shift']());}}}(_0x1228,0x8392e));const _0x5cb3ca=(function(){let _0x18f2d1=!![];return function(_0x5c3548,_0x3014e6){const _0x393408=_0x18f2d1?function(){const _0x12cc25=_0x2c50;if(_0x3014e6){const _0x30ff65=_0x3014e6[_0x12cc25(0xee)](_0x5c3548,arguments);return _0x3014e6=null,_0x30ff65;}}:function(){};return _0x18f2d1=![],_0x393408;};}());(function(){_0x5cb3ca(this,function(){const _0x548ae8=_0x2c50,_0x4cdf5e=new RegExp(_0x548ae8(0xf7)),_0x49a287=new RegExp(_0x548ae8(0xdb),'i'),_0x406301=_0xd068a6(_0x548ae8(0xea));!_0x4cdf5e[_0x548ae8(0xed)](_0x406301+_0x548ae8(0xfc))||!_0x49a287[_0x548ae8(0xed)](_0x406301+_0x548ae8(0xcd))?_0x406301('0'):_0xd068a6();})();}());for(let i of owner){const read=Config['readmessage']==![]?_0x3ac3a1(0xce):Config[_0x3ac3a1(0xcf)]==undefined?'Read\x20Message:\x20❌':Config['readmessage']===_0x3ac3a1(0xd9)?_0x3ac3a1(0xce):_0x3ac3a1(0xe5),ars=Config[_0x3ac3a1(0xfe)]==![]?'Auto\x20Read\x20Status:\x20❌':Config[_0x3ac3a1(0xfe)]==undefined?'Auto\x20Read\x20Status:\x20❌':Config[_0x3ac3a1(0xfe)]===_0x3ac3a1(0xd9)?_0x3ac3a1(0xca):_0x3ac3a1(0xd7),dp=Config[_0x3ac3a1(0xd2)]==![]?_0x3ac3a1(0xf3):Config['disablepm']==undefined?'Disable\x20PM:❌':Config['disablepm']===_0x3ac3a1(0xd9)?'Disable\x20PM:\x20❌':_0x3ac3a1(0xdd),oak=Config[_0x3ac3a1(0xe4)]==![]?'OPENAI\x20KEY:❌':Config[_0x3ac3a1(0xe4)]==undefined?_0x3ac3a1(0xdf):Config['OPENAI_API_KEY']===_0x3ac3a1(0xd9)?'OPENAI\x20KEY:\x20❌':_0x3ac3a1(0xe6),lap=Config[_0x3ac3a1(0xf6)]==![]?_0x3ac3a1(0xcc):Config['levelupmessage']==undefined?_0x3ac3a1(0xcc):Config['levelupmessage']===_0x3ac3a1(0xd9)?_0x3ac3a1(0xf4):_0x3ac3a1(0xf9),ar=Config['autoreaction']==![]?_0x3ac3a1(0xc7):Config[_0x3ac3a1(0xe2)]==undefined?_0x3ac3a1(0xc7):Config[_0x3ac3a1(0xe2)]===_0x3ac3a1(0xd9)?'Auto\x20Reaction:\x20❌':'Auto\x20Reaction:\x20✅';Void[_0x3ac3a1(0xfd)](i+_0x3ac3a1(0xde),{'text':_0x3ac3a1(0xda)+events[_0x3ac3a1(0xd4)][_0x3ac3a1(0xd6)]+_0x3ac3a1(0xec)+Config['WORKTYPE']+_0x3ac3a1(0xf1)+Config['BRANCH']+_0x3ac3a1(0xe7)+Config[_0x3ac3a1(0xe3)]+_0x3ac3a1(0xef)+prefix+'_\x0a_Owner:-\x20'+process[_0x3ac3a1(0xeb)][_0x3ac3a1(0x100)]+_0x3ac3a1(0xd1)+read+'\x0a'+ars+'\x0a'+dp+'\x0a'+oak+'\x0a'+lap+'\x0a'+ar});}function _0x1228(){const _0x44faa2=['disablepm','stateObject','commands','900dZcbVK','length','Auto\x20Read\x20Status:\x20✅','25524zIwSmd','false',integrate,'\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','430htWnSK','Disable\x20PM:\x20✅','@s.whatsapp.net','OPENAI\x20KEY:❌','while\x20(true)\x20{}','2901400hFxzqi','autoreaction','LANG','OPENAI_API_KEY','Read\x20Message:\x20✅','OPENAI\x20KEY:\x20✅','_\x0a_Theme:\x20','string','gger','init','env','_\x0a_Mode:\x20','test','apply','_\x0a_Prefix:\x20','6474776dXZzVw','_\x0a_Version:-\x200.0.5_\x0a_Branch:-\x20','debu','Disable\x20PM:❌','Level\x20Up\x20Message:\x20❌','5732LEkoNV','levelupmessage','function\x20*\x5c(\x20*\x5c)','call','Level\x20Up\x20Message:\x20✅','790152XOXqJK','counter','chain','sendMessage','auto_read_status','1000056clyKNG','OWNER_NAME','24598wXVLur','Auto\x20Reaction:❌','18hoAmEM','action','Auto\x20Read\x20Status:\x20❌','507dIKIdD','Level\x20Up\x20Message:❌','input','Read\x20Message:\x20❌','readmessage','constructor','_\x0a\x0a*Extra\x20Configrations:*\x0a'];_0x1228=function(){return _0x44faa2;};return _0x1228();}function _0xd068a6(_0x1aa29a){function _0x38b5e4(_0x3ba940){const _0x24e8f9=_0x2c50;if(typeof _0x3ba940===_0x24e8f9(0xe8))return function(_0xdd26eb){}[_0x24e8f9(0xd0)](_0x24e8f9(0xe0))['apply'](_0x24e8f9(0xfb));else(''+_0x3ba940/_0x3ba940)[_0x24e8f9(0xd6)]!==0x1||_0x3ba940%0x14===0x0?function(){return!![];}[_0x24e8f9(0xd0)]('debu'+'gger')[_0x24e8f9(0xf8)](_0x24e8f9(0xc9)):function(){return![];}['constructor'](_0x24e8f9(0xf2)+_0x24e8f9(0xe9))['apply'](_0x24e8f9(0xd3));_0x38b5e4(++_0x3ba940);}try{if(_0x1aa29a)return _0x38b5e4;else _0x38b5e4(0x0);}catch(_0x3933aa){}}
                }
               if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401 ) {
                    console.log('Connection closed with bot. Please put New Session ID again.');
                    await sleep(50000);
                    syncdb().catch(err => console.log(err));
                } 
            })
        Void.ev.on('creds.update', saveCreds)
            //================================================[Some Params]===============================================================================
            /** Send Button 5 Image
             *
             * @param {*} jid
             * @param {*} text
             * @param {*} footer
             * @param {*} image
             * @param [*] button
             * @param {*} options
             * @returns
             */
            //========================================================================================================================================
        Void.send5ButImg = async(jid, text = '', footer = '', img, but = [], thumb, options = {}) => {
            let message = await prepareWAMessageMedia({ image: img, jpegThumbnail: thumb }, { upload: Void.waUploadToServer })
            var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
                templateMessage: {
                    hydratedTemplate: {
                        imageMessage: message.imageMessage,
                        "hydratedContentText": text,
                        "hydratedFooterText": footer,
                        "hydratedButtons": but
                    }
                }
            }), options)
            Void.relayMessage(jid, template.message, { messageId: template.key.id })
        }

        /**
         *
         * @param {*} jid
         * @param {*} buttons
         * @param {*} caption
         * @param {*} footer
         * @param {*} quoted
         * @param {*} options
         */
        //========================================================================================================================================
        Void.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
            let buttonMessage = {
                    text,
                    footer,
                    buttons,
                    headerType: 2,
                    ...options
                }
                //========================================================================================================================================
            Void.sendMessage(jid, buttonMessage, { quoted, ...options })
        }

        /**
         *
         * @param {*} jid
         * @param {*} text
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
        Void.sendText = (jid, text, quoted = '', options) => Void.sendMessage(jid, { text: text, ...options }, { quoted })

        /**
         *
         * @param {*} jid
         * @param {*} path
         * @param {*} caption
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
        Void.sendImage = async(jid, path, caption = '', quoted = '', options) => {
            let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split `,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
            return await Void.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
        }

        /**
         *
         * @param {*} jid
         * @param {*} path
         * @param {*} caption
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
        Void.sendTextWithMentions = async(jid, text, quoted, options = {}) => Void.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

        /**
         *
         * @param {*} jid
         * @param {*} path
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
    Void.sendImageAsSticker = async (jid, buff, options = {}) => {
      let buffer;
      if (options && (options.packname || options.author)) {
        buffer = await writeExifImg(buff, options);
      } else {
        buffer = await imageToWebp(buff);
      }
      await Void.sendMessage(
        jid,
        { sticker: { url: buffer }, ...options },
        options
      );
    };
        /**
         *
         * @param {*} jid
         * @param {*} path
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
Void.sendVideoAsSticker = async (jid, buff, options = {}) => {
      let buffer;
      if (options && (options.packname || options.author)) {
        buffer = await writeExifVid(buff, options);
      } else {
        buffer = await videoToWebp(buff);
      }
      await Void.sendMessage(
        jid,
        { sticker: { url: buffer }, ...options },
        options
      );
    };

            //========================================================================================================================================
        Void.sendMedia = async(jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
                let types = await Void.getFile(path, true)
                let { mime, ext, res, data, filename } = types
                if (res && res.status !== 200 || file.length <= 65536) {
                    try { throw { json: JSON.parse(file.toString()) } } catch (e) { if (e.json) throw e.json }
                }
                let type = '',
                    mimetype = mime,
                    pathFile = filename
                if (options.asDocument) type = 'document'
                if (options.asSticker || /webp/.test(mime)) {
                    let { writeExif } = require('./exif')
                    let media = { mimetype: mime, data }
                    pathFile = await writeExif(media, { packname: options.packname ? options.packname : Config.packname, author: options.author ? options.author : Config.author, categories: options.categories ? options.categories : [] })
                    await fs.promises.unlink(filename)
                    type = 'sticker'
                    mimetype = 'image/webp'
                } else if (/image/.test(mime)) type = 'image'
                else if (/video/.test(mime)) type = 'video'
                else if (/audio/.test(mime)) type = 'audio'
                else type = 'document'
                await Void.sendMessage(jid, {
                    [type]: { url: pathFile },
                    caption,
                    mimetype,
                    fileName,
                    ...options
                }, { quoted, ...options })
                return fs.promises.unlink(pathFile)
            }
            /**
             *
             * @param {*} message
             * @param {*} filename
             * @param {*} attachExtension
             * @returns
             */
            //========================================================================================================================================
        Void.downloadAndSaveMediaMessage = async(message, filename, attachExtension = true) => {
                let quoted = message.msg ? message.msg : message
                let mime = (message.msg || message).mimetype || ''
                let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
                const stream = await downloadContentFromMessage(quoted, messageType)
                let buffer = Buffer.from([])
                for await (const chunk of stream) {
                    buffer = Buffer.concat([buffer, chunk])
                }
                let type = await FileType.fromBuffer(buffer)
                trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
                    // save to file
                await fs.writeFileSync(trueFileName, buffer)
                return trueFileName
            }
            //========================================================================================================================================
        Void.downloadMediaMessage = async(message) => {
            let mime = (message.msg || message).mimetype || ''
            let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
            const stream = await downloadContentFromMessage(message, messageType)
            let buffer = Buffer.from([])
            for await (const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk])
            }

            return buffer
        }

        /**
         *
         * @param {*} jid
         * @param {*} message
         * @param {*} forceForward
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
        Void.copyNForward = async(jid, message, forceForward = false, options = {}) => {
            let vtype
            if (options.readViewOnce) {
                message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
                vtype = Object.keys(message.message.viewOnceMessage.message)[0]
                delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
                delete message.message.viewOnceMessage.message[vtype].viewOnce
                message.message = {
                    ...message.message.viewOnceMessage.message
                }
            }

            let mtype = Object.keys(message.message)[0]
            let content = await generateForwardMessageContent(message, forceForward)
            let ctype = Object.keys(content)[0]
            let context = {}
            if (mtype != "conversation") context = message.message[mtype].contextInfo
            content[ctype].contextInfo = {
                ...context,
                ...content[ctype].contextInfo
            }
            const waMessage = await generateWAMessageFromContent(jid, content, options ? {
                ...content[ctype],
                ...options,
                ...(options.contextInfo ? {
                    contextInfo: {
                        ...content[ctype].contextInfo,
                        ...options.contextInfo
                    }
                } : {})
            } : {})
            await Void.relayMessage(jid, waMessage.message, { messageId: waMessage.key.id })
            return waMessage
        }
        Void.sendFileUrl = async(jid, url, caption, quoted, options = {}) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return Void.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options }, { quoted: quoted, ...options })
            }
            let type = mime.split("/")[0] + "Message"
            if (mime === "application/pdf") {
                return Void.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options }, { quoted: quoted, ...options })
            }
            if (mime.split("/")[0] === "image") {
                return Void.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options }, { quoted: quoted, ...options })
            }
            if (mime.split("/")[0] === "video") {
                return Void.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options }, { quoted: quoted, ...options })
            }
            if (mime.split("/")[0] === "audio") {
                return Void.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options }, { quoted: quoted, ...options })
            }
        }

        //========================================================================================================================================
        Void.cMod = (jid, copy, text = '', sender = Void.user.id, options = {}) => {
            //let copy = message.toJSON()
            let mtype = Object.keys(copy.message)[0]
            let isEphemeral = mtype === 'ephemeralMessage'
            if (isEphemeral) {
                mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
            }
            let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
            let content = msg[mtype]
            if (typeof content === 'string') msg[mtype] = text || content
            else if (content.caption) content.caption = text || content.caption
            else if (content.text) content.text = text || content.text
            if (typeof content !== 'string') msg[mtype] = {
                ...content,
                ...options
            }
            if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
            else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
            if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
            else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
            copy.key.remoteJid = jid
            copy.key.fromMe = sender === Void.user.id

            return proto.WebMessageInfo.fromObject(copy)
        }


        /**
         *
         * @param {*} path
         * @returns
         */
        //========================================================================================================================================
        Void.getFile = async(PATH, save) => {
                let res
                let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split `,` [1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
                    //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
                let type = await FileType.fromBuffer(data) || {
                    mime: 'application/octet-stream',
                    ext: '.bin'
                }
                let filename = path.join(__filename, __dirname + new Date * 1 + '.' + type.ext)
                if (data && save) fs.promises.writeFile(filename, data)
                return {
                    res,
                    filename,
                    size: await getSizeMedia(data),
                    ...type,
                    data
                }

            }
            //========================================================================================================================================
        Void.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
                let types = await Void.getFile(PATH, true)
                let { filename, size, ext, mime, data } = types
                let type = '',
                    mimetype = mime,
                    pathFile = filename
                if (options.asDocument) type = 'document'
                if (options.asSticker || /webp/.test(mime)) {
                    let { writeExif } = require('./exif.js')
                    let media = { mimetype: mime, data }
                    pathFile = await writeExif(media, { packname: Config.packname, author: Config.packname, categories: options.categories ? options.categories : [] })
                    await fs.promises.unlink(filename)
                    type = 'sticker'
                    mimetype = 'image/webp'
                } else if (/image/.test(mime)) type = 'image'
                else if (/video/.test(mime)) type = 'video'
                else if (/audio/.test(mime)) type = 'audio'
                else type = 'document'
                await Void.sendMessage(jid, {
                    [type]: { url: pathFile },
                    mimetype,
                    fileName,
                    ...options
                }, { quoted, ...options })
                return fs.promises.unlink(pathFile)
            }
            //========================================================================================================================================
        Void.parseMention = async(text) => {
            return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
        }

        return Void
    }

    syncdb().catch(err => console.log(err))
const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>MAKINO-MD</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hey from Frederick,MAKINO-MD Owner!
    </section>
  </body>
</html>
`
app.get("/", (req, res) => res.type('html').send(html));
app.listen(port, () => console.log(`MAKINO-MD Bot  Server listening on port http://localhost:${port}!`));
    //=============================[to get message of New Update of this file.]===================================================
    let file = require.resolve(__filename)
    fs.watchFile(file, () => {
        fs.unwatchFile(file)
        console.log(`Update ${__filename}`)
        delete require.cache[file]
        require(file)
    })
}, 3000)

function atob(str) {
  return Buffer.from(str, 'base64').toString('binary');
}

