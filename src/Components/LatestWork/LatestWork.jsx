// import { Link } from 'react-router-dom';
// import titleShape from '/images/sub-title-shape.png';
// import latestWorkCardImg from '/images/office-365/office-365.png';
// import latestWorkCardImg2 from '/images/office-365/microsoft-cloud.png';
// import latestWorkCardImg3 from '/images/office-365/microsoft-security.png';
// import latestWorkCardImg4 from '/images/office-365/powerbi.png';
// import latestWorkCardImg5 from '/images/office-365/powerapps.png';
// import latestWorkCardImg6 from '/images/office-365/powerautomated.png';
// import latestWorkCardImg7 from '/images/office-365/powerpages.png';
// import latestWorkCardImg8 from '/images/office-365/crm.png';
// import latestWorkCardImg9 from '/images/office-365/viva.png';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { Autoplay } from 'swiper/modules';

// // Avinash updated Home Page
// const latestWorkCard = [
//   {
//     id: 1,
//     latestWorkCardImg: latestWorkCardImg,
//     // latestWorkCardURL: '/project_details',
//     latestWorkTitle: ' Office 365',
//     // latestWorkBtnText: 'Read More',
//   },
//   {
//     id: 2,
//     latestWorkCardImg: latestWorkCardImg2,
//     // latestWorkCardURL: '/project_details',
//     latestWorkTitle: 'Run It In The Microsoft Cloud',
//     // latestWorkBtnText: 'Read More',
//   },
//   {
//     id: 3,
//     latestWorkCardImg: latestWorkCardImg3,
//     // latestWorkCardURL: '/project_details',
//     latestWorkTitle: 'Microsoft Mobility + Security',
//     // latestWorkBtnText: 'Read More',
//   },
//   {
//     id: 4,
//     latestWorkCardImg: latestWorkCardImg4,
//     // latestWorkCardURL: '/project_details',
//     latestWorkTitle: 'Power BI',
//     // latestWorkBtnText: 'Read More',
//   },
//   {
//     id: 5,
//     latestWorkCardImg: latestWorkCardImg5,
//     // latestWorkCardURL: '/project_details',
//     latestWorkTitle: 'Power Apps',
//     // latestWorkBtnText: 'Read More',
//   },
//   {
//     id: 6,
//     latestWorkCardImg: latestWorkCardImg6,
//     // latestWorkCardURL: '/project_details',
//     latestWorkTitle: 'Power Automate',
//     // latestWorkBtnText: 'Read More',
//   },
//   {
//     id: 7,
//     latestWorkCardImg: latestWorkCardImg7,
//     // latestWorkCardURL: '/project_details',
//     latestWorkTitle: 'Power Virtual Agents',
//     // latestWorkBtnText: 'Read More',
//   },
//   {
//     id: 8,
//     latestWorkCardImg: latestWorkCardImg8,
//     // latestWorkCardURL: '/project_details',
//     latestWorkTitle: 'Power Pages',
//     // latestWorkBtnText: 'Read More',
//   },
//   {
//     id: 9,
//     latestWorkCardImg: latestWorkCardImg9,
//     // latestWorkCardURL: '/project_details',
//     latestWorkTitle: 'CRM',
//     // latestWorkBtnText: 'Read More',
//   }
// ];

// const LatestWork = () => {
//   const settings = {
//     loop: true,
//     spaceBetween: 30,
//     initialSlide: 1,
//     modules: [Autoplay],
//     speed: 2000,
//     autoplay: {
//       delay: 3000,
//       disableOnInteraction: false,
//     },
//     breakpoints: {
//       320: { slidesPerView: 1 },
//       768: { slidesPerView: 2 },
//       992: { slidesPerView: 2 },
//       1200: { slidesPerView: 3 },
//       1400: { slidesPerView: 4 },
//     },
//   };

