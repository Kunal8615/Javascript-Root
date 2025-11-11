function countCarryOperations(num1, num2) {
    let carryCount = 0;  
    let carryOver = 0;  

  
    let str1 = num1.toString();
    let str2 = num2.toString();
    
   
    let len1 = str1.length;
    let len2 = str2.length;


    let i = len1 - 1;
    let j = len2 - 1;

   
    while (i >= 0 || j >= 0 || carryOver) {
       
        let digit1 = i >= 0 ? parseInt(str1[i]) : 0;
        let digit2 = j >= 0 ? parseInt(str2[j]) : 0;

     
        let sum = digit1 + digit2 + carryOver;

     
        if (sum >= 10) {
            carryCount++;  
            carryOver = 1; 
        } else {
            carryOver = 0; 
        }

       
        i--;
        j--;
    }

    return carryCount;
}

// Example Usage:
let num1 = 123;
let num2 = 956;
let carryOperations = countCarryOperations(num1, num2);

console.log("Total carry operations: " + carryOperations);
