import React, { Component } from 'react';
import withLayout from '../../hoc/WithPageLayout'
import ProductSetup from '../../partials/productSetup/productSetup'
import ProductData from '../../../data/products.json'
import './ProductPage.css';


class ProductsPage extends Component {
    state ={
        products: ProductData
    }
    filterTypeHandler = e => {
        let value = e.target.value;
        let filteredProducts = null;
        if (value === "perfume") {
            filteredProducts = ProductData.filter((product) => product.productType === "Perfume");
          this.setState({ products: filteredProducts });
        } else if (value === "candle") {
            filteredProducts = ProductData.filter((product) => product.productType === "Candle");
          this.setState({ products: filteredProducts });
        } else if (value === "bath-table") {
            filteredProducts = ProductData.filter((product) => product.productType === "Bath Table");
          this.setState({ products: filteredProducts });
        }else if (value === "journal") {
            filteredProducts = ProductData.filter((product) => product.productType === "Journal");
          this.setState({ products: filteredProducts });
        }else if (value === "digital") {
            filteredProducts = ProductData.filter((product) => product.productType === "Digital");
          this.setState({ products: filteredProducts });
         }else if (value === "planner") {
            filteredProducts = ProductData.filter((product) => product.productType === "Planner");
          this.setState({ products: filteredProducts });
         }else if (value === "notepad") {
            filteredProducts = ProductData.filter((product) => product.productType === "Notepad");
          this.setState({ products: filteredProducts });
         }else if (value === "notebook") {
            filteredProducts = ProductData.filter((product) => product.productType === "Notebook");
          this.setState({ products: filteredProducts });
         }else {
          this.setState({ products: ProductData });
        }
      };

      filterPriceHandler = e => {
        let value = e.target.value;
        let filteredProducts = null;
        if (value === "high") {
            filteredProducts = ProductData.filter((product) => product.price >= 50.00);
          this.setState({ products: filteredProducts});
        } else if (value === "medium") {
            filteredProducts = ProductData.filter((product) => product.price > 10.00 && product.price <50.00);
          this.setState({ products: filteredProducts });
        } else if (value === "low") {
            filteredProducts = ProductData.filter((product) => product.price <= 15.00);
          this.setState({ products: filteredProducts });
        }else if (value === "price") {
          this.setState({ products: ProductData });
        }
      };
    
    render(){
        return(
            <main>
                <h1 className="heading">Shop</h1>
                <div className="productsBorder"></div>
                <div className="filters">
                    <p><b>Filter By:</b></p>
                    <div className="type-filter">
                        <select id="product-type" onChange={this.filterTypeHandler}>
                            <option value="type">Type</option>
                            <option value="perfume">Perfume</option>
                            <option value="candle">Candle</option>
                            <option value="bath-table">Bath Table</option>
                            <option value="journal">Journal</option>
                            <option value="digital">Digital</option>
                            <option value="planner">Planner</option>
                            <option value="notepad">Notepad</option>
                            <option value="notebook">Notebook</option>
                        </select>
                    </div>
                    <div className="type-filter">
                        <select name="Price Range" onChange={this.filterPriceHandler}>
                            <option value="price">Price</option>
                            <option value="high"> More Than $50</option>
                            <option value="medium">$10 - $50</option>
                            <option value="low">Less Than $15</option>
                        </select>
                    </div>
                </div>
                <ProductSetup products={this.state.products}/>
            </main>
        )
    }
}

export default withLayout(ProductsPage);