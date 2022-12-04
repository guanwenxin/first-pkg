// 最终的方案    async不需要和await同时出现
async function main() {
    // 直接return，拿不到返回值
    return 1;
}

// 直接顶层await
const result = await main()
console.log(result)


