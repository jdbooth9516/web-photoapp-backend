import express from 'express';
import connectDB from "../config/db";
import cors from 'cors';


const app = express();

export function handleError ( error: any | unknown , res: any) {
    console.error(error.message);
    res.status(500).json({msg: "server Error"})
}

connectDB();
/**
 * incorperating the middleware
 */
app.use(express.json())
app.use(cors())
/**
 * add the routes for the api to the router
 */
app.use('/api/orders', require('../routes/order'));
/**
 * creating and listening to the server.
 */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
