import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import resume from "../assets/KhuzaimaAhsan.pdf"; // Import the resume PDF file

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2 w-40"
          src={logo}
          alt="logo"
          style={{ width: "200px", height: "auto" }}
        />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/khuzaima-ahsan/"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/k-ahsan07"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <FaGithub />
        </a>

        <a
          href={resume} 
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-black border border-white text-white rounded-lg hover:bg-blue-700"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
