import React, { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import Header from "./Header";
import Accordion from "react-bootstrap/Accordion";
import playbtn from "../media/png/play.png";
import promovideo from "../media/production_id_5207408 (1080p).mp4";
import serviceImg from "../media/png/services.png";
import workImg from "../media/jpg/image 17.jpg";
import prog1 from "../media/png/understandingVision 1.png";
import prog2 from "../media/png/lightbulb 1.png";
import prog3 from "../media/png/execution 1.png";
import prog4 from "../media/png/innovation 1.png";
import prog5 from "../media/png/creativity 1.png";
import aboutImg from "../media/jpg/image 46.jpg";
import blog1 from "../media/jpg/blog1.jpg";
import blog2 from "../media/jpg/blog2.jpg";
import arrow from "../media/png/Vector 1.png";
import part1 from "../media/png/legrand.png";
import part2 from "../media/png/wipro.png";
import part3 from "../media/png/harisons.png";
import part4 from "../media/png/masterLH.png";
import part5 from "../media/png/mahindra.png";
import part6 from "../media/png/fivestar.png";
import Testimonial from "./Testimonial";

function Template() {
  const [showVideo, setShowVideo] = useState(false);
  const [showbtn, setShowbtn] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [counter, setCounter] = useState(false);
  // useEffect(() => {
  //   let btn = document.querySelector(".accordion-button");
  //   console.log(btn);
  //   btn.addEventListener("click", function () {
  //     console.log("btn clicked");
  //     btn.classList.toggle("mystyle");
  //     btn.classList.toggle("click");
  //     console.log(btn);
  //   });
  // }, []);

  useEffect(() => {
    function moveCursor(dets) {
      const cursor = document.getElementById("cursor");
      const imgCont = document.getElementById("imgCont");
      const imgContRect = imgCont.getBoundingClientRect();

      const mouseX = dets.clientX - imgContRect.left;
      const mouseY = dets.clientY - imgContRect.top;

      if (
        mouseX >= 0 &&
        mouseX <= imgContRect.width &&
        mouseY >= 0 &&
        mouseY <= imgContRect.height
      ) {
        cursor.style.left = mouseX + "px";
        cursor.style.top = mouseY + "px";
      }
    }
    console.log("moving");
    console.log("moving inside work container");
    const imgCont = document.getElementById("imgCont");
    imgCont.addEventListener("mousemove", moveCursor);
    return () => {
      imgCont.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  useEffect(() => {
    document.querySelectorAll(".faq-card").forEach((card) => {
      const question = card.querySelector(".question");
      const answer = card.querySelector(".answer");
      const icon = card.querySelector(".icon");
      const toggle = card.querySelector(".toggle");
      const h3 = card.querySelector("h3");
      const p = card.querySelector("p");

      let defaultIconColor = icon.style.color;
      let defaultCardColor = card.style.backgroundColor;
      let defaultH2Color = h3.style.color;
      let defaultPColor = p.style.color;
      let defaultToggleColor = toggle.style.backgroundColor; // Store the default toggle color

      question.addEventListener("click", () => {
        if (answer.style.display === "block") {
          answer.style.display = "none";
          icon.textContent = "+";
          icon.style.color = defaultIconColor;
          card.style.backgroundColor = "white";
          h3.style.color = defaultH2Color;
          p.style.color = defaultPColor;
          toggle.style.backgroundColor = defaultToggleColor; // Restore the default toggle color
        } else {
          answer.style.display = "block";
          icon.textContent = "-";
          icon.style.color = "#524FD5";
          toggle.style.backgroundColor = "#fff"; // Change toggle background color to the specified color
          card.style.backgroundColor = "black";
          h3.style.color = "white";
          p.style.color = "white";
        }
      });
    });
  }, []);

  useEffect(() => {
    const counter = () => {
      var a = 0;
      var b = 0;
      var c = 0;
      var d = 0;
      const clientCounter = setInterval(function () {
        a = a + Math.floor(Math.random() * 100);
        if (a < 700) {
          document.querySelector("#one").innerHTML = a + "+";
        } else {
          a = 700;
          document.querySelector("#one").innerHTML = a + "+";
        }
      }, 100);
      const regularCLient = setInterval(function () {
        b = b + Math.floor(Math.random() * 10);
        if (b < 30) {
          document.querySelector("#two").innerHTML = b + "+";
        } else {
          b = 30;
          document.querySelector("#two").innerHTML = b + "+";
        }
      }, 100);
      const projectDone = setInterval(function () {
        c = c + Math.floor(Math.random() * 100);
        if (c < 999) {
          document.querySelector("#three").innerHTML = c + "+";
        } else {
          c = 999;
          document.querySelector("#three").innerHTML = c + "+";
        }
      }, 100);
      const experience = setInterval(function () {
        d = d + Math.floor(Math.random() * 2);
        if (d < 5) {
          document.querySelector("#four").innerHTML = d;
        } else {
          d = 5;
          document.querySelector("#four").innerHTML = d;
        }
      }, 100);

      return () => {
        clearInterval(clientCounter);
        clearInterval(regularCLient);
        clearInterval(projectDone);
        clearInterval(experience);
      };
    };
    const intervalFunctions = counter();
    return () => {
      intervalFunctions();
    };
  }, []);

  const expandVideo = () => {
    setShowVideo(true);
    var playBtn = document.getElementById("pause");
    var videoCont = document.getElementById("promoCont");
    console.log(videoCont);
    videoCont.style.height = "100vh";
    console.log(videoCont);
    playBtn.style.display = "none";
  };
  function playVideo() {
    const video = document.getElementById("video");
    const videoSection = document.getElementById("videoSection");
    const videoCont = document.getElementById("videoOuter");
    console.log(videoCont);
    const playButton = document.querySelector(".play-button");

    videoCont.style.height = "100vh"; // Increase section height
    videoSection.style.width = "100%";
    videoSection.style.height = "100%";
    // video.style.visibility = "visible";
    playButton.style.display = "none";

    video.play();
  }

  // useEffect(() => {
  //   let mapShow = document.getElementById("mapShower");
  //   let mapShadow = document.getElementById("mapShadow");
  //   let contactBox = document.querySelector(".contactText");
  //   let head = document.querySelector("#head");
  //   console.log(contactBox);
  //   console.log(mapShow);
  //   console.log(mapShadow);
  //   mapShow.addEventListener("click", function () {
  //     if (!showMap) {
  //       mapShadow.style.visibility = "hidden";
  //       contactBox.style.backgroundColor = "black";
  //       setShowMap(true);
  //     } else {
  //       mapShadow.style.visibility = "visible";
  //       contactBox.style.backgroundColor = "transparent";
  //       setShowMap(false);
  //     }
  //   });
  // }, []);
  function mapShower() {
    let mapShow = document.getElementById("mapShower");
    let mapShadow = document.getElementById("mapShadow");
    let contactBox = document.querySelector(".contactText");
    let head = document.querySelector("#head");
    console.log(contactBox);
    console.log(mapShow);
    console.log(mapShadow);
    mapShow.addEventListener("click", function () {
      if (!showMap) {
        mapShadow.style.visibility = "hidden";
        contactBox.style.backgroundColor = "black";
        setShowMap(true);
      } else {
        mapShadow.style.visibility = "visible";
        contactBox.style.backgroundColor = "transparent";
        setShowMap(false);
      }
    });
  }

  useEffect(() => {
    var swiper = new Swiper(".mySwiper", {
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop: true,
      effect: "fade",
      autoHeight: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    console.log("slider working");
  }, []); // Ensure this effect runs only once by passing an empty dependency arra

  // swiper();

  return (
    <React.Fragment>
      <Header></Header>
      <section className="videoCont">
        <img
          src={playbtn}
          alt="Play Button"
          className="play-button"
          onClick={playVideo}
          id="pause"
        />
        <div id="videoOuter">
          <div class="video-section" id="videoSection">
            <video id="video" loop muted autoPlay>
              <source src={promovideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      <section className="counterCont sectionPadding">
        <div className="container" id="clientCont">
          <div className="innerCont" id="innercont">
            <div className="projectBox">
              <h2 id="one"></h2>
              <h3>Happy clients</h3>
            </div>
            <div className="projectBox">
              <h2 id="two"></h2>
              <h3>Regular Client’s</h3>
            </div>
            <div className="projectBox">
              <h2 id="three"></h2>
              <h3>Project done</h3>
            </div>
            <div className="projectBox">
              <h2 id="four"></h2>
              <h3>Years experience</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="serviceSec sectionPadding">
        <div className="container" id="serviceSec">
          <div className="innerCont" id="innercont">
            <div className="serviceImgCont">
              <img src={serviceImg} alt="service section image" />
            </div>
            <div className="serviceTextCont">
              <div className="serve">
                <h2>Our Services</h2>
                <h3 className="ourServiceList">
                  <a href="#">Branding</a>
                </h3>
                <h3 className="ourServiceList">
                  <a href="#">Space Buying</a>
                </h3>
                <h3 className="ourServiceList">
                  <a href="#">Marketing Plans</a>
                </h3>
                <h3 className="ourServiceList">
                  <a href="#">On-Air Promotions</a>
                </h3>
                <h3 className="ourServiceList">
                  <a href="#">Merchandising</a>
                </h3>
                <h3 className="ourServiceList">
                  <a href="#">Digital Printing</a>
                </h3>
              </div>
              <div className="serve">
                <h2>f</h2>
                <h3 className="ourServiceList">
                  <a href="#">Marketing Push</a>
                </h3>
                <h3 className="ourServiceList">
                  <a href="#">Indoor & Outdoor Branding</a>
                </h3>
                <h3 className="ourServiceList">
                  <a href="#">Finishing & Packaging</a>
                </h3>
                <h3 className="ourServiceList">
                  <a href="#">Web Design</a>
                </h3>
                <h3 className="ourServiceList">
                  <a href="#">Offset Printing</a>
                </h3>
                <h3 className="ourServiceList">
                  <a href="#">Web Development</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ourWorkSec sectionPadding">
        <div className="container" id="workSec">
          <div className="innerCont" id="ourWork">
            <h2>Our Work</h2>
            <div className="workCont">
              <div className="workBox">
                <div className="workImgBox">
                  <img src={workImg} alt="workdone image" />
                </div>
                <div className="workTextBox">
                  <h3>Packaging Desing </h3>
                  <h5>Master light House</h5>
                </div>
              </div>
              <div className="workBox">
                <div className="workImgBox">
                  <img src={workImg} alt="workdone image" />
                </div>
                <div className="workTextBox">
                  <h3>Packaging Desing </h3>
                  <h5>Master light House</h5>
                </div>
              </div>
              <div className="workBox">
                <div className="workImgBox">
                  <img src={workImg} alt="workdone image" />
                </div>
                <div className="workTextBox">
                  <h3>Packaging Desing </h3>
                  <h5>Master light House</h5>
                </div>
              </div>
              <div className="workBox">
                <div className="workImgBox">
                  <img src={workImg} alt="workdone image" />
                </div>
                <div className="workTextBox">
                  <h3>Packaging Desing </h3>
                  <h5>Master light House</h5>
                </div>
              </div>
            </div>
            <button id="workBtn">See Our Work</button>
          </div>
        </div>
      </section>
      <Testimonial></Testimonial>
      <section className="progressSec sectionPadding">
        <div className="container" id="progressSec">
          <div className="innerCont" id="innerProgressSec">
            <h3>Our work process</h3>
            <h2>
              Mastering Brilliance: A Seamless Journey through Veteran Media
              Solutions LLP's Success Blueprint.
            </h2>
            <p>
              Behind every successful brand is a meticulously crafted process
              that transforms ideas into impactful results. At Veteran Media.
              our work process is more than a series of steps; it's a journey of
              creativity, strategy, and dedication. Check our success steps out!
            </p>
          </div>
          <div className="progressCont">
            <div className="progressBox">
              <img src={prog1} alt="Understading Your Vision" />
              <h4>Understading Your Vision</h4>
              <p>
                The first step is understanding your vision for your brand. We
                delve deep into your goals, values, and the story you want to
                tell, ensuring that every element of our work aligns with your
                brand identity.
              </p>
            </div>
            <div className="progressBox">
              <img src={prog2} alt="Strategic Implementation" />
              <h4>Strategic Implementation</h4>
              <p>
                Creativity needs a strategic foundation to thrive. Our team
                integrates innovative ideas into a strategic framework, ensuring
                that every campaign, design, or promotion enhances your brand's
                visibility and resonance.
              </p>
            </div>
            <div className="progressBox">
              <img src={prog3} alt="Dedicated Execution" />
              <h4>Dedicated Execution</h4>
              <p>
                The best ideas are only as good as their execution. We take
                pride in our dedicated execution, ensuring every project is
                brought to life with precision. From branding to web
                development, our team delivers excellence.
              </p>
            </div>
            <div className="progressBox">
              <img src={prog4} alt="Continuous Refinement" />
              <h4>Continuous Refinement</h4>
              <p>
                The journey doesn't end with the delivery of a project. We
                believe in continuous refinement and improvement. We analyze the
                results, gather feedback, and adjust to ensure your brand meets
                and exceeds expectations
              </p>
            </div>
            <div className="progressBox">
              <img src={prog5} alt="Creative Ideation" />
              <h4>Creative Ideation</h4>
              <p>
                With a clear understanding of your vision, our creative minds go
                to work. Ideas are brainstormed, concepts are crafted, and
                innovation is ignited. The magic happens in this phase, setting
                the stage for a distinctive narrative.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="aboutSec sectionPadding">
        <div className="container" id="aboutSec">
          <div className="innerCont" id="aboutInner">
            <div className="aboutImgCont" id="imgCont">
              <img src={aboutImg} alt="about section image" />
              <div id="cursor">
                <a href="">Read More</a>
              </div>
            </div>
            <div className="aboutTextCont">
              <h3>About us</h3>
              <h2>
                Crafting Stories, Building Brands, Meet Veteran Media Solutions
                LLP
              </h2>
              <p>
                You need to dive into the heart of Veteran Media Solutions,
                where the journey of creativity and innovation unfolds. With
                years of expertise, we've navigated the ever-evolving landscape
                of advertising, marketing, and branding, leaving a trail of
                success stories. Our hardworking group of professionals is more
                than just a job; we're a group of visionaries, planners, and
                creative thinkers who will take your brand to new heights.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="partnerSec sectionPadding">
        <h2>Our Major Clients</h2>
        <div class="logo-slider">
          <div class="logo-slide-track">
            <div class="slide">
              <img src={part1} alt="" />
            </div>
            <div class="slide">
              <img src={part2} alt="" />
            </div>
            <div class="slide">
              <img src={part3} alt="" />
            </div>
            <div class="slide">
              <img src={part4} alt="" />
            </div>
            <div class="slide">
              <img src={part5} alt="" />
            </div>
            <div class="slide">
              <img src={part6} alt="" />
            </div>
            <div class="slide">
              <img src={part1} alt="" />
            </div>
            <div class="slide">
              <img src={part2} alt="" />
            </div>
            <div class="slide">
              <img src={part3} alt="" />
            </div>
            <div class="slide">
              <img src={part4} alt="" />
            </div>
            <div class="slide">
              <img src={part5} alt="" />
            </div>
            <div class="slide">
              <img src={part6} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="sectionPadding">
        <div class="container" id="faqSection">
          <h4>More Information</h4>
          <h2>Frequently asked questions</h2>
          <div class="row my-4" id="faqCont">
            <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div class="faq-card" id="faq-card-1">
                <div class="question">
                  <h3>What services does Veteran Media offer?</h3>
                  <div class="toggle">
                    <span class="icon">+</span>
                  </div>
                </div>
                <div class="answer">
                  <p>
                    Veteran Media provides a comprehensive range of services
                    tailored to meet your specific needs. Our offerings include
                    Services.html designed to empower businesses and individuals
                    in achieving their goals.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div class="faq-card" id="faq-card-2">
                <div class="question">
                  <h3>Lorem Ipsum is simply dummy text of the?</h3>
                  <div class="toggle">
                    <span class="icon">+</span>
                  </div>
                </div>
                <div class="answer">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div class="faq-card" id="faq-card-3">
                <div class="question">
                  <h3>Lorem Ipsum is simply dummy text of the?</h3>
                  <div class="toggle">
                    <span class="icon">+</span>
                  </div>
                </div>
                <div class="answer">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div class="faq-card" id="faq-card-4">
                <div class="question">
                  <h3>Lorem Ipsum is simply dummy text of the?</h3>
                  <div class="toggle">
                    <span class="icon">+</span>
                  </div>
                </div>
                <div class="answer">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div class="faq-card" id="faq-card-5">
                <div class="question">
                  <h3>Lorem Ipsum is simply dummy text of the?</h3>
                  <div class="toggle">
                    <span class="icon">+</span>
                  </div>
                </div>
                <div class="answer">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div class="faq-card" id="faq-card-6">
                <div class="question">
                  <h3>Lorem Ipsum is simply dummy text of the?</h3>
                  <div class="toggle">
                    <span class="icon">+</span>
                  </div>
                </div>
                <div class="answer">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blogSection sectionPadding">
        <div className="container" id="blogSec">
          <div className="innerCont" id="blogCont">
            <div className="blogHead">
              <h2>Latest Blogs</h2>
              <h5>View All</h5>
            </div>
            <div className="blogBoxCont">
              <div className="blogBox">
                <div className="blogImgCont">
                  <img src={blog1} alt="blo1" />
                </div>
                <div className="blogTextCont">
                  <h3>Our design process explained</h3>
                  <h5>April 27, 2023</h5>
                </div>
              </div>
              <div className="blogBox">
                <div className="blogImgCont">
                  <img src={blog2} alt="blo2" />
                </div>
                <div className="blogTextCont">
                  <h3>A peek into our branding strategy</h3>
                  <h5>May 10, 2023</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contactSection">
        <div className="contactTextBox">
          <div className="contactText">
            <h2 id="head">Contact Us</h2>
            <p>
              Ready to take the next step in transforming your brand? Whether
              you have questions, ideas bubbling, or are ready to embark on a
              creative journey with us, we're here for you.
            </p>
          </div>
        </div>
        <iframe
          className="contactMap"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3748.406429425029!2d73.8036145!3d20.0334121!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddea323f2ad1ef%3A0xba3a9388a398fa65!2sVeteran%20Media%20Solutions%20LLP!5e0!3m2!1sen!2sin!4v1700457867538!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div id="mapShadow" className="shadow"></div>
        <h3 id="mapShower" onClick={mapShower}>
          <p>Look at the google map</p>
          <img src={arrow} alt="arrow" />
        </h3>
        <div className="contactForm">
          <h2>Enquiry Form</h2>
          <form>
            <label htmlFor="name">Name*</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="email">Email*</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="query">What are you looking for*</label>
            <input type="text" name="query" id="query" />
            <label htmlFor="message">Message*</label>
            <textarea name="message" id="message"></textarea>
            <div className="uploadCont">
              <input type="file" id="myFile" name="filename" />
              <button>Send Message</button>
            </div>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Template;
