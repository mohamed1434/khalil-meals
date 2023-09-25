"use client";
import Image from "next/image";
import { navbarItems, socialIcons } from "../constants/index";
import Link from "next/link";
import * as Scroll from "react-scroll";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);
  return (
    <nav
      className={`w-full flex items-center justify-between p-6 sticky top-0 ${
        !top && `bg-[#F7F7F7] shadow-2xl transition-shadow duration-300`
      }  z-10  `}
    >
      <Image
        src={"/assets/khalilLogo.png"}
        alt=""
        width={100}
        height={92}
        className="object-cover ml-5"
      />
      <div className="items-center gap-10 sm:flex hidden justify-center ">
        {navbarItems.map((item) => (
          <Scroll.Link
            to={item.id.toLowerCase()} // Use the target element's ID as the "to" prop
            spy={true}
            smooth={true}
            offset={-70} // Adjust this offset as needed to ensure the element is in view
            duration={500} // Duration of the scroll animation
            // className="text-black text-lg hover:text-black transition-all"
            key={item.id}
            // href={"/"}
            className="text-black text-lg hover:text-black transition-all cursor-pointer"
          >
            {item.name}
          </Scroll.Link>
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
              <Scroll.Link
                to={nav.id.toLowerCase()} // Use the target element's ID as the "to" prop
                spy={true}
                smooth={true}
                offset={-70} // Adjust this offset as needed to ensure the element is in view
                duration={500} // Duration of the scroll animation
                // className="text-black text-lg hover:text-black transition-all"
                key={nav.id}
              >
                <li
                  // key={nav.id}
                  className={`font-poppins text-white font-medium cursor-pointer text-[16px] ${
                    active === nav.name ? "text-white" : "text-dimWhite"
                  } ${index === navbarItems.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.name)}
                >
                  {/* <a href={`#${nav.name}`}>{nav.name}</a> */}
                  {nav.name}
                </li>
              </Scroll.Link>
            ))}
          </ul>
        </div>
      </div>

      <Link href={`${socialIcons[1].link}?text=Hello, I would Like to place an Order :)`}>
        <button className="text-black mr-5 border-black border-2 px-4 py-3 text-lg rounded-full ml-4">
          Place An Order
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
