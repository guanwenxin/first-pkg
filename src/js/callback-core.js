const fn = () => console.log('名字获取成功')
const callback = function (name/**参数可以获取某个api的数据 */) {
    /**我们需要注重的是，函数体里面实现我们自己的逻辑 */
}
//只需要把函数声明出来，然后把函数丢给api，我们就可以获得api上面声明的数据

//fn
//看到函数的声明，就要传一个函数
//1.假设 不需要函数的名字只需要某些操作
getName(fn)
//2.
//调用getname函数，
getName(callback)



// 1. param1 callback
// 函数的声明，方法的声明，函数签名，方法签名
// getName()
// callback函数的参数声明
// 第一个参数是用户名
function getName(callback) {
    // 平台数据获取
    const name = 'hahaha'
    //调用的时候需要给name，希望在上面的回调函数上面获取name
    //那么就会在在调用callback函数的时候把 name 作为实参
    callback(name)
}




function handleCash(leftCash/** 获取到的 */) {
    console.log('现金额度', leftCash)
}

//申明
const paramObject = {
    name: 'zgyh',
    site: 'zhenjiang',
    callback: handleCash
}

getLeftCash(paramObject)

/**
 * @object 对象
 * @key name
 * @key site
 * @key callback 获取余额
 */
function getLeftCash(backInfo) {
    // 平台数据获取
    const { name: backName, site } = backInfo;     //解构的语法
    const leftCash = mockCach(backName, site);
    backInfo.callback(leftCash)
}

function mockCach(name, site) {
    // 查询
    return 100;
}