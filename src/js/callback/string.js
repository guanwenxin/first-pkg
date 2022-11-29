const { Value } = require("sass")

const str = 'hell0'
if(str.indexOf('l0') > -1) {    //想要找到必须加上> -1（或者！=0），索引是从0开始的
    console.log(str.indexOf('l0'))
    console.log('hello')
}


const userAgent = 'Mozilla/5.0 (Linux; Android 5.0; SM-N9100 Build/LRX21V) > AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 > Chrome/37.0.0.0 Mobile Safari/537.36 > MicroMessenger/6.0.2.56_r958800.520 NetType/WIFI'
//匹配字符串有没有micromessengert
//toLowerCase转化成小写模式
//是否includes   micromessenger
console.log(userAgent.toLowerCase().includes('micromessenger'))

//用正则的方法，匹配字符串有没有micromessengert  
//    /g  是全局搜索
const reg = /micromessenger/g;
//match(reg)) 是匹配正则的
console.log(userAgent.toLowerCase().match(reg))



const str2 = '123456789'
console.log(str2.slice(1, 3))

 //用split将str2变成字符串数组
const str2ToArr = str2.split('')
console.log(str2ToArr)
//join()变为字符串的形式
console.log(str2ToArr.join(''))

const str3 = '1:2:3:4:5:6:7:8:9:0'
//分隔符用：，就可以切分成123456789
console.log(str3.split(':'))







//面试题  url路径参数
//把url路径参数解析成 wd: 'vue' 的参数
//第一步 通过 ？ 分割，我们只需要 后面一部分
//第二步 以& 切分，变成数组
//第三步 遍历 数组，拿到里面的item
//第四步 针对每一个item 在split，得到长度为2 的数组 ，前面 key 后面 value
//第五步 放到大对象里面
const url = 'https://www.baidu.com/s?wd=vue&rsv_spt=1&rsv_iqid=0xa5d93f9e0009e6e3&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_dl=tb&rsv_sug3=4&rsv_sug1=1&rsv_sug7=100&rsv_sug2=0&rsv_btype=i&prefixsug=vue&rsp=8&inputT=706&rsv_sug4=7723'

function urlParser(url) {
    const resultSet = {}
    url.split('?')[1]
        .split('&')
        .forEach(str => {
            const pair = str.split('=')
            resultSet[pair[0]] = pair[1]
        })
    return resultSet;
}
console.log(urlParser(url))