function prime(a){
    let count=0
    for (let i = 1; i <= a; i++) {
        if(a%i==0){
            count = count +1
        }
        
    }
    if(count==2){
        console.log("prime number");
    }else{
        console.log("mot a prime");
    }

}

prime(16)