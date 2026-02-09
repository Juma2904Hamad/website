"use client";

import Image from "next/image";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", path: "/" },
  { name: "projects", path: "/projects" },
  { name: "company", path: "/company" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-teal-700 via-cyan-700 to-teal-800 shadow-lg relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-[70px]">

          {/* Logo */}
          <ScrollLink to="home" smooth duration={500} className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/assets/img/sufifa2.png"
              alt="SUFIFA Logo"
              width={90}
              height={80}
              priority
              className="h-auto w-20 sm:w-16 md:w-18 object-contain"
            />
            <span className="relative inline-block">
              <span className="text-white/45 text-[10px] tracking-wider absolute -top-3 whitespace-nowrap uppercase">
                Sustainable Fish Farming
              </span>
              <span className="bg-gradient-to-r from-yellow-300 text-[13px] via-yellow-400 to-amber-500 bg-clip-text text-transparent text-xl sm:text-1xl font-extrabold tracking-[0.22em] uppercase drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
                SUFIFA
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-400 via-yellow-300 to-transparent"></span>
            </span>
          </ScrollLink>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-14">
            <ul className="flex gap-10 text-white font-secondary">
              {links.map((link, index) => (
                <li key={index} className="relative group text-sm uppercase tracking-wider text-[13px]">
                  <Link
                    href={link.path}
                    className="cursor-pointer transition-colors hover:text-yellow-400"
                  >
                    {link.name}
                  </Link>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button className="group flex items-center gap-3 bg-white/10 border border-white/20 text-white hover:bg-white hover:text-teal-700 transition-all duration-300 px-6 h-[44px] rounded-full cursor-pointer">
              <span className="font-primary font-bold text-sm uppercase tracking-wider text-[12px]">
                Get a Quote
              </span>
              <div className="w-[30px] h-[30px] bg-white text-teal-700 flex items-center justify-center rounded-full group-hover:bg-teal-700 group-hover:text-white transition-all">
                <RiArrowRightUpLine className="text-xl group-hover:rotate-45 transition-transform duration-300" />
              </div>
            </button>

            {/* Search Icon */}
            <div
              className="w-[30px] h-[30px] bg-white/20 text-white flex items-center justify-center rounded-full cursor-pointer 
                         transition-all duration-300 hover:bg-white hover:text-teal-700 hover:scale-110 hover:shadow-lg"
              onClick={() => setSearchOpen(true)}
            >
              <FiSearch className="text-sm transition-transform duration-300" />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-4">
            <div
              className="w-[30px] h-[30px] bg-white/20 text-white flex items-center justify-center rounded-full cursor-pointer 
                         transition-all duration-300 hover:bg-white hover:text-teal-700 hover:scale-110 hover:shadow-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FiX className="text-lg" /> : <FiMenu className="text-lg" />}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-teal-800/95 backdrop-blur-md p-6 flex flex-col gap-6 absolute w-full top-[70px] left-0 shadow-2xl">
          <ul className="flex flex-col gap-4 text-white font-secondary">
            {links.map((link, index) => (
              <li key={index}>
                <ScrollLink
                  to={link.path}
                  smooth
                  spy
                  offset={-80}
                  duration={500}
                  onClick={() => setMobileMenuOpen(false)}
                  className="cursor-pointer text-lg uppercase tracking-wider hover:text-yellow-400 transition-colors text-[12px]"
                >
                  {link.name}
                </ScrollLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button className="group flex items-center gap-3 bg-white/10 border border-white/20 text-white hover:bg-white hover:text-teal-700 transition-all duration-300 px-6 h-[44px] rounded-full cursor-pointer">
              <span className="font-primary font-bold text-sm uppercase tracking-wider text-[12px]">
                Get a Quote
              </span>
              <div className="w-[30px] h-[30px] bg-white text-teal-700 flex items-center justify-center rounded-full group-hover:bg-teal-700 group-hover:text-white transition-all">
                <RiArrowRightUpLine className="text-xl group-hover:rotate-45 transition-transform duration-300" />
              </div>
            </button>

            <div
              className="w-[30px] h-[30px] bg-white/20 text-white flex items-center justify-center rounded-full cursor-pointer 
                         transition-all duration-300 hover:bg-white hover:text-teal-700 hover:scale-110 hover:shadow-lg"
              onClick={() => setSearchOpen(true)}
            >
              <FiSearch className="text-sm transition-transform duration-300" />
            </div>
          </div>
        </div>
      )}

      {/* Search Popup */}
      {searchOpen && (
        <div className="absolute top-0 left-0 w-full h-[70px] bg-teal-900/90 backdrop-blur-md flex items-center justify-center gap-2 px-6 z-50">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-md px-4 py-2 rounded-full outline-none text-black"
          />
          <button
            className="w-[30px] h-[30px] flex items-center justify-center bg-white rounded-full text-teal-700 hover:bg-teal-700 hover:text-white transition-all"
            onClick={() => setSearchOpen(false)}
          >
            <FiX />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

