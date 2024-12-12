import React from "react";

const BrowserFooter = () => {
  const links = [
    "FAQ",
    "Help Center",
    "Account",
    "Media Center",
    "Investor Relations",
    "Jobs",
    "Redeem Gift Cards",
    "Buy Gift Cards",
    "Ways to Watch",
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
    "Contact Us",
  ];

  return (
    <footer className="bg-black text-gray-400 pt-10 mt-auto">
      <div className="max-w-5xl mx-auto px-4">
        <p className="mb-6 text-sm">
          Questions? Call{" "}
          <a href="tel:000-800-040-1843" className="hover:underline">
            000-800-040-1843
          </a>
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          {links.map((link, index) => (
            <a
              key={index}
              href="#"
              className="hover:underline"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* Full-width copyright at the bottom */}
      <div className="w-full bg-black text-center text-sm text-gray-500 pt-4 mt-6">
        <p>© {new Date().getFullYear()} Netflix, Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default BrowserFooter;
