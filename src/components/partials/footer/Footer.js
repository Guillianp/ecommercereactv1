import React from 'react';
import './Footer.css'
// import logo from '../../../img/BEAUTIFUL.png';

const Footer = () => (
    <footer>
              <div className="footer-container">
                  <div className="left-col">
                      {/* <img src={logo} alt="Beautiful You Logo" className="logo"/> */}
                      <div className="social-media">
                          <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener"><i title="twitter" class="fab fa-instagram"></i></a>
                          <a href="https://www.facebook.com" target="_blank" rel="noopener"><i title="Facebook" class="fab fa-facebook"></i></a>
                          <a href="https://www.youtube.com" target="_blank" rel="noopener"><i title="Youtube" class="fab fa-youtube"></i></a>
                      </div>
                      <p className="copyrights">Copyright &copy; 2021, Human Design</p>
                  </div>
                  <div className="right-col">
                      <h1>JOIN THE HUMAN DESIGN COMMUNITY</h1>
                      {/* <div className="border"></div> */}
                      <p>Sign up for 10% off your first order</p>
                      <form className="foot-discount">
                          <label>
                              Email
                          <input name="email" type="email" className="foot-email"
                          required placeholder="Enter Your Email"/>
                          </label><br/>
                          <input type="submit" className="btn" value="submit"/>
                      </form>
                  </div>
              </div>
          </footer>
)

{/* <footer>
    <p class="footer1">Copyright &copy; 2021, Human Design</p>
  
    <aside>
      <a class="social" href="https://twitter.com/?lang=en"  target="_blank" aria-label="Twitter" rel="noopener">
        <span class="fa-stack fa-1x sizeup">
          <i class="fa fa-circle-thin fa-stack-2x"></i>
          <i class="fa fa-twitter fa-stack-1x"></i>
        </span>
      </a>
  
      <a class="social" href="https://www.facebook.com/"  target="_blank" aria-label="Facebook" rel="noopener">
        <span class="fa-stack fa-1x sizeup">
          <i class="fa fa-circle-thin fa-stack-2x"></i>
          <i class="fa fa-facebook fa-stack-1x"></i>
        </span>
      </a>
  
      <a class="social" href="https://www.instagram.com/"  target="_blank" aria-label="Instagram" rel="noopener">
        <span class="fa-stack fa-1x sizeup">
          <i class="fa fa-circle-thin fa-stack-2x"></i>
          <i class="fa fa-instagram fa-stack-1x"></i>
        </span>
      </a>
    </aside>
    </footer> */}

export default Footer