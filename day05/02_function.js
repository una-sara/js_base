/*
console.log('hi');
console.log('world');
console.log('html');
*/
//创建函数
function say(){
  console.log('hi');
  console.log('world');
  console.log('nodejs');
}
//调用函数
//say();
//say();
//say();
//练习：创建函数，封装两个数字相加的和，调用多次。
function add(){
  console.log(1+2);
}
//add();
//add();
//add();
//练习：创建函数，封装计算1~100之间所有整数的和并打印，调用多次。
function getSum(){
  for(var i=1,sum=0;i<=100;i++){
    sum+=i;
  }
  console.log(sum);
}
getSum();
getSum();
getSum();






