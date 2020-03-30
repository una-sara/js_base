//1-党员  2-团员  3-群众  其它-非法政治面貌
var code=2;
switch(code){
  case 1:  //执行code===1
    console.log('党员');
	break;
  case 2:  //code===2
	console.log('团员');
    break;
  case 3:  //code===3
	console.log('群众');
	break;
  default:
	console.log('非法的政治面貌');
}
//0~6  星期日~星期六
//根据星期的状态码，打印对应的汉字
var day='2';
switch(day){
  case 0:
	console.log('星期日');
    break;
  case 1:
	console.log('星期一');
    break;
  case 2:
	console.log('星期二');
    break;
  case 3:
	console.log('星期三');
    break;
  //....
  default:
	console.log('错误的星期代码');
}








