//比较运算符
//console.log(3>4);
//比较值
//console.log(7=='7');//true
//比较值和类型
//console.log(7==='7');//false
//字符串转成了数字
//console.log(3>'10');//false
//两个字符串比较，比较的是首个字符的Unicode码
//3 -> 51  1->49  a->97
//console.log('3'>'10');
//查看Unicode码
//console.log('翠'.charCodeAt());
//无->26080
//翠->32736
//console.log('张无忌'>'张翠山');

//Number('10a') -> NaN
//3>NaN
console.log(3>'10a'); //false
//3<NaN
console.log(3<'10a'); //false
//3==NaN
console.log(3=='10a');//false
console.log(NaN==NaN);//false

console.log(3!=='10a');


