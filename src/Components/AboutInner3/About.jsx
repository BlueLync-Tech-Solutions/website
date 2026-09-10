// import aboutThumb from '/images/left-img-1.png';
// import titleShape from '/images/sub-title-shape.png';
// import itemIcon from '/images/tam1.png';
// import itemIcon2 from '/images/terget-1.png';
// import itemIcon3 from '/images/time.png';
// import itemIcon4 from '/images/message.png';
// import arrowShape from '/images/arrow-shape.png';
// import Marquee from "./Marquee/Marquee";
// import { Link } from 'react-router-dom';
// import { AiOutlineRise } from 'react-icons/ai';
// import OnScrollCounter from '../../Shared/Counter/OnScrollCounter';
// import {
//   FaReact,
//   FaNodeJs,
//   FaAngular,
//   FaPython,
//   FaJava,
//   FaAws,
//   FaHtml5,
//   FaCss3Alt,
// } from 'react-icons/fa';

// const About = () => {
//   return (
//     <section className="relative overflow-hidden">
//       <Marquee />

//       {/* ============ Technologies Section ============ */}
//       <div className="py-16 md:py-20 lg:py-[30px]" style={{'background': ' #80d8ff'}}>
//         <div className="Container text-center">
//           <h5 className="flex items-center justify-center gap-2 font-Rajdhani text-[30px] font-bold text-[#0D47A1] uppercase">
//             <img src={titleShape} alt="Shape" draggable={false} />
//             Technologies We Work With
//           </h5>

//           <h2 className="font-Rajdhani font-bold text-[32px] sm:text-[40px] md:text-[46px] text-[#0D47A1] mt-4 mb-5">
//             Cutting-Edge Tools That Power Our Innovation
//           </h2>

//           <p className=" mx-auto font-Nunito text-[#0D47A1] font-medimum text-[25px]  mb-10">
//             We combine the latest technologies and frameworks to deliver robust, scalable,
//             and future-ready digital solutions for our global clients.
//           </p>

//           <div className="flex flex-wrap justify-center items-center gap-8">
//             {[
//               { icon: <FaReact />, name: 'React' },
//               { icon: <FaNodeJs />, name: 'Node.js' },
//               { icon: <FaAngular />, name: 'Angular' },
//               { icon: <FaPython />, name: 'Python' },
//               { icon: <FaJava />, name: 'Java' },
//               { icon: <FaAws />, name: 'AWS' },
//               { icon: <FaHtml5 />, name: 'HTML5' },
//               { icon: <FaCss3Alt />, name: 'CSS3' },
//             ].map((tech, i) => (
//               <div
//                 key={i}
//                 className="flex flex-col items-center justify-center text-center group transition-transform hover:-translate-y-2"
//               >
//                 <div className="text-5xl text-PrimaryColor-0 group-hover:scale-110 transition-transform duration-300">
//                   {tech.icon}
//                 </div>
//                 <p className="mt-3 font-Rajdhani font-semibold text-[#0D47A1] text-lg">
//                   {tech.name}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       {/* ============ About Us Section ============ */}
//       <div className="py-16 md:py-20 lg:py-[30px] relative" style={{'background': ' #ffc27f'}}>
//         <div className="Container">
//           <div className="flex flex-col lg:flex-row items-center gap-10">
//             {/* Left Side – Image and Stats */}
//             <div className="relative w-full lg:w-1/2 flex justify-center ">
//               <img
//                 src={aboutThumb}
//                 draggable="false"
//                 className="rounded-2xl shadow-lg w-[90%] md:w-[80%]"
//                 alt="About us"
//               />

//               {/* Floating Growth Card */}
//               <div className="absolute bottom-[-30px] right-[10%] bg-gradient-to-r from-PrimaryColor2-0 to-PrimaryColor3-0 rounded-xl text-center px-6 py-5 shadow-xl animate-fade-in-up">
//                 <div className="text-white text-3xl mb-1 flex justify-center">
//                   <AiOutlineRise />
//                 </div>
//                 <div className="text-3xl md:text-4xl font-Rajdhani font-bold text-white flex justify-center items-center">
//                   <OnScrollCounter start={0} end={300} duration={2500} />
//                   <span className="ml-1">%</span>
//                 </div>
//                 <h6 className="text-sm md:text-base text-white mt-1">
//                   Organic Growth Rate
//                 </h6>
//               </div>
//             </div>

//             {/* Right Side – Content */}
//             <div className="w-full lg:w-1/2 relative">
//               <h5 className="flex items-center gap-2 font-Rajdhani text-[30px] font-bold text-[#0D47A1] uppercase">
//                 <img src={titleShape} alt="Shape" draggable={false} />
//                 About Us
//               </h5>

