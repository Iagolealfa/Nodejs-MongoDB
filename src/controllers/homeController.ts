import { Request, Response } from 'express';

import { Product } from '../models/Product';
import User from '../models/User';

export const home = async (req: Request, res: Response)=>{

    await User.findOneAndDelete({
        email : 'luiza@gmail.com'
    })
    
    let users = await User.find().sort({"name.firstName" : 1})

    res.render('pages/home', {
        users
    });
};