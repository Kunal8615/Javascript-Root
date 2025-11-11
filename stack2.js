class stack{
   
    constructor(){
        this.item = [];
        this.index = -1
       
    }

    push(a){
        this.index++
        this.item[this.index] = a;
    }

    pop(){
        this.index--;
    }

    display(){
        while(this.index!= -1){
            console.log(this.item[this.index]);
            this.index--;
        }
    }
}

let a = new stack;
a.push(1);
a.push(2);
a.push(2);
a.push(2);
a.push(2);
a.push(9);
//a.pop();
a.display();