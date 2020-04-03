//var str='达内javascript';
//获取长度
//console.log( str.length );
//获取下标对应的字符
//console.log( str[0] );
//console.log( str.charAt(1) );
//遍历字符串，获取每个字符
//for(var i=0;i<str.length;i++){
//  console.log( str.charAt(i) )
//}

//获取某个字符串的下标
//var str='javascript';
//console.log( str.indexOf('a',2) );
//倒着查找
//console.log( str.lastIndexOf('m') );
//练习: 声明变量保存字符串，判断该字符串是否为邮箱格式(@)，如果有打印'合法的邮箱'，否则打印'非法的邮箱'
/*
var email='hello123#163.com';
if(email.indexOf('@')!==-1){
  console.log('合法的邮箱');
}else{
  console.log('非法的邮箱');
}

var str='JavaScript';
//转大写
console.log( str.toUpperCase() );
//转小写
console.log( str.toLowerCase() );

//截取字符串
var str='javascript';
//console.log( str.slice(4) );
//console.log( str.slice(4,7) );
console.log( str.slice(-3,-1) );

//练习: 声明变量保存邮箱，分别截取用户名和服务器名称
var email='tom19971111@163.com';
//获取@的下标
var index=email.indexOf('@');
//console.log(index);
//获取用户名0~@下标前一个数字
console.log(email.slice(0,index));
//获取服务器名称 @下一位~最后
console.log(email.slice(index+1));

var str='javascript';
//按长度来截取
console.log( str.substr(4,3) );
console.log( str.substr(4) );
console.log( str.substr(-3,2) );


//练习:声明变量保存省份证号，截取出生的年月日和性别
var str='110236198011112579';
//截取年月日性别
var year=str.substr(6,4);
var month=str.substr(10,2);
var date=str.substr(12,2);
var sex=str.substr(-2,1);
var gender;
//判断sex是奇数还是偶数
if(sex%2===1){
  gender='男';
}else{
  gender='女';
}
//小然的生日为1980年11月11日 性别男
console.log('小然的生日为'+year+'年'+month+'月'+date+'日 性别'+gender);


var str='javascript';
console.log( str.substring(4) );
console.log( str.substring(4,7) );
//负数转为0
console.log( str.substring(-3,-1) );
console.log( str.substring(3,1) );



//练习: 将一个英文单词的首字母转大写，其余字母转小写
var str='welCome';
//截取首个字母
var first=str.substring(0,1).toUpperCase();
//截取其余的字母
var other=str.substring(1).toLowerCase();
console.log(first+other);


var arr=['a','b','c'];
//将数组按照指定的分割符转为字符串
console.log( arr.join('-') );

//将字符串按照指定的分隔符转为数组
var str='a-b-c';
console.log( str.split('-') );
*/
//练习: 使用split获取邮箱的用户名和服务器名称
var str='tom123@163.com';
var arr=str.split('@');
console.log(arr[0],arr[1]);

