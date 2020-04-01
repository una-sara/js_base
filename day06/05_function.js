//避免全局污染：把变量放到函数作用域下
//匿名函数自调用  
(function(){
  //轮播图1
  var num=2;
  console.log(num);
})();

//轮播图2
(function(a,b){
  var num=4;
  console.log(a+b);
})(3,5);





