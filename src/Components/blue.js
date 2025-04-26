import React from 'react';

export default function Blue() {
  return (
    <div className='bg-indigo-700'>
      <section className="text-white body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Are you looking to hire talented, passionate developers?
            </h1>
            <p className="mb-8  text-xl leading-relaxed">
              Our Hiring Platform helps you connect with our diverse community of talented early-career developers. Stop wading through hundreds of resumes and get chatting to skilled developers in minutes.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex font-bold rounded-full text-indigo-500 bg-white border-0 py-3 px-6 focus:outline-none hover:bg-indigo-700 text-lg">
                START HIRING DEVELOPERS
              </button>
            </div>
          </div>
          <div className="lg:max-w-2xl -mb-24 lg:w-full md:w-1/2 w-5/6">
            <img 
              className="object-cover object-center rounded h-full w-full" 
              alt="Hero illustration" 
              src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhome-hiring.webp&w=1080&q=100" 
            />
          </div>
        </div>
      </section>
    </div>
  );
}
