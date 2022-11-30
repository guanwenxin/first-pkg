// 回调函数场景
// 箭头函数没有this
// 回调函数尽量使用箭头函数
const paramObj = {
    name: 'hahahha',
    getName() {
        console.log(this)
    },

    //最原始  undefined
    timer0: function () {
        setTimeout(function () {
            //this.name是setTimeout内部的对象
            console.log(this.name, '1s')   //此处的this.name指向的不是5行的name: 'hahahha',
        }, 1000)
    },

    //1. bind绑定
    timer: function () {
        setTimeout(function () {
            console.log(this.name, '1s')   
        }.bind(this), 1000)      //自己写一个绑定函数绑定
    },

    //2.回调函数 外部环境的this是什么，内部就是什么
    timer2: function () {
        setTimeout(() => {
            console.log(this.name, '1s')
        }, 1000)
    }
}

//undefined
paramObj.timer0()
//hahahha 1s
paramObj.timer()   
paramObj.timer2()



const test = paramObj.getName





// handle()
handle(paramObj.getName.bind(paramObj))

function handle(callback) {
    callback()
}