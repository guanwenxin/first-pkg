// api调用，callback函数


//申明
const paramObject = {
    timeStamp: '',
    nonceStr: '',
    //在这声明了就可以拿到res？因为paramObject这个对象扔给三方的API，三方的API调用success，
    //并且把它的参数res传来，即res声明了，在底下就可以获取到，（注意此处局的声明不代表执行!）
    success: (res/**声明 */) => {        //箭头函数
        console.log(res)
    }
}

const paramObject1 = {
    timeStamp: '',
    nonceStr: '',
    // success: ()  => {}    回调函数写成箭头函数
    success: function() {}      //写法1.匿名函数
}



function handle() {}            //写法2.把函数声明在外面
const paramObject2 = {
    timeStamp: '',
    nonceStr: '',
    success: handle
}



function success() {}          //写法3.直接把声明在外面的函数，命名为success

const paramObject3 = {
    timeStamp: '',
    nonceStr: '',
    // success: success,
    success,  //函数名和key 相同
}


//写法3拓展，微信的示例都是这种写法
//key和value用逗号
// function success() {}        

// const paramObject3 = {
//     timeStamp: '',
//     nonceStr: '',
//     success() {
//         console.log('hhh')       // 里面的东西都是特别少
//     },
//     fail() {
//         console.log('hahaha')
//     },
// }

wx.requestPayment(paramObject)