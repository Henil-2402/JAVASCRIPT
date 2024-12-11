//string base
let a=[45,78,9,1,567,834,223456,67,6567,4]
a.sort()
console.log(a)

//increasing order
a.sort((x,y)=>x-y)
console.log(a)

//decreasing orde
a.sort((x,y)=>y-x)
console.log(a)