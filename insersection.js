let a = [1,2,3,5,4,7,7]
let b = [2,4,7,22]
let ne = []

for (let i = 0; i < a.length; i++) {
   for (let j = 0; j < b.length; j++) {
    if(a[i]==b[j]){
        ne.push(a[i]);
    }
   }
    
}

let du = []
for (let i = 0; i < ne.length; i++) {
if(!du.includes(ne[i]))
{
    du.push(ne[i])
}s
}
console.log(du);