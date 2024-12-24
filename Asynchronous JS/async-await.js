let probj=new Promise((resolve,reject)=>{
    let obj={"name":"xyz","age":20,"place":"hyd"}
    setTimeout(()=>resolve(obj),5000)
    //setTimeout(()=>reject("error in promise"),5000)
})

async function fun() {
    try{
        let result=await probj
        console.log(result)
    }
    catch(err){
        console.log("error:",err)
    }
}
fun()
console.log("end of pgm")