// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { Autoplay } from 'swiper/modules';
// import brandThumb from '/images/brand1.jpeg';
// import brandThumb2 from '/images/brand2.png';
// import brandThumb3 from '/images/brand3.png';
// import brandThumb4 from '/images/brand4-1.png';
// import brandThumb5 from '/images/brand3.png';

// const Brand = () => {
//   const settings = {
//     modules: [Autoplay],
//     loop: true,
//     spaceBetween: 30,
//     speed: 10000,
//     grabCursor: true, // Fixed typo: cursorGrab -> grabCursor
//     autoplay: {
//       delay: 100, // Adjust delay in milliseconds (3 seconds here)
//       disableOnInteraction: false, // Keep autoplay running after user interaction
//     },
//     breakpoints: {
//       320: { slidesPerView: 1 },
//       576: { slidesPerView: 2 },
//       768: { slidesPerView: 3 },
//       992: { slidesPerView: 4 },
//       1400: { slidesPerView: 5 },
//     },
//   };

//   return (
//      <div className='mt-16 lg:mt-[20px]'>
//        <div className='flex items-center gap-2 sm:gap-4'>
//          <h3 className='font-Rajdhani font-bold  text-[30px] text-[#0D47A1] capitalize mb-5'>
//            See our happy customers 
//          </h3>{' '}
//          <div className='flex-1 w-full h-[1px] bg-white bg-opacity-10'></div>
//        </div>
//        <div className="relative z-10 py-[15px] bg-gradient-to-l from-PrimaryColor2-0 to-PrimaryColor3-0">
//            <Swiper {...settings}>
//              <SwiperSlide>
//                <div className="flex items-center justify-center">
//                  <p className="text-white text-lg font-semibold">Open space innivates</p>
//                  </div>
//              </SwiperSlide>
//              <SwiperSlide>
//                <div className="flex items-center justify-center">
//                  <p className="text-white text-lg font-semibold">JNS Cloud</p>
//                  </div>
//              </SwiperSlide>
//               <SwiperSlide>
//                <div className="flex items-center justify-center">
//                  <p className="text-white text-lg font-semibold">Txplore IT Solutions</p>
//                  </div>
//              </SwiperSlide>
//              <SwiperSlide>
//                <div className="flex items-center justify-center">
//                  <p className="text-white text-lg font-semibold">Sanvic IT Solutions</p>
//                  </div>
//              </SwiperSlide> 
//            <SwiperSlide>
//              <div className="flex items-center justify-center">
//                <p className="text-white text-lg font-semibold">ETC Sweden</p>
//              </div>
//            </SwiperSlide> 
//            <SwiperSlide>
//              <div className="flex items-center justify-center">
//                <p className="text-white text-lg font-semibold">Tejoma</p>
//              </div>
//            </SwiperSlide> 
//            <SwiperSlide>
//              <div className="flex items-center justify-center">
//                <p className="text-white text-lg font-semibold">SAMSA</p>
//              </div>
//            </SwiperSlide> 
//            <SwiperSlide>
//              <div className="flex items-center justify-center">
//                <p className="text-white text-lg font-semibold">Caspera Sweeden</p>
//              </div>
//            </SwiperSlide> 
//            <SwiperSlide>
//              <div className="flex items-center justify-center">
//                <p className="text-white text-lg font-semibold">Beluverse Technologies</p>
//              </div>
//            </SwiperSlide>
 
//            </Swiper>
//        </div>
 
//        {/* <div className='flex items-center gap-2 sm:gap-4'>
//          <div className='flex-1 w-full h-[1px] bg-white bg-opacity-10'></div>{' '}
//          <h5 className='font-Rajdhani font-medium text-base sm:text-lg text-white uppercase'>
//            About 20+ customers worldwide
//          </h5>
//        </div> */}
//      </div>
//    );
// };

// export default Brand;


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCircleCheck,
  FaGlobe,
} from "react-icons/fa6";
import { HiOutlineSparkles, HiOutlineCpuChip } from "react-icons/hi2";

const clients = [
  "Open Space Innovates",
  "JNS Cloud",
  "Txplore IT Solutions",
  "Sanvic IT Solutions",
  "ETC Sweden",
  "Tejoma",
  "SAMSA",
  "Caspera Sweden",
  "Beluverse Technologies",
];

