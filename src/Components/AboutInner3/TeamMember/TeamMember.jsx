
// import { Link } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import titleShape from '/images/sub-title-shape.png';
// import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaXTwitter } from 'react-icons/fa6';
// import { IoShareSocialOutline } from 'react-icons/io5';

// import teamThumb from '/images/team.png';
// import teamThumb3 from '/images/team_4.png';
// import teamThumb4 from '/images/team.png';

// const teamData = [
//   { id: 1, teamThumb: teamThumb, teamTitle: 'Sri Latha Kaku', teamDesc: 'Founder & Director' },
//   { id: 2, teamThumb: teamThumb3, teamTitle: 'Prasad Kaku', teamDesc: 'Business Head' },
//   { id: 3, teamThumb: teamThumb3, teamTitle: 'Sobhan M', teamDesc: 'Project Delivery Manager' },
//   { id: 4, teamThumb: teamThumb3, teamTitle: 'Vinnu', teamDesc: 'Development Lead' },
//   { id: 5, teamThumb: teamThumb4, teamTitle: 'Nova', teamDesc: 'HR' },
//   { id: 6, teamThumb: teamThumb3, teamTitle: 'Praveen Mekala', teamDesc: 'Power Apps Developer' },
//   { id: 7, teamThumb: teamThumb3, teamTitle: 'Surendra', teamDesc: 'Data Engineer' },
//   { id: 8, teamThumb: teamThumb3, teamTitle: 'Vasu', teamDesc: 'SharePoint' },
//   { id: 9, teamThumb: teamThumb4, teamTitle: 'Sowjanya', teamDesc: 'Designer' },
//   { id: 10, teamThumb: teamThumb4, teamTitle: 'Sudha', teamDesc: '.Net Developer' },
//   { id: 11, teamThumb: teamThumb4, teamTitle: 'Triveni', teamDesc: 'Tester' },
//   { id: 12, teamThumb: teamThumb3, teamTitle: 'Madhu', teamDesc: 'Sr. Java Developer' },
//   { id: 13, teamThumb: teamThumb3, teamTitle: 'Prabhu', teamDesc: 'Sr. dot net Developer' },
//   { id: 14, teamThumb: teamThumb3, teamTitle: 'Ramesh', teamDesc: 'Sr. dot net Developer' },
//   { id: 15, teamThumb: teamThumb3, teamTitle: 'Girish', teamDesc: 'CTO' },
//   { id: 16, teamThumb: teamThumb3, teamTitle: 'Sunil', teamDesc: 'Delivery Manager' },
//   { id: 17, teamThumb: teamThumb3, teamTitle: 'Phani', teamDesc: 'Client Relationship Manager' },
//   { id: 18, teamThumb: teamThumb3, teamTitle: 'Sarathi', teamDesc: 'Delivery Manager' },
//   { id: 19, teamThumb: teamThumb3, teamTitle: 'Sheik', teamDesc: 'Project Manager' },
//   { id: 20, teamThumb: teamThumb4, teamTitle: 'Shahanaz', teamDesc: 'HR' },
//   { id: 21, teamThumb: teamThumb3, teamTitle: 'Manohar', teamDesc: 'CFO' },
//   { id: 22, teamThumb: teamThumb3, teamTitle: 'Hari krishna', teamDesc: 'Delivery Manager - UK' },

// ];

// const TeamMember = () => {
//   const swiperSettings = {
//     loop: true,
//     spaceBetween: 25,
//     modules: [Autoplay],
//     speed: 1500,
//     autoplay: { delay: 3000, disableOnInteraction: false },
//     breakpoints: {
//       320: { slidesPerView: 1 },
//       576: { slidesPerView: 2 },
//       768: { slidesPerView: 3 },
//       1024: { slidesPerView: 4 },
//       1400: { slidesPerView: 5 },
//     },
//   };

