/*array of employee object increament cse,ece department emp salary with 
10%,other department emp salary with 8%*/ 

let emp=[{"id":101,"name":"amar","dept":"cse","sal":56000},
    {"id":102,"name":"karan","dept":"ese","sal":36000},
    {"id":103,"name":"suresh","dept":"cs","sal":46000},
    {"id":104,"name":"ramesh","dept":"ce","sal":76000},
    {"id":105,"name":"om","dept":"ece","sal":46000}]

let updemp=emp.map((obj)=>{
    if(obj.dept=='cse' || obj.dept=='ece')
    {
        return {...obj,'sal':obj.sal*1.1}
    }
    else{
        return {...obj,'sal':obj.sal*1.08}
    }
})
console.log(updemp)