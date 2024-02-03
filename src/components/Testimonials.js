import { Carousel } from "@material-tailwind/react";
import { motion } from "framer-motion";
import feedbackImg1 from "../assets/feedback/feedback1.jpg";
import feedbackImg2 from "../assets/feedback/feedback2.jpg";
import feedbackImg3 from "../assets/feedback/feedback3.jpg";
import feedbackImg4 from "../assets/feedback/feedback4.jpg";
import feedbackImg5 from "../assets/feedback/feedback5.jpg";
import { fadeIn } from "../variants";
const testimonials = [
  {
    image: feedbackImg1,
    name: "Sophia R",
    designation: "CEO of InnovateTech Corp",
    message:
      "Working with Techy Software has been a game-changer for our company. Their innovative software solutions catapulted our digital infrastructure to new heights. The seamless integration of AI and their client-centric approach sets them apart. I highly recommend Techy Software for any tech endeavors!",
  },
  {
    image: feedbackImg2,
    name: "Alex M",
    designation: "Head of IT Security at SecureNet Solutions",
    message:
      "In the ever-evolving landscape of cybersecurity, Techy Software stands out as a reliable partner. Their commitment to security assurance is unparalleled. The bespoke solutions they crafted for our network have significantly fortified our digital defenses. We trust Techy Software to keep us ahead in the cybersecurity game.",
  },
  {
    image: feedbackImg3,
    name: "Emily T",
    designation: "Founder of FutureApps Startups",
    message:
      "As a startup founder, finding a tech partner with the right expertise and dedication was crucial. Techy Software not only delivered cutting-edge software but also played a pivotal role in shaping our tech strategy. Their team's tech mastery and forward-thinking approach have been instrumental in our success.",
  },
  {
    image: feedbackImg4,
    name: "David H",
    designation: "Director of IT Operations at Quantum Innovations",
    message:
      "I've had the pleasure of collaborating with Techy Software on multiple projects, and each experience has been exceptional. Their software development prowess is matched only by their commitment to quality. Their future-ready solutions have consistently exceeded our expectations. Techy Software is a trusted ally in the tech landscape.",
  },
  {
    image: feedbackImg5,
    name: "Linda C",
    designation: "CTO of DataSphere Analytics",
    message:
      "In the world of data analytics, precision and speed are paramount. Techy Software delivered on both fronts with their powerful AI and machine learning solutions. The results were transformative. Our data analysis capabilities reached new heights, thanks to Techy Software's expertise and forward-thinking approach. Highly recommended!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.5 }}
          className="h2 text-accent text-center"
        >
          Testimonials
        </motion.h2>
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-[50%]"
        >
          <Carousel
            className="rounded-xl"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            {testimonials &&
              testimonials.map((testimonial, index) => {
                const { image, name, designation, message } = testimonial;
                return (
                  <div key={index} className="  py-10 px-20 ">
                    <img
                      src={image}
                      alt="image1"
                      className="h-[120px] w-[120px] shadow-md ring-2 ring-gray-400 object-cover rounded-full mx-auto hover:scale-75 transition-all duration-200"
                    />
                    <h1 className="text-4xl font-medium text-center text-pink-950 mt-2 mx-2 text-accent">
                      {name}
                    </h1>
                    <h3 className=" text-md text-white/50  text-center mt-2  pb-5 ">
                      {designation}
                    </h3>
                    <p className=" text-center">
                      <span className="text-3xl"> '' </span>
                      {message}
                      <span className="text-3xl"> '' </span>
                    </p>
                  </div>
                );
              })}
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
