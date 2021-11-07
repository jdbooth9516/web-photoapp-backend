import mongoose, {Schema} from 'mongoose';

export interface IOrder {
    custName: string,
    photoName: string,
    productType: string,
    cost: number,

}

const OrderSchema = new Schema<IOrder>({
    custName: { type: String, required: true},
    photoName: { type: String, required: true},
    productType: { type: String, required: true},
    cost: { type: Number, required: true},
})

const Orders = mongoose.model<IOrder>('orders', OrderSchema);

export default Orders;