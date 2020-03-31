/*
//3&&2
console.log(3&&4-2);
//0||2
console.log(0||4-2);

console.log(3||4-2); 
*/
/*
90~  优秀          9  10
80~90以下  良好    8
70~80以下  中等    7
60~70以下  及格    6
60以下     不及格
*/
var score=-52;
//如果超出范围，提示‘错误的范围’
if(score>100 || score<0){
  console.log('错误的范围');
}else{ //0~100  正常的范围
  //分数/10  取整
  var num=parseInt(score/10);
  switch(num){
    case 10:
	case 9:
	  console.log('优秀');
	  break;
	case 8:
	  console.log('良好');
	  break;
	case 7:
      console.log('中等');
	  break;
	case 6:
	  console.log('及格');
	  break;
	default:
	  console.log('不及格');
  }
}