//   return (
//     <section className="bg-center py-16 md:py-20 lg:py-24">
//       <div className="Container">
//         {/* HEADER */}
//         <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
//           <div className="text-center ">
//             <h5 className="flex justify-center  items-center gap-2 font-Rajdhani text-[30px] font-bold text-[#0D47A1] uppercase tracking-wide">
//               <img src={titleShape} draggable={false} alt="Shape" />
//               MEET OUR TEAM
//             </h5>
//             <h1 className="font-Rajdhani font-bold text-[28px] sm:text-[34px] md:text-[38px] xl:text-[42px] leading-snug text-[#0D47A1] mt-3">
//               High Professional Team Ready <br className="hidden sm:block" />
//               To Develop Your Business
//             </h1>
//           </div>

//           {/* <Link to="/blog_grid2">
//             <button className="primary-btn">
//               All Members
//               <span className="icon-style">
//                 <svg
//                   className="inline-block h-[10px] w-auto transition-all duration-500"
//                   xmlns="http://www.w3.org/2000/svg"
//                   stroke="currentColor"
//                   width="14.2"
//                   height="14.2"
//                   viewBox="0 0 14.2 14.2"
//                 >
//                   <path d="M13.2 9V1h-8M13.4.8.7 13.5"></path>
//                 </svg>
//               </span>
//             </button>
//           </Link> */}
//         </div>

//         {/* SLIDER */}
//         <Swiper {...swiperSettings}>
//           {teamData.map(({ id, teamThumb, teamTitle, teamDesc }) => (
//             <SwiperSlide key={id}>
//               <div className="group relative bg-white shadow-md rounded-2xl overflow-hidden p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
//                 <div className="relative inline-block">
//                   <img
//                     src={teamThumb}
//                     alt={teamTitle}
//                     className="mx-auto w-[120px] h-[120px] object-contain rounded-full border-4 border-[#f3f3f3] group-hover:border-PrimaryColor-0 transition-all duration-300"
//                   />
//                   <button className="absolute bottom-1 right-1 bg-PrimaryColor-0 text-white p-2 rounded-full shadow hover:scale-110 transition">
//                     <IoShareSocialOutline />
//                   </button>

//                   {/* SOCIAL ICONS */}
//                   <div className="absolute top-2 right-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col gap-2">
//                     <a href="#" className="bg-[#f9f9f9] hover:bg-PrimaryColor-0 text-gray-700 hover:text-white p-2 rounded-full shadow transition">
//                       <FaPinterestP />
//                     </a>
//                     <a href="#" className="bg-[#f9f9f9] hover:bg-PrimaryColor-0 text-gray-700 hover:text-white p-2 rounded-full shadow transition">
//                       <FaLinkedinIn />
//                     </a>
//                     <a href="#" className="bg-[#f9f9f9] hover:bg-PrimaryColor-0 text-gray-700 hover:text-white p-2 rounded-full shadow transition">
//                       <FaXTwitter />
//                     </a>
//                     <a href="#" className="bg-[#f9f9f9] hover:bg-PrimaryColor-0 text-gray-700 hover:text-white p-2 rounded-full shadow transition">
//                       <FaFacebookF />
//                     </a>
//                   </div>
//                 </div>

//                 <h3 className="mt-4 font-Rajdhani font-semibold text-lg text-[#0D47A1]">
//                   {teamTitle}
//                 </h3>
//                 <p className="text-sm text-[#0D47A1]">{teamDesc}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default TeamMember;

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from 'react-icons/fa6';

import { IoArrowUpOutline } from 'react-icons/io5';

import teamThumb from '/images/team.png';
import teamThumb3 from '/images/team_4.png';
import teamThumb4 from '/images/team.png';

