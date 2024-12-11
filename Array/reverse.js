let a=[3,4,7,8,1]
let t
for(let i=0,j=a.length-1; i<j; i++,j--){
    t=a[i]
    a[i]=a[j]
    a[j]=t
}
console.log(a)