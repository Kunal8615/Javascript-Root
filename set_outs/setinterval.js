function time(){
    let now = new Date();
    let  hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    horus = (hour<10) ? "0" + hour :hour;
    console.log( hour + " :" +min + ":"+sec);
}

setInterval(time,1000)