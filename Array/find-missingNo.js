//Method 1- uisng min,max and searching
let a=[5,8,2,3,7,6]
let m=Math.min(...a)
let n=Math.max(...a)

for(let i=m;i<n;i++){
    if(!a.includes(i)){
        console.log(i)
        break
    }
}

//Method 2- sorting
a.sort((x,y)=>x-y)
for(let i=0;i<a.length;i++){
    if(a[i+1]-a[i]!=1){
        console.log(a[i]+1)
        break
    }
}
