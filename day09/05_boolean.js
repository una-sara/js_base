var b1=true;
//NaN 0 '' undefined null
var b2=Boolean(NaN);
var b3=Boolean([]);
var b4=new Boolean(3);
var b5=!![];//隐式转换为布尔型
console.log(b5);
//console.log(b4,typeof b4);