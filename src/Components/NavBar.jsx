import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="w-full px-4 mb-2 h-[50px] flex justify-between items-center">
      <Link to="/">
        <i className="fa-solid fa-house text-white text-[2rem]"></i>
      </Link>
      <div>
        <a
          href="https://www.linkedin.com/in/akshay-jadhav-01737711b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin text-white text-[2rem]"></i>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
