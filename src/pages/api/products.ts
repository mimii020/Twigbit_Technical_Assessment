
import { NextApiRequest, NextApiResponse } from 'next';
import data from '../../data/data.json'
import { Product } from '@/models/Product';



export default function handler(req: NextApiRequest, 
    res: NextApiResponse<Product[] | { error: string }>) {
    const products = data.items;
    const { search } = req.query;

    if (search === undefined) {
        res.status(200).json(products);
    } else{
        const filteredProducts = products.filter((product) => 
            product.name.toLowerCase().includes(search))
        res.status(200).json(filteredProducts);

    }

    
  }
  