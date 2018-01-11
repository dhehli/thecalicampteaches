export class Voucher {
  id?: string;
  description: string;
  fromDate: string;
  toDate: string;
  code: string;
  amount: number;
  onlineState: boolean;

  constructor(
    description: string,
    fromDate: string,
    toDate: string,
    code: string,
    amount: number,
    onlineState: boolean
  ){
    this.description = description;
    this.fromDate = fromDate;
    this.toDate = toDate;
    this.code = code;
    this.amount = amount;
    this.onlineState = onlineState;
  }
}
