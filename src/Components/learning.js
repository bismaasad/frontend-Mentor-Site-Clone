import React from "react";

export default function NavbarClone() {
  return (
    <div>
      <header className="border-b border-t border-gray-500 bg-gray-100">
        <div className="container mx-auto flex justify-start py-4">
          <nav>
            <ul className="flex items-center">
              <li className="text-gray-800 px-5 py-1 border-l border-r border-gray-500 font-bold tracking-wide text-lg">
                LEARNING PATHS
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="text-gray-600 bg-gray-100 body-font">
        <div className="container mx-auto flex px-5 py-16 lg:py-24 md:flex-row flex-col items-center">
          {/* Left Section */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-semibold text-blue-700">
              Learning paths
            </h1>
            <p className="mb-8 text-base sm:text-lg font-medium leading-relaxed">
              Our learning paths help you improve your front-end skills step by
              step. Each path covers a different topic, guiding you through
              essential front-end development topics to become a skilled
              developer.
            </p>
          </div>
          {/* Right Section */}
          <div className="lg:max-w-lg lg:w-full -mt-8 md:w-1/2 w-full">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Flearning-paths-hero.webp&w=1200&q=75"
            />
          </div>
        </div>
      </section>
      <div className="bg-gray-200 flex items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl border border-gray-400 max-w-5xl mt-12 w-full overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8">
            <div className="flex flex-col justify-center px-6 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="bg-blue-300 rounded-l-md text-white text-lg font-bold px-3 py-1">
                  1
                </span>
                <span className="text-blue-300 text-md border border-blue-300 px-2 py-1 -ml-2 font-bold">
                  NEWBIE
                </span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                Getting started on Frontend Mentor
              </h1>
              <p className="text-gray-600 font-medium text-base sm:text-lg leading-relaxed">
                These projects will help you find your feet on the Frontend
                Mentor platform and give you experience working with designs and
                building small projects. They're all HTML & CSS-only challenges,
                so they'll help you pick up the basics.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="rounded-xl w-full sm:w-4/5 md:w-11/12 lg:w-10/12"
                alt="box"
                src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto/LearningPaths/samkit9vyygeuxqi6f4q.jpg"
              />
            </div>
          </div>         
        </div>
      </div>
      <div className="bg-gray-200 flex items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl border border-gray-400 max-w-5xl -mt-2 w-full overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8">
            <div className="flex flex-col justify-center px-6 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="bg-blue-300 rounded-l-md text-white text-lg font-bold px-3 py-1">
                  1
                </span>
                <span className="text-blue-300 text-md border border-blue-300 px-2 py-1 -ml-2 font-bold">
                  NEWBIE
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Building responssive layouts
              </h2>
              <p className="text-gray-600 font-medium text-base sm:text-lg leading-relaxed">
              A crucial part of modern front-end development is making web pages look good on various device sizes. The challenges in this path are designed to help you get to grips with making layouts that work across all devices.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="rounded-xl w-full sm:w-4/5 md:w-11/12 lg:w-10/12"
                alt="box"
                src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto/LearningPaths/svxn9hckf62ieldx5lqz.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 flex items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl border border-gray-400 max-w-5xl -mt-2 w-full overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8">
            <div className="flex flex-col justify-center px-6 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="bg-green-400 rounded-l-md text-white text-lg font-bold px-3 py-1">
                  1
                </span>
                <span className="text-green-400 text-md border border-green-400 px-2 py-1 -ml-2 font-bold">
                  JUNIOR
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Javascript fundamentals
              </h2>
              <p className="text-gray-600 font-medium text-base sm:text-lg leading-relaxed">
              Adding interactivity to our web pages is a key skill of the front-end developer. The challenges in this path are designed to guide you through handling common user interactions with JavaScript.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="rounded-xl w-full sm:w-4/5 md:w-11/12 lg:w-10/12"
                alt="box"
                src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto/LearningPaths/vcu7qvitarxosrblkpld.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 flex items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl border border-gray-400 max-w-5xl -mt-2 w-full overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8">
            <div className="flex flex-col justify-center px-6 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="bg-green-400 rounded-l-md text-white text-lg font-bold px-3 py-1">
                  1
                </span>
                <span className="text-green-400 text-md border border-green-400 px-2 py-1 -ml-2 font-bold">
                JUNIOR
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Introduction to web accessibility
              </h2>
              <p className="text-gray-600 font-medium text-base sm:text-lg leading-relaxed">
              Understanding accessibility and how to create accessible websites is crucial for front-end developers. This path introduces you to key concepts while providing challenges with specific accessibility considerations in each design.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="rounded-xl w-full sm:w-4/5 md:w-11/12 lg:w-10/12"
                alt="box"
                src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto/LearningPaths/svgwznnqi4wpda1mjjru.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 flex items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl border border-gray-400 max-w-5xl -mt-2 w-full overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8">
            <div className="flex flex-col justify-center px-6 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="bg-yellow-500 rounded-l-md text-white text-lg font-bold px-3 py-1">
                  1
                </span>
                <span className="text-yellow-500 text-md border border-yellow-500 px-2 py-1 -ml-2 font-bold">
                  INTERMIDIATE
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Advanced CSS techniques
              </h2>
              <p className="text-gray-600 font-medium text-base sm:text-lg leading-relaxed">
              As you start building more complex projects, it helps to use defined strategies to keep your code organized. This path outlines key considerations and provides increasingly more difficult challenges to help you practice.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="rounded-xl w-full sm:w-4/5 md:w-11/12 lg:w-10/12"
                alt="box"
                src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto/LearningPaths/oexupgyyuusnkigeifms.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 flex items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl border border-gray-400 max-w-5xl -mt-2 w-full overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8">
            <div className="flex flex-col justify-center px-6 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="bg-orange-500 rounded-l-md text-white text-lg font-bold px-3 py-1">
                  1
                </span>
                <span className="text-orange-500 text-md border border-orange-500 px-2 py-1 -ml-2 font-bold">
                  ADVANCED
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Javascript frameworks and libraries
              </h2>
              <p className="text-gray-600 font-medium text-base sm:text-lg leading-relaxed">
              Using a JavaScript framework can provide many benefits. In this path, we outline core concepts and provide a sequence of challenges to help you reinforce knowledge and gain hands-on experience with your chosen framework.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="rounded-xl w-full sm:w-4/5 md:w-11/12 lg:w-10/12"
                alt="box"
                src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto/LearningPaths/hbzxfc47ka8dzjms57fc.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 flex items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl border border-gray-400 max-w-5xl -mt-2 w-full overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8">
            <div className="flex flex-col justify-center px-6 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="bg-orange-500 rounded-l-md text-white text-lg font-bold px-3 py-1">
                  1
                </span>
                <span className="text-orange-500 text-md border border-orange-500 px-2 py-1 -ml-2 font-bold">
                  ADVANCED
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Introduction to front-end testing
              </h2>
              <p className="text-gray-600 font-medium text-base sm:text-lg leading-relaxed">
              As developers, we aim to create robust applications, especially in a production environment. This path outlines how to test your applications to increase confidence in your code and ensure it functions as expected.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="rounded-xl w-full sm:w-4/5 md:w-11/12 lg:w-10/12"
                alt="box"
                src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto/LearningPaths/kaqmeoxtcnwcbei3btzk.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 flex items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl border border-gray-400 max-w-5xl -mt-2 w-full overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8">
            <div className="flex flex-col justify-center px-6 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="bg-orange-500 rounded-l-md text-white text-lg font-bold px-3 py-1">
                  1
                </span>
                <span className="text-orange-500 text-md border border-orange-500 px-2 py-1 -ml-2 font-bold">
                  ADVANVED
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Getting job ready 
              </h2>
              <p className="text-gray-600 font-medium text-base sm:text-lg leading-relaxed">
              It takes a lot to stand out in the job market. You need everything in place to make potential employers excited to work with you. This path gives you the tools you need to put your best foot forward and make a strong impression.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="rounded-xl w-full sm:w-4/5 md:w-11/12 lg:w-10/12"
                alt="box"
                src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto/LearningPaths/ffuwqa9b0kkxkmatnsf5.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
