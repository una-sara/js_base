var obj={
  age1:25,
  age2:18,
  age3:21,
  age4:15,
  age5:20
}
//遍历对象属性，获取总和
//获取属性的个数
var sum=0;
var attr=0;

for(var key in obj){
  //把获取的每个属性值加到sum中
  sum+=obj[key];
  //每遍历一个属性attr加1
  attr++;
  //判断年龄是否大于20
  if(obj[key]>20){
    console.log(obj[key]);
  }
}
console.log(sum/attr);