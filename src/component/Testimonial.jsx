import React, { useEffect } from "react";
import pic1 from "../media/jpg/pic1.jpg";
import pic2 from "../media/jpg/pic2.jpg";
import pic3 from "../media/jpg/pic3.jpg";
import pic4 from "../media/jpg/pic4.jpg";
import uparrow from "../media/png/up-arrow.png";
import downarrow from "../media/png/down-arrow.png";

function Testimonial() {
  //   var upArrow = document.getElementById("uparrow");
  //   console.log(slide);
  //   console.log(upArrow);
  //   console.log(dowArrow);
  let x = 0;

  function moveUp() {
    var slide = document.getElementById("slide");
    var dowArrow = document.getElementById("downarrow");
    if (x > "-900") {
      x = x - 300;
      slide.style.top = x + "px";
    }
  }
  function moveDown() {
    var slide = document.getElementById("slide");
    var dowArrow = document.getElementById("downarrow");
    if (x < 0) {
      x = x + 300;
      slide.style.top = x + "px";
    }
  }

  return (
    <React.Fragment>
      <div className="hero sectionPadding">
        <div className="container">
          <div className="innerCont">
            <h2>What they think</h2>
            <div className="review-box">
              <div id="slide">
                <div className="card">
                  <div className="profile">
                    <img src={pic1} alt="" />
                    <div>
                      <h3>Riley Olie</h3>
                      <p>Web Designer</p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis sapiente similique unde totam minima voluptatum
                    asperiores necessitatibus in temporibus accusamus nemo,
                    sequi vitae obcaecati quae distinctio tenetur iusto illo
                    
                  </p>
                </div>
                <div className="card">
                  <div className="profile">
                    <img src={pic2} alt="" />
                    <div>
                      <h3>Steve McCurry</h3>
                      <p>UI/UX Designer</p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis sapiente similique unde totam minima voluptatum
                    asperiores necessitatibus in temporibus accusamus nemo,
                    sequi vitae obcaecati quae distinctio tenetur iusto illo
                   
                  </p>
                </div>
                <div className="card">
                  <div className="profile">
                    <img src={pic3} alt="" />
                    <div>
                      <h3>Merlin Nguyen </h3>
                      <p>Senior Developer</p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis sapiente similique unde totam minima voluptatum
                    asperiores necessitatibus in temporibus accusamus nemo,
                    sequi vitae obcaecati quae distinctio tenetur iusto illo
                  </p>
                </div>
                <div className="card">
                  <div className="profile">
                    <img src={pic4} alt="" />
                    <div>
                      <h3>John Williams</h3>
                      <p>Team Lead</p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis sapiente similique unde totam minima voluptatum
                    asperiores necessitatibus in temporibus accusamus nemo,
                    sequi vitae obcaecati quae distinctio tenetur iusto illo
                  
                    
                  </p>
                </div>
              </div>
              <div className="sidebar">
                <img id="uparrow" src={uparrow} alt="" onClick={moveUp} />
                <img id="downarrow" src={downarrow} alt="" onClick={moveDown} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Testimonial;
