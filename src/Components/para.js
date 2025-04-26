import React from "react";

const ProSubscription = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-gray-100">
    <div className="flex flex-col -mt-24 items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-black text-center font-semibold text-5xl sm:text-5xl max-w-3xl">
        Take your skills to the next level with our <span class="text-white bg-blue-700 px-3  rounded-lg text-5xl font-bold">PRO</span> subscription
      </h1>
      <p className="text-gray-600 text-center text-md sm:text-xl max-w-2xl">
        Step into the shoes of a professional developer and build projects in the most realistic way possible. Our Pro subscription will help you prepare for life as a professional developer.
      </p>
    </div>
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-5">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg mb-24 shadow-lg text-center">
            <div className="text-blue-800 text-6xl mb-4"><i class="fa-brands fa-figma"></i></div>
            <h1 className="text-black font-semibold  mb-6 text-3xl pl-5 pr-6">Access each challenge’s design file</h1>
            <p className="text-gray  mb-6 text-xl pl-5 pr-6">
            Professional teams use tools like Figma. By using these tools when building projects, you’ll save time, create more accurate solutions, and gain hands-on experience working like a pro.
            </p>  
          </div>

          <div className="bg-white p-6 rounded-lg mb-24 shadow-lg text-center">
            <div className="text-blue-800 text-6xl mb-4"><i class="fa-regular fa-star"></i></div>
            <h1 className="text-black font-semibold  mb-6 text-3xl pl-5 pr-6">Tackle our premium challenges</h1>
            <p className="text-gray  mb-6 text-xl pl-5 pr-6">
            Our premium challenges are the most realistic, comprehensive practice projects you’ll find. They also make incredible portfolio pieces to help you “wow!” recruiters and get hired.
            </p>  
          </div>
        </div>
        <button class=" justify-center items-center text-xl bg-red-600 text-white font-bold border-0 py-3 px-5 focus:outline-none hover:bg-gray-800 rounded-full mx-auto block">
        LEARN ABOUT PRO</button>
      </div>
    </div>
    </section>
    </div>
  );
};

export default ProSubscription;
