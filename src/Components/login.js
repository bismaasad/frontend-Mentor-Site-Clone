import React from "react";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center">
        {/* GitHub Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-12 h-12 text-gray-800 mb-1 mt-6"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4.01 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>

        {/* Login Box */}
        <div className="w-full max-w-sm border border-gray-300 bg-gray-100 mt-4 rounded-md p-8">
          <div className="text-center mb-6">
            <img
              src="https://avatars.githubusercontent.com/u/47932038?s=280&v=4"
              alt="Logo"
              className="w-20 h-20 mx-auto mb-2 -mt-3"
            />
            <h2 className="text-gray-800 text-lg">
              Sign in to <span className="font-semibold">GitHub</span>
            </h2>
            <h2 className="text-gray-800 text-lg mt-1">
              to continue to <span className="font-semibold">Frontend Mentor</span>
            </h2>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-medium  mb-1 "
              >
                Username or email address
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="text-right -mt-7">
                <a
                  href="#"
                  className="text-sm text-blue-500 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-1 px-4 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Sign in
            </button>
          </form>
        </div>

        {/* Alternative Options */}
        <div className="w-full max-w-sm border border-gray-300 bg-white mt-4 rounded-md p-4">
          <div className="text-center">
            <p className="text-sm text-gray-600">
              <a
                href="#"
                className="text-blue-500 hover:underline font-medium"
              >
                Sign in with a passkey
              </a>
            </p>
            <p className="text-sm text-gray-600 mt-2">
              New to GitHub?{' '}
              <a
                href="#"
                className="text-blue-500 hover:underline font-medium"
              >
                Create an account
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center  mt-20 mb-12 gap-4 text-gray-700 text-xs ">
        <a href="#" className="hover:underline">
          Terms
        </a>
        <a href="#" className="hover:underline">
          Privacy
        </a>
        <a href="#" className="hover:underline">
          Docs
        </a>
        <a href="#" className="hover:underline">
          Contact HitHub Support
        </a>
        <a href="#" className="hover:underline">
          Manage cookies
        </a>
        <a href="#" className="hover:underline">
          Do not share my personal information
        </a>
      </div>
    </div>
  
  );
};

export default LoginPage;
