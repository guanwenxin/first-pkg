const unique = Symbol('name');
const unique2 = Symbol('city')
//symbol对象打印的时候只是把对象打印出来

const capacity = Symbol('capacity')
const Stack = {
    [capacity]: [], // 私有属性
    size: function () {
        return this[capacity].length;
    },
    push: function (item) {
        this[capacity].push(item)
    },
    pop: function () {
        return this[capacity].pop()
    }
}


// 打标
// 网络请求拦截器
{
    name: 'pjw'
    id: '1234567'
}
//symbol的用处：不会因为id的重复，对原有的对象造成影响0
// 不想与别人重复，就用symbol，就不会覆盖别人的属性
const traceId = Symbol('traceId')
{
    [traceId]: '2345678'
}