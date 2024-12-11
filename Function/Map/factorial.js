let a=[2,4,6,1,3]
let r=a.map((n)=>{
    let f=1
    for(let i=1;i<=n;i++){
        f=f*i
    }
    return f
})
console.log(r)