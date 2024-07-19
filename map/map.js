const arr = [1,2,3,4,5,6,8];


const fun = (val)=>{
    return val*2;
}
const newarr = arr.map(fun)

console.log(newarr);