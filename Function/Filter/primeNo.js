//abstract all the emp details whoes salary>45000
let emp=[{id:101,name:"henil",salary:46000},
    {id:102,name:"om",salary:44000},
    {id:103,name:"venky",salary:49000}]
let r=emp.filter((obj)=>obj.salary>45000)
console.log(r)