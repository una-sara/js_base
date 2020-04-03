/*
//练习：将一句英文每个单词的首字母大写，其余小写
var str='hOw aRE yOu';
//按照一个空格切割为数组
var arr=str.split(' ');
//遍历数组，获取每个单词
for(var i=0;i<arr.length;i++){
  //arr[i] 每个单词
  //每个单词首字母大写，其余的小写
  var first=arr[i].substr(0,1).toUpperCase();
  var other=arr[i].substr(1).toLowerCase();
  //把转换的结果替换当前元素的值
  arr[i]=first+other;
  //console.log(first+other);
}
//将数组转换成字符串
console.log(arr.join(' '));

//练习：随机产生0~9之间的一个整数
var arr=['A','B','C','D','E','F','G','H','I','J'];
//0~1 * 10  0~9.9  向下取整 0~9
var num=Math.floor( Math.random()*10 );
console.log(arr[num]);
*/
//练习：创建数组，包含若干个英文字母和0~9，随机取出4个元素，放入到一个新数组(push)。
var arr=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T',0,1,2,3,4,5,6,7,8,9];//26
//准备新数组，把随机取到的值放入进去
var arr2=[];
//随机取4个，循环4次
for(var i=0;i<4;i++){
  //随机取0~25之间的一个数字，作为下标
  //0~1 * 26  0~25.9  向下取整  0~25
  //使用数组长度获取元素个数
  var num=Math.floor(Math.random()*arr.length);
  //console.log(arr[num]);
  //把随机获取的元素放入到新数组
  arr2.push(arr[num]);
}
console.log(arr2);






