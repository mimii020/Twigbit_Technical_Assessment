
import { NextApiRequest, NextApiResponse } from 'next';
import data from '../../data/data.json'

interface Product {
    name: string;
    price: number;
    description: string;
}

export default function handler(req: NextApiRequest, 
    res: NextApiResponse<Product[] | { error: string }>) {
    const products = data.items;

    if (req.method == 'GET') {
        res.status(200).json(products);
    }
    
  }
  