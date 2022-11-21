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
//1.&&与
//2.||非
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

// 只用===，包含了所有的类型
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
console.log(people?.family?.sister?.name)



//流程控制
// if () {

// } else if () {

// } else {

// }

for(let i = 0; i < 5; i++) {
}

while(false) {

}

do {

} while(false)


const nameLong = 'hahaha'
switch(nameLong) {
    case 'hahaha': {
        console.log('匹配上了')
        break;
    }

    default: {
        console.log('不知道啥名')
    }
}



// 经典函数
// 没有函数重载  函数名不可重复 
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