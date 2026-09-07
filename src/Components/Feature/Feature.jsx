// import featureIcon from '/images/goggle.png';
// import featureIcon2 from '/images/facebook.png';
// import featureIcon3 from '/images/feature-icon23.png';
// import featureIcon4 from '/images/feature-icon24.png';
// import featureShape from '/';
// // import titleShape from '/images/sub-title-shape.png';
// import FeatureCard from './FeatureCard';
// import { GoArrowRight } from 'react-icons/go';

// const featureData = [
//   {
//     id: 1,
//     featureIcon: featureIcon,
//     featureTitle: 'Google Analytics',
//     featureDesc:
//       'Clients-focused data are centric energistically communicate into installed done.',
//     featureUrl: '/service',
//     featureBtnText: 'Details',
//     featureBtnIcon: <GoArrowRight />,
//   },
//   {
//     id: 2,
//     featureIcon: featureIcon2,
//     featureTitle: 'Mobile Apps Development',
//     featureDesc:
//       'Clients-focused data are centric energistically communicate into installed done.',
//     featureUrl: '/service',
//     featureBtnText: 'Details',
//     featureBtnIcon: <GoArrowRight />,
//   },
//   {
//     id: 3,
//     featureIcon: featureIcon3,
//     featureTitle: 'Website Design',
//     featureDesc:
//       'Clients-focused data are centric energistically communicate into installed done.',
//     featureUrl: '/service',
//     featureBtnText: 'Details',
//     featureBtnIcon: <GoArrowRight />,
//   },
//   {
//     id: 4,
//     featureIcon: featureIcon4,
//     featureTitle: 'Outsoursing',
//     featureDesc:
//       'Clients-focused data are centric energistically communicate into installed done.',
//     featureUrl: '/service',
//     featureBtnText: 'Details',
//     featureBtnIcon: <GoArrowRight />,
//   },
// ];

// // Home page Our Services Section **** AVinash

// const Feature = () => {
//   return (
//     // <section className='bg-[url("/images/servicer-bg.jpg")] bg-cover bg-center bg-no-repeat pt-28 sm:pt-32 lg:pt-[152px] pb-16 lg:pb-28 -mt-12 lg:-mt-9'>
//       // <section className='bg-[url("/images/servicer-bg.jpg")] bg-cover bg-center bg-no-repeat pt-10 sm:pt-14 lg:pt-20 pb-8 lg:pb-12 -mt-6 lg:-mt-4'>
//      <section
//   className="h-[500px] sm:h-[700px] md:h-[800px] lg:h-[650px] xl:h-[750px] flex items-center relative z-10 overflow-hidden"
//   style={{
//     backgroundSize: "100% 100%",
//     backgroundPosition: "0px 0px,0px 0px,0px 0px,0px 0px,0px 0px",
//     backgroundImage: `
//       radial-gradient(49% 81% at 45% 47%, #FFE20345 0%, #073AFF00 100%),
//       radial-gradient(113% 91% at 17% -2%, #a79d97ff 1%, #FF000000 99%),
//       radial-gradient(142% 91% at 83% 7%, #d7f58cff 1%, #FF000000 99%),
//       radial-gradient(142% 91% at -6% 74%, #f39fb7ff 1%, #FF000000 99%),
//       radial-gradient(142% 91% at 111% 84%, #FF7000FF 0%, #514414ff 100%)
//     `,
//   }}
// >
//      <div className='Container '>
//         <div className='relative text-center'>
//           {/* <h5 className='flex items-center justify-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-white uppercase'>
//             <img
//               src={titleShape}
//               draggable={false}
//               alt='Shape'
//               className='brightness-0 invert-[1]'
//             />{' '}
//             Features{' '}
//             <img
//               src={titleShape}
//               draggable={false}
//               alt='Shape'
//               className='rotate-180 brightness-0 invert-[1]'
//             />
//           </h5> */}
//           <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[14px] mb-4'>
//             {/* Grow Your Business in a short Time */} 
//             Our Services
//           </h1>
//           <div className='absolute top-0 right-0 2xl:-right-12 animate-bounce hidden lg:block'>
//             <img
//               src={featureShape}
//               draggable='false'
//               alt='Shape'
//             />
//           </div>
//         </div>
//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-7 relative z-10 mt-11'>
//           {featureData.map(
//             (
//               {
//                 id,
//                 featureIcon,
//                 featureTitle,
//                 featureDesc,
//                 featureUrl,
//                 featureBtnText,
//                 featureBtnIcon,
//               },
//               index
//             ) => {
//               return (
//                 <div
//                   key={id}
//                   className={`feature-box1 rounded-[10px] ${
//                     index === 0
//                       ? 'bg-[#f1f3ff]'
//                       : index === 1
//                       ? 'bg-white'
//                       : index === 2
//                       ? 'bg-[#e2f6ed]'
//                       : 'bg-[#fbf2ed]'
//                   } ${index % 2 === 1 ? 'mt-[42px]' : ''}`}
//                 >
//                   <FeatureCard
//                     featureIcon={featureIcon}
//                     featureTitle={featureTitle}
//                     featureDesc={featureDesc}
//                     featureUrl={featureUrl}
//                     featureBtnText={featureBtnText}
//                     featureBtnIcon={featureBtnIcon}
//                   />
//                 </div>
//               );
//             }
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Feature;

