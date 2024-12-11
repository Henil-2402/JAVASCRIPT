let a=[5,8,5,3,7,12,1,4]
for(let i=0;i<a.length-1;i++){
    let j=i+1
    while(j<a.length){
        if(a[i]==a[j]){
            a.splice(j,1)
        }
        else{
            j++
        }
    }
}
console.log(a)