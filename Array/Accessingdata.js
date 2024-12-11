let a=[5,3,6,4,8]
for(let i=0;i<a.length;i++){
    console.log(a[i])
}

//another way
let ind=0
a=[5,3,6,4,8]
while(ind<a.length){
    console.log(a[ind])
    ind++
}
//other
for(let i in a){
    console.log(a[i])
}
//other
for(let e of a){
    console.log(e)
}