const Brand = () => {
  const settings = {
    modules: [Autoplay],
    loop: true,
    spaceBetween: 18,
    speed: 7000,
    grabCursor: true,

    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1.2,
      },
      480: {
        slidesPerView: 1.5,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2.5,
      },
      992: {
        slidesPerView: 3.5,
      },
      1200: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 5,
      },
    },
  };

  return (
    <section className="relative mt-14 lg:mt-20">

      {/* =====================================================
          SECTION HEADER
      ====================================================== */}

      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

        {/* LEFT */}

        <div>

          <div className="mb-3 flex items-center gap-2">

            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0D47A1] text-white shadow-md">

              <HiOutlineSparkles className="text-sm" />

            </span>

            <span className="font-Rajdhani text-[10px] font-bold uppercase tracking-[0.25em] text-[#0D47A1]/60">
              Trusted Network
            </span>

            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />

          </div>

          <h3 className="font-Rajdhani text-[28px] font-bold leading-tight text-[#0D47A1] md:text-[34px]">

            Our Technology Partners

          </h3>

          <p className="mt-1 font-Nunito text-sm text-[#0D47A1]/55">

            Organizations growing with our digital ecosystem.

          </p>

        </div>

        {/* RIGHT STATUS */}

        <div className="flex items-center gap-3 self-start rounded-full border border-white/60 bg-white/30 px-4 py-2.5 backdrop-blur-xl md:self-auto">

          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0D47A1]/10 text-[#0D47A1]">

            <FaGlobe className="text-xs" />

          </div>

          <div>

            <p className="font-Rajdhani text-[9px] font-bold uppercase tracking-widest text-[#0D47A1]/40">
              Network Status
            </p>

            <p className="font-Rajdhani text-xs font-bold text-[#0D47A1]">
              Active Worldwide
            </p>

          </div>

          <span className="ml-1 h-2 w-2 animate-pulse rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]" />

        </div>

      </div>

      {/* =====================================================
          AI NETWORK CONTAINER
      ====================================================== */}

      <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white/25 p-4 shadow-[0_20px_60px_rgba(13,71,161,0.10)] backdrop-blur-xl md:p-5">

        {/* TOP SCAN LINE */}

        <motion.div
          className="absolute left-0 top-0 h-[2px] w-1/4 bg-gradient-to-r from-transparent via-[#0D47A1] to-transparent"
          animate={{
            x: ["-100%", "500%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* =================================================
            BACKGROUND DOTS
        ================================================== */}

        <div className="pointer-events-none absolute inset-0 opacity-30">

          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(#0D47A1 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

        </div>

        {/* =================================================
            NETWORK CENTER ICON
        ================================================== */}

        {/* <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 hidden -translate-x-1/2 -translate-y-1/2 md:block">

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex h-24 w-24 items-center justify-center rounded-full border border-[#0D47A1]/10 bg-white/30 backdrop-blur-xl"
          >

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0D47A1] text-white shadow-[0_0_30px_rgba(13,71,161,0.25)]">

              <HiOutlineCpuChip className="text-2xl" />

            </div>

          </motion.div>

        </div> */}

        {/* =================================================
            CLIENT SLIDER
        ================================================== */}

        <div className="relative z-10">

          <Swiper {...settings}>

            {clients.map((client, index) => (

              <SwiperSlide key={client}>

                <motion.div
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                  }}
                  className="group relative h-[118px] overflow-hidden rounded-2xl border border-white/70 bg-white/55 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-[#0D47A1]/20 hover:bg-white/80 hover:shadow-[0_15px_35px_rgba(13,71,161,0.12)]"
                >

                  {/* CARD GLOW */}

                  <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-blue-400/10 blur-2xl transition-all duration-500 group-hover:bg-blue-400/20" />

                  {/* CLIENT NUMBER */}

                  <div className="absolute right-3 top-3 font-Rajdhani text-[9px] font-bold tracking-widest text-[#0D47A1]/15">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* ICON */}

                  <div className="flex items-center gap-3">

                    <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#0D47A1]/10 text-[#0D47A1]">

                      <HiOutlineCpuChip />

                      {/* ACTIVE DOT */}

                      <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-green-500" />

                    </div>

                    <div className="min-w-0">

                      <h4 className="truncate font-Rajdhani text-[15px] font-bold text-[#0D47A1]">
                        {client}
                      </h4>

                      <div className="mt-1 flex items-center gap-2">

                        <FaCircleCheck className="text-[9px] text-green-500" />

                        <span className="font-Rajdhani text-[8px] font-bold uppercase tracking-widest text-[#0D47A1]/40">
                          Connected
                        </span>

                      </div>

                    </div>

                  </div>

                  {/* BOTTOM LINE */}

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#0D47A1] to-cyan-400 transition-all duration-500 group-hover:w-full" />

                </motion.div>

              </SwiperSlide>

            ))}

          </Swiper>

        </div>

        {/* =================================================
            BOTTOM NETWORK STATUS
        ================================================== */}

        <div className="relative z-10 mt-4 flex flex-col items-center justify-between gap-3 border-t border-[#0D47A1]/10 pt-4 sm:flex-row">

          <div className="flex items-center gap-2">

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/10">

              <FaCircleCheck className="text-[10px] text-green-600" />

            </span>

            <span className="font-Rajdhani text-[9px] font-bold uppercase tracking-[0.2em] text-[#0D47A1]/50">
              {clients.length}+ Active Client Connections
            </span>

          </div>

          <div className="group flex cursor-pointer items-center gap-2">

            <span className="font-Rajdhani text-[9px] font-bold uppercase tracking-[0.2em] text-[#0D47A1]/50 transition-colors group-hover:text-[#0D47A1]">
              Explore Our Network
            </span>

            <FaArrowRight className="text-[10px] text-[#0D47A1] transition-transform duration-300 group-hover:translate-x-1" />

          </div>

        </div>

      </div>

      {/* =====================================================
          BOTTOM AI MESSAGE
      ====================================================== */}

      <div className="mt-6 flex items-center justify-center gap-3">

        <span className="h-px w-10 bg-[#0D47A1]/15" />

        <HiOutlineSparkles className="text-sm text-[#0D47A1]/50" />

        <span className="font-Rajdhani text-[9px] font-bold uppercase tracking-[0.25em] text-[#0D47A1]/40">
          Connecting businesses with intelligent technology
        </span>

        <span className="h-px w-10 bg-[#0D47A1]/15" />

      </div>

    </section>
  );
};

export default Brand;

// Avinash 011