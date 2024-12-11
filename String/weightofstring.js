//example abc= a+b+c= 1+2+3=6
//space weight is 32.
let s="helloworld"
let w=0
for(let i=0;i<s.length;i++){
    w=w+s.codePointAt(i)-96
}
console.log(w)