// import { motion } from "framer-motion";
// // import { GoArrowRight } from "react-icons/go";

// import featureIcon from "/images/cloud-with-cellphone-screen.png";
// import featureIcon2 from "/images/predictive.png";
// import featureIcon3 from "/images/cloud.png";
// import featureIcon4 from "/images/api-integration.png";

// const features = [
//   {
//     id: 1,
//     icon: featureIcon,
//     title: "Product Development",
//     desc: "Outsourcing IT management and maintenance, including network monitoring, data backup, cybersecurity, help desk support.",
//     animation: { y: [0, -15, 0] },
//   },
//   {
//     id: 2,
//     icon: featureIcon2,
//     title: "Data & Analytics",
//     desc: "Access to remote servers and infrastructure for data storage, application hosting, and scalable resources.",
//     animation: { rotate: [0, 10, -10, 0] },
//   },
//   {
//     id: 3,
//     icon: featureIcon3,
//     title: "Cloud Services",
//     desc: "Services for data storage, backup, integration, governance, and analytics to drive insights and informed decisions.",
//     animation: { x: [0, 10, -10, 0] },
//   },
//   {
//     id: 4,
//     icon: featureIcon4,
//     title: "API & Integration",
//     desc: "Custom software development and integration services to meet specific business needs.",
//     animation: { scale: [1, 1.1, 1] },
//   },
// ];

// const Feature = () => {
//   return (
//     <section
//       className="relative py-10 overflow-hidden"
//       style={{
//         background: "#80d8ff",
//       }}
//     >
//       <div className="Container relative z-10 text-center">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h5 className="text-[#0d47a1] uppercase font-bold tracking-widest text-xl mb-3">
//             Smart. Seamless. Scalable.
//           </h5>

//           <motion.h1
//             className="font-Rajdhani font-bold text-3xl sm:text-4xl md:text-5xl text-[#0d47a1] mb-4"
//             initial={{ scale: 0.9 }}
//             animate={{ scale: [1, 1.03, 1] }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           >
//             One Step for All Your Software Needs
//           </motion.h1>

//           <motion.p
//             className="text-[#1a237e] max-w-2xl mx-auto text-base sm:text-lg"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             We blend creativity, technology, and innovation to build products
//             that connect people and power digital evolution.
//           </motion.p>
//         </motion.div>

