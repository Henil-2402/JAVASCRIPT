//perform arithmetic operation as per given operator.

let a=20,b=15,ch="*"
switch(ch)
{
    case '+':
        console.log(a+b)
        break
    case '-':
        console.log(a-b)
        break
    case '*':
        console.log(a*b)
        break
    case '/':
        console.log(a/b)
        break
    case '**':
        console.log(a**b)
        break
    default:
        console.log("check operator")
}

//check given no. is even or odd using switch.
let n=22
switch(n%2==0)
{
    case true:
        console.log("even")
        break
    case false:
        console.log("odd")
        break
}

//Grading student using switch.
let m=87
switch(true)
{
    case m>=80:
        console.log("E")
        break
    case m>=60:
        console.log("A")
        break
    case m>=40:
        console.log("B")
        break
    default:
        console.log("Fail")
}