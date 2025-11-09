const code = (text)=>{
const alpha = /^[A-Z]{3}[0-9]{5}$/
const number = /[0-9]/
let flag = true;
 if(text.length!=8){
   flag = false;
 }

if(!alpha.test(text) ){
   flag = false
    }
 

 if(flag==false){
    return "not in format"
 }
 else{
    return "in format"
 }
}
 


console.log(code("TAX14517"))