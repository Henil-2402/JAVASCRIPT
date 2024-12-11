let a=[4,6,8,3,4,5,8,7,8,2]
let x=[...new Set(a)]
let maxcount=1,e=a[0]

for(let i=0;i<x.length;i++){
    let k=x[i]
    c=0
    for(let j=0;j<a.length;j++){
        if(a[j]==k){
            c++
        }     
    }
    if(c>maxcount){
        mc=c
        e=k
    }

}
console.log(e,mc)