// 回调函数场景
const paramObj = {
    name: 'pjw',
    getName() {
        console.log(this)
    },
    //1.
    timer: function () {
        setTimeout(function () {
            console.log(this.name, '1s')
        }.bind(this), 1000)
    },
    //2.
    timer2: function () {
        setTimeout(() => {
            console.log(this.name, '1s')
        }, 1000)
    }
}

paramObj.timer()

const test = paramObj.getName



// handle()
handle(paramObj.getName.bind(paramObj))

function handle(callback) {
    callback()
}