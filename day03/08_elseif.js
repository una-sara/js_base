//判断一个人的政治面貌
//1-党员  2-团员  3-群众  其它-非法政治面貌
var code=4;
if(code===1){
  console.log('党员');
}else if(code===2){
  console.log('团员');
}else if(code===3){
  console.log('群众');
}else{
  console.log('非法的状态码');
}
//练习：声明变量保存订单的状态码，根据订单的状态码打印对应的汉字
//1-待付款  2-待发货  3-运输中  4-已签收 5-已取消  其它-无法追踪
var status=10;
if(status===1){
  console.log('待付款');
}else if(status===2){
  console.log('待发货');
}else if(status===3){
  console.log('运输中');
}else if(status===4){
  console.log('已签收');
}else if(status===5){
  console.log('已取消');
}else{
  console.log('无法追踪');
}
/*
优秀   90~         9  10
良好   80~90以下   除以10  8.0~8.9  8
中等   70~80以下   7.0~7.9   7
及格   60~70以下   6.0~6.9   6
不及格 60以下
//练习：声明变量保存成绩，根据成绩打印对应的汉字
*/
var score=67;
if(score>=90){
  console.log('优秀');
}else if(score>=80){  //score<90
  console.log('良好');
}else if(score>=70){ //score<80
  console.log('中等');
}else if(score>=60){  //score<70
  console.log('及格');
}else{  //score<60
  console.log('不及格');
}
//练习：银行根据客户的存款划分等级
/*
10万 以下  普通客户
10~100以下 优质客户
100~500以下 黄金客户
500~  钻石客户
*/
var money=28;
if(money<10){
  console.log('普通客户');
}else if(money<100){  //money>=10
  console.log('优质客户');
}else if(money<500){ //money>=100
  console.log('黄金客户');
}else{ //money>=500
  console.log('钻石客户');
}