//         {/* Cards */}
//         <div
//           className="
//             grid grid-cols-1
//             sm:grid-cols-2
//             lg:grid-cols-4
//             gap-8
//             mt-10
//             bg-gradient-to-br
//             from-[#fff5ee]
//             via-[#ffe5d0]
//             to-[#ffd1a4]
//             p-10
//             rounded-3xl
//             shadow-inner
//           "
//         >
//           {features.map((item, index) => (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, y: 80 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.8,
//                 delay: index * 0.2,
//                 ease: "easeOut",
//               }}
//               viewport={{ once: true }}
//               whileHover={{
//                 scale: 1.06,
//                 y: -10,
//               }}
//               className="group p-8 rounded-2xl bg-white/80 border border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer backdrop-blur-md"
//             >
//               {/* Icon */}
//               <motion.div
//                 className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-gradient-to-br from-[#64b5f6] to-[#1e88e5] shadow-lg"
//                 animate={item.animation}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               >
//                 <img
//                   src={item.icon}
//                   alt={item.title}
//                   className="w-8 h-8 object-contain"
//                 />
//               </motion.div>

//               {/* Title */}
//               <motion.h3
//                 whileHover={{ y: -3 }}
//                 className="font-Rajdhani text-xl font-bold mb-3 text-[#0d47a1] group-hover:text-[#1565c0]"
//               >
//                 {item.title}
//               </motion.h3>

//               {/* Description */}
//               <motion.p
//                 whileHover={{ scale: 1.02 }}
//                 className="text-[#1a237e] text-sm leading-relaxed mb-6"
//               >
//                 {item.desc}
//               </motion.p>

//               {/* Link */}
//               <motion.a
//                 href="/service"
//                 whileHover={{ x: 5 }}
//                 className="flex items-center justify-center gap-2 text-[#0d47a1] font-bold"
//               >
//                 Learn More
//                 {/* <GoArrowRight size={20} /> */}
//               </motion.a>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Background Blur */}
//       <motion.div
//         className="absolute top-0 left-0 w-52 h-52 bg-[#bbdefb] rounded-full opacity-30 blur-3xl"
//         animate={{
//           x: [0, 100, -100, 0],
//           y: [0, 50, 0],
//         }}
//         transition={{
//           duration: 10,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       <motion.div
//         className="absolute bottom-0 right-0 w-72 h-72 bg-[#90caf9] rounded-full opacity-20 blur-3xl"
//         animate={{
//           x: [0, -100, 0],
//           y: [0, -50, 0],
//         }}
//         transition={{
//           duration: 12,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />
//     </section>
//   );
// };

// export default Feature;


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaArrowRight,
  FaCheck,
  FaCode,
  FaCloud,
  FaDatabase,
  FaPlug,
} from "react-icons/fa6";

import {
  HiOutlineSparkles,
  HiOutlineCpuChip,
  HiOutlineBolt,
} from "react-icons/hi2";

import featureIcon from "/images/cloud-with-cellphone-screen.png";
import featureIcon2 from "/images/predictive.png";
import featureIcon3 from "/images/cloud.png";
import featureIcon4 from "/images/api-integration.png";

// ============================================================
// DATA
// ============================================================

const features = [
  {
    id: 1,
    number: "01",
    icon: featureIcon,
    title: "Product Development",
    aiTitle: "AI-Powered Product Engineering",
    category: "BUILD",
    desc:
      "Transform ideas into intelligent digital products with modern architecture, scalable engineering and AI-ready experiences.",
    points: [
      "AI-ready application architecture",
      "Scalable product engineering",
      "Modern UX and digital experiences",
    ],
    iconComponent: <FaCode />,
    color: "#0D47A1",
  },

  {
    id: 2,
    number: "02",
    icon: featureIcon2,
    title: "Data & Analytics",
    aiTitle: "Predictive Intelligence",
    category: "INTELLIGENCE",
    desc:
      "Turn complex business data into meaningful insights using analytics, predictive intelligence and data-driven decision making.",
    points: [
      "Predictive analytics",
      "Business intelligence dashboards",
      "Data-driven decision support",
    ],
    iconComponent: <FaDatabase />,
    color: "#1565C0",
  },

  {
    id: 3,
    number: "03",
    icon: featureIcon3,
    title: "Cloud Services",
    aiTitle: "Intelligent Cloud Infrastructure",
    category: "CLOUD",
    desc:
      "Build secure, scalable and future-ready cloud environments that adapt to your business as it grows.",
    points: [
      "Cloud-native architecture",
      "Scalable infrastructure",
      "Secure cloud migration",
    ],
    iconComponent: <FaCloud />,
    color: "#0277BD",
  },

  {
    id: 4,
    number: "04",
    icon: featureIcon4,
    title: "API & Integration",
    aiTitle: "Connected Digital Ecosystem",
    category: "CONNECT",
    desc:
      "Connect applications, platforms and data through intelligent APIs and seamless integrations.",
    points: [
      "Enterprise API integration",
      "System-to-system connectivity",
      "Automated data exchange",
    ],
    iconComponent: <FaPlug />,
    color: "#00695C",
  },
];

