let n=11,i,count=0
for(i=1;i<=n;i++){
    if(n%i==0){
        count=count+1
    }
}
if(count==2){
    console.log("It is a prime")
}
else{
    console.log("Not a prime")
}

// number is prime or not using flag variable.
n=15,flag=true,i
if(n==1){
    console.log("not a prime")
}
else{
    for(i=2;i<n;i++){
        if(n%i==0){
            flag=false
            break
        }
    }
    if(flag){
        console.log("prime")
    }
    else{
        console.log("not a prime")
    }
}