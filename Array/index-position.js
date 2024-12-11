let a=[5,2,6,8,4]
let f=true,k=6
for(let i in a){
    if(k==a[i]){
        f=false
        console.log(i)
        break
    }
}
if(f){
    console.log(-1)
}