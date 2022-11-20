console.log('hello world')

// 定义变量
a = 1;           //window全局声明
var b = 2;       //window全局声明
const c = 3;     //只在声明所在的块级作用域内有效。 常量
let d = 4;       //只在声明所在的块级作用域内有效。 变量

// 1. number
const aa = 1;
// 2. string
const bb1 = '1234567898765';
const bb2 = "sdfgt4edcvg";      //字符串可用单引号，也可用双引号
const bb3 = `${bb1} ${bb2}`    // `` 是转行，此处空格也可以显示出来 
const bb4 = bb2 + bb1;         //空格无效，bb2和bb1；连在一起
console.log(bb3)
console.log(bb4)
// 3. boolean
const cc1 = true;
const cc2 = false;
// 4. undefined
let dd = undefined;      //undefined = undefined
// 5. null
const ee1 = {};
const ee2 = null;
// 6. symbol
const ff = Symbol('aaaa');    //唯一
console.log(ff)

// 7. object
const gg = {
    key: 'hahahaha',
    name: 'aaa'
}

// 禁止   const 是常量 ，不可以再次定义
// gg = {

// }
gg.name = 'aaa'       //改变对象的名字
Object.freeze(gg)    //对象的冻结，对象里面的内容无法更改。。对于只读文件可用

const gg1 = {
    "key": "hahaha",
    "name": "aaa"
}

// 加属性
const props = 'height';
// 加属性方法1
gg1.age = 12
// 加属性方法2
gg1['age'] = 14

// 变量的方式
gg1[props] = 181;
console.log(gg1)

const gg2 = {
    [props]: 121,
}
console.log(gg2)