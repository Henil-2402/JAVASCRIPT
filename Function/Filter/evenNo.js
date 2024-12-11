let a=[2,6,7,5,3,8,1,0]
//let r=a.filter((e)=>e%2==0)
// console.log(r)
let r=a.filter((n)=>{
let f=true
    if(n<=1){
       f=false
    }
    else{
        for(let i=2;i<n;i++){
            if(n%i==0){
                f=false
                break
            }
        }
    }
    return f
})
console.log(r)