/*
var d1=new Date('2019/6/19 15:20:30');
//修改年份
d1.setFullYear(2018);
d1.setMonth(8);//0~11
//三天后
//获取当前的日期，再加3，替换原来的日期
d1.setDate( d1.getDate()+3 );
//复制一份d1
//var d2=d1;//复制d1的地址给d2
var d2=new Date(d1);//克隆了一个对象
//设置距离计算机元年毫秒数
d1.setTime(1312789234567);

console.log(d1);
console.log(d2);
*/


//练习：创建Date对象，保存员工的入职时间'2019/6/19'，3年后合同到期，计算到期时间；合同到期前1个月续签合同，如果是周末，提前到周五，计算续签时间；打印出3个时间的本地日期字符串格式
//1.入职时间
var d1=new Date('2019/6/22');
//2.到期时间
var d2=new Date(d1);
//计算3年后
d2.setFullYear( d2.getFullYear()+3 );
//3.续签时间
var d3=new Date(d2);
//计算提前1个月 
d3.setMonth( d3.getMonth()-1 );
//判断是周六还是周日
var day=d3.getDay();
//console.log(day);
if( day===6 ){
  //提前1天
  d3.setDate( d3.getDate()-1 );
}else if(day===0){
  //提前2天
  d3.setDate( d3.getDate()-2 );
}

console.log('入职时间:'+d1.toLocaleDateString());
console.log('到期时间:'+d2.toLocaleDateString());
console.log('续签时间:'+d3.toLocaleDateString());




