import React from "react";
import Img1 from "../assets/portfolio-img.jpg";
import Img2 from "../assets/portfolio-img1.jpg";
import Img3 from "../assets/portfolio-img4.png";
import { motion } from "framer-motion"; //motion
import { fadeIn } from "../variants";

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">Our Latest Work.</h2>
              <p className="max-w-sm mb-16">
                Pulsating at the core of [Your Company Name] is an unyielding
                dedication to showcasing the epitome of digital brilliance. Our
                team, a synergy of inventive minds, seasoned craftsmen, and tech
                enthusiasts, collaborates seamlessly to unveil projects that
                exceed expectations. Explore a curated collection of our latest
                work, spanning the realms of software development, AI
                innovation, and cybersecurity. Immerse yourself in a showcase of
                unparalleled solutions, meticulously crafted for the triumph of
                our clients.
              </p>
              <button className="btn btn-sm">View all projects</button>
            </div>
            {/* image */}
            <div className=" group  relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className=" group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* images */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt="project1"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient text-sm">
                  Web & App Development
                </span>
              </div>
              {/* titile */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className=" text-3xl text-white">Project title</span>
              </div>
            </div>
          </motion.div>
          {/* project images */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            className=" flex-1 flex flex-col gap-y-10"
          >
            {/* image */}
            <div className=" group  relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className=" group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* images */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt="project1"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient text-sm">Cybersecurity</span>
              </div>
              {/* titile */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className=" text-3xl text-white">Project title</span>
              </div>
            </div>
            {/* image */}
            <div className=" group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className=" group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* images */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt="project1"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient text-sm">
                  AI & Machine Learning
                </span>
              </div>
              {/* titile */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className=" text-3xl text-white">Project title</span>
              </div>
            </div>
          </motion.div>
          {/* project images end */}
        </div>
      </div>
    </section>
  );
};

export default Work;
