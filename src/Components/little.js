import React, { useState, useEffect } from "react";

const testimonials = [
  {
    text: "This platform provides everything developers need to improve their skills. The community is great, and the challenges keep me motivated, instill accountability through regular submissions, and allow me to build a professional portfolio by showcasing diverse projects.",
    name: "Francesca",
    username: "@frrann",
    image: "https://www.shutterstock.com/image-photo/attractive-young-girl-wearing-casual-260nw-1408503164.jpg"
  },
  {
    text: "Frontend Mentor eliminated the hurdle of sourcing designs, letting me focus on development. Their professional projects, especially in the Pro subscription, challenge me to create complex, multi-page websites. With a supportive community and feedback from advanced programmers, my skills have been elevated to new heights.",
    name: "Alfie",
    username: "@alfiemitchell123",
    image: "https://www.shutterstock.com/image-photo/screen-view-happy-millennial-hispanic-260nw-2343736299.jpg"
  },
  {
    text: "Frontend Mentor transformed me from a newbie to a professional developer, enabling me to create flawless, responsive, accessible websites. It’s a superb platform for feedback with a supportive community backing your growth. Through it, I evolved from a frontend to a full-stack developer.",
    name: "Hikmah",
    username: "@Hikmahx",
    image: "https://www.shutterstock.com/image-photo/closeup-portrait-pretty-woman-outdoors-260nw-56560888.jpg"
  },
  {
    text: "Frontend Mentor has helped tremendously. Working on the newbie challenges really helped me get better at building layouts. Also, it increased my JavaScript skills. Working with APIs, DOM manipulation, and so on greatly increased my knowledge. Would totally recommend it.",
    name: "Nuel",
    username: "@ijklmnopffs",
    image: "https://www.shutterstock.com/image-photo/happy-50-years-old-woman-260nw-2513609301.jpg"
  },
  {
    text: "After completing a software bootcamp, Frontend Mentor let me build real-world projects, strengthening my developer skills. I wouldn’t be where I am today without it.",
    name: "Michelle",
    username: "@maberizk",
    image: "https://www.shutterstock.com/image-photo/pensive-mature-woman-sits-on-260nw-2507393693.jpg"
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (currentIndex < testimonials.length - itemsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="h-screen bg-gray-100 flex items-center">
      <section className="w-11/12 mx-auto">
        <div className="p-4 md:p-10 bg-gray-300 h-[90vh] w-full rounded-lg">
          <div className="flex flex-col items-center bg-gray-50 py-6 md:py-10 px-4 md:px-6 rounded-lg h-full">
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-8xl mb-6 md:mb-8">
              <h1 className="text-3xl md:text-5xl text-black font-semibold text-center md:text-left mb-4 md:mb-0">
                A little <span className="text-red-500">❤</span> from our community
              </h1>
              <div className="flex space-x-2">
                <button className="bg-blue-700 text-white text-2xl md:text-4xl rounded-full px-4 md:px-5 py-1 md:py-2" onClick={handlePrev}>
                  &#8592;
                </button>
                <button className="bg-blue-700 text-white text-2xl md:text-4xl rounded-full px-4 md:px-5 py-1 md:py-2" onClick={handleNext}>
                  &#8594;
                </button>
              </div>
            </div>
            <div className="relative w-full max-w-8xl overflow-hidden">
              <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)` }}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4 py-8 md:py-20 bg-white rounded-lg mx-1 min-h-[350px] flex flex-col justify-between shadow-lg">
                    <p className="text-gray-700 mb-4 text-sm md:text-base">{testimonial.text}</p>
                    <div className="flex items-center">
                      <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3" />
                      <div>
                        <h4 className="font-bold text-blue-600 text-sm md:text-base">{testimonial.name}</h4>
                        <p className="text-gray-500 text-xs md:text-sm">{testimonial.username}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialSlider;
