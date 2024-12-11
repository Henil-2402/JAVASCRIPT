//a.splice(index,no. of elements delete,e1,e2,...,en{elements insert})

let a=[6,8,2,3,9]
a.splice(2,0,12)
console.log(a)

//other
a=[6,8,2,3,9]
a.splice(2,0,12,22,34)
console.log(a)

//adding at beginning
a=[6,3,6,8,9]
a.splice(0,0,23)
console.log(a)

//another way at beginning
a=[6,3,6,8,9]
a.unshift(23)
console.log(a)
