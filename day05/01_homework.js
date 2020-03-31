/*
var i=0,sum=0;
do{
  i++;
  if(i%2===0) continue;
  if(i%5===0) break;
  sum+=i;//1+3
}while(i<10);
console.log(sum);

//打印本世纪(2000~2100)前10个闰年
for(var i=2000,sum=0;i<=2100;i++){
  //判断i是否为闰年
  if(i%4===0 && i%100!==0 || i%400===0){
	//如果是闰年，sum的值加1
    sum++;
	console.log(i);
    //判断闰年的个数(sum)是否为10
	//如果是，就提前结束循环
	if(sum===10){
	  break;
	}
  }
}
console.log(sum);

//计算1~100之间所有整数的和，当和大于4000的时候，提前结束循环，并打印当前的和
for(var i=1,sum=0;i<=100;i++){
  sum+=i;
  //判断sum是否大于4000
  if(sum>4000){
    break;
  }
}
console.log(sum,i);
*/
//
//外层循环：控制循环的行数
// i代表行号
for(var i=1;i<=9;i++){
  //内层循环：控制每一行的个数  
  //j代表列号
  for(var j=1,str='';j<=i;j++){
    //每次拼接1个*
	str+=j+'*'+i+'='+(j*i)+' ';
  }
  console.log(str);
}







