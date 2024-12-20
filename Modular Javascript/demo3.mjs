export function add(a,b)
{
    console.log(a+b)
}
export let sub=(a,b)=>{
    console.log(a-b)
}
export default (a,b)=>{
    while(b!=0){
        let r=a%b
        a=b
        b=r
    }
    console.log(a)
}