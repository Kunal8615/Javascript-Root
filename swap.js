let a = 20;
let b = 15;

a= a+b
b= a-b
a= a -b
console.log("a = ",a, " b = ", b);

let ar = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({
            key : " kunal"
        })
    },2000)


})

ar.then((value)=>{
    console.log(value.key)
}).catch((value)=>{
    console.log(value);
}).finally(()=>{
    console.log("done");
})

console.log(ar);