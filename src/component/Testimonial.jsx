import React, { useState } from "react";
// import './TestimonialSlider.css'; // Your CSS file for styling

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Jane Smith",
    testimonial:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    name: "gaurav",
    testimonial:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    name: "divya",
    testimonial:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    name: "deepak",
    testimonial:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    name: "yashwant",
    testimonial:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="testimonial-slider">
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => {
          let slideIndex = index - currentSlide;
          if (slideIndex < 0) {
            slideIndex = testimonials.length + slideIndex;
          }
          if (slideIndex > 2) {
            return null;
          }
          return (
            <div
              key={testimonial.id}
              className={`testimonial ${slideIndex === 1 ? "center" : ""}`}
            >
              <h3>{testimonial.name}</h3>
              <p>{testimonial.testimonial}</p>
            </div>
          );
        })}
      </div>
      <div className="slider-controls">
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
