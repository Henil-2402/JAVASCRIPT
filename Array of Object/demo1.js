let a=[{"pid":101,"name":"com","price":28000},
    {"pid":102,"name":"mob","price":48000},
    {"pid":103,"name":"kp","price":8000},
    {"pid":104,"name":"mc","price":600},    
    {"pid":105,"name":"tab","price":12000}]

//for all object
for(let i in a){
    console.log(a[i])
}

//for particular property
for(let i in a){
    console.log(a[i].pid)
    console.log(a[i].name)
    console.log(a[i].price)
}