//               <h1 className="font-Rajdhani font-bold text-[32px] sm:text-[42px] md:text-[48px] text-[#0D47A1] leading-snug  mb-4">
//                 Empowering Businesses with
//                 <br className="hidden md:block" />
//                 Innovative IT Solutions
//               </h1>

//               <p className="font-Nunito text-[#0D47A1]  mb-8">
//                 We are a forward-thinking IT software company, transforming ideas into
//                 digital success. With a passion for technology and a focus on innovation,
//                 we deliver cutting-edge solutions that empower businesses to thrive in the
//                 digital era.
//               </p>

//               {/* Feature List */}
//               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 mb-10">
//                 {[
//                   { icon: itemIcon, text: 'Custom Software Development' },
//                   { icon: itemIcon2, text: 'User-Centric Design Approach' },
//                   { icon: itemIcon3, text: 'Agile Project Management' },
//                   { icon: itemIcon4, text: '24/7 Client Support & Consulting' },
//                 ].map((item, index) => (
//                   <li
//                     key={index}
//                     className="flex items-center gap-4 transition-transform duration-300 hover:translate-x-2"
//                   >
//                     <img
//                       src={item.icon}
//                       alt="Feature Icon"
//                       className="w-[42px] h-[42px]"
//                       draggable={false}
//                     />
//                     <h5 className="font-Rajdhani font-semibold text-xl text-[#0D47A1]">
//                       {item.text}
//                     </h5>
//                   </li>
//                 ))}
//               </ul>

//               {/* Bottom CTA */}
//               <div className="flex items-center gap-10">
//                 <Link to="/about3" className="inline-block">
//                   <button className="primary-btn">
//                     Discover More
//                     <span className="icon-style">
//                       <svg
//                         className="inline-block h-[12px] w-auto ml-2"
//                         xmlns="http://www.w3.org/2000/svg"
//                         stroke="white"
//                         fill="none"
//                         viewBox="0 0 14.2 14.2"
//                       >
//                         <path d="M13.2 9V1h-8M13.4.8.7 13.5" />
//                       </svg>
//                     </span>
//                   </button>
//                 </Link>

//                 <img
//                   src={arrowShape}
//                   alt="Arrow Shape"
//                   className="animate-bounce hidden sm:block w-[60px]"
//                   draggable={false}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Background Accent Shapes */}
//         <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-to-bl from-PrimaryColor3-0 to-transparent opacity-20 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-gradient-to-tr from-PrimaryColor2-0 to-transparent opacity-20 rounded-full blur-3xl"></div>
//       </div>
//     </section>
//   );
// };

// export default About;


import aboutThumb from '/images/left-img-1.png';
import itemIcon from '/images/tam1.png';
import itemIcon2 from '/images/terget-1.png';
import itemIcon3 from '/images/time.png';
import itemIcon4 from '/images/message.png';
import Marquee from './Marquee/Marquee';

import { Link } from 'react-router-dom';

import { AiOutlineRise } from 'react-icons/ai';
import { FiArrowUpRight, FiCpu, FiZap } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi2';

import {
  FaReact,
  FaNodeJs,
  FaAngular,
  FaPython,
  FaJava,
  FaAws,
  FaHtml5,
  FaCss3Alt,
} from 'react-icons/fa';

import OnScrollCounter from '../../Shared/Counter/OnScrollCounter';

const technologies = [
  {
    icon: <FaReact />,
    name: 'React',
    color: '#61DAFB',
  },
  {
    icon: <FaNodeJs />,
    name: 'Node.js',
    color: '#68A063',
  },
  {
    icon: <FaAngular />,
    name: 'Angular',
    color: '#DD0031',
  },
  {
    icon: <FaPython />,
    name: 'Python',
    color: '#3776AB',
  },
  {
    icon: <FaJava />,
    name: 'Java',
    color: '#E76F00',
  },
  {
    icon: <FaAws />,
    name: 'AWS',
    color: '#FF9900',
  },
  {
    icon: <FaHtml5 />,
    name: 'HTML5',
    color: '#E34F26',
  },
  {
    icon: <FaCss3Alt />,
    name: 'CSS3',
    color: '#1572B6',
  },
];

const features = [
  {
    icon: itemIcon,
    title: 'Custom Software Development',
  },
  {
    icon: itemIcon2,
    title: 'User-Centric Design',
  },
  {
    icon: itemIcon3,
    title: 'Agile Project Management',
  },
  {
    icon: itemIcon4,
    title: '24/7 Client Support',
  },
];

