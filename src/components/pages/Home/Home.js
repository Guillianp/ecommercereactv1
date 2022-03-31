import React from "react";
import withLayout from "../../hoc/WithPageLayout";
import './Home.css'
import { NavLink}  from 'react-router-dom'
import humanDesign from '../../../img/highreslogo.png';
import ImageSlider from "../../partials/imageSlider/image-slider";


class Home extends React.Component {
    render() {
      return (
        <div className="wrapper">
            <main>
            {/* Logo and Tagline */}
            <section className="container">
                <img className ="logo" src={humanDesign} alt="human design logo"/>
                <div><span className="productsPage"><NavLink exact={true} to='/products'>Shop</NavLink></span>
                    </div>
                <br></br>
                <h2>All the tools you need to become the master of your life.</h2>
            </section>

             {/* featured products */}
               <section className="about">
                    <hr class="solid"></hr>   
                    <h1>Featured Products</h1>  
                     <ImageSlider></ImageSlider>    
                </section>

            </main>
            </div>
      )
    }
  }

  export default withLayout(Home)