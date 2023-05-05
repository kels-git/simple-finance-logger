//classes
export class Payment {
    //constructor
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    //method
    format() {
        return `${this.recipient} is owed RM${this.amount} for ${this.details}`;
    }
}
