class person{
    constructor(name,age,place){
        this.name=name
        this.age=age
        this.place=place
    }
    disp(){
        console.log(this.name,this.age,this.place)
    }
}
class std extends person{
    constructor(name,age,place,sid,dept){
        super(name,age,place)
        this.sid=sid
        this.dept=dept
    }
    disp(){
        super.disp()
        console.log(this.sid,this.dept)
    }
}
class res extends std{
    constructor(name,age,place,sid,dept,marks){
        super(name,age,place,sid,dept)
        this.marks=marks
    }
    disp(){
        super.disp()
        console.log(this.marks)
    }
    lt(obj){
        return this.marks<obj.marks
    }
}
let r1=new res("henil",23,"gj",101,"cse",89)
let r2=new res("om",23,"mh",103,"cse",83)
r1.disp()
r2.disp()
console.log(r1.lt(r2))

class emp extends person{
    constructor(name,age,place,eid,dept,sal){
        super(name,age,place)
        this.eid=eid
        this.dept=dept
        this.sal=sal
    }
    disp(){
        super.disp()
        console.log(this.eid,this.dept,this.sal)
    }
    lt(obj){
        return this.sal<obj.sal
    }
}
let e1=new emp("henil",23,"gj",201,"cse",34000)
let e2=new emp("venky",23,"mh",202,"cse",35000)
e1.disp()
e2.disp()
console.log(e1.lt(e2))