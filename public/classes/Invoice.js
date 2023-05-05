//classes
export class Invoice {
    //constructor
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    //method
    format() {
        return `${this.client} owes RM${this.amount} for ${this.details}`;
    }
}
