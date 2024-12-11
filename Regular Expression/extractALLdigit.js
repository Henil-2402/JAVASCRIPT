let r=/\d/g
let s="d34g2761FSH332A!R5"
let a=s.match(r)
if(a.length>0){
    a.sort()
    a.reverse()
    let i=a.length-1
    for(;i>=0;i--){
        if(a[i]%2==0){
            a.push(a[i])
            a.splice(i,1)
            break
        }
    }
    if(i==-1){
        console.log(-1)
    }
    else{
        console.log(a.join(""))
    }
}
else{
    console.log(-1)
}