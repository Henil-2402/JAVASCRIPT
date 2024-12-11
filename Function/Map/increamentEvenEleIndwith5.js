let a=[2,4,3,4,1,5]
let r=a.map((e,ind)=>{
    if(ind%2==0){
        return e+5
    }
    else{
        return e
    }
})
console.log(r)