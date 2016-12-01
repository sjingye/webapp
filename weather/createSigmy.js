/*
* 这个js文件属于node脚本，请使用node解析器执行该文件
* */

var crypto = require('crypto');

var ts = parseInt(Date.now() / 1000);
var ttl = 3600000;
var uid = 'UDA821CDB4';
var key = 'iajcksejtks0de76';


var qsString = `ts=${ts}&ttl=${ttl}&uid=${uid}`;
var cryptoString = encodeURIComponent(crypto.createHmac("sha1", key).update(qsString).digest('base64'));

// console.log(ts);
console.log('你生成的签名是：');
console.log(cryptoString);

//https://api.thinkpage.cn/v3/weather/now.json?location=beijing&ts=1480304586&ttl=360000&uid=U3E47F151D&sig=IKNrk%2FqcWT50r67FMfYjzocQ2Fo%3D&callback=showWeather
