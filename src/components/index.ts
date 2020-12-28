import { Invoice } from './Classes/Invoice';
import { Formatter } from './Interfaces/interFace';
import { Payment } from './Classes/Payment';
import { ListTemplate } from './Classes/ListTemplate';

// HTML ELEMENTS
const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// CREATED LIST ITEM
const createdItem = document.querySelector('.item-list') as HTMLUListElement;
// CREATED LIST ITEM'S INSTANCE
const list = new ListTemplate(createdItem);

// ADD METHOD
form.addEventListener('submit', (e:Event) => {
  e.preventDefault();
  let formatter: Formatter;
  if(type.value === 'invoice'){
    formatter = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    formatter = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }
  list.render(formatter, type.value, 'end');
});