const teamData = [
  {
    id: 1,
    teamThumb: teamThumb,
    teamTitle: 'Sri Latha Kaku',
    teamDesc: 'Founder & Director',
  },
  {
    id: 2,
    teamThumb: teamThumb3,
    teamTitle: 'Prasad Kaku',
    teamDesc: 'Business Head',
  },
  {
    id: 3,
    teamThumb: teamThumb3,
    teamTitle: 'Sobhan M',
    teamDesc: 'Project Delivery Manager',
  },
  {
    id: 4,
    teamThumb: teamThumb3,
    teamTitle: 'Vinnu',
    teamDesc: 'Development Lead',
  },
  {
    id: 5,
    teamThumb: teamThumb4,
    teamTitle: 'Nova',
    teamDesc: 'HR',
  },
  {
    id: 6,
    teamThumb: teamThumb3,
    teamTitle: 'Praveen Mekala',
    teamDesc: 'Power Apps Developer',
  },
  {
    id: 7,
    teamThumb: teamThumb3,
    teamTitle: 'Surendra',
    teamDesc: 'Data Engineer',
  },
  {
    id: 8,
    teamThumb: teamThumb3,
    teamTitle: 'Vasu',
    teamDesc: 'SharePoint',
  },
  {
    id: 9,
    teamThumb: teamThumb4,
    teamTitle: 'Sowjanya',
    teamDesc: 'Designer',
  },
  {
    id: 10,
    teamThumb: teamThumb4,
    teamTitle: 'Sudha',
    teamDesc: '.Net Developer',
  },
  {
    id: 11,
    teamThumb: teamThumb4,
    teamTitle: 'Triveni',
    teamDesc: 'Tester',
  },
  {
    id: 12,
    teamThumb: teamThumb3,
    teamTitle: 'Madhu',
    teamDesc: 'Sr. Java Developer',
  },
  {
    id: 13,
    teamThumb: teamThumb3,
    teamTitle: 'Prabhu',
    teamDesc: 'Sr. Dot Net Developer',
  },
  {
    id: 14,
    teamThumb: teamThumb3,
    teamTitle: 'Ramesh',
    teamDesc: 'Sr. Dot Net Developer',
  },
  {
    id: 15,
    teamThumb: teamThumb3,
    teamTitle: 'Girish',
    teamDesc: 'CTO',
  },
  {
    id: 16,
    teamThumb: teamThumb3,
    teamTitle: 'Sunil',
    teamDesc: 'Delivery Manager',
  },
  {
    id: 17,
    teamThumb: teamThumb3,
    teamTitle: 'Phani',
    teamDesc: 'Client Relationship Manager',
  },
  {
    id: 18,
    teamThumb: teamThumb3,
    teamTitle: 'Sarathi',
    teamDesc: 'Delivery Manager',
  },
  {
    id: 19,
    teamThumb: teamThumb3,
    teamTitle: 'Sheik',
    teamDesc: 'Project Manager',
  },
  {
    id: 20,
    teamThumb: teamThumb4,
    teamTitle: 'Shahanaz',
    teamDesc: 'HR',
  },
  {
    id: 21,
    teamThumb: teamThumb3,
    teamTitle: 'Manohar',
    teamDesc: 'CFO',
  },
  {
    id: 22,
    teamThumb: teamThumb3,
    teamTitle: 'Hari Krishna',
    teamDesc: 'Delivery Manager - UK',
  },
];

