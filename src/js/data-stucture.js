//栈 队列 哈希表
const arr = [1, 2, 3, 4, 5]
const arr1 = [[1, 2, 3], 3, 4, 5]      //二维数组
const arr2 = ['1', '2', '3']           //字符串
const arr3 = [{ name: 'ha' }, { name: 'haha' }, { name: 'hahaha' }]      //引用类型的对象数组



//push, 添加元素到栈的顶端(末尾);
//pop, 移除栈最顶端(末尾)的元素.
//后进先出

// const stack = []
// stack.push(1)                       //加
// stack.push(2)                       //加
// const stackToEle = stack.pop()      //弹出
// console.log(stack, stackToEle, stack.length)


//栈
//数据结构的思路(面向对象)
const Stack = {
    capacity:[],
    size: function(){
        return this.capacity.length;
    },
    push:function(item) {
        this.capacity.push(item)
    },
    pop:function(){
        return this.capacity.pop()
    }
}
console.log(Stack.capacity, Stack.pop(), Stack.size())




// 队列
const Queue = {
    capacity: [],
    size: function() {
        return this.capacity.length;
    },
    // add:function (item){     key和value相同 可以简写
    add(item) {
        // 从左边进入队列,右边弹出
        this.capacity.unshift(item)
    },
    // remove:function(){       key和value相同 可以简写
    remove() {
        return this.capacity.pop();
    }
}

Queue.add(1)
Queue.add(2)
Queue.add(3)

console.log(Queue.remove(), Queue.size(), Queue.capacity)




const Queue1 = {
    capacity: [],
    size: function() {
        return this.capacity.length;
    },
    add(item) {
        // 从右边进入队列
        this.capacity.push(item)
    },
    remove() {
        return this.capacity.shift();
    }
}

Queue1.add(1)
Queue1.add(2)
Queue1.add(3)

console.log(Queue1.remove(), Queue1.size(), Queue1.capacity)