let a=[3,4,-2,-12,6,8,-4,2,67,-8]
let r=a.reduce((c,e)=>{
    if(e>0){
        return c+1
    }
    else{
        return c
    }
},0)
console.log(r)