//to divide given string into array of tokens base on delimiter 
//(s.split(delimiter))

let s="hello to all"
console.log(s.split(" "))

console.log("---------------------------------")

s="java script is a client and server side scripting language."
console.log(s.split(" "))
console.log(s.split(" ",5))

//to convert string into array of character empty string as a delimiter we used.
 
s="hello to all"
console.log(s.split(""))
console.log(s.split("to"))
console.log(s.split("too"))

a="java script is a client and server side scripting language."
console.log(a.split("client"))