export class Order {
  id?: string;
  userId?: string;
  adminId?: string;
  title: string;
  orderState: string;
  userComment: string;
  video: Object;
  comments?: string[];
}
