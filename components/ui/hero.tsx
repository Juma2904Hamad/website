"use client";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RiArrowRightUpLine } from "react-icons/ri";

const slides = [
  {
    img: "/assets/img/img1.jpeg",
    title: "From Monoculture to Mult-Benefit",
    desc: "Turning Cambodian Rice Fields into Multi-Benefit Ecosystems",
  },
  {
    img: "/assets/img/img2.jpg",
    title: "Playing to Learn",
    desc: "Engaging Fish Farmer Communities and Practitioners in Antimicrobial Stewardship",
  },
   {
    img: "/assets/img/img3.jpg",
    title: "Artemia-Integrated Systems for Strengthening Coastal Aquaculture",
    desc: "",
  },
   {
    img: "/assets/img/img4.avif",
    title: "Why Africa’s growing aquaculture sector is worth investing in",
    desc: "",
  },

  {
    img: "/assets/img/img5.jpg",
    title: "WorldFish Honoured by FAO for Technical Advances in Sustainable Aquatic Food Systems",
    desc: "",
  },
  
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrent(prev => (prev === 0 ? slides.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));

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
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-6">
              
              {/* Title */}
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg relative inline-block">
                {slide.title}
                {/* Centered underline */}
                <span className="absolute left-1/2 -bottom-3 h-1.5 w-20 md:w-28 bg-teal-400 rounded-full -translate-x-1/2"></span>
              </h1>

              {/* Paragraph */}
              <p className="text-lg md:text-2xl max-w-3xl text-gray-200 mt-6 text-center leading-relaxed">
                {slide.desc}
              </p>

              {/* Explore Now Button */}
              <button className="group mt-6 px-7 py-3 flex items-center gap-3 rounded-full font-semibold text-white bg-teal-700 transition-all duration-300 hover:bg-gradient-to-r hover:from-teal-700 hover:via-cyan-700 hover:to-teal-800 hover:scale-105 hover:shadow-lg hover:shadow-cyan-900/30 cursor-pointer">
                Explore Now
                <RiArrowRightUpLine className="text-xl rotate-45 transition-transform duration-300 group-hover:rotate-0 group-hover:translate-x-1" />
              </button>

            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="group absolute top-1/2 left-5 -translate-y-1/2 p-3 rounded-full bg-white/20 
        transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-teal-700
        hover:via-cyan-700 hover:to-teal-800 cursor-pointer"
      >
        <ChevronLeft className="text-white" size={25} />
      </button>

      <button
        onClick={nextSlide}
        className="group absolute top-1/2 right-5 -translate-y-1/2 p-3 rounded-full bg-white/20  
        transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r 
        hover:from-teal-700 hover:via-cyan-700 hover:to-teal-800 cursor-pointer"
      >
        <ChevronRight className="text-white" size={25} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 w-full flex justify-center gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full cursor-pointer transition ${
              current === index ? "bg-white scale-110" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
