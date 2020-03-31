//循环产生1~10之间所有的整数
/*
var i=1;
do{
  console.log(i); 
  i++;
}while(i<=10);

//练习：循环打印30~20之间所有的整数
var i=30;
do{
  console.log(i);
  i--;
}while(i>=20);

//打印1~100之间所有能被3整除的数字
var i=1;
do{
  //判断i是否能被3整除
  if(i%3===0){
    console.log(i);
  }
  i++;
}while(i<=100);

//练习：计算1~100之间所有能被7整除的数字的和
var i=1;
var sum=0;//7+14+21....
do{
  //判断i是否能被7整除
  if(i%7===0){
    //i是能被7整除的数字
	sum+=i;
  }
  i++;
}while(i<=100);
console.log(sum);
*/
//阶乘 10!=10*9*8*7*...*1
//练习：使用循环计算10的阶乘
var i=10;
//初始值
var num=1;//10*9*8*7...1
do{
  //把所有的数字 乘以到num中
  num*=i;
  i--;
}while(i>=1);
console.log(num);


