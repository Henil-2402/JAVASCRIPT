function gcd(a,b){
    while(b!=0){
        let r=a%b
        a=b
        b=r
    }
    return a
}
console.log(gcd(25,40))