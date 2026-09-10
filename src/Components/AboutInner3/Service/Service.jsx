// import serviceIcon2 from '/images/icon1_About-Us.png';
// import serviceIcon3 from '/images/icon2_About-Us.png';
// import serviceIcon4 from '/images/icon3_About-Us.png';
// import titleShape from '/images/sub-title-shape.png';
// import ServiceCard from './ServiceCard';
// import { GoArrowRight } from 'react-icons/go';

// const serviceData = [
//   {
//     id: 1,
//     serviceIcon: serviceIcon2,
//     serviceTitle: 'Our Technology Solutions',
//     serviceDesc:
//       'Authoritatively disintermediate business to optimal web-readiness task vertical service timely human capital',
//     serviceUrl: '/genAI',
//     serviceBtnText: 'View Microsoft Services',
//     serviceBtnIcon: <GoArrowRight />,
//   },
//   {
//     id: 2,
//     serviceIcon: serviceIcon3,
//     serviceTitle: 'Why should choose Our Services',
//     serviceDesc:
//       'Authoritatively disintermediate business to optimal web-readiness task vertical service timely human capital',
//     serviceUrl: '/Software_Development',
//     serviceBtnText: 'Software Development',
//     serviceBtnIcon: <GoArrowRight />,
//   },
//   {
//     id: 3,
//     serviceIcon: serviceIcon4,
//     serviceTitle: 'BlueLync Mission and vision',
//     serviceDesc:
//       'Authoritatively disintermediate business to optimal web-readiness task vertical service timely human capital',
//     serviceUrl: '/About-Us',
//     serviceBtnText: 'About Us',
//     serviceBtnIcon: <GoArrowRight />,
//   },
// ];

// const Service = () => {
//   return (
//     <section className=' bg-center py-16 md:py-20 lg:py-10 relative z-10'>
//       <div className='Container '>
//         <div className='text-center'>
//           {/* <h5 className='flex items-center justify-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
//             <img
//               src={titleShape}
//               draggable={false}
//               alt='Shape'
//             />{' '}
//             More About{' '}
//             <img
//               src={titleShape}
//               draggable={false}
//               alt='Shape'
//             />
//           </h5> */}
//           <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[36px] md:leading-[46px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-[#0D47A1] mt-[14px] mb-4'>
//             Driving Change with Innovative
//             <br /> Successful Softwares
//           </h1>
//         </div>
//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 relative z-10 mt-12'>
//           {serviceData.map(
//             ({
//               id,
//               serviceIcon,
//               serviceTitle,
//               serviceDesc,
//               serviceUrl,
//               serviceBtnText,
//               serviceBtnIcon,
//             }) => {
//               return (
//                 <div key={id} className='text-[#0D47A1]'>
//                   <ServiceCard
//                     serviceIcon={serviceIcon}
//                     serviceTitle={serviceTitle}
//                     serviceDesc={serviceDesc}
//                     serviceUrl={serviceUrl}
//                     serviceBtnText={serviceBtnText}
//                     serviceBtnIcon={serviceBtnIcon}
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

// export default Service;

import { NavLink } from "react-router-dom";
import serviceIcon2 from "/images/icon1_About-Us.png";
import serviceIcon3 from "/images/icon2_About-Us.png";
import serviceIcon4 from "/images/icon3_About-Us.png";

import { GoArrowUpRight } from "react-icons/go";
import { HiOutlineSparkles } from "react-icons/hi2";
import { FiCpu, FiCode, FiTarget } from "react-icons/fi";

const serviceData = [
  {
    id: "01",
    icon: serviceIcon2,
    fallbackIcon: FiCpu,
    label: "AI TECHNOLOGY",
    serviceTitle: "Intelligent Technology Solutions",
    serviceDesc:
      "Transform your business with AI-powered solutions, Microsoft technologies, cloud platforms and intelligent automation built for the next generation.",
    serviceUrl: "/genAI",
    serviceBtnText: "Explore AI Solutions",
    accent: "#38BDF8",
  },

  {
    id: "02",
    icon: serviceIcon3,
    fallbackIcon: FiCode,
    label: "ENGINEERING",
    serviceTitle: "Next-Gen Software Development",
    serviceDesc:
      "Build scalable digital products with modern engineering practices, cloud-native architecture and high-performance application development.",
    serviceUrl: "/Software_Development",
    serviceBtnText: "Explore Development",
    accent: "#818CF8",
  },

  {
    id: "03",
    icon: serviceIcon4,
    fallbackIcon: FiTarget,
    label: "VISION",
    serviceTitle: "Mission, Vision & Innovation",
    serviceDesc:
      "Discover how our people, technology and strategic thinking come together to create meaningful digital transformation for businesses worldwide.",
    serviceUrl: "/About-Us",
    serviceBtnText: "Discover Our Story",
    accent: "#22D3EE",
  },
];

