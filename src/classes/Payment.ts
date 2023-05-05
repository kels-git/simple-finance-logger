import { HasFormatter } from "../interface/HasFormatter";

//classes
export class Payment implements HasFormatter {
  //constructor
  constructor(
    readonly recipient: string,
    public details: string,
    private amount: number
  ) {}

  //method
  format() {
    return `${this.recipient} is owed RM${this.amount} for ${this.details}`;
  }
}
