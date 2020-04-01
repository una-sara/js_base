var person={
  ename:'杨燕',
  sex:'女',
  age:28
}
//console.log(person.eid);
//属性值和undefined比较
//console.log( person.ename===undefined );
//
console.log( person.hasOwnProperty('age1') );
//
console.log( 'sex' in person );
//判断是否含有salary属性，如果没有，添加该属性，并设置值为8000
if(!person.hasOwnProperty('salary')){
  person.salary=8000;
}
console.log(person);






