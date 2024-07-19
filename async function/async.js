function fun2(){
     setTimeout(() => {
        console.log("fun 2 is starting");
    }, 3000);
}

 function fun1(){
    console.log("fun 1 is starting");
    fun2();
    console.log("fun 1 is ending");
}

fun1();
