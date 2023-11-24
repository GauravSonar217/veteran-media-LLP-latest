import React from "react";
import { HashLink } from "react-router-hash-link";

function Footer() {
  return (
    <React.Fragment>
      <footer>
        <div className="footerTextCont">
          <div className="container" id="footerCont">
            <div className="innerCont" id="footerTextBox">
              <div className="addressCont">
                <div className="addressBox">
                  <h3>Our Address</h3>
                  <p>
                    Flat No 4, Yogiraj CHS, Dindori Rd, RTO Corner, Gorksha
                    Nagar, Nashik, Maharashtra 422004
                  </p>
                </div>
                <div className="addressBox">
                  <h3>Inquires</h3>
                  <p>contact@veteranmedias.com</p>
                  <p>info@veteranmedias.com</p>
                </div>
              </div>
              <div className="linkCont">
                <div className="linkBox">
                  <h3>Main Pages</h3>
                  <ul className="flinkCont">
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Services</a></li>
                    <li><HashLink to="/career/#careerHead">Career</HashLink></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                 
                </div>
                <div className="linkBox">
                  <h3>Services</h3>
                  <ul className="flinkCont">
                    <li><a href="#">Graphic Design</a></li>
                    <li><a href="#">Printing Design</a></li>
                    <li><a href="#">Marketing</a></li>
                    <li><a href="#">Web Design and Development</a></li>
                  </ul>
                 
                </div>
                <div className="linkBox">
                <ul className="flinkCont">
                    <li><a href="#">Employment</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Sitemap</a></li>
                    <li><a href="#">Client Area</a></li>
                  </ul>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyCont">
          <div className="container" id="copyCont">
            <div className="innerCont" id="copy">
              <h4>All rights reserved © 2009 - 2023 Veteran Media LLP.</h4>
              <h4>
                Designed By <a href="#">yashwebdesign.com</a>
              </h4>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
