//弹出两次提示框
var price=prompt('input price');
var num=prompt('input number');
//计算总价
//隐式转换，将字符串转成了数值型
var total=price*num;
//console.log(total,typeof total);
//如果总价满1000打九折
if(total>=1000){
  total*=0.9;
}
//console.log(total);
//卡内余额
var card=800;
//判断是否足以支付
if(card>=total){
  alert('pay success');
}else{
  alert('pay error');
}




