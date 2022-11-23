// 函数的使用
function add(x, y) {
    return x + y;
}

var v = add(10, 10);
// x = 10,y = 10 ,按照顺序执行
console.log(v)
// 函数的使用 1.函数的定义（定义参数，定义规则）  2.函数的调用：给参数赋值，按规则执行

// 匿名函数
const fAdd = function (x, y) {    //匿名函数     fAdd：函数变量
    return x + y;
}
v = fAdd(20, 20);
// x = 20,y = 20 ,按照顺序执行
console.log(v)

//回调函数
const m = function (x, y, fCallback) {   //函数m的参数里面包含了函数变量，在m实现里面调用了f，f就叫回调函数
    return fCallback(x, y);
}

v = m(30, 30, fAdd);                 //函数调用的时候，能动态加载规则, fAdd可以变为加减乘除等
// x = 30,y = 30 ,fCallback=fAdd
console.log(v)

v = m(50, 50, function (x, y) { return x * y; });
// x = 50,y = 50 ,fCallback=function (x, y){return x * y;}   匿名函数的方法
console.log(v)

v = m(60, 60, (x, y) => x / y);
// x = 60,y = 60 ,fCallback=(x, y) => x / y)}   箭头函数的方法
console.log(v)

// 回调函数能够访问主函数变量
const mm = function (r) {
    const pi = 3.14;
    var v = m(r, r, (x, y) => pi * x * y);
    console.log(v);
}
mm(10)

