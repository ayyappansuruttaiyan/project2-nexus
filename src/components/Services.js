import React from "react";
import { BsArrowUpRight } from "react-icons/bs"; // react icons
import { motion } from "framer-motion"; //motion
import { fadeIn } from "../variants";

// services data
const services = [
  {
    name: "Software Development",
    desctiption:
      "Crafting scalable and efficient software solutions that elevate your business operations.",
    link: "Learn More",
  },
  {
    name: "AI & Machine Learning",
    desctiption:
      "Harnessing the power of artificial intelligence to bring intelligent automation and insights to your business processes.",
    link: "Learn More",
  },
  {
    name: "Cybersecurity",
    desctiption:
      "Safeguarding your digital presence with robust cybersecurity measures.",
    link: "Learn More",
  },
  {
    name: "Web & App Development:",
    desctiption:
      "Building responsive and dynamic web and mobile applications that captivate your audience.",
    link: "Learn More",
  },
  {
    name: "Cloud Solutions: :",
    desctiption:
      "Seamlessly transitioning your business to the cloud for enhanced flexibility and scalability.",
    link: "Learn More",
  },
];
const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image*/}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            className="flex-1 lg:bg-services lg:bg-bottom lg:bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6"> Our Services:</h2>
            <h3 className=" h5 max-w-[455px] mb-16">
              Fueling Techy Software is an unwavering commitment to deliver
              software excellence. Our team of brilliant minds, seasoned
              developers, and tech enthusiasts collaborates seamlessly to craft
              services that transcend expectations. From software development to
              cybersecurity, experience unparalleled solutions tailored for your
              success.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            className="flex-1"
          >
            {/* services list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, desctiption, link } = service;
                return (
                  <div
                    key={index}
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className=" font-secondary leading-tight">
                        {desctiption}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                        href="/"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a className="text-gradient text-sm" href="/">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
