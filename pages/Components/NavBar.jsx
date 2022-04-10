import React, { useState } from "react";

const navLinks = ["Home", "About", "Education", "Work"];

function NavBar() {
  return (
    <nav className=" navbar navbar_active shadow-lg">
      <ul className="flex  text-base md:text-xl  uppercase  py-4 md:py-9">
        {navLinks.map((link) => (
          <li
            className="md:px-3 mx-3 md:mx-8 font-medium hover:cursor-pointer"
            key={link}
          >
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