//   return (
//     <section
//       className="py-20 md:py-25 items-center relative z-10 overflow-hidden bg-[#ffc27f]">
//       <div className="Container">
//         <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0 items-center relative">
//           <div>
//             <h5 className="flex items-center gap-2 font-Rajdhani text-[30px] font-bold text-[#0D47A1] uppercase">
//               <img src={titleShape} draggable={false} alt="Shape" /> Office 365 & More
//             </h5>
//             <h1 className="font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-[#0D47A1] mt-[14px] mb-4">
//               Transform Your Website into a<br /> Revenue-Generating Machine
//               Achieve Online Success
//             </h1>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-[1758px] w-full px-3 sm:px-5 mx-auto mt-[36px]">
//         <Swiper {...settings} style={{'backgroundColor':'#FF5C00','padding':'20px'}}>
//           {latestWorkCard.map(
//             ({
//               id,
//               latestWorkCardImg,
//               latestWorkCardURL,
//               latestWorkTitle,
//               latestWorkBtnText,
//             }) => (
//               <SwiperSlide key={id}>
//                 <div className="pb-0 flex justify-center">
//                   <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-[300px] flex flex-col items-center justify-center p-5">
//                     <div className=" flex items-center justify-center overflow-hidden rounded-lg">
//                       <img
//                         src={latestWorkCardImg}
//                         alt={latestWorkTitle}
//                         className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
//                         draggable={false}
//                       />
//                     </div>
//                     <div className="text-center mt-4">
//                       <h3 className="font-Rajdhani font-bold text-lg text-[#0D47A1] mb-1">
//                         {latestWorkTitle}
//                       </h3>
//                       <a
//                         href={latestWorkCardURL}
//                         className="inline-block text-PrimaryColor-0 font-medium hover:underline text-sm"
//                       >
//                         {latestWorkBtnText}
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             )
//           )}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default LatestWork;

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaMicrosoft,
} from "react-icons/fa6";

import { HiOutlineSparkles, HiOutlineCpuChip } from "react-icons/hi2";

import "swiper/css";

import titleShape from "/images/sub-title-shape.png";

import latestWorkCardImg from "/images/office-365/office-365.png";
import latestWorkCardImg2 from "/images/office-365/microsoft-cloud.png";
import latestWorkCardImg3 from "/images/office-365/microsoft-security.png";
import latestWorkCardImg4 from "/images/office-365/powerbi.png";
import latestWorkCardImg5 from "/images/office-365/powerapps.png";
import latestWorkCardImg6 from "/images/office-365/powerautomated.png";
import latestWorkCardImg7 from "/images/office-365/powerpages.png";
import latestWorkCardImg8 from "/images/office-365/crm.png";
import latestWorkCardImg9 from "/images/office-365/viva.png";

// ============================================================
// DATA
// ============================================================

const latestWorkCard = [
  {
    id: 1,
    latestWorkCardImg: latestWorkCardImg,
    latestWorkTitle: "Office 365",
    category: "PRODUCTIVITY",
    aiText: "Workplace Intelligence",
    description:
      "Connect your teams, documents and productivity tools through a unified Microsoft ecosystem.",
  },

  {
    id: 2,
    latestWorkCardImg: latestWorkCardImg2,
    latestWorkTitle: "Microsoft Cloud",
    category: "CLOUD",
    aiText: "Cloud Intelligence",
    description:
      "Build scalable and secure cloud environments designed for modern digital businesses.",
  },

  {
    id: 3,
    latestWorkCardImg: latestWorkCardImg3,
    latestWorkTitle: "Microsoft Security",
    category: "SECURITY",
    aiText: "Cyber Intelligence",
    description:
      "Protect identities, applications, devices and data with intelligent enterprise security.",
  },

  {
    id: 4,
    latestWorkCardImg: latestWorkCardImg4,
    latestWorkTitle: "Power BI",
    category: "ANALYTICS",
    aiText: "Decision Intelligence",
    description:
      "Convert business data into actionable insights with powerful analytics and visualization.",
  },

  {
    id: 5,
    latestWorkCardImg: latestWorkCardImg5,
    latestWorkTitle: "Power Apps",
    category: "APPLICATIONS",
    aiText: "Application Intelligence",
    description:
      "Create powerful business applications faster with Microsoft's low-code ecosystem.",
  },

  {
    id: 6,
    latestWorkCardImg: latestWorkCardImg6,
    latestWorkTitle: "Power Automate",
    category: "AUTOMATION",
    aiText: "Process Intelligence",
    description:
      "Automate repetitive business processes and create intelligent workflows.",
  },

  {
    id: 7,
    latestWorkCardImg: latestWorkCardImg7,
    latestWorkTitle: "Power Pages",
    category: "DIGITAL",
    aiText: "Digital Experience",
    description:
      "Build secure digital portals and experiences that connect your business with customers.",
  },

  {
    id: 8,
    latestWorkCardImg: latestWorkCardImg8,
    latestWorkTitle: "CRM",
    category: "CUSTOMER",
    aiText: "Customer Intelligence",
    description:
      "Bring customer data, sales and business relationships together through intelligent CRM.",
  },

  {
    id: 9,
    latestWorkCardImg: latestWorkCardImg9,
    latestWorkTitle: "Microsoft Viva",
    category: "EMPLOYEE",
    aiText: "People Intelligence",
    description:
      "Create connected employee experiences that improve engagement and productivity.",
  },
];

