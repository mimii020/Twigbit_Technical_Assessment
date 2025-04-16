"use client"
import React, { useEffect, useState } from 'react'
import ProductCard from './components/ProductCard'
import { Product } from '@/models/Product';

function Page() {
    const [prodcuts, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState("");
    useEffect(
        () => {
            const fetchProducts = async () => {
                try {
                    const response = await fetch("/api/products") ;
                    if (!response.ok) {
                        throw new Error("couldn't fetch the products");
                    }
                    const data: Product[] = await response.json();
                    setProducts(data);
                } catch(e) {
                    setError("error");
                    console.error(e);
                }
            };

            fetchProducts();
        }
    , []);

  return (
      <div className="p-10 h-screen w-screen">
        <h1 className="text-bold text-4xl mb-3.5">Products</h1>
        {
            error === "" ?
            (<div className="grid grid-cols-4 gap-4">
                {
                     prodcuts.map((product, key) => (
                        <ProductCard
                            key={key}
                            name={product.name}
                            price={product.price}
                            description={product.description}
                        />
        
                    ))
                }
            </div> )
            :
             <p className="text-3xl mt-4">Could not fetch the products</p>
        }
    </div>
  )
}

export default Page