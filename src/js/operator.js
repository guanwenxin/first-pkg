// 加减乘除
const strToInt = Number('thjdfijm')
const strToIntByParse = parseInt('1')
console.log(strToIntByParse)
console.log(1 + '1')
console.log(1 - '1')


//原生类型
const a = 1;

//包装类型
const aa = Number(1)
//保留两位小数
const b = (1/3).toFixed(2)
console.log(b)


//逻辑运算
//1.&&与   只有两个位都为1的时候1
//2.||非    只有两个位都为0的时候0，只要有一个1就是1
const bb = undefined;
const aaa = bb || 5;
console.log('a',aaa)



//比较运算符
// >  <  >=  <=
if (4 >= 5) {
    console.log('进来了')
}
else{
    console.log('没进来')
}

// == 有类型转化
// 在js中，只用===，包含了所有的类型，没有类型转化
// !=,==,!==,===
if (true !== 1) {
    console.log('aaa')
}


const people = {
    family: {
        brother: null,
        sister: {
            name: 'xixi'
        }
    }
}
// optional chainning可选链运算符
console.log(people?.family?.sister?.name)   //取不到就会返回undefined



//流程控制
// if () {

// } else if () {

// } else {

// }

for(let i = 0; i < 5; i++) {
}

while(false) {

}                 // 死循环

do {

} while(false)    //先执行一次


const nameLong = 'hahaha'
switch(nameLong) {
    //case可以直接匹配字符串
    case 'hahaha': {
        console.log('匹配上了')
        break;
    }

    default: {
        console.log('不知道啥名')      //没有匹配的上就是走default
    }
}



// 经典函数
// js里面一切都可以视为变量，函数也快呀作为变量 
// 没有函数重载  函数名不可重复 
// 括号里面可以声明形参
function test () {
    const a = 1;
    //返回值
    return a;
}

function add (name,age){
    return name + age;

}

const name = 'aaa'
const age = 111
add(name,age)

//调用和声明的区分
//运行的时候，后面一定会没有有大括号{}，没有的话一定是执行调用
//有大括号一定是在声明

// 简写
const functionSet = {
    //没有简写前  test： function test（）
    test() {
    },
    add,     //key value 都是add，但是value是一个函数
}


const renameADD = add;
// 调用的时候加一个括号就行
// renameADD(1, 2)
console.log('加法测试', renameADD(1, 2))


// 匿名函数
// 没有函数名，声明函数的时候直接以变量的方式
const nimingfunction = function() {
    console.log('nimingfunction')
}


// 箭头函数 = 整个函数的返回值 + 参数
const arrowFunction = () => console.log('arrowFunction');
// a+b默认作为返回值返回了
const arrowFunctionParam = (a, b) => a + b;
// 复杂
const arrowFunctionParam2 = (a, b) => {
    const t = a;
    const s = b;
    return t + s;
}
console.log(arrowFunctionParam2(1, 2))
