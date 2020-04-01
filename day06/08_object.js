//使用对象字面量创建对象
//添加属性
var person={
	ename:'小然',
	sex:'男',
	'age':'78',
	'user-name':'root'
}
//console.log(person);
//练习: 创建一个员工对象，包含编号，姓名，工资，生日
var emp={
  eid:1,
  ename:'tom',
  salary:8000,
  birthday:'1993-1-2',
};
//console.log(emp);
//练习: 创建一个手机对象，包含颜色，尺寸，品牌
var phone={
  color:'黑色',
  size:5.9,
  brand:'华为',
  'made-in':'china'
};
//访问对象中的属性
//console.log( phone.brand );
//console.log( phone['made-in'] );
//console.log( phone['size'] );
//修改属性值
phone.color='白色';
//添加不存在的属性
//console.log(phone.num);
phone.num='P30';
//console.log(phone);

//练习：创建图书的对象，包含编号、标题、作者、价格，修改图书的价格，打印图书的作者，添加图书的出版社。
var book={
  bid:10086,
  title:'街舞如何炼成的',
  author:'尼古拉斯.赵四',
  price:88
};
book.price=78;
console.log(book.author);
book.publish='非洲人民邮电出版社';
console.log(book);













