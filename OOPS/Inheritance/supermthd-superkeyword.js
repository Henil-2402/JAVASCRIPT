class A{
    constructor(a,b){
        this.a=a
        this.b=b
    }
    disp(){
        console.log(this.a,this.b)
    }
}
class B extends A{
    constructor(a,b,c,d){
        super(a,b)
        this.c=c
        this.d=d
    }
    disp(){
        super.disp()
        console.log(this.c,this.d)
    }
}
let obj=new B(4,9,8,2)
obj.disp()