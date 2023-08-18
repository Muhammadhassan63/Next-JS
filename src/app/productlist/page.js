import CustomButton from "./custombutton"; // Make sure the import path is correct

async function fetchProducts() {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    return data.products;
}

export default async function ProductList() {
    let products = await fetchProducts();
    console.log(products);
    return (
        <div>
            <h1>Product list</h1>
            {products.map((item) => (
                <div key={item.id}>
                    <h3>Name: {item.title}</h3>
                    <CustomButton price={item.price} /> 
                </div>
            ))}
        </div>
    );
}

export const  metadata={
    title:"hello"
}