import React from "react";
import Button from "../Button/Button";
import Navbarlink from "../Links/Navbarlink";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <nav className="flex justify-around items-center p-3 fixed bg-secondary w-[100%] outline-none  ">
      <Link
        to="home"
        activeClass="active"
        spy={true}
        smooth={true}
        duration={800}
        className="flex cursor-pointer"
      >
        <h1 className="text-xl font-extralight">HX</h1>
        <h1 className="text-3xl font-normal text-primary">DEV</h1>
      </Link>
      <div className="flex  gap-5 cursor-pointer  ">
        <Navbarlink link={"home"} text={"Home"} color={"white"} />
        <Navbarlink link={"about"} text={"About"} color={"white"} />
        <Navbarlink link={"services"} text={"Services"} color={"white"} />
        <Navbarlink link={"skills"} text={"Skills"} color={"white"} />
        <Navbarlink link={"work"} text={"Work"} color={"white"} />
      </div>
      <Link
        to="contact"
        activeClass="active"
        spy={true}
        smooth={true}
        duration={800}
      >
        <Button text={"Contact"} />
      </Link>
    </nav>
  );
};

export default Navbar;
