let n=534,s=0
do{
    let r=n%10
    n=parseInt(n/10)
    s=s+r
}while(n!=0);
console.log(s)