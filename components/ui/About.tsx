"use client";

import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Eye,
  ShieldCheck,
  Target,
  Fish,
  MapPin,
  Mail,
  Phone,
  Globe2,
  Briefcase,
  User,
} from "lucide-react";
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";
import { div } from "framer-motion/client";

/* ---------------- Counter ---------------- */

type CounterProps = { end: number };
function Counter({ end }: CounterProps) {
  const [count, setCount] = useState(0);



  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const stepTime = 30;
    const increment = end / (duration / stepTime);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(counter);
  }, [end]);

  return <span>{count}</span>;
}


const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: ["easeOut"] } 
  }
};

export default function About() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(media.matches);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#001F3F] text-white mt-5">

      {/* Background Rays */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute w-full h-full bg-gradient-to-b from-[#00B4D8]/20 via-transparent to-[#001F3F]" />
        {[...Array(6)].map((_, i) => (
          <div key={i} className="absolute w-[4px] h-[500px] bg-white/10 blur-md ray" style={{ left: `${i * 16 + 10}%`, top: "-200px" }} />
        ))}
      </div>

      {/* Fish Animation */}
      {!reduceMotion && (
        <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div key={i} initial={{ x: -100, y: Math.random() * 400 }}
              animate={{ x: [-100, 1300] }}
              transition={{ repeat: Infinity, duration: 12 + i, ease: "linear" }}
              className="absolute">
              <Fish size={24} className="text-[#00B4D8] opacity-70" />
            </motion.div>
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6">

     
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="text-center -mt-13 mb-12">
          

           <h3 className="text-2xl md:text-3xl font-extrabold mb-6 relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] via-[#0096c7] to-[#00FFA3]">
              About Us
              <span className="absolute -bottom-2 left-1/2 w-20 h-1.5 md:w-28 bg-[#00B4D8] rounded-full -translate-x-1/2"></span>
            </h3>

          <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed text-justify">
          
            Leading the way in sustainable aquaculture, we empower communities and innovate practices to ensure healthy, resilient,
             and productive aquatic food systems worldwide.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10 mb-28">
          {[
            { title: "Our Vision", icon: <Eye size={42} className="text-[#00B4D8]" />, text: "To lead in transforming aquatic food systems through science, innovation, and sustainable practices for the benefit of people and the planet." },
            { title: "Quality Statement", icon: <ShieldCheck size={42} className="text-[#00B4D8]" />, text: "We uphold the highest standards of scientific excellence and operational integrity to deliver sustainable aquatic solutions that improve nutrition, livelihoods, and environmental stewardship worldwide." },
            { title: "Our Mission", icon: <Target size={42} className="text-[#00B4D8]" />, text: "To end hunger and advance sustainable development by 2030 through science and innovation to transform food, land and water systems with aquatic foods for healthier people and planet." },
          ].map((card, i) => (
            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" transition={{ delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-xl border border-[#00B4D8]/20 p-10 rounded-3xl hover:scale-105 transition-all">
              <div className="mb-5">{card.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed text-left">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* STRATEGY */}
        <div className="grid lg:grid-cols-2 gap-20 items-center -mt-10 mb-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="max-w-2xl">

            <h3 className="text-2xl md:text-3xl font-extrabold mb-6 relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] via-[#0096c7] to-[#00FFA3]">
              Our Strategy
              <span className="absolute -bottom-2 left-1/2 w-20 h-1.5 md:w-28 bg-[#00B4D8] rounded-full -translate-x-1/2"></span>
            </h3>
            
            <p className="text-slate-300 text-sm md:text-base leading-relaxed text-justify">

              <span className="font-semibold text-white">
               We provide holistic thinking and scientific evidence to transform aquatic food systems for healthy people and the planet.
                </span>
            </p>

            <div className="space-y-4 mt-6 text-slate-300 text-sm md:text-base leading-relaxed text-justify">
              <p>17 percent of all animal protein eaten comes from aquatic foods. They are also, bite for bite, among the best sources of micronutrients – the vitamins and minerals essential for health and wellbeing. The naturally low carbon footprint of aquatic foods also adds resilience to communities faced with the rising impacts of climate change.</p>
              <p>Aquatic foods are produced and caught with many different technologies and at many different scales – from household ponds and small-scale fishers to global trawler fleets that roam the oceans. Our strategy seeks to transform food systems to ensure equitable and sustainable access to food from water.</p>
              <p>Equity is important locally, so that women, young people and other marginalized groups are not deprived of the opportunity to use aquatic foods to enhance their health, wellbeing and economic lives. Global equity is equally important, so that low- and middle-income countries are able to use aquatic foods to develop their economies and support their people.</p>
            </div>

           <div className="mt-10">
              <Link
                href="/strategy"
                className="group relative inline-flex items-center gap-3 px-7 py-3 rounded-full bg-gradient-to-r from-[#00B4D8] via-cyan-600 to-[#0096c7] text-white font-extrabold text-sm uppercase tracking-wide shadow-lg 
                  transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/50 cursor-pointer overflow-hidden"
              >
                <span className="flex items-center gap-2 text-[13px]">
                  Explore Strategy
                  
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-[#00B4D8] transition-all duration-300 
                    group-hover:translate-x-1 group-hover:bg-[#00B4D8] group-hover:text-white">
                    <RiArrowRightUpLine className="text-[17px] rotate-0 group-hover:rotate-45 transition-transform duration-300" />
                  </span>
                </span>

                <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-all duration-300 group-hover:opacity-20"></span>
              </Link>
            </div>

          </motion.div>

          <motion.img src="/assets/img/img6.jpg"
            className="rounded-3xl shadow-2xl border border-[#00B4D8]/20 object-cover h-[420px] w-full" />
        </div>

     
      <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-center -mt-1 mb-20 px-4 md:px-0"
        >
          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-extrabold mb-6 relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] via-[#0096c7] to-[#00FFA3]">
            Global Availability
            <span className="absolute -bottom-2 left-1/2 w-20 h-1.5 md:w-28 bg-[#00B4D8] rounded-full -translate-x-1/2"></span>
          </h3>

          {/* Description */}
          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-justify mt-3 mb-3">
            Over the years, our aquatic projects have reached <span className="font-semibold text-white">communities across the globe</span>. 
            From Asia to Africa, we collaborate with <span className="font-semibold text-white">local stakeholders</span> and <span className="font-semibold text-white">international organizations</span> to drive <span className="font-semibold bg-gradient-to-r from-[#00B4D8] via-[#0096c7] to-[#00FFA3] bg-clip-text text-transparent">sustainable development</span>, enhance <span className="font-semibold text-white">livelihoods</span>, and ensure <span className="font-semibold bg-gradient-to-r from-[#00B4D8] via-[#0096c7] to-[#00FFA3] bg-clip-text text-transparent">food security</span> worldwide. 
            This map illustrates our <span className="font-semibold text-white">global presence</span> and impact.
          </p>

          {/* Map */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
            className="mx-auto mt-6 opacity-70 max-w-full"
            alt="Global Availability Map"
          />

        </motion.div>


        <div className="max-w-7xl mx-auto px-6 mb-28">

         <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="mb-20 text-center max-w-3xl mx-auto px-4 md:px-0"
        >

          <h3 className="text-3xl md:text-4xl font-extrabold mb-6 relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] via-[#0096c7] to-[#00FFA3]">
            Our Impact
            <span className="absolute -bottom-2 left-1/2 w-20 h-1.5 md:w-28 bg-[#00B4D8] rounded-full -translate-x-1/2"></span>
          </h3>

          {/* Paragraph with highlighted keywords */}
          <p className="text-slate-300 text-base md:text-lg leading-relaxed text-justify">
            Over the years, we have successfully delivered <span className="font-semibold text-white">marine and aquatic projects</span> across multiple countries, partnering with <span className="font-semibold text-white">local communities</span> and <span className="font-semibold text-white">global organizations</span> to promote <span className="font-semibold bg-gradient-to-r from-[#00B4D8] via-[#0096c7] to-[#00FFA3] bg-clip-text text-transparent">sustainable development</span>, improve <span className="font-semibold text-white">livelihoods</span>, and enhance <span className="font-semibold bg-gradient-to-r from-[#00B4D8] via-[#0096c7] to-[#00FFA3] bg-clip-text text-transparent">food security</span>. These numbers highlight our reach and commitment.
          </p>

        </motion.div>


        {/* Stats Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            [25, "Marine Projects"],
            [40, "Partners"],
            [15, "Years Experience"],
            [100, "Eco Commitment"],
          ].map(([n, l], i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-xl border border-[#00B4D8]/20 p-8 rounded-2xl hover:scale-105 transition-all"
            >
              <h4 className="text-4xl md:text-5xl font-bold text-[#FFD166]">
                <Counter end={Number(n)} />+
              </h4>
              <p className="text-slate-300 mt-2 text-justify">{l}</p>
            </motion.div>
          ))}
        </div>
      </div>


        {/* CONTACT */}
        <div className="grid lg:grid-cols-2 gap-12 mb-28">
          <motion.form variants={fadeUp} initial="hidden" whileInView="visible" className="bg-white/5 p-10 rounded-3xl border border-[#00B4D8]/20 flex flex-col gap-6">
            <h3 className="text-3xl font-bold text-[#00B4D8]">Get in Touch</h3>
            
            <input className="p-3 rounded-lg bg-white/10 border border-[#00B4D8]/30" placeholder="Your Name"/>
            <input className="p-3 rounded-lg bg-white/10 border border-[#00B4D8]/30" placeholder="Your Email"/>
            <textarea rows={5} className="p-3 rounded-lg bg-white/10 border border-[#00B4D8]/30" placeholder="Message"/>
          <button className="bg-gradient-to-r from-[#00B4D8] via-[#0096c7] to-[#00FFA3] py-3 px-6 md:px-8 rounded-full font-extrabold text-white text-sm uppercase tracking-wide shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#00B4D8]/50">
            Send Message
          </button>

          </motion.form>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col gap-4 bg-white/5 p-10 rounded-3xl border border-[#00B4D8]/20"
        >
       <h3 className="text-3xl font-bold text-[#00B4D8] mb-4">Contact Information</h3>

          
          {/* Location */}
          <div className="flex items-center gap-4 text-slate-200">
            <MapPin className="text-[#00B4D8]" /> Bwinila, Morogoro
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 text-slate-200">
            <Mail className="text-[#00B4D8]" /> info@sufifa.org.tz
          </div>

          {/* Website */}
          <div className="flex items-center gap-4 text-slate-200">
            <Globe2 className="text-[#00B4D8]" /> deomedes@sufifa.org.tz
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 text-slate-200">
            <Phone className="text-[#00B4D8]" /> +1 555 123 345
          </div>
        </motion.div>

        </div>

      </div>

    </section>
  );
}
