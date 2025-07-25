import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";
  const getNavLinkClass = ({ isActive }) => {
    if (isActive) {
      return isHome
        ? "border-b-2 font-bold"
        : "border-b-2 font-bold text-[#9538E2]";
    }
    return "font-medium";
  };

  const navLinks = (
    <>
      <NavLink to="/" className={getNavLinkClass}>
        Home
      </NavLink>
      <NavLink to="/statistics" className={getNavLinkClass}>
        Statistics
      </NavLink>
      <NavLink to="/dashboard" className={getNavLinkClass}>
        Dashboard
      </NavLink>
    </>
  );

  return (
    <nav
      className={`${
        isHome ? "bg-[#9538E2] text-white" : "bg-transparent text-black"
      } px-4 md:px-32 py-6 rounded-t-2xl flex justify-between items-center mt-10 relative z-20 transition-all duration-300`}
    >
      <Link to="/" className="text-xl font-bold">
        Gadget Heaven
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-8">{navLinks}</div>

      {/* Cart & Heart Icons */}
      <div className="hidden md:flex gap-4 items-center">
        <div className="bg-white p-1 rounded-full text-xl">
          <IoCartOutline className="text-black" />
        </div>
        <div className="bg-white p-1 rounded-full text-xl">
          <CiHeart className="text-black" />
        </div>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <RxCross1 /> : <GiHamburgerMenu />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#9538E2] p-6 flex flex-col gap-4 md:hidden z-10">
          {navLinks}
          <div className="flex gap-4 pt-4">
            <div className="bg-white p-1 rounded-full text-xl">
              <IoCartOutline className="text-black" />
            </div>
            <div className="bg-white p-1 rounded-full text-xl">
              <CiHeart className="text-black" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
