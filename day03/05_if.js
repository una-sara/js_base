//满30减15
var total=28;
//判断是否满30
if(total>=30){
  //在原来基础之上减15
  total-=15;
}
//console.log(total);
//练习：声明变量保存年龄，如果满18，打印成年人
/*
var age=22;
if(age>=18){
  console.log('成年人');
  //console.log('可以去网吧了');
}
//age>=18 && console.log('成年人');
*/
//false: 0 NaN '' undefined null
if(!null){
  console.log('hello');
}
//如果签名内容为空，设置默认签名
//声明变量保存签名内容，如果签名为空字符串，设置默认签名‘这家伙很懒，什么也没留下’，打印签名内容
var str='今天天气好热，我想吃冰棍';
//str==='' 判断是否为空
// !'' -> !false -> true
if(!str){
  str='这家伙很懒，什么也没留下';
}
console.log(str);




















