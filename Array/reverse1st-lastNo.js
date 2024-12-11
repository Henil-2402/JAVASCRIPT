let a=[2,3,4,5,7]
let t
t=a[0]
a[0]=a[a.length-1]
a[a.length-1]=t
console.log(a)