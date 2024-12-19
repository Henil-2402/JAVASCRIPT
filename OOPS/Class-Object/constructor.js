class A{
    constructor(x,y){
        this.a=x
        this.b=y
    }
    disp(){
        console.log(this.a,this.b)
    }
    getA(){
        return this.a
    }
    getB(){
        return this.b
    }
    setA(x){
        this.a=x
    }
    setB(y){
        this.b=y
    }
}
let obj1=new A(5,8)
let obj2=new A(12,16)
obj1.disp()
obj2.disp()
obj1.setA(23)
obj1.disp()
console.log(obj1.getB())