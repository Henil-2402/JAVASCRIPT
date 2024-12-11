//Function defination will be hoisted(move to beginning of the block.)
/*Note: function define with function expression are arrow function 
can not be hoisted.*/
console.log(add(20,30))
console.log(add(3,2))
function add(x,y){
    return x+y
}