import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interface/HasFormatter.js";

// query on form
const form = document.querySelector(".new-item-form") as HTMLFormElement;

//input
const type = document.querySelector("#type") as HTMLSelectElement;
const toform = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);


form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  let value: [string, string, number];
  value = [toform.value, details.value, amount.valueAsNumber];

  if (type.value === "invoice") {
    doc = new Invoice(...value);
  } else {
    doc = new Payment(...value);
  }

list.render(doc, type.value, "end");

  console.log(doc)
});

