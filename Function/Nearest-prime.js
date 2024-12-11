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

let n=20
while(true){
    if(isprime(n)){
        console.log(n)
        break
    }
    else{
        n++
    }
}