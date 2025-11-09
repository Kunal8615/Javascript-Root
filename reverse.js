
const str = "hello world";
const rev  = str.split(" ").map(word=>word.split("").reverse().join("")).join(" ");
console.log(rev);