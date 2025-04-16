
import { NextApiRequest, NextApiResponse } from 'next';
import data from '../../data/data.json'
import { Product } from '@/models/Product';



export default function handler(req: NextApiRequest, 
    res: NextApiResponse<Product[] | { error: string }>) {
    const products = data.items;

    if (req.method == 'GET') {
        res.status(200).json(products);
    }
    
  }
  