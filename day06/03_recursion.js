//练习：使用递归计算1~任意数字之间所有整数的和
//前n项的和=n+前n-1项的和
function getSum(n){
  //跳出条件
  //当n为1的时候，返回1
  if(n===1){
    return 1;
  }
  return n+getSum(n-1); 
}
console.log( getSum(100) );
//使用递归计算斐波那契数列的第n项
function fib(n){
  //跳出条件：当n为1或者n为2的时候，返回1
  if(n===1 || n===2){
    return 1;
  }
  return fib(n-1)+fib(n-2);
}
console.log( fib(50) );
//fib(5)
//fib(4)+fib(3)
//fib(3)+fib(2)+fib(2)+fib(1)
//fib(2)+fib(1)+fib(2)+fib(2)+fib(1)
//