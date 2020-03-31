function fn1(){
  console.log(1);
}
function fn2(){
  function fn3(){
    console.log(3);
  }
  fn3();
}
fn1();
fn2();//执行函数体中的代码，创建fn3
//fn3();