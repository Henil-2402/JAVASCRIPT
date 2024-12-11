let a=["hello","gOod","fiNe","welCome"]
let r=a.map((s)=>s[0].toUpperCase()+s.slice(1,s.length).toLowerCase())
console.log(r)