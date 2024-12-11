//Display all the factor for a given numbers.
let n=12,i
for(i=1;i<=n;i++){
    if(n%i==0){
        console.log(i)
    }
}

//Display number of factor for a given number.
n=10,i,count=0
for(i=1;i<=n;i++){
    if(n%i==0){
        count=count+1
    }
}
console.log(count)

//Display sum of factor of a given numbers.
n=10,i,sum=0
for(i=1;i<=n;i++){
    if(n%i==0){
        sum=sum+i
    }
}
console.log(sum)

//Display even of between m to n
m=30,n=60
for(i=m;i<= n;i++){
    if(i%2==0){
        console.log(i)
    }
}