 async function data(){
    let response = await fetch('https://numbersapi.p.rapidapi.com/6/21/date');
    try {
        console.log(response);
    } catch (error) {
        console.log(error);
    }    
    
}

 async function go(){
    let res = await data();
    console.log(res);
 }

 //go()
