//计算1~100的和
/*
for(var i=1,sum=0;i<=100;i++){
  sum+=i;
}

var i=1,sum=0;
for(;i<=100;i++){
  sum+=i;
}

var i=1,sum=0;
for(;i<=100;){
  sum+=i;
  i++;
}

console.log(sum);

var i=1;
for(;;){
  console.log(i);
  //判断i是否为10
  if(i===10){
    break;
  }
  i++;
}

//多个循环条件，最后一个起作用
for(var i=1,j=12;j>=1,i<=10;i++,j--){
  console.log(i,j);
}
*/
//计算 1/20+2/18+3/16 .... 10/2
for(var i=1,j=20,sum=0;i<=10;i++,j-=2){
  //console.log(i,j);
  sum+=i/j;
}
console.log(sum);




