
'use client'
import { useEffect, useState } from 'react';

export default function Product() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://dummyjson.com/products");
                const data = await response.json();
                setProduct(data.products);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <h1>Product list</h1>
            {product.map((item) => (
                <h3 key={item.id}>{item.title}</h3>
                
            ))}
        </div>
    );
}
