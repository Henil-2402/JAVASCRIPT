function ispal(n){
    let t=n, r=0
    while(n!=0){
        r=r*10+n%10
        n=parseInt(n/10)
    }
    return t==r
}
console.log(ispal(234))
console.log(ispal(232))