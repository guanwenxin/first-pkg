// 微任务： promise

// 1 2 5 6 结果3 4
console.log(1)
// Promise方法没有then就会被立即执行 2，3没有被打印就没有执行
const promise = new Promise((resolve, reject) => {
    console.log(2)
    resolve(3)
})
// setTimeout宏任务
setTimeout(() => {
    console.log(4)
})
console.log(5)
// promise.then方法微任务
promise.then((res) => console.log('结果' + res))
console.log(6)
