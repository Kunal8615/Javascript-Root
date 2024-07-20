//it check at least one elemet in an arr meet hte condistion

const city =  [
    "delhi","rajaasthan","harayana","punjab","goa"
]

const b = city.some((c)=> c.includes("z"))
console.log(b);