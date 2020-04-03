//练习: 声明变量保存4个英文字母，使用无限循环弹出提示框，输入验证码(不区分大小写)，如果输入正确，结束循环。
var code='eCoT';
//无限循环弹出提示框
while(true){
  var str=prompt('input checkcode');
  //判断输入的和之前保存的是否一致
  //不区分大小写
  if(str.toUpperCase()===code.toUpperCase()){
	//结束循环
    break;
  }
}



