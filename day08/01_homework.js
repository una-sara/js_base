//使用遍历数组，实现翻转数组中元素
/*
var arr=['a','b','c','d'];
//准备新数组，倒着找到元素，放进来
var arr2=[];
//遍历数组，获取每个元素
for(var i=0;i<arr.length;i++){
  //0  4  3  
  //1  4  2
  //2  4  1
  //3  4  0
  //长度-1-i
  //console.log( arr[ arr.length-1-i ] );
  //把找到的元素放入到arr2
  arr2[i]=arr[arr.length-1-i]
}
console.log(arr2);
*/
//冒泡排序
var arr=[23,9,78,6,45];
//外层循环：控制循环轮数
for(var i=1;i<arr.length;i++){
  //1  5  4
  //2  5  3
  //3  5  2
  //4  5  1
  //内层循环：控制每轮比较的次数
  for(var j=0;j<arr.length-i;j++){
    //如果当前的元素大于下一个元素，则位置交换
    if(arr[j]>arr[j+1]){
	  var tmp=arr[j];
	  arr[j]=arr[j+1];
	  arr[j+1]=tmp;
	}
  }
}
console.log(arr);


