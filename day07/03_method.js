var person={
  ename:'杨燕', //成员属性
  sex:'女',
  say:function(){//成员方法
	//this指代当前所在的对象
    console.log('hello，我叫'+this.ename);
  }
}
//调用对象中的方法
//person.say();

//练习：创建一个圆对象，添加属性半径和圆周率，添加计算周长和面积两个方法，返回计算的结果。最后调用
var circle={
  r:4,
  pi:3.14,
  getArea:function(){
    return this.pi*this.r*this.r;
  },
  getLength:function(){
    return 2*this.pi*this.r;
  }
}
//调用方法
console.log( circle.getArea() );
console.log( circle.getLength() );




