//var arr=['tom','king','smith'];
//var arr1=['kate','david'];
//var arr2=['scott','black'];
//把数组转为字符串
//console.log( arr.toString() );
//console.log( arr.join('-') );
//拼接多个数组
//console.log( arr.concat(arr1,arr2) );
var arr=['html','css','js','nodejs','ajax','vue','react']; 
//截取数组元素
//console.log( arr.slice(0,3) );
//console.log( arr.slice(3,5) );
//console.log( arr.slice(-2,-1) );
//练习: 创建数组a~g组成，每个字符是一个元素；分别截取cd，f，b；把截取的结果拼接成一个新数组
var arr=['a','b','c','d','e','f','g'];
var arr1=arr.slice(2,4);
var arr2=arr.slice(-2,-1);
var arr3=arr.slice(1,2);
//console.log( arr1.concat(arr2,arr3) );

//删除数组中的元素
//原数组会发生变化
var arr=['html','css','js','nodejs','ajax','vue','react']; 
//console.log( arr.splice(1) );
//console.log( arr.splice(1,2) );
//console.log( arr.splice(-2,1) );
//console.log( arr.splice(2,0,'html5','css3') );
//console.log(arr);

//练习: 创建数组a~h，每个字母是一个元素，删除de，替换f为m，在下标为1的位置插入字母z
var arr=['a','b','c','d','e','f','g','h'];
//console.log( arr.splice(3,2) );
//console.log( arr.splice(-3,1,'m') );
//console.log( arr.splice(1,0,'z') );
//console.log(arr);

var arr=['a','b','c','d','e','f','g','h'];
//翻转数组元素
console.log( arr.reverse() );














