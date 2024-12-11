let s="abcbccba"
s=s.split("")
let i=0

while(i<s.length-1){
    if(s[i]==s[i+1]){
        s.splice(i,2)
        i=0
    }
    else{
        i++
    }
}
if(s.length==0){
    console.log("empty string")
}
else{
    console.log(s.join())
}