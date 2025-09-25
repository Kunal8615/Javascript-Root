const check = (strr) => {
    let vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
  let len = strr.length;

    for (let char of strr) {        // loop directly through the string
      if (vowels.includes(char)) {  // check if it's a vowel
        count++;
      }
    }
  
    console.log(count);
    console.log("consonent" + ( len-count));
  };
  
  console.log(check("abrrde")); // Output: 2
  