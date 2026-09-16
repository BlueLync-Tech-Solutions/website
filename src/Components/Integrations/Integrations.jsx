// import { Link } from 'react-router-dom';
// import titleShape from '/images/sub-title-shape.png';
// import { BsArrowRight } from 'react-icons/bs';
// import OnScrollCounter from '../Pricing/OnScrollCounter';
// import integrationImg from '/images/integration-thumb.png';
// // import integrationShape from '/images/integration-hand.png';
// // import integrationShape2 from '/images/integration-star.png';
// // import integrationShape3 from '/images/integration-dot.png';
// // import arrowShape from '/images/arrow-shape.png';

// const Integrations = () => {
//   return (
// <section
//   className="relative overflow-hidden py-10 flex items-center z-10"
// >
//       <div className='Container'>
//         <div className='grid grid-cols-1 gap-12 lg:gap-0 lg:grid-cols-2 items-center'>
//           <div>
//             <h5 className='flex items-center gap-2 font-Rajdhani text-[30px] font-bold text-[#0D47A1] uppercase'>
//               <img
//                 src={titleShape}
//                 draggable={false}
//                 alt='Shape'
//               />{' '}
//               Integrations
//             </h5>
//             <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-[#0D47A1] mt-[14px] mb-4 text-[#0D47A1] ' >
//               Transform Your Website i xc xcnto a<br /> Revenue-Generating Machine
//               <br /> Achieve Online Success
//             </h1>
//             {/* <div className='grid grid-cols-1 gap-7 sm:gap-0 sm:grid-cols-2 border-t border-HeadingColor-0 border-opacity-10 pt-8 mt-7 mr-4 xl:mr-8'>
//               <div>
//                 <div className='flex items-start gap-2 -ml-[6px]'>
//                   <div className='text-PrimaryColor-0 inline-block'>
//                     <BsArrowRight className='-rotate-90 inline-block text-[26px] md:text-[38px]' />
//                   </div>
//                   <div className='flex items-center -mt-1 md:-mt-3'>
//                     <div className='font-Rajdhani font-semibold text-[#0D47A1] text-4xl md:text-[60px] leading-10'>
//                       <OnScrollCounter
//                         start={0}
//                         end={86}
//                         duration={1000}
//                       />
//                     </div>
//                     <h6 className='font-Rajdhani font-semibold text-[#0D47A1] text-4xl md:text-[60px] leading-10'>
//                       %
//                     </h6>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div className='flex items-start gap-2 -ml-[6px]'>
//                   <div className='text-PrimaryColor-0 inline-block'>
//                     <BsArrowRight className='-rotate-90 inline-block text-[26px] md:text-[38px]' />
//                   </div>
//                   <div className='flex items-center -mt-1 md:-mt-3'>
//                     <div className='font-Rajdhani font-semibold text-[#0D47A1] text-4xl md:text-[60px] leading-10'>
//                       <OnScrollCounter
//                         start={0}
//                         end={98}
//                         duration={1000}
//                       />
//                     </div>
//                     <h6 className='font-Rajdhani font-semibold text-[#0D47A1] text-4xl md:text-[60px] leading-10'>
//                       %
//                     </h6>
//                   </div>
//                 </div>
//               </div>
//             </div> */}
//             <div className='flex items-center gap-16 mt-11'>
//               <Link
//                 to={'/about3'}
//                 className='inline-block'
//               >
//                 <button className='primary-btn' >
//                   {`Learn More`}
//                   <span className='icon-style'>
//                     <svg
//                       className='qodef-svg--custom-arrow qodef-m-arrow inline-block h-[10px] w-auto transition-all duration-500'
//                       xmlns='http://www.w3.org/2000/svg'
//                       stroke='CurrentColor'
//                       width='14.2'
//                       height='14.2'
//                       viewBox='0 0 14.2 14.2'
//                     >
//                       <g>
//                         <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
//                         <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
//                       </g>
//                       <g>
//                         <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
//                         <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
//                       </g>
//                     </svg>
//                   </span>
//                 </button>
//               </Link>
//               <div>
//               </div>
//             </div>
//           </div>
//           <div className='inline-block relative'>
//             <div className='flex lg:justify-end'>
//               <img
//                 src={integrationImg}
//                 draggable={false}
//                 alt='Image'
//                 className='relative z-10 rotate-45 md:rotate-0 lg:rotate-[25deg] xl:rotate-[18deg] 2xl:rotate-12 3xl:rotate-0'
//               />
//             </div>

