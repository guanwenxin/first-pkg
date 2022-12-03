const task = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve()
    },2000)
});

task.then(()=>{
    console.log('hello world')
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },2000)
})
}).then(()=>{
    console.log('hello world')
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },2000)
})
}).then(
    ()=>{
        console.log('hello world')
    }
)