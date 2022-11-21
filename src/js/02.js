const user = {
    name : 'hhh',
    age: 3 
}

//禁止
// user = {
//     name: 'xxx'
// }

//冻结后无法修改里面的内容 
// Object.freeze(user) 

user.name = 'xxx'
console.log(user)



//1.增
const prop = 'height'
// user.height = 1;
// user['height'] = 1;
user[prop] = 1;

console.log(user)

//2.修改 
user.name = 'gwx'
user[prop] = 1;

//3.查询
const userName = user.name
console.log(userName)

//4.删除 对象的属性
delete user.age




//引用类型
const config = {
    accessKey:{
        key:'qwertyuiop'
    },
    secretKey:'123456789',
}

// const copyConfig = config;
// copyConfig.accessKey = '1'

const copyConfig = {
    accessKey: config.accessKey,
    secretKey: config.secretKey
}

copyConfig.accessKey.key = 1;
console.log(config)

// deepCopyObject(aimObject) {
//     // 递归遍历对象的属性值
// }


// JSON字符串
console.log(JSON.stringify(config))

// json 方法深拷贝
// const jsonString = JSON.stringify(config)
const deepConfig = JSON.parse(JSON.stringify(config))
deepConfig.accessKey.key = 1;
console.log(deepConfig)
console.log(config)

// 判断是否是对象
const easy = {
    name: 'pjw'
}

console.log(typeof easy)
console.log(typeof 1)
console.log(typeof '1')
console.log(typeof true)
console.log(typeof undefined)
// console.log(typeof null)

// 解构语法
const bigOjb = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

const { a: ttt, b, c, d } = bigOjb
console.log(ttt, b, c, d)

// 简写
const name = 'pjw';
const self = {
    name, // 如果对象的key和value所使用的变量名相同，可直接简写
    age: '2'
}
console.log(self)


// 面向对象的思想
const people = {
    name: 'pjw',
    age: '23',
    university: 'ujs',
    sing: function() {
        console.log('我会唱歌')
    }
}

people.age
people.name
people.sing()