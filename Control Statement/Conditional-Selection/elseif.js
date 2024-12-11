// Display gratest among 3 numbers.
let a=10,b=20,c=5
if(a>b && a>c){
    console.log(a)
}
else if(b>c){
    console.log(b)
}
else{
    console.log(c)
}

//Display grade of a student by consdering marks as a input.
let m=87
if(m>=90){
    console.log("O")
}
else if(m>=70){
    console.log("A")
}
else if(m>=50){
    console.log("B")
}
 else if(m>=40){
    console.log("C")
}
else{
    console.log("F")
}

//calculate electricity bill by considering old meter reading, new meater reading by using following slabrates.
let om=1122,nm=1275
nu=nm-om

if(nu<=100){
    console.log(nu*3)
}
else if(nu<=150){
    console.log(nu*5.3)
}
else{
    console.log(nu*11.7)
}
