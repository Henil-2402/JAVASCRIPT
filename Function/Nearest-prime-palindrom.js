function isprime(n){
    let f=true
    if(n<=1){
       f=false
    }
    else{
        for(let i=2;i<n;i++){
            if(n%i==0){
                f=false
                break
            }
        }
    }
    return f
}

function ispal(n){
    let t=n, r=0
    while(n!=0){
        r=r*10+n%10
        n=parseInt(n/10)
    }
    return t==r
}

let n=120
while(true){
    if(isprime(n) && ispal(n)){
        console.log(n)
        break
    }
    else{
        n++
    }
}