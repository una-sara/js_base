function add(n1,n2){
  //console.log(n1+n2);
  //返回n1+n2的结果，用于后期保存
  //供外部使用的数据
  return n1+n2;
}
//把函数的结果保存下来
//var a=add(87,93);
//console.log('总成绩为:'+a,a/2);

function b(){
  var m=1;
  var n=2;
  return m+n;
  console.log('函数执行完毕');
}
//var res=b();
//console.log(res);



function getMax(a,b){
  //if(a>b){
  //  return a;
  //}else{
  //  return b;
  //}
  return a>b ? a : b;
}
var res2=getMax(5,7);
//console.log(res2);
//练习：创建函数，传递三个参数，返回任意三个数字的最大值
function getMax2(a,b,c){
  //声明变量保存前两个数字的最大值
  var max;
  max=a>b ? a : b;
  //if(a>b){
  //  max=a;
  //}else{
  //  max=b;
  //}
  //max和c进行比较，返回
  //if(max>c){
  //  return max;
  //}else{
  //  return c;
  //}
  return max>c ? max : c;
}
//console.log( getMax2(23,18,5) );
//练习：创建函数，传递订单的状态码，返回对应的汉字状态
function getStatus(n){
  switch(n){
    case 1:
	  return '待付款';
	  //break;
	case 2:
	  return '待发货';
	case 3:
	  return '运输中';
	case 4:
	  return '已签收';
	case 5:
	  return '已取消';
	default:
	  return '无法追踪';
  }
}
//console.log( getStatus(3) );
//练习：创建函数，传递任意一个年份，返回是否为闰年 是->true  不是->false
function isRun(year){
  if(year%4===0 && year%100!==0 || year%400===0){
    return true;//阻止后边代码执行
  }
  return false;
}
//console.log( isRun(2020) );
//练习：创建函数，传递任意一个年份，如果是闰年返回366，否则返回365
function getDays(year){
  //判断是否为闰年,返回true或者false
  if(isRun(year)){//如果是，返回true	
    return 366;
  }
  return 365;
}

//console.log( getDays(2020) );
//步骤1：计算任意数字的阶乘。
function getJC(n){
  //1~n之间所有整数的乘积
  for(var i=1,num=1;i<=n;i++){
    num*=i;
  }
  return num;
}
//console.log( getJC(10) );
//步骤2：计算1~n之间所有整数的和
// 1 + 2 + 3 + ... + n
function getSum(n){
  for(var i=1,sum=0;i<=n;i++){
	//i 代表每个整数
	//1+2+3+...+10
    //sum+=i;
	//1!+2!+3!....+10!
	sum+= getJC(i);
  }
  return sum;
}
console.log( getSum(5) );//153
/*
5!=5*4*3*2*1  120
4!=4*3*2*1    24
3!            6
2!            2
1!            1
*/