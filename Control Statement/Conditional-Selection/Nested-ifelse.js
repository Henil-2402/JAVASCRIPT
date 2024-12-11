//Display gratest among 3 number without using logic operator.
let a=10,b=5,c=15
if(a>b){
    if(a>c){
        console.log(a)
    }
    else{
        console.log(c)
    }
}
else if(b>c){
    console.log(b)
}
else{
    console.log(c)
}

//check given no. was ending with 7 or not.
let n=147
if(n%10==7){
    console.log("yes")
}
else{
    console.log("no")
}

//concate given digit to a given no.

//give the display number is increasing order among a,b,c
a=15,b=10,c=20
if(a>b && a>c){
    if(b>c){
        console.log(c,b,a)
    }
    else{
        console.log(b,c,a)
    }
}
else if(b>c){
    if(a>c){
        console.log(c,a,b)
    }
    else{
        console.log(a,c,b)
    }
}
else{
    if(a>b){
        console.log(b,a,c)
    }
    else{
        console.log(a,b,c)
    }
}
