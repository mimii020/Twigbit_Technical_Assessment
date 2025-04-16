import { Card } from '@/components/ui/card'
import React from 'react'

interface Props {
    name: string;
    price: number;
    description: string;
}

function ProductCard({ name, price, description } : Props) {
  return (
    <Card className="bg-green-500 h-full w-full border-0 shadow-md flex flex-col gap-0 p-10">
        <div className="w-full h-1/3  bg-white rounded-2xl text-bold text-black -mt-6 px-2">
            {name}
        </div>
        <h1 className="text-3xl text-bold text-white mt-5">{price}</h1>
        <p className="text-bold text-white mt-3">{description}</p>
    </Card>
  )
}

export default ProductCard