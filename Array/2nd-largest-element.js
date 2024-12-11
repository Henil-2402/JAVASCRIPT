let a=[5,4,2,6,7,8,9,1]
a.sort((x,y)=>y-x)
for(let i=0;i<a.length-1;i++){
    if(a[i]!=a[i+1]){
        console.log(a[i+1])
        break
    }
}