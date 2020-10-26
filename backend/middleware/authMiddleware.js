import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
const protect = asyncHandler(async(req,res, next)=>{
    let token;
    console.log(req.headers.authorization);
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        console.log('token found');
        token = req.headers.authorization.split(' ')[1];
         try{
            const decoded =jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch(err){
            console.error(err);
            res.status(401);
            throw new Error('Not authorized, token failed');
        }
    }
    if(!token){
        res.status(401);
        throw new Error('non authorized no token');
    }
});
export  {protect};