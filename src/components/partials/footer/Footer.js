import React from 'react';
import './Footer.css'


const Footer = () => (
    <footer>
              <div className="footer-container">
                  <div className="left-col">
                     {/* Footer links  */}
                      <div className="social-media">
                          <a href="https://www.instagram.com/" target="_blank" rel="noopener"><i title="twitter" class="fab fa-instagram"></i></a>
                          <a href="https://www.facebook.com" target="_blank" rel="noopener"><i title="Facebook" class="fab fa-facebook"></i></a>
                          <a href="https://www.youtube.com" target="_blank" rel="noopener"><i title="Youtube" class="fab fa-youtube"></i></a>
                      </div>

                      {/* Copyright footer section */}

                      <p className="copyrights">Copyright &copy; 2021, Human Design</p>
                      </div>

                      {/* Discount Section */}
                      <div className="right-col">
                          <h1>JOIN THE HUMAN DESIGN COMMUNITY</h1>
                          <p>Sign up for 10% off your first order</p>

                       {/* Subscription Validation    */}
                      <form className="foot-discount">
                          <label>
                              Email
                              <input name="email" type="email" className="foot-email" required placeholder="Enter E-mail Here"/>
                          </label>
                          
                          <input type="submit" className="btn" value="SUBMIT"/>
                      </form>
                  </div>
              </div>
          </footer>
)

export default Footer