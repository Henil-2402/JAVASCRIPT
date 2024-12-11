//adding at end position.
let a=[6,4,1,3,7]
a.push(5)
console.log(a)

//other
a=[6,3,4]
a[a.length]=10
console.log(a)

//if index is avaliable,old value will replace with new value.
a=[6,3,4]
a[1]=25
console.log(a)

//if index value out of array size
a=[6,3,4]
a[10]=2
console.log(a)

//Spread oprator[...]
a=[6,3,4]
a=[...a,21]
console.log(a)

