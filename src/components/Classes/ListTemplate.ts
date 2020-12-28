import { Formatter } from '../Interfaces/interFace';


export class ListTemplate{
  constructor(
    private container: HTMLUListElement
  ){}

  render(item: Formatter, heading: string, position: 'start'|'end'){
    
    const li = document.createElement('li');

    const h3 = document.createElement('h3');
    h3.innerText = heading;
    li.append(h3);

    const p = document.createElement('p');
    p.innerText = item.format();
    li.append(p);

    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    li.append(removeButton);
    // REMOVE METHOD
    removeButton.addEventListener('click', (e:Event) =>{
      e.preventDefault();
      this.container.removeChild(this.container.lastChild);
    });
    
    if(position === 'start'){
      this.container.prepend(li);
    } else{
      this.container.append(li);
    }
  }}
