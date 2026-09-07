// // import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// // import { Autoplay } from 'swiper/modules';
// // import { MdOutlineStarPurple500 } from 'react-icons/md';
// // import TestimonialCard from './TestimonialCard';
// import titleShape from '/images/sub-title-shape.png';
// // import reviewLogo from '/images/star-1-1.png';
// // import testiImg from '/images/author.png';
// // import testiQuate from '/images/quote.png';
// import Brand from './Brand';

// // const testiData = [
// //   {
// //     id: 1,
// //     testiTitle: 'Design Quality!',
// //     testiQuate: testiQuate,
// //     testiDesc: `Credibly embrace covalent growth strategies 
// //                 without out-of-the-box value. Collaboratively 
// //                 transition focused total linkage`,
// //     testiRatingIcon: <MdOutlineStarPurple500 />,
// //     testiName: 'Anjelina Watson',
// //     testiImg: testiImg,
// //   },
// //   {
// //     id: 2,
// //     testiTitle: 'Awesome Support!',
// //     testiQuate: testiQuate,
// //     testiDesc: `Credibly embrace covalent growth strategies 
// //                 without out-of-the-box value. Collaboratively 
// //                 transition focused total linkage`,
// //     testiRatingIcon: <MdOutlineStarPurple500 />,
// //     testiName: 'Jhon D. Alexon',
// //     testiImg: testiImg,
// //   },
// //   {
// //     id: 3,
// //     testiTitle: 'Best Development!',
// //     testiQuate: testiQuate,
// //     testiDesc: `Credibly embrace covalent growth strategies 
// //                 without out-of-the-box value. Collaboratively 
// //                 transition focused total linkage`,
// //     testiRatingIcon: <MdOutlineStarPurple500 />,
// //     testiName: 'Murad Junaid',
// //     testiImg: testiImg,
// //   },
// // ];

// const Testimonial = () => {
//   // const settings = {
//   //   modules: [Autoplay],
//   //   loop: true,
//   //   spaceBetween: 30,
//   //   speed: 2000,
//   //   autoplay: {
//   //     delay: 3000, // Set delay time in milliseconds
//   //     disableOnInteraction: false, // Keep autoplay on user interaction
//   //   },
//   //   breakpoints: {
//   //     320: {
//   //       slidesPerView: 1,
//   //     },
//   //     768: {
//   //       slidesPerView: 1,
//   //     },
//   //     992: {
//   //       slidesPerView: 2,
//   //     },
//   //     1400: {
//   //       slidesPerView: 2,
//   //     },
//   //   },
//   // };
//   return (
// //     <section className='testimonial pt-16 md:pt-20 lg:pt-[135px] pb-16 md:pb-20 lg:pb-28 bg-[url(/images/testimonial.png)] bg-no-repeat bg-cover bg-top bg-HeadingColor-0 relative z-10 overflow-hidden'>
// //      <section
// //   className="h-[500px] sm:h-[700px] md:h-[800px] lg:h-[650px] xl:h-[750px] flex items-center relative z-10 overflow-hidden"
// //   style={{
// //     backgroundSize: "100% 100%",
// //     backgroundPosition: "0px 0px,0px 0px,0px 0px,0px 0px,0px 0px",
// //     backgroundImage: `
// //       radial-gradient(49% 81% at 45% 47%, #FFE20345 0%, #073AFF00 100%),
// //       radial-gradient(113% 91% at 17% -2%, #a79d97ff 1%, #FF000000 99%),
// //       radial-gradient(142% 91% at 83% 7%, #d7f58cff 1%, #FF000000 99%),
// //       radial-gradient(142% 91% at -6% 74%, #f39fb7ff 1%, #FF000000 99%),
// //       radial-gradient(142% 91% at 111% 84%, #FF7000FF 0%, #514414ff 100%)
// //     `,
// //   }}
// // >
// <section
//   className="bg-[#ffc27f] relative overflow-hidden py-10  flex items-center z-10"
// >
//      <div className='Container'>
//         <div className='text-center'>
//           <div className='text-center'>
//             <h5 className='flex items-center justify-center gap-2 font-Rajdhani text-[30px] font-bold text-[#0D47A1] uppercase'>
//               <img
//                 src={titleShape}
//                 draggable={false}
//                 alt='Shape'
//               />{' '}
//               Our Clients
//             </h5>
//             <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[38px] md:leading-[48px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-[#0D47A1]  mt-[14px] mb-6'>
//               Trusted by Industry
//               Leaders Customers
//               <br />
//               Testimonials
//             </h1>
//             {/* <div>
//               <img
//                 src={reviewLogo}
//                 draggable='false'
//                 alt='Review Logo'
//               />
//             </div> */}
//           </div>
//           <div className='col-span-1 lg:col-span-2'>
//             {/* <Swiper {...settings}> */}
//               {/* <div>
//                 {testiData.map(
//                   ({
//                     id,
//                     testiTitle,
//                     testiQuate,
//                     testiRatingIcon,
//                     testiName,
//                     testiImg,
//                     testiDesc,
//                   }) => {
//                     return (
//                       <SwiperSlide key={id}>
//                         <div className=''>
//                           <TestimonialCard
//                             testiTitle={testiTitle}
//                             testiQuate={testiQuate}
//                             testiRatingIcon={testiRatingIcon}
//                             testiName={testiName}
//                             testiImg={testiImg}
//                             testiDesc={testiDesc}
//                           />
//                         </div>
//                       </SwiperSlide>
//                     );
//                   }
//                 )}
//               </div> */}
//             {/* </Swiper> */}
//           </div>
//         </div>
//         <Brand />
//       </div>
//     </section>
//   );
// };

