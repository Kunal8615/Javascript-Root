let time = function(){
    let now = new Date();
    let  hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    horus = (hour<10) ? "0" + hour :hour;
    console.log( hour + " :" +min + ":"+sec);
}

let set1=setInterval(time,1000)
setTimeout(()=>{
    clearInterval(set1)
},6000 )