let a=[3,5,6,2,4]
let k=3

for(let i=1;i<=k;i++){
    a.push(a.shift())
}
console.log(a)