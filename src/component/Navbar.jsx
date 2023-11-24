import React, { useEffect, useState } from "react";
import call from "../media/svg/phone.svg";
import mail from "../media/svg/mail.svg";
import link from "../media/svg/link.svg";
import logo from "../media/svg/logo.svg";
import menubar from "../media/svg/hamburger.svg";
import facebook from "../media/svg/facebook.svg";
import insta from "../media/svg/insta.svg";
import linkedin from "../media/svg/linkedin.svg";
import twitter from "../media/svg/twitter.svg";
import close from "../media/svg/close.svg";
import serviceData from "../data/serviceData.json";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const [selectedService, setSelectedService] = useState(serviceData[0]);
  const [showMenu, setShowMenu] = useState(false);
  console.log(selectedService);

  const handleClick = (service) => {
    setSelectedService(service);
  };
  useEffect(() => {
    setSelectedService(serviceData[0]);
  }, []);

  const closeFollow = () => {
    document.getElementById("followCont").style.display = "none";
  };
  const showfollow = () => {
    document.getElementById("followCont").style.display = "block";
  };

  // useEffect(() => {
  //   let menubar = document.getElementById("toggleMenu");
  //   let linkbar1 = document.querySelector(".firstLinkCont");
  //   let linkbar2 = document.querySelector(".secondLinkCont");
  //   console.log(menubar);
  //   console.log(linkbar1);
  //   console.log(linkbar2);
  //   menubar.addEventListener("click", function () {
  //     if (!showMenu) {
  //       linkbar1.style.display = "flex";
  //       linkbar2.style.display = "flex";
  //       setShowMenu(true);
  //     }
  //     if (showMenu) {
  //       linkbar1.style.display = "none";
  //       linkbar2.style.display = "none";
  //       setShowMenu(false);
  //     }
  //   });
  // }, []);

  function menuToggler() {
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
  }

  return (
    <React.Fragment>
      <div className="wrapper">
        <div id="followCont">
          <h2>
            Follow us:{" "}
            <img
              onClick={closeFollow}
              id="close"
              src={close}
              alt="close icon"
            />
          </h2>
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
                <HashLink className="nav-link" to="/portfolio/#projectSec">
                  Projects
                </HashLink>
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
                          selectedService.subServices.map(
                            (subService, index) => (
                              <li key={index}>
                                <HashLink>{subService}</HashLink>
                              </li>
                            )
                          )}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" to="/contact/#contactCont">
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
                <a href="#" onClick={showfollow} id="sociaLinks">
                  <img src={link} alt="links" />
                </a>
              </li>
            </ul>
            <div id="toggleMenu" className="menubar" onClick={menuToggler}>
              <img src={menubar} alt="" />
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
