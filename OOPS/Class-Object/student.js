class std{
    constructor(sid,name,dept,s1,s2,s3)
    {
        this.sid=sid
        this.name=name
        this.dept=dept
        this.s1=s1
        this.s2=s2
        this.s3=s3
    }
    gettotal()
    {
        return this.s1+this.s2+this.s3
    }
    getps()
    {
        return (this.gettotal()/150*100).toFixed(2)
    }
    getres(){
        console.log(this.sid,this.name,this.dept,this.s1,this.s2,this.s3,this.gettotal(),this.getps())
    }
}
let std1=new std(101,"henil","ce",43,23,34)
let std2=new std(102,"om","me",40,33,30)
let std3=new std(103,"venky","ec",43,30,36)
std1.getres()
std2.getres()
std3.getres()