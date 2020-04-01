//创建函数————函数声明
fn1();
function fn1(){   }
//创建函数————函数表达式
//变量名称就是函数名称
var fn2=function(a,b){  
  console.log(a+b);
}
//console.log(fn2);
//console.log(fn1);
//fn2(1,3);

var add=function(a,b){   
  //a~b之间所有整数的和
  for(var i=a,sum=0;i<=b;i++){
    sum+=i;
  }
  return sum;
}
console.log( add(3,10) );








