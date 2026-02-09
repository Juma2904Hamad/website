"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Coral Reef Restoration",
    desc: "Reviving damaged coral reefs sustainably.",
    details:
      "Our Coral Reef Restoration project focuses on reviving damaged coral reefs using sustainable methods, involving local communities and marine biologists to ensure long-term survival of reef ecosystems.",
    img: "/assets/img/pro1.jpeg",
    category: "Conservation",
  },
  {
    title: "Sustainable Fishing Initiative",
    desc: "Responsible fishing practices for local communities.",
    details:
      "We work with local fishermen to promote sustainable fishing practices, training them on eco-friendly nets, quotas, and monitoring fish stocks to protect marine biodiversity.",
    img: "/assets/img/pro2.jpg",
    category: "Technology",
  },
  {
    title: "Marine Conservation Tech",
    desc: "Using sensors to monitor and protect marine life.",
    details:
      "We deploy advanced sensors and AI-powered monitoring systems to track marine life, detect illegal fishing, and provide actionable data for conservation efforts.",
    img: "/assets/img/pro3.jpg",
    category: "Technology",
  },
  {
    title: "Ocean Cleanup Projects",
    desc: "Removing plastics and waste from oceans and shorelines.",
    details:
      "Our Ocean Cleanup initiative collects plastics and debris from the oceans, working with local volunteers and NGOs to reduce marine pollution and protect wildlife.",
    img: "/assets/img/pro4.jpeg",
    category: "Cleanup",
  },
];

const categories = ["All", "Conservation", "Technology", "Cleanup"];

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };
const modalFade = { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } };

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      className="relative overflow-hidden bg-[#001F3F] text-white py-20"
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-center -mt-10 mb-12"
        >
      
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6 relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] via-[#0096c7] to-[#00FFA3]">
                  Our Projects
              <span className="absolute -bottom-2 left-1/2 w-20 h-1.5 md:w-28 bg-[#00B4D8] rounded-full -translate-x-1/2"></span>
            </h3>
          <p className="text-white max-w-3xl mx-auto text-lg leading-relaxed">
            Explore our marine initiatives that promote sustainability, conservation, and innovative solutions for the ocean.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="flex justify-center gap-6 mb-10 flex-wrap"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-[#00B4D8] text-white shadow-lg"
                  : "bg-white/10 text-white hover:bg-[#00B4D8]/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: i * 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
              onClick={() => setActiveProject(i)}
            >
              <img
                src={`${project.img}?auto=format&fit=crop&w=800&q=80`}
                alt={project.title}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 transition-all duration-500 group-hover:bg-black/40">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-white text-sm">{project.desc}</p>
                <span className="text-sm text-[#00B4D8] mt-2">{project.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Blurs */}
      <span className="absolute top-10 left-10 w-24 h-24 rounded-full bg-[#00B4D8]/20 blur-3xl animate-pulse -z-10"></span>
      <span className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-[#005B96]/20 blur-3xl animate-pulse delay-1000 -z-10"></span>

      {/* Modal */}
      <AnimatePresence>
        {activeProject !== null && (
          <motion.div
            variants={modalFade}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          >
            <motion.div
              className="bg-[#001F3F] rounded-3xl overflow-hidden shadow-2xl max-w-3xl w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { duration: 0.3 } }}
              exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.2 } }}
            >
              <img
                src={`${projects[activeProject].img}?auto=format&fit=crop&w=1200&q=80`}
                alt={projects[activeProject].title}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4">{projects[activeProject].title}</h3>
                <p className="text-white/90 mb-4">{projects[activeProject].details}</p>
                <span className="text-sm text-[#00B4D8]">{projects[activeProject].category}</span>
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 bg-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#00B4D8]/80 transition"
                >
                  ✕
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Project;
