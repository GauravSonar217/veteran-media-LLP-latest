import React, { useState } from "react";
import careerImg from "../media/png/Group 96.png";
import bar from "../media/png/career.png";
import stars from "../media/png/stars.png";
import employee from "../media/png/employee.png";
import { useEffect } from "react";

function CareerPage() {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);

  useEffect(() => {
    const slider = document.querySelector(".slider");
    slider.addEventListener("click", function(){
        if (toggle === true) {
          slider.classList.remove("active");
          setToggle(false);
          console.log(slider);
          console.log("toggle removed");
        }
        if (toggle === false) {
          slider.classList.add("active");
          setToggle(true);
          console.log(slider);
          console.log("toggle added");
        }
        // console.log(slider);
    });
  }, [toggle]);

  return (
    <React.Fragment>
      <section className="careerHead">
        <div className="container" id="careerHead">
          <div className="careerText">
            <h1>
              Join Our Dynamic Team <br /> At Veteran Media
            </h1>
          </div>
          <div className="careerImg">
            <img src={careerImg} alt="vector image" />
          </div>
          <div className="searchBar">
            <input type="text" placeholder="Search..." />
            <button id="searchBtn">Looking for</button>
          </div>
        </div>
        <p>
          Are you passionate about creativity, innovation, and making a
          significant impact in advertising and branding? At Veteran Media
          Solutions LLP, We're looking for dynamic individuals to join our
          dedicated team of professionals.
        </p>
        <img id="bar" src={bar} alt="bar" />
      </section>
      <section className="careerSec sectionPadding">
        <div className="container" id="careerSec">
          <h3>Apply Now to be part of the Veteran Team</h3>
          <p>
            As a rapidly growing agency with a proven track record, we offer a
            collaborative and inspiring work environment where your skills and
            ideas can thrive. We are giving you the moment to explore exciting
            career opportunities with us and be part of a journey that shapes
            our clients and our team's success stories.
          </p>
          <div className="careerCont">
            <div className="feedbackCont">
              <div className="feedHead">
                <h4>Employee Says</h4>
                <div className="btngroup">
                  <button className="move" id="left">
                    &lt;
                  </button>
                  <button className="move" id="right">
                    &gt;
                  </button>
                </div>
              </div>
              <div className="feedCont">
                <div className="emplyeeCont">
                  <div className="employeeBox">
                    <div className="employeeImg">
                      <img src={employee} alt="employee image" />
                    </div>
                    <div className="employeeName">
                      <h4>Yashwant Gosavi</h4>
                      <h5>Graphic Desinger</h5>
                    </div>
                  </div>
                  <div className="employeeBox">
                    <div className="employeeImg"></div>
                    <div className="employeeName">
                      <h4>Yashwant Gosavi</h4>
                      <h5>Graphic Desinger</h5>
                    </div>
                  </div>
                  <div className="employeeBox">
                    <div className="employeeImg"></div>
                    <div className="employeeName">
                      <h4>Yashwant Gosavi</h4>
                      <h5>Graphic Desinger</h5>
                    </div>
                  </div>
                </div>
                <div className="feedback">
                  <h3>It was a Great Experience!</h3>
                  <img className="rating" src={stars} alt="rating" />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum .
                  </p>
                </div>
              </div>
            </div>
            <div className="contactCont">
              <div className="inputCont">
                <input type="text" name="fullname" placeholder="Full Name*" />
                <input type="email" name="email" placeholder="Email*" />
                <input type="tel" name="contact no" placeholder="Contact No*" />
                <input type="text" name="vacancy" placeholder="Job Vacancy*" />
              </div>
              <input
                type="file"
                name="upload"
                placeholder="Upload CV/ Portfolio*"
                id="file"
              />
              <textarea
                name="coverletter"
                id="cover"
                cols="30"
                rows="6"
                placeholder="Write your cover letter*"
              ></textarea>
              <div className="formfooter">
                <div className="left">
                  <div class="slider">
                    <div class="slider-button">x</div>
                  </div>
                  <p>
                    I agree with <a href="">privacy policy</a>
                  </p>
                </div>
                <button id="applybtn">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default CareerPage;
