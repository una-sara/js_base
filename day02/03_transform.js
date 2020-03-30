//数字+字符串
var str1=2+'3';//2 -> '2'
//字符串之间的拼接
//'2'+'3' -> '23'
//console.log(str1,typeof str1);

//数字+布尔型
var str2=3+false;// true->1 false->0
//console.log(str2,typeof str2);

//布尔型+字符串
var str3='5'+true;
//console.log(str3,typeof str3);

/*
var num1=3,num2=true,num3='tedu';
console.log(num1+num2+num3);//'4tedu'
console.log(num2+num3+num1);//'truetedu3'
console.log(num3+num1+num2);//'tedu3true'
*/
//练习：声明变量保存一个人的姓名，性别，打印 '我的姓名叫(变量)，性别(变量)'
var uname='小然';
var sex='男';
//我的姓名叫tom,性别是男
//console.log('我的姓名叫'+uname+',性别是'+sex);

//其它运算符转换
console.log(5-'3');
console.log('5'-'3');//2
console.log('3'-true);//2
console.log('2'*'3');
console.log(10/true);
//'2a' -> NaN  而NaN和任何值执行加减乘除结果都是NaN
console.log('2a'*5);//NaN -> Not a Number



