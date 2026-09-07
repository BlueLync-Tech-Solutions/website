// import titleShape from '/images/sub-title-shape.png';
// import shape from '/images/shape_About-Us.png';
// import HistoryCard from './HistoryCard';

// const historyData = [
//   {
//     id: 1,
//     historyTime: '2021',
//     historyTitle: 'Building Dreams, 2021',
//     historyDesc:
//       'Authoritatively disintermediate business to optimal web-readiness task vertical service timely human capital scale cross-platform materials and process-centric',
//   },
//   {
//     id: 2,
//     historyTime: '2022 - 2023',
//     historyTitle: 'Milestones and Growth, 2022 - 2023',
//     historyDesc:
//       'Authoritatively disintermediate business to optimal web-readiness task vertical service timely human capital scale cross-platform materials and process-centric',
//   },
//   {
//     id: 3,
//     historyTime: '2024 - 2025',
//     historyTitle: 'Present and Future Goals, 2024 - 2025',
//     historyDesc:
//       'Authoritatively disintermediate business to optimal web-readiness task vertical service timely human capital scale cross-platform materials and process-centric',
//   },
// ];

// const History = () => {
//   return (
//     <section className='bg-HeadingColor-0 py-16 md:py-20 lg:py-28 relative z-10'>
//       <div className='Container'>
//         <div className='relative'>
//           <h5 className='flex items-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
//             <img
//               src={titleShape}
//               draggable={false}
//               alt='Shape'
//               className='brightness-0 invert-[1]'
//             />{' '}
//             More About
//           </h5>
//           <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[36px] md:leading-[46px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[14px] mb-4'>
//             Trusted by Industry Leaders
//             <br /> Successful Softwares
//           </h1>
//           <img
//             src={shape}
//             draggable={false}
//             alt='Shape'
//             className='absolute right-14 top-0 animate-rotational hidden xl:block'
//           />
//         </div>
//         <div className='relative z-10 mt-12 space-y-7'>
//           {historyData.map(({ id, historyTime, historyTitle, historyDesc }) => {
//             return (
//               <div key={id}>
//                 <HistoryCard
//                   historyTime={historyTime}
//                   historyTitle={historyTitle}
//                   historyDesc={historyDesc}
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default History;


import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCode,
  FaRocket,
  FaBrain,
  FaCircleCheck,
} from "react-icons/fa6";
import { HiOutlineSparkles, HiOutlineCpuChip } from "react-icons/hi2";

import titleShape from "/images/sub-title-shape.png";
import shape from "/images/shape_About-Us.png";

const historyData = [
  {
    id: 1,
    year: "2021",
    label: "FOUNDATION",
    title: "Building Dreams",
    description:
      "Our journey began with a clear vision — combining technology, creativity and business understanding to create meaningful digital solutions.",
    icon: <FaCode />,
    number: "01",
  },
  {
    id: 2,
    year: "2022 — 2023",
    label: "EVOLUTION",
    title: "Milestones & Growth",
    description:
      "We expanded our capabilities across software engineering, cloud technologies, Microsoft solutions, automation and data-driven platforms.",
    icon: <FaRocket />,
    number: "02",
  },
  {
    id: 3,
    year: "2024 — 2025",
    label: "AI FUTURE",
    title: "Present & Future",
    description:
      "Moving toward an AI-first future by combining intelligent automation, modern engineering, cloud platforms and next-generation digital experiences.",
    icon: <FaBrain />,
    number: "03",
  },
];

