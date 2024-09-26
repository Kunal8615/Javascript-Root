function countCarryOperations(num1, num2) {
    let carryCount = 0;  // Counter to track the number of carries
    let carryOver = 0;   // Stores the carry from previous digit addition

    // Convert numbers to string to process each digit from right to left
    let str1 = num1.toString();
    let str2 = num2.toString();
    
    // Get the lengths of both numbers
    let len1 = str1.length;
    let len2 = str2.length;

    // Start from the rightmost digit of both numbers
    let i = len1 - 1;
    let j = len2 - 1;

    // Loop until there are no more digits left in both numbers or no carry over remains
    while (i >= 0 || j >= 0 || carryOver) {
        // Get digits from both numbers; if   a number is shorter, consider missing digits as 0
        let digit1 = i >= 0 ? parseInt(str1[i]) : 0;
        let digit2 = j >= 0 ? parseInt(str2[j]) : 0;

        // Add the digits along with the carryOver from the previous step
        let sum = digit1 + digit2 + carryOver;

        // If the sum is 10 or more, a carry is generated
        if (sum >= 10) {
            carryCount++;  // Increment the carry count
            carryOver = 1; // Set carryOver for the next iteration
        } else {
            carryOver = 0; // No carry for the next iteration
        }

        // Move to the next left digits in both numbers
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
