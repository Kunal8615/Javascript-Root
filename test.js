// let strr = "nitxin"
// let end = strr.length -1;
// let start = 0;
// let flag = true
// while(start < end){
//     if(strr[start] != strr[end]){
//       flag =false;
//       break;
//     } 
//     start++;
//     end--;
// }

// if(flag == false){
//     console.log("not pamdrome");
// }else{
//     console.log("palandorm");
// }

let ar =[1,2,55,1,6]
let max = 0
for (let i = 0; i < ar.length; i++) {
    if(ar[i]>max){
        max = ar[i]
    }
    
}
console.log(max);



function fact(n){

    if(n==0){
        return 0
    }
    if(n==1 ){
        return 1
    }

   
    else{
        return fact(n-2) + fact(n-1)
    }
}

console.log(fact(3));




