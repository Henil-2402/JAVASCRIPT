let a=[4,2,3,2,3,2,2,5,6]

for(let k of [...new Set(a)]){
    let c=0
    for(let i=0;i<a.length;i++){
    if(a[i]==k){
        c++
    }
    }
    if(c==1){
        console.log(k)
        
    }
}