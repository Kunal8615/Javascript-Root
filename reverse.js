
const str = "hello world";
let a = [1,2,3,4]

const rev  = str.split(" ").map(word=>word.split("").reverse().join("")).join(" ");

console.log(rev);