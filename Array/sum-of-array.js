let a=[5,3,4,7,8]
let s=0
for(let i in a){
    s=s+a[i]
}
console.log(s)

//other
for(let e of a){
    s=s+e
}
console.log(s)