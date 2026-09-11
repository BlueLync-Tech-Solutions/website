import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutThumb from "/images/left-img-1.png";
// import aboutThumb2 from "/images/about-1.png";
import titleShape from "/images/sub-title-shape.png";
import itemIcon from "/images/tam1.png";
import itemIcon2 from "/images/terget-1.png";
import itemIcon3 from "/images/time.png";
import itemIcon4 from "/images/message.png";
// import arrowShape from "/images/arrow-shape.png";
// import { FaRegLightbulb } from "react-icons/fa";

const About = () => {
  return (
    <section className="-mt-[3px] sm:-mt-[5px] ">
      <div
        className="w-full h-[8px] bg-center bg-cover"
        style={{
          backgroundImage: "url('../images/waves.png')",
        }}
      ></div>
      <div className="w-full bg-[#ffc27f] pb-[15px]">
        <div className="Container relative z-10 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* Left Section - Image & Animated Card */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-center"
            >
              <motion.img
                src={aboutThumb}
                alt="About Visual"
                className="w-full rounded-2xl shadow-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
            {/* </motion.div> */}

            {/* Right Section - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-3">
                <img src={titleShape} alt="Shape" />
                <h5 className="font-Rajdhani text-[#0D47A1] text-[30px] uppercase font-bold">
                  About Us
                </h5>
              </div>

              <h2 className="font-Rajdhani font-bold text-3xl sm:text-4xl md:text-5xl text-[#0D47A1] mb-4 leading-snug">
                We Transform Ideas into <br /> Intelligent Digital Realities
              </h2>

              <p className="font-Nunito text-[#1A237E] text-base sm:text-lg mb-6 leading-relaxed">
                At BlueLync, we don’t just build technology — we craft
                experiences. From startups to enterprises, our mission is to
                empower brands with smart digital ecosystems that evolve, adapt,
                and inspire.
              </p>

              <p className="font-Nunito text-[#1A237E] text-base sm:text-lg mb-8 leading-relaxed">
                We bring together passionate engineers, designers, and
                strategists who thrive on innovation, crafting solutions that
                drive measurable impact and sustainable digital growth.
              </p>

              {/* Animated List */}
              <motion.ul
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10"
                initial="hidden"
                whileInView="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.2 } },
                }}
                viewport={{ once: true }}
              >
                {[
                  { icon: itemIcon, text: "Full-Cycle Product Development" },
                  { icon: itemIcon2, text: "Strategic Tech Consulting" },
                  { icon: itemIcon3, text: "Next-Gen Cloud Solutions" },
                  { icon: itemIcon4, text: "24/7 Client Partnership" },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-4"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <img src={item.icon} alt="icon" className="w-10 h-10" />
                    <h5 className="font-Rajdhani font-semibold text-lg text-[#0D47A1]">
                      {item.text}
                    </h5>
                  </motion.li>
                ))}
              </motion.ul>

              {/* CTA */}
              <div className="flex items-center gap-10">
                <Link to="/About-Us">
                  <motion.button
                    className="px-6 py-3 bg-[#1565C0] text-white font-semibold rounded-full shadow-md hover:bg-[#0D47A1] transition-all flex items-center gap-2"
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    Learn More
                    <span className="inline-block transform group-hover:translate-x-2 transition-all">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="white"
                        width="16"
                        height="16"
                        viewBox="0 0 14.2 14.2"
                      >
                        <path d="M13.2 9V1h-8M13.4.8.7 13.5" />
                      </svg>
                    </span>
                  </motion.button>
                </Link>
                {/* <motion.img
                src={arrowShape}
                alt="Shape"
                className="hidden sm:block animate-bounce-slow"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              /> */}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
