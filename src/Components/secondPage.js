import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/page.css';

export default function SecondPage() { 
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(`/${path}`);
  };

  return (
    <div>
      <section class="text-gray-600 body-font bg-gray-100">
        <div className="container mx-auto px-5 py-24 flex flex-col md:flex-row items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-normal text-blue-600">
              <span>Improve your coding skills </span>
              <span className="block">by building realistic</span>
              <span className="block">projects</span>
            </h1>
            <p className="mb-8 leading-relaxed text-xl md:text-2xl">
              Our professionally designed challenges help you gain hands-on experience writing HTML, CSS, and JavaScript. We create the designs so you can focus on the code and see your skills skyrocket!
            </p>
            <button
              className="inline-flex items-center bg-red-700 text-white font-bold border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded-full"
              onClick={() => handleNavigation('login')}
            >
              LOG IN WITH GITHUB
              <i className="fa-brands fa-square-github rounded-full p-1 ml-2 mr-1 text-2xl"></i>
            </button>
            <div className="container pl-4 w-full md:w-60 mt-10 rounded-lg bg-white shadow-lg flex items-center p-6 md:p-10">
              <div className="w-1/3">
                <img
                  src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhome-community-avatars.webp&w=384&q=100"
                  alt="Sample"
                  className="w-full h-auto object-cover rounded"
                />
              </div>
              <div className="w-2/4 pl-3">
                <p className="text-gray-600 text-sm md:text-base">
                  Join <span className="text-blue-700 font-bold">954,514</span> developers building projects, reviewing code, and helping each other improve.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhome-hero.webp&w=1920&q=75"
            />
          </div>
        </div>
  <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-5">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Testimonial Card 1 */}
          <div className="bg-white p-6 rounded-lg  mb-6 shadow-lg text-center">
            <div className="text-blue-200 text-6xl mb-4">“</div>
            <p className="text-black font-semibold  mb-6 text-xl pl-5 pr-6">
              I highly recommend Frontend Mentor. Skip the search for project
              ideas and dive into ready-made challenges that help you level up
              as a developer.
            </p>
            <div className="flex justify-center items-center flex-col">
              <img
                src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhome-community-avatars.webp&w=384&q=100"
                alt="Kevin Powell"
                className="w-16 h-16 rounded-full object-cover mb-4"
              />
              <h3 className="font-bold text-blue-800 text-xl uppercase">
                Kevin Powell
              </h3>
              <p className="text-gray-500 text-md">Web Developer & YouTuber</p>
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div className="bg-white p-6 rounded-lg mb-6  shadow-lg text-center">
            <div className="text-blue-200 text-6xl mb-4">“</div>
            <p className="text-black  font-semibold mb-6 text-xl pl-5 pr-6" >
              Frontend Mentor is a win-win. You can sharpen your skills building
              websites and add finished projects to your portfolio to help land
              a job!
            </p>
            <div className="flex justify-center items-center flex-col">
              <img
                src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhome-community-avatars.webp&w=384&q=100"
                alt="Jessica Chan"
                className="w-16 h-16 rounded-full object-cover mb-4"
              />
              <h3 className="font-bold text-xl text-blue-800  uppercase">
                Jessica Chan
              </h3>
              <p className="text-gray-500 text-md mb-10">Web Developer & YouTuber</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h1 className='text-black text-center font-bold text-2xl mt-24'>As featured on...</h1>
      <div className='md:ml-auto flex flex-wrap items-center text-base  mb-6 justify-center gap-6'>
  <div className='border border-gray-400 bg-white p-6 rounded-lg  px-20  py-8 shadow-lg text-center text-black font-semibold text-3xl mt-10 w-72'>
  <i className="fa-solid fa-star-of-life" style={{
  background: 'linear-gradient(to right, #8B0A1A 60%, #333 40%)',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent'
}}></i> CSS-TRIKS
  </div>

  <div className='border border-gray-400 bg-white p-6 px-16 py-8 rounded-lg shadow-lg text-center text-black text-3xl font-semibold mt-10 w-72'>
  <i className="fa-brands fa-stack-overflow" style={{
  background: 'linear-gradient(to bottom, #FFA07A 70%, #333 30%)',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent'
}}></i> stack<span className='font-bold'>overflow</span>
  </div>

  <div className='border border-gray-400 bg-white p-6 rounded-lg px-16  py-8 shadow-lg text-center text-orange-500 font-bold text-3xl mt-10 w-72'>
    <i className="fa-brands fa-product-hunt"></i> Product Hunt
  </div>
</div>
    </div>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-col lg:flex-row items-center">
      <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded-lg " src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhome-benefit-1.webp&w=1080&q=75"/>
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 text-center lg:text-left">
        <div class="text-3xl rounded-full bg-gray-400 px-4 py-2 inline-block">😈</div>
        <h1 class="text-gray-900 text-4xl mt-6 font-bold">Escape tutorial hell</h1>
        <p class="leading-relaxed mt-6 text-lg">Add projects to your learning journey and put your knowledge to the test. The real learning happens when you start solving real-world problems yourself.</p>
      </div>
    </div>
  </div>
</section>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-col-reverse lg:flex-row items-center">
      <div class="lg:w-1/2 w-full lg:pr-11 lg:py-6 mb-6 lg:mb-0 text-center lg:text-left">
        <div class="text-3xl rounded-full bg-gray-400 px-4 py-2 inline-block">🤩</div>
        <h1 class="text-gray-900 text-4xl mt-6 font-bold">Build portfolio-worthy projects</h1>
        <p class="leading-relaxed mt-6 text-lg">Design is hard. We take care of the project ideas and design so you can focus on the coding. You’ll end up with an incredible portfolio of stunning projects!</p>
      </div>
      <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded-lg " src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhome-benefit-2.webp&w=1080&q=75"/>
    </div>
  </div>
</section>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-col lg:flex-row items-center">
      <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded-lg " src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhome-benefit-3.webp&w=1080&q=75"/>
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 text-center lg:text-left">
        <div class="text-3xl rounded-full bg-gray-400 px-4 py-2 inline-block">🚀</div>
        <h1 class="text-gray-900 text-4xl mt-6 font-bold">Banish impostor syndrome</h1>
        <p class="leading-relaxed mt-6 text-lg">We’ve all felt out of our depth before. Getting hands-on experience is an incredible way to build confidence, refine your workflow, and supercharge your learning.</p>
      </div>
    </div>
  </div>
</section>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-col-reverse lg:flex-row items-center">
      <div class="lg:w-1/2 w-full lg:pr-11 lg:py-6 mb-6 lg:mb-0 text-center lg:text-left">
        <div class="text-3xl rounded-full bg-gray-400 px-4 py-2 inline-block">🛠️</div>
        <h1 class="text-gray-900 text-4xl mt-6 font-bold">Practice new tools</h1>
        <p class="leading-relaxed mt-6 text-lg">The front-end landscape changes constantly. Our design-led challenges let you pick your tools to help you adapt, experiment, and keep up with the latest trends.</p>
      </div>
      <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded-lg " src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhome-benefit-4.webp&w=1200&q=75"/>
    </div>
  </div>
</section>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-col lg:flex-row items-center">
      <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded-lg " src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhome-benefit-5.webp&w=1200&q=75"/>
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 text-center lg:text-left">
        <div class="text-3xl rounded-full bg-gray-400 px-4 py-2 inline-block">🤝</div>
        <h1 class="text-gray-900 text-4xl mt-6 font-bold">Create job opportunities</h1>
        <p class="leading-relaxed mt-6 text-lg">We have a Hiring Platform that runs alongside this platform. Just by building projects and engaging with the community, you could open up job opportunities!</p>
      </div>
    </div>
  </div>
</section>

</section>
    </div> 
  )
}
