//递归：在函数内部调用自身
var i=0;
function say(){ 
  i++;
  alert('long ago');
  //当i为3的时候，阻止函数体往后执行
  if(i===3){
    return;
  }
  say();
}
say();