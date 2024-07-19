let Pro1 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        console.log("working");
        resolve({ kunal : "name" , harsh : "name2"})


    },3000)
})

Pro1.then((res)=>{
    console.log(res.kunal);
}).
catch((err)=>{
    console.log(err);
})
