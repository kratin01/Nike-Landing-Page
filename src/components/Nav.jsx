import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { Link, animateScroll as scroll } from "react-scroll";
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Nav = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handlethemeswitcher = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
   
  };
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={50}
                key={item.label}
                to={item.link}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.link}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        <div className=" flex justify-end items-center max-w-1 space-x-4 max-lg:hidden">
          <button
            onClick={handlethemeswitcher}
            className=" text-black p-2 rounded-xl text-lg "
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </div>

        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
