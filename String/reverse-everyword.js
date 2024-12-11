let s="ab cba daxy"
s=s.split(" ")

for(let i=0;i<s.length;i++){
    let r=""
    for(let j=0;j<s[i].length;j++)
    {
        r=s[i][j]+r
    }
    s[i]=r
}
console.log(s.join(" "))