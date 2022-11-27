// // 1. 全局声明的函数中的this，默认指向global
// function getGlobal (){
//     console.log(this)
// }




// // 2. 对象中函数中的this，取决于调用者  info.getAge.name
// const test = {
//     name: 'hahaha',
//     info: {
//         age: 12,
//         getAge() {
//             console.log(this.name)
//         }
//     }
// }

// // getGlobal()

// const inner = {
//     name: 'hahaha',
//     getGlobal
// }

// inner.getGlobal();        //验证对象中函数中的this，取决于调用者


// 手动改变this    call apply bind
const utilSet = {
    request: function() {
        console.log(this)
        console.log('网络请求')
    },
    computed: function(a, b) {
        return a + b
    }
}
utilSet.request();

// apply, call
const obj = {
    animal: 'dog'
}

function objTest(msg, msg2) {
    console.log(this)
    console.log(msg, msg2)
}

objTest.apply(obj, ['和', '啊啊'])
objTest.call(obj, '和', '啊啊')        //apply和call的区别：连起来写(数组)和分来写

utilSet.request.call(obj) // 等价于 obj.request()


// bind
const objTestBindToObj = objTest.bind(obj)
objTestBindToObj('aha', 'sss')