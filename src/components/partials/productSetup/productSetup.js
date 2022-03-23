import React from 'react';
import "./productSetup.css";

const productSetup = ({products,}) => {

    const Products = () => products.map(item => (
        
            <div className="productsList">
            <img src={item.image} alt={item.name} />
            <h3 className="title">{item.name}</h3>
            <p className="prices">${item.price}</p>
            <button className="button">Add to Cart</button>
            <p className= "description" >{item.description}</p>
            </div>      
      ))

    return(
        <div className="wrapper">
            <div className="grid">
                <Products />
            </div>
        </div>
    )
}

export default productSetup;