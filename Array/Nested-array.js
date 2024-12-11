let a=[[4,5,6,2],[5,8,7],[7,1,3]]
console.log(a[0])
console.log(a[1])
console.log(a[0][3])
console.log(a[2][1])
console.log(a.length)
console.log(a[0].length)
console.log(a[1].length)

for(let i=0;i<a.length;i++){
    for(let j=0;j<a[i].length;j++){
        console.log(a[i][j])
    }
}

for(let i=0;i<a.length;i++){
    console.log(...a[i])
}

for(let i in a){
    for(let j in a[i]){
        console.log(a[i][j])
    }
}


for(let row of a){
    for(let e of row){
        console.log(e)
    }
}

//Array.isArray() used to check given object is array or not.
a=[5,4,56,[6,3,4,5],7,[1,2,3,4]]
for(let i=0;i<a.length;i++){
    if(Array.isArray(a[i])){
        console.log(a[i])
    }
}
