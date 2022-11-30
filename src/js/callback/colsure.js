// 闭包(一个作用域中引用了另外一个作用域的值或者变量)
// scope
// 全局作用域
// 函数作用域
// 块作用域
const sentence = 'hahaha'

function colsure(){
    console.log(sentence/**这个地方指闭包 */)
}

colsure()





//返回值5
const fn1 = []
for(i = 0; i < 5; i++) {
    const j = function() {
        console.log(i)
    }                           //只是函数的申明，只是静态的过程，
    fn1.push(j)
}
fn1[1]()
console.log(fn1)


//返回值1
const fn = []
var i;
for(i = 0; i < 5; i++) {
    // num拿到i值，立即执行
    const j = (function(num) {
        function main() {
            // 拿到外围的形参num，构成闭包
            console.log(num);
        }
        return main;
    })(i) //iife 声明函数的同时调用函数，通过传变量的方式执行它
    //i以形参的方式传递进去，只引用形参，不构成闭包，
    //则动态
    fn.push(j)
}
fn[1]()
console.log(fn)


// iife声明函数的同时立即执行函数
// (function test(msg) {console.log(msg)})('iife')