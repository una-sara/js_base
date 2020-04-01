/*
//全局作用域
//var a;
console.log(a);
var a=1;//全局变量
//a=1;
function fn(){//函数作用域
  //var b;
  console.log(b);
  var b=2;//局部变量
  //b=2;
}
fn();

var a=1;
var b=2;
//a=2 b=1
var c=a;
a=b;
b=c;
console.log(a,b);
*/


function fib(n){
  //第1项和第2项固定为1
  var n1=1,n2=1;
  //从第三项开始，每一项的值是前两项相加的和
  for(var i=3;i<=n;i++){
    //每次挪动
	//每挪动一次，n1和n2的值要发生变化
	var c=n1;
	n1=n2;
	n2=c+n2;
  }
  //最后的n2就代表当前的第n值
  console.log(n2);
}
fib(50);





