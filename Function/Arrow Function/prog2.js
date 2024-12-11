let fun=(a)=>{
    let r=[]
    for(let e of a){
        if(e%2==0){
            r.push(e)
        }
    }
    return r
}
console.log(fun([2,4,8,6,3,9]))