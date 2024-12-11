let a=[3,-1,5,6,-3,1,-4,2]
let i=0
while(i<a.length){
    if(a[i]<0){
        a.splice(i,1)
    }
    else{
        i++
    }
}
console.log(a)