const History = () => {
  return (
    <section className="relative overflow-hidden bg-[#07111F] py-20 md:py-28 lg:py-32">

      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(#60A5FA 1px, transparent 1px),
            linear-gradient(90deg, #60A5FA 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* =====================================================
          BIG AMBIENT GLOWS
      ====================================================== */}

      <div className="pointer-events-none absolute -left-[250px] top-[10%] h-[600px] w-[600px] rounded-full bg-[#0066FF]/10 blur-[160px]" />

      <div className="pointer-events-none absolute -right-[250px] bottom-[5%] h-[600px] w-[600px] rounded-full bg-[#00D9FF]/10 blur-[160px]" />

      {/* =====================================================
          DECORATIVE ORBIT
      ====================================================== */}

      <motion.div
        className="pointer-events-none absolute right-[7%] top-[5%] hidden h-[220px] w-[220px] rounded-full border border-blue-400/10 lg:block"
        animate={{ rotate: 360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute -top-1 left-1/2 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_15px_#60A5FA]" />
      </motion.div>

      <div className="Container relative z-10">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          {/* AI BADGE */}

          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-blue-400/15 bg-blue-400/[0.06] px-5 py-2.5 backdrop-blur-xl">

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]">

              <HiOutlineSparkles />

            </span>

            <span className="font-Rajdhani text-[10px] font-bold uppercase tracking-[0.3em] text-blue-200">
              Our Digital Evolution
            </span>

            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

          </div>

          {/* LABEL */}

          <div className="flex items-center gap-3">

            <img
              src={titleShape}
              draggable={false}
              alt="Shape"
              className="brightness-0 invert opacity-80"
            />

            <span className="font-Rajdhani text-lg font-bold uppercase tracking-[0.22em] text-blue-400">
              More About
            </span>

          </div>

          {/* TITLE */}

          <h1 className="mt-4 max-w-[850px] font-Rajdhani text-[40px] font-bold leading-[1] text-white sm:text-[48px] md:text-[60px]">

            Trusted by Industry Leaders.

            <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              Built for the intelligent future.
            </span>

          </h1>

          <p className="mt-6 max-w-[720px] font-Nunito text-[15px] leading-7 text-slate-400 md:text-[17px]">
            Every milestone has shaped our technology journey. From our
            foundation to our AI-driven future, we continue to transform
            ambitious ideas into intelligent digital solutions.
          </p>

        </motion.div>

        {/* =====================================================
            TIMELINE
        ====================================================== */}

        <div className="relative mt-20 md:mt-28">

          {/* CENTRAL LINE */}

          <div className="absolute bottom-0 left-[30px] top-0 hidden w-px bg-gradient-to-b from-transparent via-blue-500/40 to-transparent md:left-1/2 md:block" />

          {/* ANIMATED ENERGY */}

          <motion.div
            className="absolute left-1/2 top-0 hidden h-28 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-300 to-transparent md:block"
            animate={{
              y: ["-100%", "1100%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <div className="space-y-20 md:space-y-32">

            {historyData.map((item, index) => {

              const leftSide = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    y: 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                  }}
                  className="relative"
                >

                  {/* =================================================
                      DESKTOP
                  ================================================== */}

                  <div className="hidden items-center md:flex">

                    {/* LEFT SIDE */}

                    <div className={`w-1/2 ${leftSide ? "pr-20 text-right" : "order-2 pl-20 text-left"}`}>

                      <div className="mb-4">

                        <span className="font-Rajdhani text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-400">
                          {item.label}
                        </span>

                      </div>

                      <h2 className="font-Rajdhani text-[38px] font-bold leading-none text-white">
                        {item.title}
                      </h2>

                      <p className="mt-5 font-Nunito text-[14px] leading-7 text-slate-400">
                        {item.description}
                      </p>

                    </div>

                    {/* RIGHT SIDE CARD */}

                    <div className={`w-1/2 ${leftSide ? "order-2 pl-20" : "pr-20"}`}>

                      <motion.div
                        whileHover={{
                          y: -8,
                          scale: 1.015,
                        }}
                        className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] p-7 shadow-[0_25px_70px_rgba(0,0,0,0.25)] backdrop-blur-2xl"
                      >

                        {/* TOP SCAN LINE */}

                        <motion.div
                          className="absolute left-0 top-0 h-[2px] w-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                          animate={{
                            x: ["-100%", "250%"],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />

                        {/* GLOW */}

                        <div className="absolute -right-24 -top-24 h-52 w-52 rounded-full bg-blue-500/10 blur-[80px] transition-all duration-500 group-hover:bg-cyan-400/15" />

                        {/* CARD HEADER */}

                        <div className="relative flex items-center justify-between">

                          <div className="flex items-center gap-4">

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/15 bg-blue-500/10 text-blue-300 shadow-[0_0_25px_rgba(59,130,246,0.08)]">

                              {item.icon}

                            </div>

                            <div>

                              <span className="font-Rajdhani text-[9px] font-bold uppercase tracking-[0.25em] text-slate-500">
                                Milestone
                              </span>

                              <h3 className="font-Rajdhani text-xl font-bold text-white">
                                {item.label}
                              </h3>

                            </div>

                          </div>

                          <span className="font-Rajdhani text-4xl font-bold text-white/[0.05]">
                            {item.number}
                          </span>

                        </div>

                        {/* DIVIDER */}

                        <div className="my-7 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                        {/* YEAR */}

                        <div className="flex items-end justify-between">

                          <div>

                            <span className="font-Rajdhani text-[9px] font-bold uppercase tracking-[0.25em] text-slate-500">
                              Timeline
                            </span>

                            <div className="mt-1 font-Rajdhani text-[30px] font-bold text-blue-300">
                              {item.year}
                            </div>

                          </div>

                          <div className="flex items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/5 px-3 py-2">

                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34D399]" />

                            <span className="font-Rajdhani text-[9px] font-bold uppercase tracking-widest text-emerald-300/70">
                              Active
                            </span>

                          </div>

                        </div>

                      </motion.div>

                    </div>

                    {/* CENTER NODE */}

                    <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">

                      <motion.div
                        animate={{
                          scale: [1, 1.12, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="flex h-16 w-16 items-center justify-center rounded-full border border-blue-400/30 bg-[#07111F] shadow-[0_0_35px_rgba(59,130,246,0.25)]"
                      >

                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white">

                          <FaCircleCheck className="text-xs" />

                        </div>

                      </motion.div>

                    </div>

                  </div>

                  {/* =================================================
                      MOBILE
                  ================================================== */}

                  <div className="md:hidden">

                    <div className="relative ml-0 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">

                      <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-blue-500 via-cyan-400 to-transparent" />

                      <div className="flex items-center justify-between">

                        <div>

                          <span className="font-Rajdhani text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-400">
                            {item.label}
                          </span>

                          <h2 className="mt-2 font-Rajdhani text-2xl font-bold text-white">
                            {item.title}
                          </h2>

                        </div>

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">

                          {item.icon}

                        </div>

                      </div>

                      <div className="my-6 h-px bg-white/10" />

                      <p className="font-Nunito text-sm leading-7 text-slate-400">
                        {item.description}
                      </p>

                      <div className="mt-6 flex items-center justify-between">

                        <span className="font-Rajdhani text-2xl font-bold text-blue-300">
                          {item.year}
                        </span>

                        <FaArrowRight className="text-cyan-400" />

                      </div>

                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

        {/* =====================================================
            FUTURE AI PANEL
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-20"
        >

          <div className="relative overflow-hidden rounded-[32px] border border-blue-400/10 bg-gradient-to-r from-blue-500/[0.08] via-white/[0.035] to-cyan-400/[0.08] p-7 shadow-[0_25px_80px_rgba(0,0,0,0.2)] backdrop-blur-2xl md:p-9">

            {/* MOVING LINE */}

            <motion.div
              className="absolute left-0 top-0 h-[2px] w-1/4 bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
              animate={{
                x: ["-100%", "500%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <div className="flex flex-col items-center justify-between gap-7 md:flex-row">

              <div className="flex items-center gap-5">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-400/10 text-cyan-300">

                  <HiOutlineCpuChip className="text-3xl" />

                </div>

                <div>

                  <span className="font-Rajdhani text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500">
                    NEXT GENERATION
                  </span>

                  <h3 className="mt-1 font-Rajdhani text-2xl font-bold text-white">
                    The future is intelligent.
                  </h3>

                </div>

              </div>

              <div className="flex flex-wrap justify-center gap-2">

                {[
                  "AI",
                  "Cloud",
                  "Automation",
                  "Analytics",
                  "Innovation",
                ].map((item) => (

                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-Rajdhani text-[9px] font-bold uppercase tracking-wider text-slate-400"
                  >
                    ✓ {item}
                  </span>

                ))}

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default History;


// Avinash 999