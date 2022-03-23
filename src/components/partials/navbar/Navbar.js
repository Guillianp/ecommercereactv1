import {React, Component} from 'react';
import { NavLink}  from 'react-router-dom'
import './Navbar.css';


class Navbar extends Component{
    
    render(){
        const toggleMobileMenu=()=> {
            var x = document.getElementsByClassName("mobileLinks");
            if (x.style.display === "block") {
              x.style.display = "none";
            } else {
              x.style.display = "block";
            }
          }
        return(
            <header>
                {/* <div className="menu-logo">
                    <img className="Logo" src={logo} alt="Beautiful You logo"/>
                </div> */}
                <nav className="nav-links">
                    <ul className="nav">
                        
                        <li>
                            <NavLink exact={true} to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink exact={true} to='/products'>Shop</NavLink>
                        </li>
                        <li>
                            <NavLink exact={true} to='/contact'>Contact</NavLink>
                        </li>
                    </ul>

                    {/* <div className="cart">
                    <i title="shopping cart" class="fas fa-shopping-cart fa-2x"></i>
                    </div> */}
                    <div className="mobileNav" onClick={this.props.clicked}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </nav>
            </header>
        )
    }
}
<nav>
        <div class="nav-links">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="shop.html">Shop</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div> 
        </nav> 

export default Navbar


