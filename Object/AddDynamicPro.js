//obj[pname]=value
//{...obj,[pname]:value}

let obj={sid:101,name:"henil",age:20,dept:"cse",marks:85}

//method1
let pn='place'
obj[pn]='hyd'
console.log(obj)// updating in same object

//method2
let std={...obj,[pn]:'hyd'}
console.log(std)

