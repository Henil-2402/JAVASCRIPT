let a=[2,3,6,12,17,18,33,60]
console.log(a.every((e,i,arr)=>{
    if(i==0){
        return true
    }
    else{
        return arr[i]>arr[i-1]
    }
}))

let b=[2,3,6,12,617,18,33,60]
console.log(b.every((e,i,arr)=>{
    if(i==0){
        return true
    }
    else{
        return arr[i]>arr[i-1]
    }
}))