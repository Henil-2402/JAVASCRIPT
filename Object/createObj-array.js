let p=['pid','name','cat','price']
let v=['p101','computer','ele',98876]
let obj={}

for(let i=0;i<p.length;i++){
    obj[p[i]]=v[i]
    obj={...obj,[p[i]]:v[i]}// another method
}
console.log(obj)