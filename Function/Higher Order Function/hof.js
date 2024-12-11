/*If higher order function is a function, it will take another function 
as a argument.*/

let area_s=(s)=>s*s
let area_c=(r)=>3.14*r*r
let vol_s=(s)=>s**3

function hof(a,fun){
    let r=[]
    for(let i=0;i<a.length;i++){
        r.push(fun(a[i]))
    }
    console.log(r)
}
hof([2,3,6,4,7],area_s)
hof([3,8,1,4,6],area_c)
hof([2,8,67,9,3],vol_s)