const prompt = require('prompt-sync')();

let user = Number(prompt("Enter the number: "));
console.log("You entered: " + user);

const game=(user)=>{


    let random = Math.floor((Math.random(1,10))*10)
   // console.log(random);
    if(user==random){
        console.log("you won");
    }
    else{ console.log("you loss number is " + random) ;}
}


game()

