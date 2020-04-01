//内置构造函数
var laptop=new Array('ThinkPad','小米','戴尔');
var course=new Array(3);
course[0]='语文';
course[1]='数学';
course[2]='英语';
course[3]='体育';
//console.log(course);
//练习：创建数组，包含有若干个图书名称；创建数组，初始化长度为5，添加5个场上位置
var book=new Array('街舞的跳法','地铁是如何炼成的','如何烤羊腿','如何食用百香果');
//console.log(book);
var ball=new Array(5);
ball[0]='中锋';
ball[1]='大前锋';
ball[2]='小前锋';
ball[3]='得分后卫';
ball[4]='控球后卫';
//使用长度在数组的末尾添加元素
ball[ball.length]='教练';
ball[ball.length]='裁判';
//console.log(ball);
//数组的长度
//console.log( ball.length );
//console.log( typeof ball );



//练习：创建一个空数组，使用数组长度添加多个国家名称
var country=[];
country[country.length]='中国';
country[country.length]='日本';
country[country.length]='美国';
//console.log(country);

//关联数组，以字符串作为下标
var emp=[];
emp['ename']='小然';
emp['sex']='男';
//console.log(emp);
//for-in
//使用for in能否遍历关联数组
//for(var key in emp){
//  console.log(key,emp[key]);
//}
//练习：创建索引数组，包含有若干个学生的成绩，获取总成绩，或计算平均成绩
//遍历数组，得到每一个成绩 
var score=[79,85,76,99,89,68,81];
//遍历数组，获取每个元素
var sum=0;
for(var key in score){
  //console.log(key,score[key]);
  sum+=score[key];
}
//console.log(sum/score.length);
//使用循环获取数组中的元素
var sum=0;
for(var i=0;i<score.length;i++){
  //console.log(i,score[i]);
  sum+=score[i];
}
//console.log(sum);
/*
//练习：创建数组，包含有多个国家，把所有的'中国'改为'china'
var country=['中国','日本','美国','英国','中国'];
//遍历数组，获取每个元素，判断当前遍历的元素是否为中国，如果是，重新赋值为‘china’
for(var i=0;i<country.length;i++){
  //判断当前元素是否为中国
  if(country[i]==='中国'){
    country[i]='china';
  }
}
console.log(country);


//练习：创建数组，包含有多个国家，查询出中国出现的次数
var country=['中国','日本','美国','英国','中国'];
//用于记录出现的次数
var count=0;
for(var i=0;i<country.length;i++){
  //判断元素是否为中国，如果是，次数加1
  if(country[i]==='中国'){
    count++;
  }
}
console.log(count);
*/
//练习：创建数组，包含多个数字，获取数组中的最大值
var arr=[27, 39, 18, 51];
//准备遍历，用于保存最大值，默认把第一个元素放进去
var max=arr[0];
//从第2个元素开始遍历
for(var i=1;i<arr.length;i++){
  //如果遍历的元素大于max，则把该元素放入到max中
  if(arr[i]>max){
    max=arr[i];
  }
}
console.log(max);


//练习：创建函数getAvg，传递一个参数(数组)，返回平均值。
function getAvg(arr){
  //arr=[27, 39, 18, 51];
  //遍历arr
  for(var i=0,sum=0;i<arr.length;i++){
    sum+=arr[i];
  }
  return sum/arr.length;
}
console.log(getAvg([27, 39, 18, 51]));







