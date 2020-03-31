//JS程序执行前，会将使用var关键字声明的变量提升到所在作用域的最前边，但是赋值还是在原来的位置。
/*
//var a; 
console.log(a);
var a=1;
//a=1;
function fn(){
  //var b;
  console.log(b);
  var b=2;
  //b=2;
}
fn();

var n=5;
function fn2(){
  //var n;
  console.log(n); //undefined
  var n=8;
  //n=8;
}
fn2();//?

var m=1;//全局变量
function fn3(m){
  //参数: 是一个局部变量
  //var m=5;
  m=m+3;//m=8
}
fn3(5);
console.log(m);
*/

function fn4(){
  var a=b=c=2;
  /*
  c=2;//全局
  b=c;//全局
  var a=b;//局部
  */
}
fn4();
console.log(a);