// ============================================================
// COMPONENT
// ============================================================

const LatestWork = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    loop: true,
    spaceBetween: 28,
    centeredSlides: true,
    modules: [Autoplay],

    speed: 900,

    autoplay: {
      delay: 2800,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1.05,
      },

      576: {
        slidesPerView: 1.5,
      },

      768: {
        slidesPerView: 2,
      },

      992: {
        slidesPerView: 2.5,
      },

      1200: {
        slidesPerView: 3.2,
      },

      1400: {
        slidesPerView: 4,
      },
    },

    onSlideChange: (swiper) => {
      setActiveIndex(swiper.realIndex);
    },
  };

  return (
    <section
      className="relative overflow-hidden py-20 md:py-24 lg:py-28"
      style={{
        background: "#ffc27f",
      }}
    >
      {/* ======================================================
          AI BACKGROUND GRID
      ======================================================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(#0D47A1 1px, transparent 1px),
            linear-gradient(90deg, #0D47A1 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
        }}
      />

      {/* ======================================================
          SOFT AI GLOW
      ======================================================= */}

      <div className="pointer-events-none absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-white/40 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-orange-300/30 blur-[120px]" />

      {/* ======================================================
          ANIMATED ORB
      ======================================================= */}

      <div className="pointer-events-none absolute right-[12%] top-[15%] hidden lg:block">
        <div className="relative h-32 w-32">
          <div className="absolute inset-0 animate-ping rounded-full border border-[#0D47A1]/10" />

          <div className="absolute inset-4 rounded-full border border-dashed border-[#0D47A1]/20" />

          <div className="absolute inset-8 flex items-center justify-center rounded-full bg-[#0D47A1]/10 backdrop-blur-md">
            <HiOutlineCpuChip className="text-2xl text-[#0D47A1]" />
          </div>
        </div>
      </div>

      <div className="Container relative z-10">
        {/* ====================================================
            HEADER
        ===================================================== */}

        <div className="mx-auto max-w-[1000px] text-center">
          {/* AI BADGE */}

          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#0D47A1]/10 bg-white/40 px-5 py-2.5 shadow-sm backdrop-blur-xl">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0D47A1] text-white">
              <FaMicrosoft className="text-xs" />
            </span>

            <span className="font-Rajdhani text-[10px] font-bold uppercase tracking-[0.28em] text-[#0D47A1]">
              Microsoft AI Ecosystem
            </span>

            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
          </div>

          {/* SMALL TITLE */}

          <div className="mb-4 flex items-center justify-center gap-3">
            <img
              src={titleShape}
              draggable={false}
              alt="Shape"
              className="h-auto w-auto"
            />

            <span className="font-Rajdhani text-[18px] font-bold uppercase tracking-[0.2em] text-[#0D47A1]">
              Office 365 & More
            </span>

            <img
              src={titleShape}
              draggable={false}
              alt="Shape"
              className="h-auto w-auto"
            />
          </div>

          {/* MAIN TITLE */}

          <h1 className="font-Rajdhani text-[38px] font-bold leading-[1.05] text-[#082B55] sm:text-[46px] md:text-[56px]">
            Intelligent tools.
            <span className="block bg-gradient-to-r from-[#0D47A1] via-[#1565C0] to-[#00695C] bg-clip-text text-transparent">
              Infinite possibilities.
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-5 max-w-[760px] font-Nunito text-[15px] leading-7 text-[#0D47A1]/70 md:text-[17px]">
            Explore the Microsoft technologies powering modern businesses — from
            productivity and cloud computing to analytics, automation, security
            and AI.
          </p>
        </div>

        {/* ====================================================
            AI STATUS BAR
        ===================================================== */}

        <div className="mx-auto mt-10 flex max-w-[900px] flex-wrap items-center justify-center gap-3">
          {[
            "AI Powered",
            "Cloud Connected",
            "Enterprise Ready",
            "Microsoft Ecosystem",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-full border border-white/70 bg-white/35 px-4 py-2 backdrop-blur-md"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />

              <span className="font-Rajdhani text-[9px] font-bold uppercase tracking-[0.15em] text-[#0D47A1]/70">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* ====================================================
            CAROUSEL
        ===================================================== */}

        <div className="relative mt-14">
          {/* TOP LABEL */}

          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <HiOutlineSparkles className="text-[#0D47A1]" />

              <span className="font-Rajdhani text-[11px] font-bold uppercase tracking-[0.22em] text-[#0D47A1]">
                Intelligent Technology Stack
              </span>
            </div>

            <div className="hidden items-center gap-2 md:flex">
              <span className="font-Rajdhani text-[10px] font-bold uppercase tracking-widest text-[#0D47A1]/50">
                Explore Platform
              </span>

              <FaArrowRight className="text-xs text-[#0D47A1]/50" />
            </div>
          </div>

          {/* SWIPER */}

          <Swiper {...settings}>
            {latestWorkCard.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <SwiperSlide key={item.id}>
                  <div className="py-5">
                    <div
                      className={`group relative overflow-hidden rounded-[28px] border transition-all duration-700 ${
                        isActive
                          ? "border-white bg-white shadow-[0_25px_60px_rgba(13,71,161,0.20)]"
                          : "border-white/60 bg-white/55 shadow-[0_10px_35px_rgba(13,71,161,0.08)]"
                      }`}
                    >
                      {/* =================================================
                          IMAGE AREA
                      ================================================== */}

                      <div className="relative h-[240px] overflow-hidden bg-gradient-to-br from-white via-[#fff9f2] to-[#ffe9d1]">
                        {/* GRID */}

                        <div
                          className="pointer-events-none absolute inset-0 opacity-[0.07]"
                          style={{
                            backgroundImage: `
                              linear-gradient(#0D47A1 1px, transparent 1px),
                              linear-gradient(90deg, #0D47A1 1px, transparent 1px)
                            `,
                            backgroundSize: "28px 28px",
                          }}
                        />

                        {/* GLOW */}

                        <div
                          className={`absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#38BDF8]/20 blur-3xl transition-all duration-700 ${
                            isActive
                              ? "scale-150 opacity-100"
                              : "scale-100 opacity-40"
                          }`}
                        />

                        {/* IMAGE */}

                        <img
                          src={item.latestWorkCardImg}
                          alt={item.latestWorkTitle}
                          draggable={false}
                          className={`relative z-10 h-full w-full object-contain p-7 transition-transform duration-700 ${
                            isActive
                              ? "scale-105"
                              : "scale-100 group-hover:scale-105"
                          }`}
                        />

                        {/* NUMBER */}

                        <div className="absolute left-5 top-5 z-20">
                          <span className="font-Rajdhani text-[11px] font-bold tracking-[0.2em] text-[#0D47A1]/40">
                            0{item.id}
                          </span>
                        </div>

                        {/* MICROSOFT BADGE */}

                        <div className="absolute right-5 top-5 z-20 flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-3 py-1.5 shadow-sm backdrop-blur-md">
                          <FaMicrosoft className="text-[9px] text-[#0D47A1]" />

                          <span className="font-Rajdhani text-[8px] font-bold uppercase tracking-wider text-[#0D47A1]">
                            Microsoft
                          </span>
                        </div>

                        {/* CATEGORY */}

                        <div className="absolute bottom-4 left-5 z-20">
                          <span className="rounded-full border border-[#0D47A1]/10 bg-white/85 px-3 py-1.5 font-Rajdhani text-[9px] font-bold uppercase tracking-[0.16em] text-[#0D47A1] shadow-sm backdrop-blur-md">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      {/* =================================================
                          CONTENT
                      ================================================== */}

                      <div className="p-6">
                        {/* AI LABEL */}

                        <div className="mb-3 flex items-center gap-2">
                          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#0D47A1]/5 text-[#0D47A1]">
                            <HiOutlineSparkles />
                          </span>

                          <span className="font-Rajdhani text-[9px] font-bold uppercase tracking-[0.15em] text-[#0D47A1]/60">
                            {item.aiText}
                          </span>
                        </div>

                        {/* TITLE */}

                        <h3 className="font-Rajdhani text-[23px] font-bold leading-tight text-[#0D47A1]">
                          {item.latestWorkTitle}
                        </h3>

                        {/* DESCRIPTION */}

                        <p className="mt-3 min-h-[72px] font-Nunito text-[12px] leading-6 text-[#0D47A1]/65">
                          {item.description}
                        </p>

                        {/* BOTTOM */}

                        <div className="mt-5 flex items-center justify-between border-t border-[#0D47A1]/10 pt-4">
                          {/* STATUS */}

                          <div className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />

                              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                            </span>

                            <span className="font-Rajdhani text-[9px] font-bold uppercase tracking-[0.15em] text-[#0D47A1]/50">
                              AI Ready
                            </span>
                          </div>

                          {/* ARROW */}
                          <NavLink to={"/Microsoft-Service"}>
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0D47A1]/5 text-[#0D47A1] transition-all duration-300 group-hover:bg-[#0D47A1] group-hover:text-white">
                              <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
                            </div>
                          </NavLink>
                        </div>
                      </div>

                      {/* ACTIVE LINE */}

                      <div
                        className={`absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#0D47A1] via-[#1976D2] to-[#38BDF8] transition-all duration-700 ${
                          isActive ? "w-full" : "w-0"
                        }`}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* ====================================================
            PROGRESS
        ===================================================== */}

        <div className="mx-auto mt-8 flex max-w-[800px] items-center gap-4">
          <span className="font-Rajdhani text-[10px] font-bold text-[#0D47A1]/50">
            0{activeIndex + 1}
          </span>

          <div className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-[#0D47A1]/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#0D47A1] to-[#38BDF8] transition-all duration-500"
              style={{
                width: `${((activeIndex + 1) / latestWorkCard.length) * 100}%`,
              }}
            />
          </div>

          <span className="font-Rajdhani text-[10px] font-bold text-[#0D47A1]/50">
            09
          </span>
        </div>

        {/* ====================================================
            BOTTOM AI PANEL
        ===================================================== */}

        <div className="mx-auto mt-12 max-w-[1050px]">
          <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/35 p-6 shadow-[0_15px_50px_rgba(13,71,161,0.08)] backdrop-blur-xl md:p-8">
            {/* MOVING LINE */}

            <div className="absolute left-0 top-0 h-[2px] w-full overflow-hidden">
              <div className="h-full w-1/3 animate-[slide_4s_linear_infinite] bg-gradient-to-r from-transparent via-[#0D47A1] to-transparent" />
            </div>

            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[#0D47A1] text-white shadow-lg">
                  <HiOutlineCpuChip className="text-2xl" />
                </div>

                <div>
                  <p className="font-Rajdhani text-[9px] font-bold uppercase tracking-[0.25em] text-[#0D47A1]/50">
                    Microsoft Digital Stack
                  </p>

                  <h3 className="font-Rajdhani text-[23px] font-bold text-[#0D47A1]">
                    One ecosystem. Every business need.
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {["Cloud", "AI", "Analytics", "Automation"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#0D47A1]/10 bg-white/50 px-4 py-2 font-Rajdhani text-[9px] font-bold uppercase tracking-wider text-[#0D47A1]/60"
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================
          ANIMATION
      ======================================================= */}

      <style>{`

        @keyframes slide {
          0% {
            transform: translateX(-100%);
          }

          100% {
            transform: translateX(400%);
          }
        }

      `}</style>
    </section>
  );
};

export default LatestWork;

// Avinash 888
