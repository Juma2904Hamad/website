"use client";

import React, { useState } from "react";
import { MapPin, Mail, Phone, Globe2 } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-gradient-to-t from-[#003366] via-[#004c80] to-[#006699] text-white py-5 -mt-30">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* About / Logo */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] via-[#0096c7] to-[#FFD166]">
            Marine Solutions
          </h2>
          <p className="text-slate-200 text-sm">
            Delivering innovative marine and aquatic solutions for sustainable oceans, conservation, and healthy aquatic food systems worldwide.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#00B4D8] mb-2">Contact Us</h3>
          <div className="flex items-center gap-3 text-slate-200 hover:text-[#FFD166] transition-colors cursor-pointer">
            <MapPin className="text-[#00B4D8]" /> Bwinila, Morogoro
          </div>
          <div className="flex items-center gap-3 text-slate-200 hover:text-[#FFD166] transition-colors cursor-pointer">
            <Mail className="text-[#00B4D8]" /> info@sufifa.org.tz
          </div>
          <div className="flex items-center gap-3 text-slate-200 hover:text-[#FFD166] transition-colors cursor-pointer">
            <Globe2 className="text-[#00B4D8]" /> www.sufifa.org.tz
          </div>
          <div className="flex items-center gap-3 text-slate-200 hover:text-[#FFD166] transition-colors cursor-pointer">
            <Phone className="text-[#00B4D8]" /> +1 555 123 345
          </div>
        </div>

        {/* Newsletter / Social Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#00B4D8] mb-2">Newsletter</h3>
          <p className="text-slate-200 text-sm mb-2">
            Subscribe to get updates on our projects and marine conservation tips.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-1 p-3 rounded-l-full bg-white/10 placeholder:text-slate-300 text-white focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
            />
            <button
              onClick={handleSubscribe}
              className="bg-[#00B4D8] px-6 py-3 rounded-r-full font-semibold hover:bg-[#0096c7] transition-colors"
            >
              Subscribe
            </button>
          </div>

          <h3 className="text-xl font-semibold text-[#00B4D8] mt-6 mb-2">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="bg-[#00B4D8]/20 p-3 rounded-full hover:bg-[#00B4D8]/50 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987H7.898v-2.892h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.772-1.63 1.563v1.875h2.773l-.443 2.892h-2.33v6.987C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <a href="#" className="bg-[#00B4D8]/20 p-3 rounded-full hover:bg-[#00B4D8]/50 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.868 9.868 0 01-3.127 1.195 4.916 4.916 0 00-8.38 4.482 13.944 13.944 0 01-10.125-5.145 4.916 4.916 0 001.523 6.573 4.903 4.903 0 01-2.229-.616v.061a4.918 4.918 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.918 4.918 0 004.588 3.417A9.867 9.867 0 010 19.54a13.933 13.933 0 007.548 2.212c9.057 0 14.01-7.514 14.01-14.036 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z"/></svg>
            </a>
          </div>

          <p className="text-slate-400 text-xs mt-4">
            &copy; {new Date().getFullYear()} Marine Solutions. All rights reserved.
          </p>
        </div>

      </div>

      {/* Decorative Gradient */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#00B4D8] via-[#0096c7] to-[#FFD166] opacity-30"></div>
    </footer>
  );
};

export default Footer;
