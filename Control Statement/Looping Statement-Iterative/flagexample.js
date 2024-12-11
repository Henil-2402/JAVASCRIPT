//check between 1 to n , 3 multiple are there or not.
let n=10,flag=false,i
for(i=1;i<=n;i++){
    console.log(i)
    if(i%3==0){
        flag=true
        break
    }
}
console.log(flag)

//Display first 3 and 5 multiple between m to n. if it is not available print -1.
m=5,n=15,flag=true
for(i=m;i<=n;i++){
    if(i%3==0 && i%5==0){
        console.log(i)
        flag=false
        break
    }
}
if(flag){
    console.log(-1)
}

//Display Number of digit in a give number.
 n=4583,count=0
 for(;n!=0;){
    n=parseInt(n/10)
    count=count+1
 }
 console.log(count)

 //Display calculate sum of individual digit of a given number.
 n=583,sum=0
 for(;n!=0;){
    d=n%10
    sum=sum+d
    n=parseInt(n/10)
 }
 console.log(sum)