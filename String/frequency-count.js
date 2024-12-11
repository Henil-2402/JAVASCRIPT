let s="hsdkndgalknetwqgfikhtpo"
obj={}

for(let i=0;i<s.length;i++){
    if(obj[s[i]]==undefined){
        obj[s[i]]=1
    }
    else{
        obj[s[i]]=obj[s[i]]+1
    }
}
console.log(obj)