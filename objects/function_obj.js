function circle(a,b){

    this.rad = a;
    this.hei = b;
    this.draw = function(){
        console.log("band gya")
    }

};
let one = new circle(7,9)
console.log(one);

let x = prompt("Enter a number: ");
console.log("You entered:", x);