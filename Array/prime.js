let a=[3,4,6,8,9,5]
for(let e of a){
    let f=true
    for(let i=2;i<e;i++){
        if(e%i==0){
            f=false
            break
        }
    }
    if(f){
        console.log(e)
    }
}
