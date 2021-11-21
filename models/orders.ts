import mongoose, {Schema} from 'mongoose';

export interface IOrder {
    custName: string,
    custEmail: string,
    phoneNumber: string,
    products: Array<object>,
    cost: number

}

const OrderSchema = new Schema<IOrder>({
    custName: { type: String, required: true},
    custEmail: { type: String, required: true},
    phoneNumber: {type: String, required: true},
    products: { type: [], required: true},
    cost: { type: Number, required: true},
})

const Orders = mongoose.model<IOrder>('orders', OrderSchema);

export default Orders;