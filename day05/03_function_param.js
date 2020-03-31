//计算任意两个数字相加的和 
function add(num1,num2){//参数: 形参
  console.log(num1+num2);
  //console.log(num2);
}
//调用
//add(2,3);//参数：实参
//add(7,9);
//add(4);
//add(8,9,10);
//练习：创建函数，封装计算1~任意数字之间所有整数的和，调用多次。
function getSum(n){
  //计算1~n之间所有整数的和
  for(var i=1,sum=0;i<=n;i++){
    sum+=i;
  }
  console.log(sum);
}
//getSum(1000);
//getSum(500);


//练习: 创建函数，封装计算任意两个年份之间的闰年个数，调用多次。
function getCount(n1,n2){
  //循环n1~n2之间所有年份
  for(var i=n1,count=0;i<=n2;i++){
    //判断是否为闰年，
	if(i%4===0 && i%100!==0 || i%400===0){
      count++;
	}
  }
  console.log(count);
}
getCount(2000,2100);
getCount(1949,2019);





