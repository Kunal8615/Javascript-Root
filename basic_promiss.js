console.log("1");

let val = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({
            new : "kunal"
        })
    }, 2000);
})

val.then((val)=>{
    console.log(val.new);
}).catch((err)=>{
    console.log(err);
})

console.log("3");

