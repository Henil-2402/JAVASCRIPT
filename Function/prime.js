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
console.log(isprime(25))
console.log(isprime(3))