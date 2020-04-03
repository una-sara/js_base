//JS程序执行前，检查是否有语法错误
console.log(1);
//语法错误
//var a=1；
//引用错误，使用未声明的变量
//console.log(a);
//var b=2;
//var person={
//  ename:'tom'
//}
//b();
//类型错误,错误的时候使用了括号
//person.ename();
//范围错误，参数超出了范围
//var arr=new Array(-3);
/*
//自定义错误
var num='abc';
//如果num不是数字，抛出自定义错误
//先调用Number转数值 NaN
if( isNaN(num) ){//判断是否为NaN not a number
  throw '请提供一个数字';
}
*/
//处理错误
//要求提供的数字5~10之间
var num=7;
//尝试执行
try{
  if(num>10){
    throw '太大了';
  }
}catch(err){//只有try中的代码报错，才会执行catch中的代码，错误信息交给err
  console.log(err+'：请输入一个5到10之间的数字');
}

console.log(2);