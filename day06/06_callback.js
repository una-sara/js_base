function fn(a){
  //实参赋值给形参
  //把匿名函数赋值给a，a就是函数名称
  //a=function(){  }
  //调用函数a，执行传递的函数体中代码 
  a();
}
//fn(function(){
//  console.log(1);
//  console.log(2);
//});
//练习：创建函数，传递两个参数，实参使用匿名函数的形式传递，在匿名函数的函数体中添加若干行代码；在函数中执行匿名函数体中的代码。
function fun(a,b){
  a();
  b();
}
fun(function(){
  console.log(3);
  console.log(4);
},function(){
  console.log(5);
  console.log(6)
});










