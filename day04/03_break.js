//不停的加1，没有结束
/*
var i=1;
while(true){
  console.log(i);
  //结束循环
  //当i为10的时候，结束循环
  if(i===10){
    break;
  }
  i++;
}

*/
//准备的一个数字
var num=7;
while(true){
  //弹出提示框,输入的值（字符串）
  var str=prompt('input a number');
  //如果输入的值大于之前的数字
  if(str>num){ // 'a'>7 ->  NaN>7 false
    alert('big');
  }else if(str<num){//'a'<7   false 
    //如果输入的值小于之前的数字
    alert('small');
  }else{
	//判断是否为数字
	var str2=Number(str);
	//console.log(str2);
	//break;
	//如果不是数字，提示 'input a number'
    //isNaN  是否为NaN  NaN -> true
    if( isNaN(str2) ){
	  alert('input a number');
	}else{
	  //猜对
	     alert('right');
	  break;//结束循环
	}

    
  }
}

//空字符转数值为0
//console.log( Number('') ); //0
