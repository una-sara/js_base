/*
var a=1;//全局作用域下的变量——全局变量
function fn(){
  //函数作用域下使用var的变量————局部变量
  var b=2;
  //console.log(a);
  console.log(b);
}
//console.log(a);
fn();//调用函数，执行函数体代码
console.log(b);
*/

function fn2(){
  //函数中不使用var声明的变量，默认是全局变量
  c=3;
}
fn2();
console.log(c);



