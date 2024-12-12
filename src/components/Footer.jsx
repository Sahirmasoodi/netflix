import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm mb-6">
          Questions? Call <a href="tel:+123456789" className="hover:underline">+1-234-567-89</a>
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">FAQ</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Investor Relations</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Privacy</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Speed Test</a>
            </li>
          </ul>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">Help Center</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Jobs</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Cookie Preferences</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Legal Notices</a>
            </li>
          </ul>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">Account</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Ways to Watch</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Corporate Information</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Only on Netflix</a>
            </li>
          </ul>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">Media Center</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Terms of Use</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="text-center mt-6">
          <select
            className="bg-gray-800 text-gray-400 px-4 py-2 border border-gray-700 rounded"
            aria-label="Select Language"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>
        <p className="text-center text-xs mt-6">
          © {new Date().getFullYear()} Netflix Clone. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