const TeamMember = () => {
  const swiperSettings = {
    loop: true,
    spaceBetween: 24,
    modules: [Autoplay],
    speed: 1000,

    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    grabCursor: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },

      576: {
        slidesPerView: 2,
      },

      768: {
        slidesPerView: 3,
      },

      1024: {
        slidesPerView: 4,
      },

      1400: {
        slidesPerView: 5,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f8fbff] via-[#eef6ff] to-white py-20 md:py-24 lg:py-28">

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      {/* Top Left Glow */}
      <div className="pointer-events-none absolute left-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-[#3b82f6]/10 blur-[120px]" />

      {/* Bottom Right Glow */}
      <div className="pointer-events-none absolute bottom-[-200px] right-[-100px] h-[450px] w-[450px] rounded-full bg-[#06b6d4]/10 blur-[130px]" />

      {/* Center Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6366f1]/5 blur-[100px]" />

      {/* Decorative Circles */}
      <div className="pointer-events-none absolute right-[8%] top-[15%] h-24 w-24 rounded-full border border-[#1976D2]/10" />

      <div className="pointer-events-none absolute bottom-[12%] left-[5%] h-16 w-16 rounded-full border border-[#06b6d4]/10" />

      <div className="Container relative z-10">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-14 flex flex-col items-center text-center">

          {/* Small Label */}

          <div className="mb-5 flex items-center gap-3">

            <span className="h-[1px] w-10 bg-gradient-to-r from-transparent to-[#1976D2]" />

            <span className="font-Rajdhani text-[14px] font-bold uppercase tracking-[0.3em] text-[#1976D2]">
              Our People
            </span>

            <span className="h-[1px] w-10 bg-gradient-to-l from-transparent to-[#1976D2]" />

          </div>

          {/* Main Heading */}

          <h2 className="max-w-[850px] font-Rajdhani text-[38px] font-bold leading-[1.05] text-[#0D2A4A] sm:text-[48px] md:text-[58px] lg:text-[64px]">

            Meet the minds

            <span className="block bg-gradient-to-r from-[#0D47A1] via-[#1976D2] to-[#06A6D6] bg-clip-text text-transparent">
              behind the magic.
            </span>

          </h2>

          {/* Description */}

          <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-slate-600 md:text-[17px]">
            A passionate team of strategists, developers, designers and
            problem-solvers working together to turn ambitious ideas into
            powerful digital experiences.
          </p>

        </div>

        {/* =====================================================
            TEAM SLIDER
        ====================================================== */}

        <Swiper {...swiperSettings}>

          {teamData.map(
            ({ id, teamThumb, teamTitle, teamDesc }) => (

              <SwiperSlide key={id} className="pb-8">

                {/* CARD */}

                <div className="group relative h-full overflow-hidden rounded-[28px] border border-[#dbeafe] bg-white/80 p-[1px] shadow-[0_10px_40px_rgba(13,71,161,0.07)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#38bdf8]/50 hover:shadow-[0_25px_60px_rgba(13,71,161,0.15)]">

                  <div className="relative h-full overflow-hidden rounded-[27px] bg-white px-5 pb-7 pt-6">

                    {/* =====================================================
                        CARD TOP
                    ====================================================== */}

                    <div className="absolute left-5 top-5 z-10">

                      <span className="font-Rajdhani text-[13px] font-bold tracking-widest text-[#0D47A1]/25">
                        {String(id).padStart(2, '0')}
                      </span>

                    </div>

                    <div className="absolute right-5 top-5 flex items-center gap-2">

                      <span className="h-1.5 w-1.5 rounded-full bg-[#06A6D6] shadow-[0_0_10px_#06A6D6]" />

                      <span className="font-Rajdhani text-[10px] font-semibold uppercase tracking-widest text-[#64748b]">
                        Team
                      </span>

                    </div>

                    {/* =====================================================
                        PROFILE IMAGE
                    ====================================================== */}

                    <div className="relative mx-auto mt-6 flex h-[210px] w-[210px] items-center justify-center">

                      {/* Glow */}

                      <div className="absolute inset-4 rounded-full bg-[#1976D2]/10 blur-2xl transition-all duration-500 group-hover:bg-[#06A6D6]/20" />

                      {/* Rotating Gradient Ring */}

                      <div className="absolute inset-1 rounded-full bg-gradient-to-br from-[#0D47A1] via-[#1976D2] to-[#06A6D6] p-[2px] transition-transform duration-700 group-hover:rotate-180">

                        <div className="flex h-full w-full items-center justify-center rounded-full bg-white">

                          <div className="h-[184px] w-[184px] overflow-hidden rounded-full bg-[#edf5ff]">

                            <img
                              src={teamThumb}
                              alt={teamTitle}
                              draggable={false}
                              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                          </div>

                        </div>

                      </div>

                      {/* =====================================================
                          SOCIAL BUTTON
                      ====================================================== */}

                      <button
                        type="button"
                        aria-label={`Social links for ${teamTitle}`}
                        className="absolute bottom-1 right-2 flex h-11 w-11 items-center justify-center rounded-full border border-white bg-[#0D47A1] text-white shadow-lg transition-all duration-500 group-hover:bg-[#06A6D6] group-hover:text-white"
                      >
                        <IoArrowUpOutline className="rotate-45 text-xl" />
                      </button>

                      {/* =====================================================
                          SOCIAL LINKS
                      ====================================================== */}

                      <div className="absolute right-[-4px] top-8 flex translate-x-5 flex-col gap-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">

                        <a
                          href="#"
                          aria-label="Facebook"
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e2e8f0] bg-white text-xs text-[#0D47A1] shadow-md transition hover:bg-[#1877f2] hover:text-white"
                        >
                          <FaFacebookF />
                        </a>

                        <a
                          href="#"
                          aria-label="LinkedIn"
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e2e8f0] bg-white text-xs text-[#0D47A1] shadow-md transition hover:bg-[#0a66c2] hover:text-white"
                        >
                          <FaLinkedinIn />
                        </a>

                        <a
                          href="#"
                          aria-label="X"
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e2e8f0] bg-white text-xs text-[#0D47A1] shadow-md transition hover:bg-black hover:text-white"
                        >
                          <FaXTwitter />
                        </a>

                        <a
                          href="#"
                          aria-label="Pinterest"
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e2e8f0] bg-white text-xs text-[#0D47A1] shadow-md transition hover:bg-[#e60023] hover:text-white"
                        >
                          <FaPinterestP />
                        </a>

                      </div>

                    </div>

                    {/* =====================================================
                        DIVIDER
                    ====================================================== */}

                    <div className="mx-auto mt-5 h-[2px] w-10 bg-gradient-to-r from-[#0D47A1] to-[#06A6D6] opacity-60 transition-all duration-500 group-hover:w-20" />

                    {/* =====================================================
                        NAME
                    ====================================================== */}

                    <h3 className="mt-5 text-center font-Rajdhani text-[22px] font-bold text-[#0D2A4A] transition-colors duration-300 group-hover:text-[#1976D2]">
                      {teamTitle}
                    </h3>

                    {/* =====================================================
                        ROLE
                    ====================================================== */}

                    <div className="mt-3 flex justify-center">

                      <span className="rounded-full border border-[#1976D2]/10 bg-[#1976D2]/5 px-3 py-1 font-Rajdhani text-[12px] font-semibold uppercase tracking-wider text-[#1976D2]">
                        {teamDesc}
                      </span>

                    </div>

                    {/* =====================================================
                        BOTTOM ACCENT
                    ====================================================== */}

                    <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#0D47A1] via-[#1976D2] to-[#06A6D6] transition-all duration-700 group-hover:w-full" />

                  </div>

                </div>

              </SwiperSlide>

            )
          )}

        </Swiper>

        {/* =====================================================
            BOTTOM MESSAGE
        ====================================================== */}

        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">

          <span className="font-Rajdhani text-sm font-medium text-slate-500">
            One team.
          </span>

          <span className="hidden h-1 w-1 rounded-full bg-[#1976D2] sm:block" />

          <span className="font-Rajdhani text-sm font-medium text-slate-500">
            Different talents.
          </span>

          <span className="hidden h-1 w-1 rounded-full bg-[#1976D2] sm:block" />

          <span className="font-Rajdhani text-sm font-bold text-[#1976D2]">
            One vision.
          </span>

        </div>

      </div>
    </section>
  );
};

export default TeamMember;