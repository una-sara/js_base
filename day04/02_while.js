//while循环
/*
while(false){//循环条件
  //循环体
  console.log('hello');
}

//循环产生0~99
//出生
var i=0;
while(i<10){//循环条件
  //循环体
  console.log(i);
  //年龄增长1岁
  i++;
}

//练习：循环产生10~20之间所有的数字，并打印出来 
var i=10;
while(i<=20){
  console.log(i);
  i++;
}

//打印50~1之间所有的整数
var i=50;
while(i>=1){
  console.log(i);
  i--;
}

//练习：打印50 55 60 65 70
var i=50;
while(i<=70){
  console.log(i);
  i+=5; //i=i+5
}

//练习：打印1~100之间所有的奇数
var i=1;
while(i<=100){
  //当i为奇数的时候打印
  if(i%2===1){
    console.log(i);
  }
  i++;
}

//练习：计算1~100之间所有整数的和
var i=1;
//声明变量，用于保存所有数字的和
var sum=0;//1+2+3...+100
while(i<=100){
  //把循环产生的每个整数加到sum中
  sum+=i;
  //console.log(sum);
  i++;
}
//打印sum最终的结果
//console.log(sum);
*/
//练习：计算1~100之间所有偶数的和
var i=1;
var sum=0;
while(i<=100){ 
  //判断i是否为偶数
  if(i%2===0){
    //i为偶数
	//把所有的偶数加到一起
	sum+=i;
  }
  i++;
}
console.log(sum);








