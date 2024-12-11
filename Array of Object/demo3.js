//delete product with name "tab"
let a=[{"pid":101,"name":"com","price":28000},
    {"pid":102,"name":"mob","price":48000},
    {"pid":103,"name":"kp","price":8000},
    {"pid":104,"name":"mc","price":600},    
    {"pid":105,"name":"tab","price":12000}]

for(let i in a){
    if(a[i].name=="tab"){
        a.splice(i,1)
        break
    }
}
console.log(a)