//concate using spread operator
let a=[5,8,3,7]
let b=[5,6,3,1,2,3]
let c=[6,5,2,3]
let r=[...a,...b,...c]
console.log(r)

//using concat method
 a=[5,8,3,7]
 b=[5,6,3,1,2,3]
 c=[6,5,2,3]
 rs=a.concat(b,c)
console.log(rs)

//Reverse the element
 a=[5,8,3,5,7]
 a.reverse()
 console.log(a)