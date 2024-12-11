loop1:
for(let i=1;i<=10;i++){
    loop2:
    for(let j=1;j<=10;j++){
        console.log(i,j)
        if(j%3==0){
            break loop1
        }
    }
}

//Two Pointer- maintaining parellel loop

for(i=1,j=20;i<j;i++,j--){
    console.log(i,j)
}