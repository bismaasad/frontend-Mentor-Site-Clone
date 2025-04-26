import React, { useState } from "react";

function App() {
  const [activeBox, setActiveBox] = useState(1); // First box is pre-selected

  const boxData = [
    {
      id: 1,
      heading: "Choose your challenge",
      paragraph:
        "Browse our collection of professionally designed projects. Pick one that suits the level you’re currently at.",
      image:
        "https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhome-how-it-works-1.webp&w=1200&q=100",
    },
    {
      id: 2,
      heading: "Code the design",
      paragraph:
        "Each project comes with all files included. This means you can focus on coding the project using the design as a reference.",
      image:
        "https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhome-how-it-works-2.webp&w=1200&q=100",
    },
    {
      id: 3,
      heading: "Submit your solution",
      paragraph:
        "Get feedback from the community about your code and see how close you got to the design.",
      image:
        "https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhome-how-it-works-3.webp&w=1200&q=100",
    },
    {
      id: 4,
      heading: "Give others feedback",
      paragraph:
        "Reviewing other people’s code is a vital part of being a developer. Practice giving code reviews and help others improve.",
      image: "https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhome-how-it-works-4.webp&w=1200&q=100",
    },
  ];

  return (
    <div>
      <section className="text-gray-600 body-font bg-gray-100">
        <div className="p-8 md:p-20 bg-gray-300 h-auto min-h-screen w-full md:w-11/12 rounded-lg mx-auto">
          <h1 className="text-black text-3xl md:text-4xl ml-4 md:ml-16 mt-8 font-semibold">
            How it works
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-start p-4 gap-8">
            {/* Left side: Boxes */}
            <div className="flex flex-col w-full md:w-1/2 lg:w-1/3 gap-4">
              {boxData.map((box) => (
                <div
                  key={box.id}
                  className={`p-4 border rounded-md transition-all duration-300 flex gap-4 items-start ${
                    activeBox === box.id
                      ? "bg-blue-500 rounded-xl text-white h-auto ml-0 md:ml-10"
                      : "rounded-xl bg-white h-20 ml-0 md:ml-10 w-auto"
                  }`}
                  onClick={() =>
                    setActiveBox(activeBox === box.id ? null : box.id)
                  }
                >
                  {/* Circle */}
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full border shrink-0 ${
                      activeBox === box.id
                        ? "bg-white text-blue-500"
                        : "bg-blue-500 text-white"
                    }`}
                  >
                    {box.id}
                  </div>
                  {/* Text */}
                  <div className="flex flex-col w-full">
                    <h2 className="text-lg font-bold">{box.heading}</h2>
                    {activeBox === box.id && (
                      <p className="mt-2">{box.paragraph}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Right side: Image */}
            <div className="w-full md:w-1/2 lg:w-2/3 flex justify-center md:justify-start items-start">
              {activeBox ? (
                <img
                  src={boxData.find((box) => box.id === activeBox).image}
                  alt="Selected"
                  className="max-w-full md:max-w-2xl ml-0 md:ml-10 mt-9 h-auto rounded-lg"
                />
              ) : (
                <p className="text-gray-500 text-lg">
                  Click a box to display the image
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;