function add(a,b)
{
    console.log(a+b)
}
function sub(a,b)
{
    console.log(a-b)
}
function mul(a,b)
{
    console.log(a*b)
}
function fact(n)
{
    let f=1
    for(let i=1;i<=n;i++){
        f=f*i
    }
    console.log(f)
}
let gcd=(a,b)=>{
    while(b!=0){
        let r=a%b
        a=b
        b=r
    }
    console.log(a)
}
//module.exports=add  /*for single module */
module.exports={add,sub,mul,gcd,fact}