s1="Javascript"
r=""

for(let i=s1.length-1;i>=0;i--){
    r=r+s1[i]
}
console.log(r)

//method2
for(let i=s1.length-1;i<=0;i++){
    r=s1[i]+r
}
console.log(r)