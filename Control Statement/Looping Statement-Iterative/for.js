//write a program to display 1 to n number.
let n=10,i
for (i=1; i<=n; i++){
    console.log(i)
}

//Display even number between 1 to n
n=12
for(i=0; i<=n; i++){
    if(i%2==0){
        console.log(i)
    }
}

//Display alternative even number betwwen 1 to n
n=12
for(i=0; i<=n; i++){
    if(i%2==0){
        console.log(i)
        i+=2
    }
}

//Display sum of 1 to n numbers.
n=5
sum=0
for(i=1;i<=n;i++){
    sum=sum+i
}
console.log(sum)