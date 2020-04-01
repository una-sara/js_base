var phone={
  color:'黑色',
  brand:'华为',
  no:'P30',
  size:5.9
}
/*
for(var key in phone){
  //key 每个属性名
  console.log(key,phone[key]);
}
*/
//练习：创建对象，包含有若干个成绩，遍历对象属性，计算总成绩
var score={
  chinese:87,
  math:95,
  english:99,
  sport:89
};
var sum=0;
for(var key in score){
  //console.log(key,score[key]);
  //把每一个成绩加到sum中
  sum+=score[key]
}
console.log(sum);




