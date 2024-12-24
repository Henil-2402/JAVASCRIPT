let probj=new Promise((resolve,reject)=>{
    let obj={"name":"xyz","age":20,"place":"hyd"}
    //setTimeout(()=>resolve(obj),5000)
    setTimeout(()=>reject("error in promise"),5000)
})

probj.then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log("catch block:",err)
})
console.log("end of pgm")