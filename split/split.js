let str = "Hello world! How are you?";
let splittedArray = str.split(" "); // Space se split karke array banayega

//console.log(splittedArray);

let newarr = splittedArray.map((val)=>{
    let len = val.length
    return len+val;
})
console.log(str + " " +  "demo");
newarr = newarr.join(' ');
console.log(newarr);