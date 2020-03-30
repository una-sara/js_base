//强制转为数值型 
var num1=Number('2');
var num2=Number(true);
var num3=Number('2a');//NaN  -> number
var num4=Number(undefined);//NaN
var num5=Number(null);//0
//console.log(num5,typeof num5);

//console.log(3+null);
var a;
//console.log(a-5);
//console.log('c'*7);

//转为整型
var n1=parseInt('1');
var n2=parseInt(1.2);
var n3=parseInt('2a');
var n4=parseInt('a2');
//未定义、空、布尔型 返回NaN
var n5=parseInt(null);//NaN
//console.log(n5,typeof n5);

var n6=parseFloat('2.5a');
var n7=parseFloat('a2.5');
//console.log(n7);

//数值、布尔型转为字符串
var num=10;
var str=num.toString();
console.log(str,typeof str);

