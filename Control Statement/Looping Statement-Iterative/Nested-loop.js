//Example
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        console.log(i,j)
    }
    console.log("End of the j loop")
}

//check prime number is 1 to n.
let n=7
for(let i=2;i<=n;i++){
    let f=true
    for(let j=2;j<i;j++){
        if(i%j==0){
            f=false
            break
        }
    }
    if(f){
        console.log(i)
    }
}

//Display prime factor for a given number.
n=16
for(let i=2;i<=n;i++){
    if(n%i==0){
        let f=true
        for(let j=2;j<i;j++){
            if(i%j==0){
                f=false
                break
            }
        }
        if(f){
            console.log(i)
        }
    }
}

//count the number of prime number between m to n.
let m=10,c=0
n=100
for(let i=m;i<=n;i++){
    let f=true
    for(let j=2;j<i;j++){
        if(i%j==0){
            f=false
            break
        }
    }
    if(f){
        c++
    }
}
console.log(c)

//Display sum of individual digit given number until the single digit.
n=59873
while(n>9){
    let s=0
    while(n!=0){
        d=n%10
        s=s+d
        n=parseInt(n/10)
    }
    n=s
}
console.log(n)

//short-cut
n=59873
let r=n%9
if(r==0){
    r=9
}
console.log(r)

//Display nth prime number
n=3,c=0,i=2
while(true){
    let f=true
    for(j=2;j<i;j++){
        if(i%j==0){
            f=false
            break
        }
    }
    if(f){
        c++
        if(c==n){
            console.log(i)
            break
        }
    }
    i++
}