// //函数式
const array = [2, 1, 3., 4]

// //函数
// function callback (element, index, array) {
//     console.log(element, index, array)
// }
// // element：   数组中正在处理的当前元素
// // index：     数组中正在处理的当前元素的索引
// // array：     forEach() 方法正在操作的数组
// //遍历
// array.forEach(callback)

// 1.所有元素+1
// 2.打印新数组
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i] + 1)
// }


// map 的返回值：   一个新数组，每个元素都是回调函数的返回值
// foreach 的返回值：   undefined   
array.map(item => item + 1)
     .forEach(item => console.log(item))


     //其它常用的函数式
console.log(array.includes(100))
//把数组拼接起来   此处用 + 号拼接
console.log(array.join('+'))
// console.log(array.reverse())
console.log(array.slice(1, 3))

// a - b顺序
// b - a 逆序
array.sort((a, b) => a - b)
console.log(array)


//示例1
const myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
const removed = myFish.splice(3, 1);            //从索引 3 的位置开始删除 1 个元素
//示例2
const myFish1 = ["angel", "clown", "mandarin", "sturgeon"];
const removed1 = myFish.splice(2, 0, "drum");   //从索引 2 的位置开始删除 0 个元素，插入“drum”



const name = 'drum'
// const findItem = myFish.find((item) => {
//                       if(item === name){
//                          return true;
//                       }
//                        else{
//                          return false;
//                        }})
const findItem1 = myFish.find((item) => item === name)
const findItem2 = myFish.findIndex((item) => item === name)

console.log(findItem1)
console.log(findItem2)


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter((item) => {
//                       if(item.length > 5){
//                          return true;
//                       }
//                        else{
//                          return false;
//                        }})
const result = words.filter((item) => item.length > 5)    //回调函数
console.log(result)

const testArr1 =[[6, 2], 3, 4, [4], 5]
console.log(testArr1.flat().flat())     //每次只能flat 扁平化一次




const testArr = [[6, 2], 3, 4, [4], 5]
// 打平，排序，过滤数值为4的元素，然后打印所有值
testArr.flat()
    .sort((a, b) => a - b)
    .filter((item) => item !== 4)
    .forEach((item) => console.log(item))