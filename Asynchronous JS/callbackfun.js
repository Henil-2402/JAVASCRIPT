function fun(cbk){
    setTimeout(cbk,5000)
    console.log("end of fun")
}
function cbk(){
    console.log("end of cbk")
}
fun(cbk)
console.log("end of pgm")