// ============================================================
// ANIMATION VARIANTS
// ============================================================

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ============================================================
// COMPONENT
// ============================================================

const Feature = () => {
  const [activeCard, setActiveCard] = useState(1);

  const activeFeature =
    features.find((item) => item.id === activeCard) || features[0];

  return (
    <section
      className="relative overflow-hidden py-16 md:py-20 lg:py-24"
      style={{
        background: "#80d8ff",
      }}
    >

      {/* ======================================================
          BACKGROUND AI GRID
          Keeps your original background color
      ======================================================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(13,71,161,0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(13,71,161,0.35) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ======================================================
          AI GLOW
      ======================================================= */}

      <motion.div
        className="pointer-events-none absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-white/40 blur-[120px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#1976D2]/20 blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="Container relative z-10">

        {/* ====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[850px] text-center"
        >

          {/* AI BADGE */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#0D47A1]/10 bg-white/40 px-5 py-2.5 shadow-sm backdrop-blur-md"
          >

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0D47A1] text-white">

              <HiOutlineSparkles />

            </span>

            <span className="font-Rajdhani text-[11px] font-bold uppercase tracking-[0.28em] text-[#0D47A1]">
              AI-Powered Digital Engineering
            </span>

            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />

          </motion.div>

          {/* SMALL TITLE */}

          <p className="mb-3 font-Rajdhani text-sm font-bold uppercase tracking-[0.3em] text-[#0D47A1]/70">
            Smart. Seamless. Scalable.
          </p>

          {/* MAIN TITLE */}

          <h1 className="font-Rajdhani text-[38px] font-bold leading-[1.05] text-[#082B55] sm:text-[46px] md:text-[56px]">

            One intelligent ecosystem.

            <span className="block bg-gradient-to-r from-[#0D47A1] via-[#1565C0] to-[#00695C] bg-clip-text text-transparent">
              Infinite possibilities.
            </span>

          </h1>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-5 max-w-[720px] font-Nunito text-[15px] leading-7 text-[#0D47A1]/70 md:text-[17px]">
            We combine AI, cloud, data, software and integration
            technologies to create digital solutions that move
            businesses forward.
          </p>

        </motion.div>

        {/* ====================================================
            AI ENGINE VISUAL
        ===================================================== */}

        <div className="relative mx-auto mt-14 max-w-[1050px]">

          {/* CONNECTION LINES */}

          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[2px] w-[70%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#0D47A1]/20 to-transparent lg:block" />

          {/* CENTRAL AI NODE */}

          <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 hidden -translate-x-1/2 -translate-y-1/2 lg:block">

            {/* Outer Orbit */}

            <motion.div
              className="absolute -left-[85px] -top-[85px] h-[170px] w-[170px] rounded-full border border-[#0D47A1]/10"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Inner Orbit */}

            <motion.div
              className="absolute -left-[65px] -top-[65px] h-[130px] w-[130px] rounded-full border border-dashed border-[#0D47A1]/15"
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* AI CORE */}

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                boxShadow: [
                  "0 0 20px rgba(13,71,161,0.15)",
                  "0 0 50px rgba(13,71,161,0.3)",
                  "0 0 20px rgba(13,71,161,0.15)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex h-[130px] w-[130px] items-center justify-center rounded-full border border-white/80 bg-white/50 backdrop-blur-xl"
            >

              <div className="flex h-[82px] w-[82px] flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#0D47A1] to-[#1976D2] text-white shadow-xl">

                <HiOutlineCpuChip className="text-2xl" />

                <span className="mt-1 font-Rajdhani text-[9px] font-bold uppercase tracking-widest">
                  AI ENGINE
                </span>

              </div>

            </motion.div>

          </div>

          {/* ==================================================
              FEATURE CARDS
          =================================================== */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >

            {features.map((item) => {

              const isActive = activeCard === item.id;

              return (
                <motion.div
                  key={item.id}
                  variants={cardVariants}
                  onMouseEnter={() => setActiveCard(item.id)}
                  onClick={() => setActiveCard(item.id)}
                  whileHover={{
                    y: -12,
                  }}
                  className={`group relative cursor-pointer overflow-hidden rounded-[26px] border p-6 transition-all duration-500 ${
                    isActive
                      ? "border-[#0D47A1]/25 bg-white shadow-[0_25px_60px_rgba(13,71,161,0.18)]"
                      : "border-white/80 bg-white/60 shadow-[0_10px_35px_rgba(13,71,161,0.08)] hover:bg-white/85"
                  }`}
                >

                  {/* ACTIVE GLOW */}

                  <motion.div
                    animate={{
                      opacity: isActive ? 1 : 0,
                    }}
                    className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#38BDF8]/20 blur-3xl"
                  />

                  {/* NUMBER */}

                  <div className="absolute right-5 top-5">

                    <span className="font-Rajdhani text-[10px] font-bold tracking-[0.2em] text-[#0D47A1]/30">
                      {item.number}
                    </span>

                  </div>

                  {/* ICON */}

                  <div className="relative flex justify-center">

                    <motion.div
                      animate={{
                        y: isActive ? [0, -5, 0] : 0,
                        rotate: isActive ? [0, 2, -2, 0] : 0,
                      }}
                      transition={{
                        duration: 3,
                        repeat: isActive ? Infinity : 0,
                        ease: "easeInOut",
                      }}
                      className="relative flex h-[92px] w-[92px] items-center justify-center rounded-[28px] border border-white bg-gradient-to-br from-white to-[#eaf8ff] shadow-[0_15px_30px_rgba(13,71,161,0.12)]"
                    >

                      {/* ICON GLOW */}

                      <div className="absolute inset-2 rounded-[22px] bg-[#38BDF8]/10 blur-xl" />

                      <img
                        src={item.icon}
                        alt={item.title}
                        className="relative z-10 h-[58px] w-[58px] object-contain"
                      />

                    </motion.div>

                  </div>

                  {/* CATEGORY */}

                  <div className="mt-6 flex justify-center">

                    <span
                      className={`rounded-full px-3 py-1 font-Rajdhani text-[9px] font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
                        isActive
                          ? "bg-[#0D47A1] text-white"
                          : "bg-[#0D47A1]/5 text-[#0D47A1]/60"
                      }`}
                    >
                      {item.category}
                    </span>

                  </div>

                  {/* TITLE */}

                  <h3 className="mt-4 text-center font-Rajdhani text-[21px] font-bold text-[#0D47A1]">
                    {item.title}
                  </h3>

                  {/* AI TITLE */}

                  <div className="mt-2 flex items-center justify-center gap-2">

                    <HiOutlineSparkles className="text-sm text-[#1976D2]" />

                    <span className="font-Rajdhani text-[10px] font-bold uppercase tracking-wider text-[#1976D2]">
                      {item.aiTitle}
                    </span>

                  </div>

                  {/* DESCRIPTION */}

                  <p className="mt-4 text-center font-Nunito text-[13px] leading-6 text-[#1a237e]/70">
                    {item.desc}
                  </p>

                  {/* EXPAND CONTENT */}

                  <AnimatePresence initial={false}>

                    {isActive && (

                      <motion.div
                        initial={{
                          opacity: 0,
                          height: 0,
                        }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                        }}
                        transition={{
                          duration: 0.35,
                        }}
                        className="overflow-hidden"
                      >

                        <div className="mt-5 border-t border-[#0D47A1]/10 pt-5">

                          <div className="space-y-2">

                            {item.points.map((point, index) => (

                              <div
                                key={index}
                                className="flex items-center gap-2 text-left"
                              >

                                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-50">

                                  <FaCheck className="text-[8px] text-green-600" />

                                </span>

                                <span className="font-Nunito text-[11px] text-[#0D47A1]/70">
                                  {point}
                                </span>

                              </div>

                            ))}

                          </div>

                        </div>

                      </motion.div>

                    )}

                  </AnimatePresence>

                  {/* BOTTOM */}

                  <div className="mt-6 flex items-center justify-between border-t border-[#0D47A1]/10 pt-4">

                    <div className="flex items-center gap-2">

                      <span className="relative flex h-2 w-2">

                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />

                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />

                      </span>

                      <span className="font-Rajdhani text-[9px] font-bold uppercase tracking-[0.15em] text-[#0D47A1]/45">
                        AI Ready
                      </span>

                    </div>

                    <motion.div
                      animate={{
                        x: isActive ? [0, 4, 0] : 0,
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: isActive ? Infinity : 0,
                      }}
                      className="text-[#0D47A1]"
                    >
                      <FaArrowRight className="text-xs" />
                    </motion.div>

                  </div>

                  {/* ACTIVE LINE */}

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: isActive ? "100%" : "0%",
                    }}
                    className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#0D47A1] via-[#1976D2] to-[#38BDF8]"
                  />

                </motion.div>
              );
            })}

          </motion.div>

        </div>

        {/* ====================================================
            AI SUMMARY PANEL
        ===================================================== */}

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
          className="mx-auto mt-10 max-w-[1000px]"
        >

          <div className="relative overflow-hidden rounded-[28px] border border-white/80 bg-white/35 p-6 shadow-[0_15px_45px_rgba(13,71,161,0.08)] backdrop-blur-xl md:p-8">

            {/* Animated line */}

            <motion.div
              className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#0D47A1] to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[#0D47A1] text-white shadow-lg">

                  <HiOutlineBolt className="text-2xl" />

                </div>

                <div>

                  <p className="font-Rajdhani text-[10px] font-bold uppercase tracking-[0.25em] text-[#0D47A1]/60">
                    Active Capability
                  </p>

                  <h3 className="font-Rajdhani text-[23px] font-bold text-[#0D47A1]">
                    {activeFeature.aiTitle}
                  </h3>

                </div>

              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">

                {[
                  "AI Ready",
                  "Scalable",
                  "Secure",
                ].map((item) => (

                  <span
                    key={item}
                    className="rounded-full border border-[#0D47A1]/10 bg-white/50 px-4 py-2 font-Rajdhani text-[9px] font-bold uppercase tracking-widest text-[#0D47A1]/60"
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

export default Feature;

// import { motion } from "framer-motion";
// import { GoArrowRight } from "react-icons/go";
// import featureIcon from "/images/cloud-with-cellphone-screen.png";
// import featureIcon2 from "/images/predictive.png";
// import featureIcon3 from "/images/cloud.png";
// import featureIcon4 from "/images/api-integration.png";

// const features = [
//   {
//     id: 1,
//     icon: featureIcon,
//     title: "Product Development",
//     desc: "Outsourcing IT management and maintenance, including network monitoring, data backup, cybersecurity, help desk support.",
//     animation: { y: [0, -15, 0] },
//   },
//   {
//     id: 2,
//     icon: featureIcon2,
//     title: "Data & Analytics",
//     desc: "Access to remote servers and infrastructure for data storage, application hosting, and scalable resources.",
//     animation: { rotate: [0, 10, -10, 0] },
//   },
//   {
//     id: 3,
//     icon: featureIcon3,
//     title: "Cloud Services",
//     desc: "Services for data storage, backup, integration, governance, and analytics to drive insights and informed decisions.",
//     animation: { x: [0, 10, -10, 0] },
//   },
//   {
//     id: 4,
//     icon: featureIcon4,
//     title: "API & Integration", desc: " Custom software development and integration services to meet specific business needs.",
//     animation: { scale: [1, 1.1, 1] },
//   },
// ];

// const Feature = () => {
//   return (
//     <section
//   className="relative py-5 md:py-5 overflow-hidden"
//   style={{
//     background:"#80d8ff",
//   }}
 
// >
//       <div className="Container relative z-10 text-center">
//         {/* Header Animation */}
//         <div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h5 className="text-[#0d47a1] uppercase font-bold tracking-widest text-xl mb-3">
//             Smart. Seamless. Scalable.
//           </h5>
//           <h1
//             className="font-Rajdhani font-bold text-3xl sm:text-4xl md:text-5xl text-[#0d47a1] mb-4"
//             initial={{ scale: 0.8 }}
//             animate={{ scale: [1, 1.05, 1] }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           >
//             One Step for All Your Software Needs
//           </h1>
//           <p
//             className="text-[#1a237e] max-w-2xl mx-auto text-base sm:text-lg"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//           >
//             We blend creativity, technology, and innovation to build products that
//             connect people and power digital evolution.
//           </p>
//         </div>

//         <div
//   className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-6  bg-gradient-to-br from-[#fff5ee] via-[#ffe5d0] to-[#ffd1a4] 
//   p-10 rounded-3xl shadow-inner"
// >
//   {features.map((item, index) => (
//     <div
//       key={item.id}
//       initial={{ opacity: 0, y: 80 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{
//         duration: 0.8,
//         delay: index * 0.3,
//         ease: "easeOut",
//       }}
//       viewport={{ once: true }}
//       whileHover={{
//         scale: 1.08,
//         rotateY: 5,
//       }}
//       className="group p-8 rounded-2xl bg-white/80 border border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer backdrop-blur-md"
//     >
//       <div
//         className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-gradient-to-br from-[#64b5f6] to-[#1e88e5] shadow-lg"
//         // eslint-disable-next-line react/no-unknown-property
//         animate={item.animation}
//         // eslint-disable-next-line react/no-unknown-property
//         transition={{
//           duration: 3,
//           repeat: Infinity,
//           ease: 'easeInOut',
//         }}
//       >
//         <img
//           src={item.icon}
//           alt={item.title}
//           className="w-8 h-8 object-contain"
//         />
//       </div>

//       <h3
//         className="font-Rajdhani text-xl font-bold mb-3 text-[#0d47a1] group-hover:text-[#1565c0] transition-colors duration-300"
//         // eslint-disable-next-line react/no-unknown-property
//         whileHover={{ y: -5 }}
//       >
//         {item.title}
//       </h3>

//       <p
//         className="text-[#1a237e] text-sm mb-6 leading-relaxed"
//         // eslint-disable-next-line react/no-unknown-property
//         whileHover={{ scale: 1.02 }}
//       >
//         {item.desc}
//       </p>

//       <a
//         href="/service"
//         className="flex items-center justify-center gap-2 text-[#0d47a1] font-bold hover:gap-3 transition-all duration-300"
//         // eslint-disable-next-line react/no-unknown-property
//         whileHover={{ x: 8 }}
//       >
//         Learn More <GoArrowRight />
//       </a>
//     </div>
//   ))}
// </div>

//       </div>

//       {/* Background Floating Elements */}
//       <motion.div
//         className="absolute top-0 left-0 w-[200px] h-[200px] bg-[#bbdefb] rounded-full opacity-30 blur-3xl"
//         animate={{ x: [0, 100, -100, 0], y: [0, 50, 0] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#90caf9] rounded-full opacity-20 blur-3xl"
//         animate={{ y: [0, -50, 0], x: [0, -100, 0] }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//       />
//     </section>
//   );
// };

// export default Feature;
