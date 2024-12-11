let obj={sid:101,name:"henil",age:22,dept:"cse",marks:85}
console.log(obj.name,obj.marks,obj.dept)
console.log(obj['sid'],obj['name'],obj['marks'])

for(let p in obj){
    console.log(obj[p])
}