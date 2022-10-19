import { useState } from "react";

import { close, logo, menu } from "../assets";

import { navLinks } from "../constants";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full py-6 flex justify-between items-center navbar">
      <img src={logo} alt="banco" className="w-[140px] h-[40px]" />

      {/* Desktop Links */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((navItem) => (
          <li
            key={navItem.id}
            className={` cursor-pointer text-white mr-10 last-of-type:mr-0`}
          >
            <a href="#">{navItem.title}</a>
          </li>
        ))}
      </ul>

      {/* Menu Hamburger / Menu Items */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 rounded-xl min-w-[140px] sidebar`}
        >
          <ul className="list-none mx-auto">
            {navLinks.map((navItem) => (
              <li
                key={navItem.id}
                className={` cursor-pointer flex justify-center text-white mb-10 last-of-type:mb-0`}
              >
                <a href="#">{navItem.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
