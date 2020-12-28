import { Formatter } from '../Interfaces/interFace';

export class Invoice implements Formatter {
  constructor(
    public clientInformation: string, 
    public clientDetail: string,
    public paymentAmount: number
     ){}
     
  format() {
    return `
      ${this.clientInformation} owes ${this.paymentAmount} for ${this.clientDetail} 
    `;
  }
}
