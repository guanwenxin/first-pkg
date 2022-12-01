function parent() {
    this.name = 'hahaha';
    this.age = 23
}

parent.prototype.getMoney = function() {     //添加一个赚钱的属性方法
    console.log('获取100元')
}

const child = new parent()            //通过parent new 出的  child会继承通过parent方法
child.getMoney()



//原型继承
const simpleChild = {}

// 手动更改普通对象的__proto__指向
simpleChild.__proto__ = parent.prototype

simpleChild.getMoney()

console.log(simpleChild)     //parent {}