const About = () => {
  return (
    <section className="relative overflow-hidden bg-[#050F1D]">

      <Marquee />

      {/* =====================================================
          GLOBAL AI BACKGROUND
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56,189,248,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.8) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* =====================================================
          AI GLOWS
      ====================================================== */}

      <div className="pointer-events-none absolute left-[-250px] top-[100px] h-[600px] w-[600px] rounded-full bg-[#0D47A1]/30 blur-[180px]" />

      <div className="pointer-events-none absolute right-[-250px] top-[500px] h-[600px] w-[600px] rounded-full bg-[#06B6D4]/15 blur-[180px]" />

      {/* =====================================================
          TECHNOLOGIES SECTION
      ====================================================== */}

      <section className="relative py-20 md:py-24 lg:py-28">

        <div className="Container relative z-10">

          {/* HEADER */}

          <div className="mx-auto max-w-[900px] text-center">

            {/* AI BADGE */}

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#38BDF8]/20 bg-[#38BDF8]/5 px-5 py-2.5 backdrop-blur-md">

              <HiOutlineSparkles className="text-[#38BDF8]" />

              <span className="font-Rajdhani text-[11px] font-bold uppercase tracking-[0.3em] text-[#7DD3FC]">
                Technology Intelligence
              </span>

            </div>

            {/* TITLE */}

            <h2 className="font-Rajdhani text-[40px] font-bold leading-[1.05] text-white sm:text-[50px] md:text-[60px] lg:text-[68px]">

              The technology behind

              <span className="block bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#818CF8] bg-clip-text text-transparent">
                intelligent transformation.
              </span>

            </h2>

            <p className="mx-auto mt-6 max-w-[720px] font-Nunito text-[15px] leading-7 text-slate-400 md:text-[17px]">
              We combine modern engineering, artificial intelligence and
              cloud technologies to create scalable digital ecosystems that
              evolve with your business.
            </p>

          </div>

          {/* =====================================================
              TECHNOLOGY NETWORK
          ====================================================== */}

          <div className="relative mt-14">

            {/* Network Line */}

            <div className="absolute left-[8%] right-[8%] top-1/2 hidden h-px bg-gradient-to-r from-transparent via-[#38BDF8]/20 to-transparent lg:block" />

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8 lg:gap-5">

              {technologies.map((tech, index) => (

                <div
                  key={index}
                  className="group relative flex min-h-[150px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-white/20 hover:bg-white/[0.07]"
                >

                  {/* Glow */}

                  <div
                    className="absolute h-20 w-20 rounded-full opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-30"
                    style={{
                      backgroundColor: tech.color,
                    }}
                  />

                  {/* Icon */}

                  <div
                    className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition-all duration-500 group-hover:scale-110"
                    style={{
                      boxShadow: `0 0 30px ${tech.color}08`,
                    }}
                  >

                    <span
                      className="text-[40px]"
                      style={{
                        color: tech.color,
                      }}
                    >
                      {tech.icon}
                    </span>

                  </div>

                  {/* Name */}

                  <p className="relative z-10 mt-4 font-Rajdhani text-[15px] font-bold text-white/80 transition-colors duration-300 group-hover:text-white">
                    {tech.name}
                  </p>

                  {/* Status */}

                  <div className="mt-2 flex items-center gap-1.5">

                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{
                        backgroundColor: tech.color,
                        boxShadow: `0 0 10px ${tech.color}`,
                      }}
                    />

                    <span className="font-Rajdhani text-[9px] uppercase tracking-widest text-white/30">
                      Active
                    </span>

                  </div>

                  {/* Bottom Line */}

                  <div
                    className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 transition-all duration-500 group-hover:w-1/2"
                    style={{
                      backgroundColor: tech.color,
                    }}
                  />

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          ABOUT / AI INTELLIGENCE SECTION
      ====================================================== */}

      <section className="relative overflow-hidden border-t border-white/[0.05] py-20 md:py-28">

        <div className="Container relative z-10">

          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">

            {/* =================================================
                LEFT IMAGE / AI CORE
            ================================================== */}

            <div className="relative flex justify-center">

              {/* Outer AI Rings */}

              <div className="absolute h-[470px] w-[470px] rounded-full border border-[#38BDF8]/10 animate-[spin_30s_linear_infinite]" />

              <div className="absolute h-[400px] w-[400px] rounded-full border border-dashed border-[#1976D2]/15 animate-[spin_20s_linear_infinite_reverse]" />

              {/* Glow */}

              <div className="absolute h-[350px] w-[350px] rounded-full bg-[#1976D2]/20 blur-[100px]" />

              {/* Image Frame */}

              <div className="group relative z-10 w-[82%] max-w-[470px]">

                {/* Top Status */}

                <div className="absolute -top-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-[#38BDF8]/20 bg-[#0A1B30]/90 px-4 py-2 shadow-[0_0_30px_rgba(56,189,248,0.1)] backdrop-blur-xl">

                  <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8] shadow-[0_0_12px_#38BDF8]" />

                  <span className="font-Rajdhani text-[10px] font-bold uppercase tracking-[0.2em] text-[#7DD3FC]">
                    AI Engine Online
                  </span>

                </div>

                {/* Image */}

                <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0A1B30] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.4)]">

                  <div className="relative overflow-hidden rounded-[26px]">

                    <img
                      src={aboutThumb}
                      draggable={false}
                      alt="About BlueLync"
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* AI Scan */}

                    <div className="pointer-events-none absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent opacity-80 shadow-[0_0_20px_#38BDF8] animate-[scan_4s_linear_infinite]" />

                    {/* Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#050F1D]/70 via-transparent to-transparent" />

                  </div>

                </div>

                {/* =================================================
                    GROWTH CARD
                ================================================== */}

                <div className="absolute -bottom-8 -right-5 z-20 rounded-2xl border border-[#38BDF8]/20 bg-[#0A1B30]/95 px-6 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl md:-right-10">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#38BDF8]/10">

                      <AiOutlineRise className="text-xl text-[#38BDF8]" />

                    </div>

                    <div>

                      <div className="flex items-center font-Rajdhani text-3xl font-bold text-white">

                        <OnScrollCounter
                          start={0}
                          end={300}
                          duration={2500}
                        />

                        <span className="ml-1 text-[#38BDF8]">
                          %
                        </span>

                      </div>

                      <p className="font-Rajdhani text-[10px] uppercase tracking-widest text-slate-400">
                        Growth Potential
                      </p>

                    </div>

                  </div>

                </div>

                {/* Floating AI Node */}

                <div className="absolute -left-7 top-[35%] z-20 hidden h-12 w-12 items-center justify-center rounded-xl border border-[#818CF8]/20 bg-[#0A1B30]/90 shadow-xl backdrop-blur-md sm:flex">

                  <FiCpu className="text-lg text-[#818CF8]" />

                </div>

              </div>

            </div>

            {/* =================================================
                RIGHT CONTENT
            ================================================== */}

            <div>

              {/* LABEL */}

              <div className="mb-6 flex items-center gap-3">

                <span className="h-px w-10 bg-gradient-to-r from-[#38BDF8] to-transparent" />

                <span className="font-Rajdhani text-[11px] font-bold uppercase tracking-[0.3em] text-[#38BDF8]">
                  About Our Intelligence
                </span>

              </div>

              {/* TITLE */}

              <h1 className="font-Rajdhani text-[40px] font-bold leading-[1.05] text-white sm:text-[48px] md:text-[56px]">

                Empowering businesses

                <span className="block bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#818CF8] bg-clip-text text-transparent">
                  with intelligent technology.
                </span>

              </h1>

              {/* DESCRIPTION */}

              <p className="mt-7 font-Nunito text-[15px] leading-8 text-slate-400 md:text-[17px]">
                We are a forward-thinking technology company transforming
                ideas into digital success. Our approach combines artificial
                intelligence, software engineering and strategic thinking to
                create solutions that solve real business problems.
              </p>

              <p className="mt-4 font-Nunito text-[15px] leading-8 text-slate-500">
                From intelligent automation to enterprise software, we help
                organizations become faster, smarter and more adaptable in a
                rapidly changing digital world.
              </p>

              {/* =================================================
                  FEATURES
              ================================================== */}

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">

                {features.map((item, index) => (

                  <div
                    key={index}
                    className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/20 hover:bg-white/[0.06]"
                  >

                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#38BDF8]/5">

                      <img
                        src={item.icon}
                        alt={item.title}
                        className="h-7 w-7 object-contain"
                        draggable={false}
                      />

                    </div>

                    <h5 className="font-Rajdhani text-[15px] font-semibold text-white/80 transition-colors duration-300 group-hover:text-[#7DD3FC]">
                      {item.title}
                    </h5>

                  </div>

                ))}

              </div>

              {/* =================================================
                  CTA
              ================================================== */}

              <div className="mt-9 flex flex-wrap items-center gap-6">

                <Link
                  to="/technologyIntro"
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#0D47A1] to-[#1976D2] px-7 py-3.5 font-Rajdhani text-[15px] font-bold text-white shadow-[0_10px_35px_rgba(25,118,210,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(56,189,248,0.3)]"
                >

                  Discover More

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">

                    <FiArrowUpRight className="text-base" />

                  </span>

                </Link>

                <div className="flex items-center gap-2">

                  <FiZap className="text-[#38BDF8]" />

                  <span className="font-Rajdhani text-[11px] uppercase tracking-[0.2em] text-slate-500">
                    Built for the future
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </section>
  );
};

export default About;


// Avinash 444
