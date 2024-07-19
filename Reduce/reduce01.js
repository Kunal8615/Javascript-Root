let array = ["a","b","a","d","d","a","r"]
const fruitcount = array.reduce((acc,curr)=>{
    if(acc[curr]){
        acc[curr]++;
    }
    else{
        acc[curr] = 1;
    }
    return acc;
},{})

console.log(fruitcount);
