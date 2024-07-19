let obj1 ={
    demo: "value",
    name : "kunal"
}

let obj2 = {}

for(let key in obj1){
    obj2[key] = obj1[key];
}

console.log(obj2);