//display whose price grater than 25000.
let a=[{"pid":101,"name":"com","price":28000},
    {"pid":102,"name":"mob","price":48000},
    {"pid":103,"name":"kp","price":8000},
    {"pid":104,"name":"mc","price":600},    
    {"pid":105,"name":"tab","price":12000}]

for(let i in a){
    if(a[i].price>25000){
        console.log(a[i].pid)
        console.log(a[i].name)
        console.log(a[i].price)
    }
}
