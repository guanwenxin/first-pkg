// const task = new Promise() // 怎么把异步任务塞进promise

const msgTask = () => console.log('hello world')


// 定义的时候是同步的，在定义的时候，promise对象初始化的回调函数会被立即调用，由pending转改为fulfill
const msgPromiseTask = new Promise((resolve, reject) => {
    // 封装我们的异步逻辑
    // 开心的写异步逻辑


    //怎么吃掉异步逻辑?:直接在异步的回调函数里写reslove函数就可以
    setTimeout(() => { resolve('返回数据') }, 3000)
    // 变更promise状态
    // resolve将pending状态转换为fulfill状态
    // resolve('返回数据')
    // reject将pending状态转换为reject状态
    // reject('错误信息')
})
// msgPromiseTask.then(res => {}).catch(err => { })



// 将callback hell 改成链式调用
msgPromiseTask.then(res => {
    return new Promise((resolve) => {
        resolve()
    })
}).then(() => { }).catch(err => { })