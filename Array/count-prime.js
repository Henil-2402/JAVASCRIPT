let a=[3,4,7,8,4]
let c=0
for(let e of a){
    let f=true
    for(let i=2;i<e;i++){
        if(e%i==0){
            f=false
            break
        }
    }
    if(f){
        c++
    }
}
console.log(c)