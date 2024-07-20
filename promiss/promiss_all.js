let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("PROMISS 1 RESOLVE");
    },5000)
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("PROMISS 2 RESOLVE");
    },3000)
})


let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("PROMISS 3 RESOLVE");
    },1000)
})

Promise.all([p1,p2,p2]).then((value)=>{
    console.log(value);
})