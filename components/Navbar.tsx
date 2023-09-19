"use client"
import Image from "next/image";
import { navbarItems } from "../constants/index";
import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex items-center justify-between">
      <Image
        src={"/assets/khalil-modified.png"}
        alt=""
        width={100}
        height={92}
        className="object-cover ml-5"
      />
      <div className="items-center gap-10 sm:flex hidden justify-center ">
        {navbarItems.map((item) => (
          <Link
            href={"/"}
            className="text-black text-lg hover:text-black transition-all"
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? "/assets/close.svg" : "/assets/menu.svg"}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
        />

        {/* Sidebar */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navbarItems.map((nav, index) => (
              <li
                key={nav}
                className={`font-poppins text-white font-medium cursor-pointer text-[16px] ${
                  active === nav ? "text-white" : "text-dimWhite"
                } ${index === navbarItems.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav)}
              >
                <a href={`#${nav}`}>{nav}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button className="text-black mr-5 border-black border-2 px-6 py-3 text-lg rounded-full ml-4">
        Make An Order
      </button>
    </nav>
  );
};

export default Navbar;
