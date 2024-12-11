let a=[1,3,0,-2,5,6,-9,-3,2,0,-4]
for(let i=0,j=0;j<a.length;j++){
    if(a[j]<0){
        a.splice(i,0,a.splice(j,1)[0])
        i++
    }
}
console.log(a)