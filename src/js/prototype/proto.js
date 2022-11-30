//构造函数
function test() {
    console.log('hello')
}

const obj = new test();
console.log(obj)      //为test {} test的空对象



//面向对象的用法
//constructer 得到 object
function people() {
    this.name = 'hahaha';
    this.age = 1;
}

const person = new people();
//person 里面含有 people 的属性
console.log(person)




///////////////////
function people1(){

} 

const p = new people1();

//true
console.log(people1.prototype === p.__proto__)
console.log(people1.prototype.constructor === people1)      //true

// const parent = {}