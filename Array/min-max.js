let a=[5,7,1,3,9,8]
let min=max=a[0]
for(let e of a){
    if(e<min){
        min=e
    }
    else if(e>max){
        max=e
    }
}
console.log(min,max)