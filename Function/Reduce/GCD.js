let a=[15,10,25,100,160,95]
let r=a.reduce((a,b)=>{
    while(b!=0){
        let r=a%b
            a=b
            b=r
    }
    return a
})
console.log(r)