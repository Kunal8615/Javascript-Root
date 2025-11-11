//it check at least one elemet in an arr meet hte condistion

const city =  [
    "delhi","rajaasthpan","harayana","unjab","goa"
]

const b = city.some((c)=> c.includes("p"))
console.log(b);