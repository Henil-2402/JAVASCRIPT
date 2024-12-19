class A{
    mthd1(){
        console.log("class A")
    }
}
class B extends A{
    mthd2(){
        console.log("class B")
    }
}
let obj=new B()
obj.mthd1()
obj.mthd2()