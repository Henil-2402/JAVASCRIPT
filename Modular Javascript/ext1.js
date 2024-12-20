//let add=require("./demo1")
//add(5,8)                   /*single module*/

//let sum=require("./demo1") /* name is not same although program also run*/
//sum(10,12)

let {add,fact,gcd}=require("./demo1")
add(10,23)
fact(5)
gcd(12,9)