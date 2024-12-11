//Display 1 to n number using while.
let n=10,i=1
while(i<=n){
    console.log(i)
    i++
}

//check given number is prime or not using while .
n=7,flag=true,i=2
if(n==1){
    console.log("Not a prime")
}
else
{
    while(i<n){
        if(n%i==0){
            flag=false
            break
        }
        i++
    }
    if(flag){
        console.log("prime")
    }
    else{
        console.log("not a prime")
    }
}

//Display first n term in fibonaci sequence using while.
n=8,a=-1,b=1,i=1
while(i<=n){
    c=a+b
    console.log(c)
    a=b
    b=c
    i++
}

//Display  reversly given number and check whether is palindrom or not.
n=121,r=0
let t=n
while(n!=0){
    d=n%10
    r=r*10+d
    n=parseInt(n/10)
}
if(t==r){
    console.log("palindrom")
}
else{
    console.log("not a palindrom")
}

//check given number is prime or not using while .
n=7,flag=true,i=2
if(n==1){
    console.log("Not a prime")
}
else
{
    while(i<n){
        if(n%i==0){
            flag=false
            break
        }
        i++
    }
    if(flag){
        console.log(i)
    }
    else{
        console.log("not a prime")
    }
}

//Display gratest or largest digit for a given number.
let max=0
n=9657

while(n!=0){
    d=n%10
    n=parseInt(n/10)
    if(d>max){
        max=d
    }
}3
console.log(max)

//Display Howmany time given digit is repeated in a given numbers
let k=8
n=5858188,count=0

while(n!=0){
    d=n%10
    n=parseInt(n/10)
    if(d==k){
        count=count+1  
    } 
}
console.log(count)

//check given number contains either 5 or 7.
n=7823,f=false
while(n!=0){
    d=n%10
    n=parseInt(n/10)
    if(d==5 || d==7){
        f=true
        break
    }
}
if(f){
    console.log("yes")
}
else{
    console.log("No")
}

//Calculated GCD of two numbers.
a=25,b=40
while(b!=0){
    r=a%b
    a=b
    b=r
}
console.log(a)

//GCD Number with brust force approch.
a=25,b=40
let min=a<b?a:b
for(i=min;i>=1;i--){
    if(a%i==0 && b%i==0){
        console.log(i)
        break
    }
}