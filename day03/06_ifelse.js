//满18岁成年人，否则未成年人
var age=9;
if(age>=18){
  console.log('成年人');
  //写好多语句
}else{
  console.log('未成年人');
  //写好多语句
}
//三目运算符写法
age>=18 ? console.log('成年人') : console.log('未成年人');
//练习：声明变量保存用户名和密码，如果用户名是root并且密码是123456，打印登陆成功，否则打印登陆失败 
var uname='root123',upwd='123456';
if(uname==='root' && upwd==='123456'){
  console.log('登陆成功');
}else{
  console.log('登陆失败');
}

//练习：声明变量保存性别(0/1)，如果0打印女，否则打印男
var sex=0;
if(!sex){
  console.log('女');
}else{
  console.log('男');
}



