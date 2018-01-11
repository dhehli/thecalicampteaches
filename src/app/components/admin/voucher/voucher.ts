export class Voucher {
  id?: string;
  description: string;
  fromDate: Date;
  toDate: Date;
  code: string;
  amount: number;
  onlineState: boolean;
}
