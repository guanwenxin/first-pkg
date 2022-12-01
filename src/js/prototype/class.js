//面向对象 1)封装 2）继承 3）多态
class People {
    //私有属性 => 封装
    //别人调用的时候只能调用方法
    #name;
    age;
    height;
    //静态方法 不new出实例来也可以调用
    static #count = 0;
    // 一个类必须有constructor()方法，
    // 如果没有显式定义，一个空的constructor()方法会被默认添加。
    constructor(name, age, height) {
        this.#name = name;
        this.age = age;
        this.height = height;
    }


    //get方法
    getName() {
        return this.#name;

    }
    //set方法
    setName(param) {
        this.name = param;
    }

    //静态方法
    static getCount() {
        return this.#count;
    }
}


// 内部初始化，给点东西
const p1 = new People('hahaha', '1', '999')
const p2 = new People('xixixi', '2', '888')
console.log(p1.getName())
console.log(p1.getName())
p2.setName('xxx')
console.log(p2.getName())

//静态方法 不new出实例来也可以调用
console.log(People.getCount())




//单例模式
class Single {
    #name = 'qwe';
    getName(){
        return this.#name;
    }
    setName(name){
        this.#name = name;

    }
    static #instance = null;

    static getSingleInstance() {
        if(!this.#instance){
            //如果不存在就new一个，如果存在就返回
            this.#instance = new Single();
        }
        return this.#instance
    }
}

const singleObj = Single.getSingleInstance()
console.log(singleObj.getName())
singleObj.setName('单例模式')
const secondObj = Single.getSingleInstance()
console.log(secondObj.getName())





//继承 
//关键字 extends
class God extends People {
    //god有自己的私有属性
    #skill = [];
    constructor(name, age, height,skill){
        //第一步  父级有constructor就得super
        super(name, age, height)
        this.#skill = [skill];
    }

    useSkill(){
        if (this.#skill.length === 0){
        console.log('施不了法')
        return;
    }
    //技能是一次性的。pop出，，，施完法就没有了
    const aSkill = this.#skill.pop();
    aSkill();
}


    getSkill(fn){
        this.#skill.push(fn)
    }
}

const sonBoy = new God('qqq','123','000',()=>{console.log('fiy')});
console.log(sonBoy.getName());
sonBoy.useSkill()
sonBoy.getSkill(()=>{console.log('吃饭')})
sonBoy.useSkill()
sonBoy.useSkill()