const Service = () => {
  return (
    <section className="relative overflow-hidden bg-[#061426] py-20 md:py-24 lg:py-28">
      {/* =====================================================
          AI BACKGROUND GRID
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
        }}
      />

      {/* =====================================================
          GLOW EFFECTS
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-[-150px] h-[500px] w-[500px] rounded-full bg-[#1976D2]/15 blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 bottom-[-150px] h-[500px] w-[500px] rounded-full bg-[#06B6D4]/10 blur-[150px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6366F1]/5 blur-[140px]" />

      {/* =====================================================
          DECORATIVE AI NODES
      ====================================================== */}

      <div className="pointer-events-none absolute left-[8%] top-[22%] h-2 w-2 rounded-full bg-[#38BDF8] shadow-[0_0_20px_#38BDF8]" />

      <div className="pointer-events-none absolute right-[12%] top-[18%] h-1.5 w-1.5 rounded-full bg-[#818CF8] shadow-[0_0_20px_#818CF8]" />

      <div className="pointer-events-none absolute bottom-[20%] left-[15%] h-1.5 w-1.5 rounded-full bg-[#22D3EE] shadow-[0_0_20px_#22D3EE]" />

      <div className="pointer-events-none absolute bottom-[15%] right-[8%] h-2 w-2 rounded-full bg-[#38BDF8] shadow-[0_0_20px_#38BDF8]" />

      <div className="Container relative z-10">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-[900px] text-center">
          {/* AI LABEL */}

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#38BDF8]/20 bg-[#38BDF8]/5 px-4 py-2 backdrop-blur-md">
            <HiOutlineSparkles className="text-[#38BDF8]" />

            <span className="font-Rajdhani text-[12px] font-bold uppercase tracking-[0.3em] text-[#7DD3FC]">
              What We Do
            </span>
          </div>

          {/* TITLE */}

          <h1 className="font-Rajdhani text-[40px] font-bold leading-[1.05] text-white sm:text-[48px] md:text-[58px] lg:text-[64px]">
            Technology that thinks.
            <span className="block bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#818CF8] bg-clip-text text-transparent">
              Solutions that perform.
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-6 max-w-[720px] font-Nunito text-[15px] leading-7 text-slate-400 md:text-[17px]">
            We combine artificial intelligence, modern engineering and strategic
            thinking to help businesses build, scale and innovate faster.
          </p>
        </div>

        {/* =====================================================
            AI CORE LINE
        ====================================================== */}

        <div className="relative mx-auto my-14 flex max-w-[900px] items-center justify-center">
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#38BDF8]/20 to-transparent" />

          <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#38BDF8]/30 bg-[#0A1B30] shadow-[0_0_40px_rgba(56,189,248,0.1)]">
            <FiCpu className="text-xl text-[#38BDF8]" />

            <span className="absolute inset-[-6px] rounded-full border border-dashed border-[#38BDF8]/20 animate-[spin_12s_linear_infinite]" />
          </div>
        </div>

        {/* =====================================================
            SERVICE CARDS
        ====================================================== */}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {serviceData.map((service) => {
            const FallbackIcon = service.fallbackIcon;

            return (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-white/[0.04] p-[1px] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3"
              >
                {/* CARD */}

                <div className="relative h-full overflow-hidden rounded-[29px] bg-[#0A1B30] p-7 md:p-8">
                  {/* Hover Glow */}

                  <div
                    className="absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-0 blur-[80px] transition-opacity duration-700 group-hover:opacity-30"
                    style={{
                      backgroundColor: service.accent,
                    }}
                  />

                  {/* Number */}

                  <div className="absolute right-7 top-6">
                    <span className="font-Rajdhani text-[13px] font-bold tracking-[0.25em] text-white/20">
                      {service.id}
                    </span>
                  </div>

                  {/* =====================================================
                      ICON
                  ====================================================== */}

                  <div className="relative mb-8 flex items-center justify-between">
                    <div
                      className="relative flex h-[72px] w-[72px] items-center justify-center overflow-hidden rounded-2xl border bg-white/[0.04] transition-all duration-500 group-hover:scale-110"
                      style={{
                        borderColor: `${service.accent}35`,
                        boxShadow: `0 0 35px ${service.accent}10`,
                      }}
                    >
                      {/* Image */}

                      <img
                        src={service.icon}
                        alt={service.serviceTitle}
                        draggable={false}
                        className="h-11 w-11 object-contain transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Fallback visual */}

                      <div className="absolute inset-0 -z-10 flex items-center justify-center">
                        <FallbackIcon
                          className="text-3xl"
                          style={{
                            color: service.accent,
                          }}
                        />
                      </div>
                    </div>

                    {/* AI Status */}

                    <div className="flex items-center gap-2">
                      <span
                        className="h-1.5 w-1.5 rounded-full shadow-[0_0_12px_currentColor]"
                        style={{
                          color: service.accent,
                          backgroundColor: service.accent,
                        }}
                      />

                      <span className="font-Rajdhani text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                        Active
                      </span>
                    </div>
                  </div>

                  {/* =====================================================
                      LABEL
                  ====================================================== */}

                  <span
                    className="font-Rajdhani text-[11px] font-bold uppercase tracking-[0.25em]"
                    style={{
                      color: service.accent,
                    }}
                  >
                    {service.label}
                  </span>

                  {/* =====================================================
                      TITLE
                  ====================================================== */}

                  <h3 className="mt-3 max-w-[340px] font-Rajdhani text-[27px] font-bold leading-tight text-white">
                    {service.serviceTitle}
                  </h3>

                  {/* =====================================================
                      DESCRIPTION
                  ====================================================== */}

                  <p className="mt-5 min-h-[120px] font-Nunito text-[14px] leading-7 text-slate-400">
                    {service.serviceDesc}
                  </p>

                  {/* =====================================================
                      CTA
                  ====================================================== */}

                  <div className="mt-7">
                    {/* <a
                      href={service.serviceUrl}
                      className="group/btn inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 font-Rajdhani text-[14px] font-bold text-white transition-all duration-300 hover:border-transparent"
                      style={{
                        ["--accent-color"]: service.accent,
                      }}
                    >
                      <span className="transition-colors duration-300 group-hover/btn:text-[var(--accent-color)]">
                        {service.serviceBtnText}
                      </span>

                      <span
                        className="flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 group-hover/btn:translate-x-1"
                        style={{
                          backgroundColor: `${service.accent}18`,
                          color: service.accent,
                        }}
                      >
                        <GoArrowUpRight className="text-lg" />
                      </span>
                    </a> */}

                    <NavLink
                      to={service.serviceUrl}
                      className="group/btn inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 font-Rajdhani text-[14px] font-bold text-white transition-all duration-300 hover:border-transparent"
                      style={{
                        ["--accent-color"]: service.accent,
                      }}
                    >
                      <span className="transition-colors duration-300 group-hover/btn:text-[var(--accent-color)]">
                        {service.serviceBtnText}
                      </span>

                      <span
                        className="flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 group-hover/btn:translate-x-1"
                        style={{
                          backgroundColor: `${service.accent}18`,
                          color: service.accent,
                        }}
                      >
                        <GoArrowUpRight className="text-lg" />
                      </span>
                    </NavLink>
                  </div>

                  {/* =====================================================
                      BOTTOM LINE
                  ====================================================== */}

                  <div
                    className="absolute bottom-0 left-0 h-[3px] w-0 transition-all duration-700 group-hover:w-full"
                    style={{
                      background: `linear-gradient(90deg, ${service.accent}, transparent)`,
                    }}
                  />

                  {/* =====================================================
                      CORNER PATTERN
                  ====================================================== */}

                  <div
                    className="absolute bottom-[-35px] right-[-35px] h-28 w-28 rounded-full border opacity-10"
                    style={{
                      borderColor: service.accent,
                    }}
                  />

                  <div
                    className="absolute bottom-[-20px] right-[-20px] h-16 w-16 rounded-full border opacity-10"
                    style={{
                      borderColor: service.accent,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM MESSAGE
        ====================================================== */}

        <div className="mt-14 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <span className="font-Rajdhani text-sm font-medium text-slate-500">
            AI
          </span>

          <span className="h-1 w-1 rounded-full bg-[#38BDF8]" />

          <span className="font-Rajdhani text-sm font-medium text-slate-500">
            Engineering
          </span>

          <span className="h-1 w-1 rounded-full bg-[#818CF8]" />

          <span className="font-Rajdhani text-sm font-bold text-[#38BDF8]">
            Innovation
          </span>
        </div>
      </div>
    </section>
  );
};

export default Service;

// Aviansh 222
