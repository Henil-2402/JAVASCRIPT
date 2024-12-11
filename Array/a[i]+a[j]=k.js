let a=[5,3,7,2,1,4,2,6]
let k=8,c=0
for(let i=0;i<a.length-1;i++){
    for(let j=i+1;j<a.length;j++){
        if(a[i]+a[j]==k){
            c++
        }
    }
}
console.log(c)