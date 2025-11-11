class demo{
  constructor(a,b){
        this.a = a;
        this.b = b;
  }

  sum(){
    console.log(this.a + this.b);
  };

  display(){
    console.log("work");
  }
};

class har extends demo{
 
  play(){
    console.log("secondclass");
  }
};
let obj = new demo(4,6);
// obj.display()
// obj.sum()
let n = new har("b");

console.log(n.display());