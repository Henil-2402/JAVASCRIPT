let a=[{"sid":101,"name":"xyz","dept":"cse","marks":72},
    {"sid":102,"name":"abc","dept":"ece","marks":80},
    {"sid":103,"name":"henil","dept":"civil","marks":60},
    {"sid":104,"name":"karan","dept":"mech","marks":85},
    {"sid":105,"name":"ram","dept":"cse","marks":69},
]

//marks between 70 to 80
for(let i=0;i<a.length;i++){
    if(a[i].marks>=70 && a[i].marks<=80){
        console.log(a[i])
    }
}

console.log("-------------------------------")

//department is either cse or ece.
for(let i=0;i<a.length;i++){
    if(a[i].dept=='cse' || a[i].dept=='ece'){
        console.log(a[i])
    }
}

console.log("------------------------------")

//delete student details whose department is either civil or mech.
for(let i=0;i<a.length;){
    if(a[i].dept=='civil' || a[i].dept=='mech'){
        a.splice(i,1)
    }
    else{
        i++
    }
}
console.log(a)