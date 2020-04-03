/*
//创建Date对象
var d1=new Date('2019/6/19 10:36:50');
var d2=new Date(2019,5,19,10,36,50);//0~11
var d3=new Date();//当前系统时间
//数据库存储的是距离计算机元年的毫秒数
//1970-1-1 0:0:0
//2019-1-1
//49*365*24*60*60*1000
var d4=new Date(49*365*24*60*60*1000);
console.log(d4);


var d=new Date('2019/6/19 10:56:30');
//获取存储的日期时
console.log( d.getFullYear() );
console.log( d.getMonth()+1 );//0~11
console.log( d.getDate() );
console.log( d.getHours() );
console.log( d.getMinutes() );
console.log( d.getSeconds() );
console.log( d.getMilliseconds() );//毫秒
console.log( d.getDay() );//0~6  星期日~星期六
console.log( d.getTime() );//获取距离计算机元年毫米数


//练习: 创建Date对象，保存当前的系统时间
var now=new Date();
var year=now.getFullYear();
var month=now.getMonth()+1;
var date=now.getDate();
var hours=now.getHours();
var minutes=now.getMinutes();
var day=now.getDay();//0~6
var arr=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
//判断月份是否小于10，如果小于，增加前导0
if(month<10){
  month='0'+month;
}
//'今天是2019年06月19日 星期三 11:30'
console.log( 
  '今天是'+year+'年'+
  month+'月'+
  date+'日 '+
  arr[day]+' '+
  hours+':'+
  minutes 
); 



//获取本地字符串格式
var d=new Date();
console.log( d.toLocaleString() );
console.log( d.toLocaleDateString() );
console.log( d.toLocaleTimeString() );
*/

//练习：计算距离2019年12月25日还有？天？时？分？秒
//创建两个Date对象，计算两个日期时间相差的毫秒数
var target=new Date('2019/12/25');
var now=new Date();
//计算两个对象相差的毫秒数
//console.log(target.getTime()-now.getTime());
//两个对象直接相减，获取相差的毫秒数
var d=target-now;
//相差的值转为秒
d=Math.floor(d/1000);
//计算相差的天数
var day=Math.floor(d/(24*60*60));
//去除天数
var hour=d%(24*60*60);//不满24小时
//计算相差的小时
hour=Math.floor(hour/3600);
//去除小时
var minute=d%3600;
//计算相差的分钟
minute=Math.floor(minute/60);
//去除分钟，得到相差的秒钟
var second=d%60;
console.log(
  '距离2019年圣诞节还有'+
  day+'天'+
  hour+'时'+
  minute+'分'+
  second+'秒'
);
/*
//96有9个10，去除10
console.log(96%10);//6
console.log(108%10);
*/






