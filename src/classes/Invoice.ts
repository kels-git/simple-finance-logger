import { HasFormatter } from "../interface/HasFormatter.js";

//classes
export class Invoice implements HasFormatter {
  readonly client: string; //property & type & modifier used is readonly
  public details: string; //property & type & modifier used is public
  private amount: number; //property & type & modifier used is private

  //constructor
  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  //method
  format() {
    return `${this.client} owes RM${this.amount} for ${this.details}`;
  }
}
