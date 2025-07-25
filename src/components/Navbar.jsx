import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "border-b-2 font-bold" : "font-medium"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/statistics"
        className={({ isActive }) =>
          isActive ? "border-b-2 font-bold" : "font-medium"
        }
      >
        Statistics
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? "border-b-2 font-bold" : "font-medium"
        }
      >
        Dashboard
      </NavLink>
    </>
  );

  return (
    <nav className="text-white px-4 md:px-32 py-6 bg-[#9538E2] rounded-t-2xl flex justify-between items-center mt-10 relative">
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