// export default Testimonial;


import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCircleCheck,
  FaNetworkWired,
  FaShieldHalved,
  FaStar,
} from "react-icons/fa6";
import { HiOutlineSparkles, HiOutlineCpuChip } from "react-icons/hi2";

import titleShape from "/images/sub-title-shape.png";
import Brand from "./Brand";

const Testimonial = () => {
  return (
    <section className="relative overflow-hidden bg-[#ffc27f] py-16 md:py-20 lg:py-28">

      {/* =====================================================
          FUTURISTIC BACKGROUND GRID
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(13,71,161,0.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(13,71,161,0.25) 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
        }}
      />

      {/* =====================================================
          AMBIENT AI GLOWS
      ====================================================== */}

      <motion.div
        className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-[#42A5F5]/20 blur-[120px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#0D47A1]/10 blur-[130px]"
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

        {/* ===================================================
            HEADER
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-center"
        >

          {/* AI BADGE */}

          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#0D47A1]/10 bg-white/20 px-5 py-2.5 shadow-sm backdrop-blur-xl">

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0D47A1] text-white shadow-lg">

              <HiOutlineSparkles />

            </span>

            <span className="font-Rajdhani text-[10px] font-bold uppercase tracking-[0.28em] text-[#0D47A1]">
              Trusted Digital Network
            </span>

            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>

          </div>

          {/* SECTION LABEL */}

          <div className="flex items-center justify-center gap-3">

            <img
              src={titleShape}
              draggable={false}
              alt="Shape"
            />

            <span className="font-Rajdhani text-[20px] font-bold uppercase tracking-[0.18em] text-[#0D47A1]">
              Our Clients
            </span>

          </div>

          {/* MAIN TITLE */}

          <h1 className="mx-auto mt-4 max-w-[850px] font-Rajdhani text-[38px] font-bold leading-[1.05] text-[#0D47A1] sm:text-[46px] md:text-[54px]">

            Trusted by Industry Leaders.

            <span className="block bg-gradient-to-r from-[#0D47A1] via-[#1565C0] to-[#00838F] bg-clip-text text-transparent">
              Powered by Real Partnerships.
            </span>

          </h1>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-5 max-w-[700px] font-Nunito text-[15px] leading-7 text-[#0D47A1]/70 md:text-[17px]">
            We work with forward-thinking organizations to transform ideas
            into scalable digital experiences, intelligent solutions and
            measurable business outcomes.
          </p>

        </motion.div>

        {/* ===================================================
            TRUST METRICS
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.25,
            duration: 0.7,
          }}
          className="mx-auto mt-10 grid max-w-[850px] grid-cols-2 gap-3 md:grid-cols-4"
        >

          {/* CARD */}

          <div className="group rounded-2xl border border-white/50 bg-white/30 p-4 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/50">

            <FaShieldHalved className="mx-auto mb-2 text-[#0D47A1]" />

            <p className="font-Rajdhani text-[10px] font-bold uppercase tracking-widest text-[#0D47A1]/50">
              Trusted
            </p>

            <h4 className="mt-1 font-Rajdhani text-xl font-bold text-[#0D47A1]">
              Enterprise
            </h4>

          </div>

          <div className="group rounded-2xl border border-white/50 bg-white/30 p-4 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/50">

            <FaNetworkWired className="mx-auto mb-2 text-[#0D47A1]" />

            <p className="font-Rajdhani text-[10px] font-bold uppercase tracking-widest text-[#0D47A1]/50">
              Network
            </p>

            <h4 className="mt-1 font-Rajdhani text-xl font-bold text-[#0D47A1]">
              Global
            </h4>

          </div>

          <div className="group rounded-2xl border border-white/50 bg-white/30 p-4 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/50">

            <FaStar className="mx-auto mb-2 text-[#0D47A1]" />

            <p className="font-Rajdhani text-[10px] font-bold uppercase tracking-widest text-[#0D47A1]/50">
              Experience
            </p>

            <h4 className="mt-1 font-Rajdhani text-xl font-bold text-[#0D47A1]">
              Excellence
            </h4>

          </div>

          <div className="group rounded-2xl border border-white/50 bg-white/30 p-4 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/50">

            <HiOutlineCpuChip className="mx-auto mb-2 text-[#0D47A1] text-xl" />

            <p className="font-Rajdhani text-[10px] font-bold uppercase tracking-widest text-[#0D47A1]/50">
              Technology
            </p>

            <h4 className="mt-1 font-Rajdhani text-xl font-bold text-[#0D47A1]">
              AI Ready
            </h4>

          </div>

        </motion.div>

        {/* ===================================================
            CLIENT NETWORK
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative mx-auto mt-14 max-w-[1500px]"
        >

          {/* OUTER FRAME */}

          <div className="relative overflow-hidden rounded-[35px] border border-white/60 bg-white/20 p-5 shadow-[0_25px_80px_rgba(13,71,161,0.12)] backdrop-blur-xl md:p-8">

            {/* TOP STATUS BAR */}

            <div className="mb-6 flex flex-col gap-3 border-b border-[#0D47A1]/10 pb-5 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0D47A1] text-white shadow-lg">

                  <HiOutlineCpuChip />

                </div>

                <div>

                  <p className="font-Rajdhani text-[9px] font-bold uppercase tracking-[0.25em] text-[#0D47A1]/50">
                    AI Partnership Network
                  </p>

                  <h3 className="font-Rajdhani text-lg font-bold text-[#0D47A1]">
                    Organizations That Trust Us
                  </h3>

                </div>

              </div>

              <div className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2">

                <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />

                <span className="font-Rajdhani text-[9px] font-bold uppercase tracking-widest text-green-700">
                  Network Active
                </span>

              </div>

            </div>

            {/* =================================================
                NETWORK VISUAL
            ================================================== */}

            <div className="relative">

              {/* CONNECTION LINES */}

              <div className="pointer-events-none absolute inset-0 hidden md:block">

                <svg
                  className="h-full w-full"
                  viewBox="0 0 1000 350"
                  preserveAspectRatio="none"
                >

                  <motion.path
                    d="M100 170 C250 40, 350 300, 500 175 S750 40, 900 170"
                    fill="none"
                    stroke="#0D47A1"
                    strokeOpacity="0.12"
                    strokeWidth="2"
                    strokeDasharray="8 10"
                    animate={{
                      strokeDashoffset: [0, -100],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <motion.path
                    d="M100 170 C300 300, 400 40, 500 175 S750 300, 900 170"
                    fill="none"
                    stroke="#00ACC1"
                    strokeOpacity="0.10"
                    strokeWidth="2"
                    strokeDasharray="6 12"
                    animate={{
                      strokeDashoffset: [0, 120],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                </svg>

              </div>

              {/* BRAND AREA */}

              <div className="relative z-10 rounded-[25px] border border-white/50 bg-white/35 p-5 backdrop-blur-md md:p-8">

                <Brand />

              </div>

            </div>

            {/* BOTTOM STATUS */}

            <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-[#0D47A1]/10 pt-5 sm:flex-row">

              <div className="flex items-center gap-3">

                <div className="flex -space-x-2">

                  {[1, 2, 3, 4].map((item) => (

                    <div
                      key={item}
                      className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#ffc27f] bg-[#0D47A1] text-[9px] font-bold text-white"
                    >
                      {item}
                    </div>

                  ))}

                </div>

                <span className="font-Rajdhani text-[10px] font-semibold uppercase tracking-widest text-[#0D47A1]/60">
                  Growing digital partnerships
                </span>

              </div>

              <div className="flex items-center gap-2 font-Rajdhani text-[10px] font-bold uppercase tracking-widest text-[#0D47A1]">

                <span>
                  Explore our capabilities
                </span>

                <FaArrowRight className="transition-transform duration-300 hover:translate-x-1" />

              </div>

            </div>

          </div>

        </motion.div>

        {/* ===================================================
            BOTTOM AI STATEMENT
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
          className="mx-auto mt-10 flex max-w-[800px] items-center justify-center gap-3 text-center"
        >

          <span className="h-px w-10 bg-[#0D47A1]/20" />

          <HiOutlineSparkles className="text-[#0D47A1]" />

          <p className="font-Rajdhani text-[11px] font-bold uppercase tracking-[0.2em] text-[#0D47A1]/60">
            Turning partnerships into intelligent possibilities
          </p>

          <span className="h-px w-10 bg-[#0D47A1]/20" />

        </motion.div>

      </div>
    </section>
  );
};

export default Testimonial;

// Aviansh 000