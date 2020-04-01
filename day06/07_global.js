var str='http://www.jd.com/search?kw=电脑';
//对网址中的中文编码
var str2=encodeURI(str);
//console.log(str2);
//对已经编码的网址进行解码
var str3=decodeURI(str2);
//console.log(str3);

//console.log( 0/2, -2/0 );//Infinity
//console.log(1/3);
//判断一个值是否为有限值
//console.log( isFinite(1/0) );

console.log('typeof 3');
console.log( eval('typeof 3') );


