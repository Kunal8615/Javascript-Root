function dup(arr){
let new_arr = []

for(let value of arr){
    if(!new_arr.includes(value)){
        new_arr.push(value)
    }
}
return new_arr

}

let arr = [1,1,2,3,3,4,5,7]
console.log(dup(arr));