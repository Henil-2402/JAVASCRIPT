/*if there is only one statment no need to add block("{ }").
The result will return automatically,no need to add return statement.*/

let add=(a,b)=>a+b
console.log(add(5,3))

/*If we add block,you can use one or multiple statement but we need
to add return statement explicitly to return result.*/

let adding=(a,b)=>{
    return a+b
}
console.log(adding(5,3))