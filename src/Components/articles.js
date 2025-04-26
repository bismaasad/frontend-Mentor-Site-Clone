import React from "react";

export default function box() {
  return (
    <div>
      <header className="border-b border-t border-gray-500 bg-gray-100">
        <div className="container mx-auto flex justify-start py-4">
          <nav>
            <ul className="flex items-center">
              <li className="text-gray-800 px-5 py-1 border-l border-r border-gray-500 font-bold tracking-wide text-lg">
              Articles
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section class="text-gray-600   bg-gray-100 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center  rounded-2xl w-max h-1/5" alt="hero" src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto/Admin/thzrm64mkaawyebmwuas.jpg"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    <div class="text-lg rounded-full text-blue-700 mt-3 font-bold bg-gray-200 px-2 py-2 inline-block">NEWS</div>
      <h1 class="title-font sm:text-4xl mt-2 text-9xl mb-4 font-bold text-blue-700">Practice your JavaScript skills by building a Charecter Counter app</h1>
      <p class="mb-8 leading-relaxed text-lg">Test your JS skills with this project, which includes counting characters, words, and sentences. It also has a letter density graph and a theme switcher.</p>
      
      <div className="flex items-center">
   <img src="https://avatars.githubusercontent.com/u/47932038?s=280&v=4" alt="logo" className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3" />
    <div>
    <h4 className="font-bold text-black text-sm md:text-base">   The Frontend Mentor team  .      31 Jan 2025
    </h4>
    </div>
    </div>
    </div>
  </div>
</section>
    </div>
  );
}