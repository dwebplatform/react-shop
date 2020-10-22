
import express from 'express';
import dotenv from 'dotenv';
import products from './data/products.js';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import {notFound, errorHandler} from './middleware/errorMiddleware.js';
dotenv.config();
 
const app = express();
connectDB();

 //cat.save(function(err, res){
//     if(err) { console.log(err)}
//     console.log(res);
// }); 

 
app.use('/api/products',productRoutes);

app.use(notFound);

app.use(errorHandler);
app.get('/',(req,res)=>{
    res.send('Api is running');
});

 

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server running on ${process.env.NODE_ENV} mode
on port ${PORT}`));