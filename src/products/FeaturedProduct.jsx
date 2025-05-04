import React,{useState,useEffect} from "react";
import './FeaturedProduct.css';

const featuredProduct = () =>{

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchProducts = async () =>{
            try{
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                console.log(data);
                setProducts(data);
                setLoading(false);
            }catch(error){
                console.log('Error in fetching',error);
                setLoading(false);
            }
        };

        fetchProducts();
    },[]);

    if(loading){
        return <div className="loading">Loading Products...</div>
    }

    return(
       <>
          <div className="products-container">
            {products.map((product) => (
                <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.title} className="product-image"></img>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price">$ {product.price}</p>
                </div>
            ))}
          </div>
       </>
    );
    
};

export default featuredProduct;