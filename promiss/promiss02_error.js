let pro1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let status = true;
        if(status){
            resolve({ kunal :" val"})
        }

        else{
            console.log("error hai");
            reject("dikkat hau bhai")
        }
    },3000)
})

pro1.then((val)=>{
    console.log(val);
}).
catch((Err)=>{
    console.log(Err);
}).
finally(()=>{
    console.log("processing complete");
})