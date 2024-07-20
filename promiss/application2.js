async function perfect(){
  
    let delhi = new Promise(function(resolve,reject){
      setTimeout(function(){
        console.log("bhut garmi hai - delhi");
      },2000);
    });  
    
    
    let mumbai = new Promise(function(resolve,reject){
      setTimeout(function(){
        console.log("bhut garmi hai- mumbai");
      },3000);
    });  
    
    
    let jaipur = new Promise(function(resolve,reject){
      setTimeout(function(){     
        console.log("bhut garmi hai - jaipur");
      },5000);
    });  
  
    let dm = await delhi;
    let mu = await mumbai;
    let ja=  await jaipur;
  
    return dm,mu,ja;
  }

  perfect()