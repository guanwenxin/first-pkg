// 1.函数作用域
// 2.全局作用域
// 3.es2015/es6 块作用域
// 其它作用域with,eval
// eval("console.log('1')")

// var let const
// const name = 'xixixi'


//块级作用域：凡是有大括号的地方，并且有let const声明
test()
function test() {
    // 暂时性死区
    //块级作用域的特点：不可以变量提升，不可以先使用后声明
    console.log(name)
    const name = 'hahah'    //打印不了 暂时性死区

    function () {
        console.log(name)    //依然可以打印name，寻找父级作用域
    }
}
// 变量提升
// var name = 'aaa';


//块级作用域：凡是有大括号的地方，并且有let const声明
// 块级别作用，let/const关键字，关键字所在scope空间变成块作用域

for(let i = 0; i < 10; i++) {
    //i仅对这个作用域起作用，构不成闭包
    console.log(i)
}