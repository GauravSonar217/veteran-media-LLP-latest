import React, { useEffect, useState } from "react";
import call from "../media/svg/phone.svg";
import mail from "../media/svg/mail.svg";
import link from "../media/svg/link.svg";
import facebook from "../media/svg/facebook.svg";
import logo from "../media/svg/logo.svg";
import menubar from "../media/svg/hamburger.svg";
import insta from "../media/png/insta.png";
import linkedin from "../media/png/linkedin.png";
import twitter from "../media/png/twitter.png";
import serviceData from "../data/serviceData.json";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const [selectedService, setSelectedService] = useState(serviceData[0]);
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (service) => {
    setSelectedService(service);
  };
  useEffect(() => {
    setSelectedService(serviceData[0]);
  }, []);

  useEffect(() => {
    let menubar = document.getElementById("toggleMenu");
    let linkbar1 = document.querySelector(".firstLinkCont");
    let linkbar2 = document.querySelector(".secondLinkCont");
    console.log(menubar);
    console.log(linkbar1);
    console.log(linkbar2);
    menubar.addEventListener("click", function () {
      if (!showMenu) {
        linkbar1.style.display = "flex";
        linkbar2.style.display = "flex";
        setShowMenu(true);
      }
      if (showMenu) {
        linkbar1.style.display = "none";
        linkbar2.style.display = "none";
        setShowMenu(false);
      }
    });
  }, []);

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg">
        <div className="container" id="navbar">
          <h1 className="navbar-brand">
            <HashLink to="/">
              <img src={logo} alt="Company Logo" />
            </HashLink>
          </h1>
          <ul className="firstLinkCont">
            <li id="homelink" className="nav-item">
              <HashLink className="nav-link active" to="/">
                Home
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="/about/#aboutSec">
                About us
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link">Projects</HashLink>
            </li>
            <li className="nav-item serviceLink">
              <HashLink className="nav-link">Services</HashLink>
              <div className="serviceDropdown">
                <div className="serviceCont">
                  <div className="services">
                    {serviceData.map((service, index) => (
                      <h1
                        key={index}
                        className="serveName"
                        onClick={() => handleClick(service)}
                      >
                        <HashLink href="">{service.serviceName}</HashLink>
                      </h1>
                    ))}
                  </div>
                  <div className="subServices">
                    <ul id="subServeCont">
                      {selectedService &&
                        selectedService.subServices.map((subService, index) => (
                          <li key={index}>
                            <HashLink>{subService}</HashLink>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="/career/#careerPage">
                contact
              </HashLink>
            </li>
          </ul>
          <ul className="secondLinkCont" style={{ marginBottom: "0" }}>
            <li className="links">
              <a href="tel: +91 9372938392">
                <img src={call} alt="Call" />
              </a>
            </li>
            <li className="links">
              <a href="mailto: info@veteranmedias.com" target="_blank">
                <img src={mail} alt="Mail" />
              </a>
            </li>
            <li className="links">
              <a href="#">
                <img src={link} alt="links" />
              </a>
              <div id="followCont">
                <h2>Follow us:</h2>
                <div className="socialIconBox">
                  <a href="">
                    <img src={facebook} alt="facebook-icon" />
                  </a>
                  <a href="">
                    <img src={insta} alt="instagram-icon" />
                  </a>
                  <a href="">
                    <img src={linkedin} alt="Linkedin icon" />
                  </a>
                  <a href="">
                    <img src={twitter} alt="twitter-icon" />
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <div id="toggleMenu" className="menubar">
            <img src={menubar} alt="" />
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
