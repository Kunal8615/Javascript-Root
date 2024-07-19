class Stack {
    constructor() {
        this.items = [];
    }

    push(ele) {
        this.items.push(ele);
    }

    pop() {
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    print() {
        console.log(this.items.join(" "));
    }
}

const a = new Stack();
a.push(45);
a.push(11);
a.pop()
a.print();  // This should now work correctly
