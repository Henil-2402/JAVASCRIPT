//obj.pname=value
//{...obj,pname:value} if property name knows,

let obj={sid:101,name:"henil",age:22,dept:"cse",marks:85}

//method1
obj.place='hyd'
obj.dept='ece'
console.log(obj) // updating in same object

//method2
let std={...obj,'place':'hyd','age':25}
console.log(std)