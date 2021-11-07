import express, {Request, Response} from "express";
import Orders, {IOrder} from '../models/orders';
import {handleError} from "../src/server";

const router = express.Router();

/**
 * Route: Get api/orders
 * Desc: get all orders
 * Access: public
 */
router.get('/', async (req: Request, res: Response) =>{
    try{
        const orders = await Orders.find();
        res.json(orders)
    } catch ( error) {
        handleError(error, res)
    }
})

/**
 * Route: Post api/orders
 * Desc: create a new order
 * Access: public
 */
router.post('/', async(req: Request, res: Response) => {
    try{
        const order = new Orders(req.body)
        await order.save();
        res.json(order);
    } catch (error) {
        handleError(error, res)
    }
})
module.exports = router;