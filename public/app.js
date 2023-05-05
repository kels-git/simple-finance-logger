import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
// query on form
const form = document.querySelector(".new-item-form");
//input
const type = document.querySelector("#type");
const toform = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    let value;
    value = [toform.value, details.value, amount.valueAsNumber];
    if (type.value === "invoice") {
        doc = new Invoice(...value);
    }
    else {
        doc = new Payment(...value);
    }
    list.render(doc, type.value, "end");
    console.log(doc);
});
