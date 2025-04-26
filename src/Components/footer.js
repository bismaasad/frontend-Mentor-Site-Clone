import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <div>
            <h3 className="text-lg font-semibold text-blue-800">Stay up to date</h3>
            <p className="text-gray-600 mt-2">
              with new challenges, featured solutions, selected articles, and our
              latest news
            </p>
          </div>
          <div className="mt-4 lg:mt-0">
            <form className="flex flex-col sm:flex-row sm:items-center">
              <input
                type="email"
                placeholder="email@example.com"
                className="border border-gray-300 rounded-md px-4 py-2 mb-2 sm:mb-0 sm:mr-2 w-full sm:w-auto"
              />
              <button
                type="submit"
                className="bg-red-500 text-white font-semibold rounded-md px-6 py-2 hover:bg-red-600"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-300" />

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between">
          {/* Links Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold text-gray-800">FRONTEND MENTOR</h4>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:underline">
                    Unlock Pro
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:underline">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:underline">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">EXPLORE</h4>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:underline">
                    Learning paths
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:underline">
                    Challenges
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:underline">
                    Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:underline">
                    Articles
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">COMMUNITY</h4>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:underline">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:underline">
                    Guidelines
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">FOR COMPANIES</h4>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:underline">
                    Hire developers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:underline">
                    Train developers
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-8 lg:mt-0 flex space-x-4 justify-center lg:justify-start">
            <a href="#" className="text-gray-500 hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M24 4.56c-.89.39-1.84.65-2.84.77a4.93 4.93 0 0 0 2.17-2.72 9.86 9.86 0 0 1-3.13 1.2A4.92 4.92 0 0 0 16.78 3a4.92 4.92 0 0 0-4.92 4.92c0 .39.04.76.12 1.13a13.97 13.97 0 0 1-10.15-5.15 4.88 4.88 0 0 0-.67 2.47 4.91 4.91 0 0 0 2.18 4.1 4.91 4.91 0 0 1-2.23-.62v.06c0 2.42 1.73 4.44 4.03 4.89a4.9 4.9 0 0 1-2.21.08 4.92 4.92 0 0 0 4.6 3.42A9.86 9.86 0 0 1 0 19.54a13.94 13.94 0 0 0 7.55 2.21c9.05 0 14-7.5 14-14v-.63c.96-.69 1.8-1.56 2.46-2.54z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M22.23 0H1.77C.79 0 0 .78 0 1.77v20.46C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.77V1.77C24 .78 23.22 0 22.23 0zm-4.03 8.29c.01.21.01.42.01.63 0 6.45-4.91 13.89-13.89 13.89a13.82 13.82 0 0 1-7.49-2.19c.38.04.76.06 1.15.06 2.29 0 4.4-.78 6.07-2.09a4.91 4.91 0 0 1-4.59-3.41c.36.07.74.11 1.13.11.54 0 1.06-.07 1.56-.21a4.92 4.92 0 0 1-3.94-4.83v-.06c.66.36 1.42.58 2.23.61a4.92 4.92 0 0 1-2.2-4.1c0-.89.24-1.72.67-2.44a13.95 13.95 0 0 0 10.14 5.14c-.08-.35-.12-.73-.12-1.12 0-2.7 2.2-4.92 4.92-4.92 1.42 0 2.7.6 3.59 1.56a9.8 9.8 0 0 0 3.12-1.2c-.36 1.11-1.12 2.04-2.11 2.63a9.87 9.87 0 0 0 2.83-.77c-.61.94-1.38 1.77-2.27 2.43z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M19.54 3.5c-1.36 0-2.74.08-4.11.23-1.36.15-2.67.4-3.88.76a16.56 16.56 0 0 0-6.26 3.15c-.91.79-1.7 1.71-2.36 2.72-.67 1-.97 2.1-1.23 3.22-.25 1.1-.31 2.2-.32 3.3-.01 1.1.04 2.2.25 3.3.21 1.1.53 2.17 1.03 3.2.5 1.02 1.13 2 1.87 2.86a16.73 16.73 0 0 0 2.7 2.15 17.62 17.62 0 0 0 7.3 2.49c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3a17.63 17.63 0 0 0 7.3-2.49 16.75 16.75 0 0 0 2.7-2.15 16.56 16.56 0 0 0 1.88-2.86c.49-1.03.81-2.1 1.03-3.2.21-1.1.26-2.2.25-3.3-.01-1.1-.07-2.2-.32-3.3-.25-1.12-.56-2.21-1.23-3.22a15.76 15.76 0 0 0-2.36-2.72 16.45 16.45 0 0 0-6.26-3.15c-1.21-.35-2.52-.61-3.88-.76-1.37-.15-2.75-.23-4.11-.23z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">&copy; Frontend Mentor 2019 - 2025</p>
          <div className="mt-2 lg:mt-0 flex space-x-4 text-sm text-gray-600">
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              Cookie Policy
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              License
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
