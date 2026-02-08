"use client";

import Image from "next/image";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "home", path: "home" },
  { name: "projects", path: "projects" },
  { name: "company", path: "company" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-teal-700 via-cyan-700 to-teal-800 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-[70px]">

          {/* Logo */}
          <ScrollLink
            to="home"
            smooth
            duration={500}
            offset={-80}
            className="flex items-center gap-1 cursor-pointer"
          >
        
            <Image
              src="/assets/img/logo2.png"
              alt="OceanFresh Logo"
              width={83}
              height={87}
              priority
              className="h-auto w-20 md:w-25 lg:w-30 object-contain rounded-full"
            />

            <span className="text-white font-primary text-1xl font-bold tracking-wider uppercase">
             SUFIFA
            </span>
          </ScrollLink>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-14">

            <ul className="flex gap-10 text-white font-secondary">
              {links.map((link, index) => (
                <li key={index} className="relative group text-sm uppercase tracking-wider">
                  <ScrollLink
                    to={link.path}
                    smooth
                    spy
                    offset={-80}
                    duration={500}
                    activeClass="text-accent"
                    className="cursor-pointer transition-colors"
                  >
                    {link.name}
                  </ScrollLink>

                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button className="group flex items-center gap-3 bg-white/10 border border-white/20 hover:bg-white hover:text-teal-700 transition-all duration-300 px-6 h-[48px] rounded-full">
              <span className="font-primary font-bold text-sm uppercase tracking-wider">
                Get a Quote
              </span>

              <div className="w-10 h-10 bg-white text-teal-700 flex items-center justify-center rounded-full group-hover:bg-teal-700 group-hover:text-white transition-all">
                <RiArrowRightUpLine className="text-xl group-hover:rotate-45 transition-transform duration-300" />
              </div>
            </button>

          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
