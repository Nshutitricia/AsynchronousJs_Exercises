function createAlarm(name,delay){
    return new Promise((resolve,reject)=>{
        if(delay<2000){
            reject("Delay is not sufficient")
        }
        setTimeout(()=>{
            resolve(`Wake up ${name}`)
        },delay)
    })
}

createAlarm('John',40).then((n)=> console.log(n)).catch((e)=>console.log(e))