//           </div>
//         </div>
//       </div>

//     </section>
//   );
// };

// export default Integrations;

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import titleShape from "/images/sub-title-shape.png";
import integrationImg from "/images/integration-thumb.png";

import {
  FaArrowRight,
  FaCheck,
  FaCloud,
  FaDatabase,
  FaPlug,
  FaRobot,
} from "react-icons/fa6";

import { HiOutlineSparkles, HiOutlineCpuChip } from "react-icons/hi2";

const Integrations = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-24">
      {/* =====================================================
          BACKGROUND AI GRID
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(#0D47A1 1px, transparent 1px),
            linear-gradient(90deg, #0D47A1 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
        }}
      />

      {/* =====================================================
          SOFT GLOWS
      ====================================================== */}

      <motion.div
        className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#80d8ff]/30 blur-[120px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#7c4dff]/10 blur-[130px]"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="Container relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* AI BADGE */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
              }}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#0D47A1]/10 bg-white/50 px-5 py-2.5 shadow-sm backdrop-blur-xl"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0D47A1] text-white">
                <HiOutlineSparkles className="text-sm" />
              </span>

              <span className="font-Rajdhani text-[10px] font-bold uppercase tracking-[0.25em] text-[#0D47A1]">
                Connected Intelligence
              </span>

              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
            </motion.div>

            {/* SMALL TITLE */}

            <div className="mb-4 flex items-center gap-3">
              <img src={titleShape} draggable={false} alt="Shape" />

              <span className="font-Rajdhani text-[25px] font-bold uppercase tracking-wide text-[#0D47A1]">
                Integrations
              </span>
            </div>

            {/* MAIN HEADING */}

            <h1 className="font-Rajdhani text-[36px] font-bold leading-[1.08] text-[#0D47A1] sm:text-[44px] md:text-[50px] lg:text-[45px] xl:text-[52px]">
              One Connected Ecosystem.
              <span className="block bg-gradient-to-r from-[#0D47A1] via-[#1976D2] to-[#00695C] bg-clip-text text-transparent">
                Unlimited Possibilities.
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p className="mt-6 max-w-[650px] font-Nunito text-[15px] leading-7 text-[#0D47A1]/70 md:text-[17px]">
              Break down silos and create a connected enterprise with secure, scalable integration solutions. We help organizations unify systems, streamline operations, and unlock the full value of their data through intelligent connectivity.
            </p>

            {/* =================================================
                CAPABILITY CHIPS
            ================================================== */}

            <div className="mt-7 flex flex-wrap gap-3">
              {[
                {
                  icon: <FaPlug />,
                  text: "API Integration",
                },
                {
                  icon: <FaCloud />,
                  text: "Cloud Connected",
                },
                {
                  icon: <FaDatabase />,
                  text: "Data Connected",
                },
                {
                  icon: <FaRobot />,
                  text: "AI Ready",
                },
              ].map((item) => (
                <motion.div
                  key={item.text}
                  whileHover={{
                    y: -3,
                  }}
                  className="flex items-center gap-2 rounded-full border border-[#0D47A1]/10 bg-white/50 px-4 py-2.5 shadow-sm backdrop-blur-md"
                >
                  <span className="text-[#0D47A1]">{item.icon}</span>

                  <span className="font-Rajdhani text-[10px] font-bold uppercase tracking-wider text-[#0D47A1]/70">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* =================================================
                AI BENEFITS
            ================================================== */}

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Enterprise-Wide System Integration",
                "Secure API-Driven Connectivity",
                "Automated Business Processes",
                "Enhanced Operational Efficiency",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-50">
                    <FaCheck className="text-[9px] text-green-600" />
                  </span>

                  <span className="font-Nunito text-[13px] text-[#0D47A1]/70">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* =================================================
                CTA
            ================================================== */}

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link to="/About-Us" className="group inline-flex">
                <button
                  type="button"
                  className="flex items-center gap-3 rounded-full bg-[#0D47A1] px-7 py-4 font-Rajdhani text-sm font-bold text-white shadow-[0_12px_30px_rgba(13,71,161,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1565C0] hover:shadow-[0_18px_40px_rgba(13,71,161,0.25)]"
                >
                  Learn More
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                    <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
              </Link>

              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />

                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>

                <span className="font-Rajdhani text-[10px] font-bold uppercase tracking-[0.15em] text-[#0D47A1]/50">
                  Integration Ready
                </span>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT AI VISUAL
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex min-h-[480px] items-center justify-center"
          >
            {/* =================================================
                ORBIT SYSTEM
            ================================================== */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[400px] w-[400px] rounded-full border border-[#0D47A1]/10"
            />

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[320px] w-[320px] rounded-full border border-dashed border-[#0D47A1]/10"
            />

            {/* =================================================
                CONNECTION DOTS
            ================================================== */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[400px] w-[400px]"
            >
              <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[#0D47A1] shadow-[0_0_15px_rgba(13,71,161,0.5)]" />

              <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#1976D2] shadow-[0_0_15px_rgba(25,118,210,0.5)]" />

              <div className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#00695C] shadow-[0_0_15px_rgba(0,105,92,0.5)]" />

              <div className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#7C4DFF] shadow-[0_0_15px_rgba(124,77,255,0.5)]" />
            </motion.div>

            {/* =================================================
                IMAGE CONTAINER
            ================================================== */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 flex h-[300px] w-[300px] items-center justify-center rounded-[50px] border border-white/80 bg-white/50 shadow-[0_30px_80px_rgba(13,71,161,0.15)] backdrop-blur-xl md:h-[350px] md:w-[350px]"
            >
              {/* IMAGE GLOW */}

              <div className="absolute inset-10 rounded-full bg-[#38BDF8]/20 blur-[70px]" />

              {/* IMAGE */}

              <img
                src={integrationImg}
                draggable={false}
                alt="AI Integration"
                className="relative z-10 w-[80%] object-contain drop-shadow-[0_25px_25px_rgba(13,71,161,0.18)]"
              />

              {/* CENTER CORE */}

              <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/80 bg-white/85 px-4 py-2 shadow-lg backdrop-blur-md">
                <HiOutlineCpuChip className="text-[#0D47A1]" />

                <span className="font-Rajdhani text-[9px] font-bold uppercase tracking-[0.18em] text-[#0D47A1]">
                  Connected AI Core
                </span>

                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
              </div>
            </motion.div>

            {/* =================================================
                FLOATING CARD 1
            ================================================== */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-0 top-[12%] z-20 hidden rounded-2xl border border-white/80 bg-white/75 p-4 shadow-xl backdrop-blur-xl sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0D47A1]/10 text-[#0D47A1]">
                  <FaPlug />
                </div>

                <div>
                  <p className="font-Rajdhani text-[9px] font-bold uppercase tracking-wider text-[#0D47A1]/45">
                    APIs
                  </p>

                  <p className="font-Rajdhani text-sm font-bold text-[#0D47A1]">
                    Connected
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                FLOATING CARD 2
            ================================================== */}

            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[13%] right-0 z-20 hidden rounded-2xl border border-white/80 bg-white/75 p-4 shadow-xl backdrop-blur-xl sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <FaCheck />
                </div>

                <div>
                  <p className="font-Rajdhani text-[9px] font-bold uppercase tracking-wider text-[#0D47A1]/45">
                    Status
                  </p>

                  <p className="font-Rajdhani text-sm font-bold text-[#0D47A1]">
                    AI Ready
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                FLOATING CARD 3
            ================================================== */}

            <motion.div
              animate={{
                x: [0, 6, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[4%] top-[8%] z-20 hidden rounded-full border border-white/80 bg-white/70 px-4 py-2 shadow-lg backdrop-blur-xl lg:flex"
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />

                <span className="font-Rajdhani text-[9px] font-bold uppercase tracking-widest text-[#0D47A1]">
                  Live Integration
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM SYSTEM BAR
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-12"
        >
          <div className="flex flex-col items-center justify-between gap-5 rounded-[24px] border border-[#0D47A1]/10 bg-white/35 p-5 shadow-sm backdrop-blur-xl md:flex-row md:px-7">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0D47A1] text-white">
                <HiOutlineSparkles />
              </div>

              <div>
                <p className="font-Rajdhani text-[9px] font-bold uppercase tracking-[0.2em] text-[#0D47A1]/45">
                  Integration Platform
                </p>

                <p className="font-Rajdhani text-[17px] font-bold text-[#0D47A1]">
                  One connected ecosystem for your business.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {["Cloud", "API", "Data", "AI"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#0D47A1]/10 bg-white/50 px-4 py-2 font-Rajdhani text-[9px] font-bold uppercase tracking-wider text-[#0D47A1]/60"
                >
                  ✓ {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;
