import { Formatter } from '../Interfaces/interFace';

export class Payment implements Formatter {
  constructor(
    public paymentInformation: string, 
    public paymentDetail: string,
    public paymentAmount: number
     ){}
     
  format() {
    return `
      ${this.paymentInformation} owes ${this.paymentAmount} for ${this.paymentDetail} 
    `;
  }
}