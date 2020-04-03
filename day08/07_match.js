var str='xiaoran产于上世纪七八十年代,Xiaoran至今性能依然强劲,xiaoran一顿饭能吃10盘羊肉,XIAORAN是一个美男子';
//查找
//indexOf
//console.log( str.search('XIAORAN') );
//i->ignore 忽略
// 正则表达式  /字符串/
//console.log( str.search(/XIAORAN/i) );
//g->global 全局的
//console.log( str.match(/XIAORAN/ig).length );
//查找并替换
console.log( str.replace(/xiaoran/gi,'***') );

