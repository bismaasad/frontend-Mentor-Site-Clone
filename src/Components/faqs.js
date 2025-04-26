import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const boxes = [
  { heading: "Is it free?", paragraph: "The majority of our challenges are free, yes. We do have some that are premium and require a Pro subscription to access. It will say on each challenge whether they are free or premium, so it's easy to tell the difference" },
  { heading: "Can I use these projects in my portfolio?", paragraph: "Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!" },
  { heading: "Can I take the challenges as a beginner?", paragraph: "For sure! Our challenges have five different levels of difficulty. We'd recommend starting with the newbie ones. You might also want to start with the HTML & CSS only challenges first. As you build up your skills and confidence, you can take on more complex projects." },
  { heading: "How do I start?", paragraph: "You can see all of our challenges here. To start a challenge, click the Start Challenge button on the challenge page. This will take you to the Challenge Hub, where you can download the starter files, including a README file which will help you get set up. We'd recommend starting with one of our newbie level challenges. You can then work your way up from there." },
  { heading: "How can I get help if I'm stuck on a challenge?", paragraph: "The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it's a great place to ask questions. We even have a dedicated help channel! If you haven't joined yet, you can get an invite to our Discord server here." },
  { heading: "Can I use libraries/frameworks on these projects?", paragraph: "Yes! Our challenges provide professional designs but there are no rules on what tools to use. So feel free to use anything you like to build your projects." },
  { heading: "Am I guaranteed to get hired through the Hiring Platform?", paragraph: "We can’t offer any guarantees, unfortunately. You can showcase your skills and knowledge to recruiters on our Hiring Platform by completing challenges and engaging with the community. This may lead to job opportunities, but it also may not. We still recommend applying for jobs using traditional channels like job boards." },
];

const ResponsiveBoxes = () => {
  const [openIndexes, setOpenIndexes] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleBox = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="flex flex-col items-center py-10 px-4 bg-gray-100 min-h-screen">
      <h1 className="text-5xl text-black font-medium mt-16 mb-10">FAQs</h1>
      <div className="flex flex-col gap-4 w-full max-w-xl">
        {boxes.map((box, index) => (
          <div key={index} className="bg-white border border-gray-400 rounded-lg p-2">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900 ml-6">{box.heading}</h3>
              <button
                className="text-4xl font-bold text-black focus:outline-none"
                onClick={() => toggleBox(index)}
              >
                {openIndexes.includes(index) ? "-" : "+"}
              </button>
            </div>
            {openIndexes.includes(index) && (
              <div className="mt-2 border-t border-gray-200 pt-2">
                <p className="text-gray-600 ml-6">{box.paragraph}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Join Community Section */}
      <div className="flex flex-col mt-10 items-center justify-center min-h-screen bg-gray-50 px-4">
        <h1 className="text-blue-700 text-center font-semibold text-6xl sm:text-5xl max-w-3xl">
          Join 956,861 people building portfolio-worthy projects
        </h1>
        <p className="text-gray-600 mt-8 text-center text-md sm:text-xl max-w-2xl">
          Our highly supportive, positive community is here to help you improve your skills. We all try to help each other out wherever possible. We’d love to welcome you to our community!
        </p>
        <button
          className="inline-flex items-center mt-10 bg-red-700 text-white font-bold border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded-full"
          onClick={() => navigate('/login')} // Navigate to login page
        >
          LOG IN WITH GITHUB
          <i className="fa-brands fa-square-github rounded-full p-1 ml-2 mr-1 text-2xl"></i>
        </button>
      </div>
    </div>
  );
};

export default ResponsiveBoxes;
