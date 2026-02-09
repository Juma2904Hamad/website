"use client";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RiArrowRightUpLine } from "react-icons/ri";

const slides = [
  { img: "/assets/img/img1.jpeg", title: "From Monoculture to Multi-Benefit", desc: "Turning Cambodian Rice Fields into Multi-Benefit Ecosystems" },
  { img: "/assets/img/img2.jpg", title: "Playing to Learn", desc: "Engaging Fish Farmer Communities in Antimicrobial Stewardship" },
  { img: "/assets/img/img3.jpg", title: "Artemia-Integrated Systems for Strengthening Coastal Aquaculture", desc: "" },
  { img: "/assets/img/img4.avif", title: "Why Africa’s growing aquaculture sector is worth investing in", desc: "" },
  { img: "/assets/img/img5.jpg", title: "WorldFish Honoured by FAO for Technical Advances in Sustainable Aquatic Food Systems", desc: "" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => setCurrent(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full relative">
            <img
              src={`${slide.img}?auto=format&fit=crop&w=1920&q=80`}
              className="w-full h-full object-cover"
              alt={slide.title}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-24">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-white drop-shadow-lg relative inline-block">
                {slide.title}
                <span className="absolute left-1/2 -bottom-2 h-1.5 w-16 md:w-24 lg:w-28 bg-teal-400 rounded-full -translate-x-1/2"></span>
              </h1>
              {slide.desc && (
                <p className="text-sm md:text-lg lg:text-2xl max-w-3xl text-gray-200 mt-4 md:mt-6 leading-relaxed">
                  {slide.desc}
                </p>
              )}
              <button className="group mt-4 md:mt-6 px-6 md:px-8 py-2 md:py-3 flex items-center gap-3 md:gap-4 rounded-full font-extrabold text-white text-[12px] md:text-sm uppercase tracking-wide 
                bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500
                transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/50 cursor-pointer relative overflow-hidden">
                Explore Now
                <span className="ml-2 w-6 h-6 flex items-center justify-center rounded-full bg-white text-teal-700 transition-all duration-300 
                  group-hover:translate-x-1 group-hover:bg-teal-700 group-hover:text-white">
                  <RiArrowRightUpLine className="text-xl rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-all duration-300 group-hover:opacity-20"></span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="group absolute top-1/2 left-3 md:left-5 -translate-y-1/2 p-2 md:p-3 rounded-full bg-white/20 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-teal-700 hover:via-cyan-700 hover:to-teal-800 cursor-pointer"
      >
        <ChevronLeft className="text-white" size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="group absolute top-1/2 right-3 md:right-5 -translate-y-1/2 p-2 md:p-3 rounded-full bg-white/20 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-teal-700 hover:via-cyan-700 hover:to-teal-800 cursor-pointer"
      >
        <ChevronRight className="text-white" size={20} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 md:bottom-8 w-full flex justify-center gap-2 md:gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 w-2.5 md:h-3 md:w-3 rounded-full cursor-pointer transition-transform ${
              current === index ? "bg-white scale-110" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
