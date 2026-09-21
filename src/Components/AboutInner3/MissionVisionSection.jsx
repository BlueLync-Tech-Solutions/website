// const MissionVisionSection = () => {
//   return (
//     <section className="py-20" style={{'fontfamily':'Rajdhani'}}>
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Mission & Vision */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
//           {/* Mission */}
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0D47A1] mb-6" style={{'fontfamily':'Rajdhani'}}>
//               Our Mission
//             </h2>
//             <p className="text-[#0D47A1] fw-[700] text-lg leading-relaxed mb-5" style={{'fontfamily':'Rajdhani'}}>
//               We go deep to unlock insight and have the courage to act. We bring
//               the right people together to challenge established thinking and
//               drive transformation. We work with our clients to build the
//               capabilities that enable organizations to achieve sustainable
//               advantage.
//             </p>
//             <p className="text-[#0D47A1] fw-[700] text-lg leading-relaxed" style={{'fontfamily':'Rajdhani'}}>
//               We go deep to unlock insight and have the courage to act. We bring
//               the right people together to challenge established thinking and
//               drive transformation. We work with our clients to build the
//               capabilities that enable organizations to achieve sustainable
//               advantage.
//             </p>
//           </div>

//           {/* Vision */}
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0D47A1] mb-6" style={{'fontfamily':'Rajdhani'}}>
//               Our Vision
//             </h2>
//             <p className="text-[#0D47A1] fw-[700] text-lg leading-relaxed mb-5" style={{'fontfamily':'Rajdhani'}}>
//               In our vision, innovation is not just a buzzword; it's a way of
//               life. We aim to continuously push the boundaries of what's
//               possible in the digital world. Through cutting-edge technologies,
//               creative strategies, and forward-thinking solutions, we'll
//               redefine industry standards and help our clients stay ahead of the
//               curve.
//             </p>
//             <p className="text-[#0D47A1] fw-[700] text-lg leading-relaxed">
//               In the digital age, talent and creativity are invaluable assets.
//               We envision ByteWare as a hub for nurturing and attracting the
//               brightest minds in the industry.
//             </p>
//           </div>
//         </div>

//         {/* Statistics Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-left" style={{'fontfamily':'Rajdhani'}}>
//           {/* Stat 1 */}
//           <div className="flex items-start gap-4">
//             <div className="w-1 bg-indigo-800 h-12 mt-1 rounded"></div>
//             <div>
//               <h3 className="text-4xl font-bold text-[#0D47A1]">5</h3>
//               <p className="text-[#0D47A1] fw-[600] text-lg">Years experiences</p>
//             </div>
//           </div>

//           {/* Stat 2 */}
//           <div className="flex items-start gap-4" style={{'fontfamily':'Rajdhani'}}>
//             <div className="w-1 bg-indigo-800 h-12 mt-1 rounded"></div>
//             <div>
//               <h3 className="text-4xl font-bold text-[#0D47A1]">11</h3>
//               <p className="text-[#0D47A1] fw-[600] text-lg">Happy customers</p>
//             </div>
//           </div>

//           {/* Stat 3 */}
//           <div className="flex items-start gap-4" style={{'fontfamily':'Rajdhani'}}>
//             <div className="w-1 bg-indigo-800 h-12 mt-1 rounded"></div>
//             <div>
//               <h3 className="text-4xl font-bold text-[#0D47A1]">53</h3>
//               <p className="text-[#0D47A1] fw-[600] text-lg">Project completed</p>
//             </div>
//           </div>

//           {/* Stat 4 */}
//           <div className="flex items-start gap-4" style={{'fontfamily':'Rajdhani'}}>
//             <div className="w-1 bg-indigo-800 h-12 mt-1 rounded"></div>
//             <div>
//               <h3 className="text-4xl font-bold text-[#0D47A1]">2</h3>
//               <p className="text-[#0D47A1] fw-[600] text-lg">Awards achievement</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MissionVisionSection;

import {
  HiOutlineSparkles,
  HiOutlineArrowTrendingUp,
  HiOutlineLightBulb,
  HiOutlineRocketLaunch,
} from 'react-icons/hi2';

import {
  FiTarget,
  FiEye,
  FiUsers,
  FiLayers,
} from 'react-icons/fi';

const MissionVisionSection = () => {
  const stats = [
    {
      number: '05',
      label: 'Years of Experience',
      icon: FiLayers,
    },
    {
      number: '11',
      label: 'Happy Customers',
      icon: FiUsers,
    },
    {
      number: '53',
      label: 'Projects Completed',
      icon: HiOutlineRocketLaunch,
    },
    {
      number: '02',
      label: 'Awards Achieved',
      icon: HiOutlineSparkles,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f8fbff] via-white to-[#eef6ff] py-20 md:py-24 lg:py-28">

      {/* =====================================================
          BACKGROUND AI GRID
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(#0D47A1 1px, transparent 1px),
            linear-gradient(90deg, #0D47A1 1px, transparent 1px)
          `,
          backgroundSize: '55px 55px',
        }}
      />

      {/* =====================================================
          BACKGROUND GLOWS
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-[-180px] h-[500px] w-[500px] rounded-full bg-[#1976D2]/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-[-180px] h-[500px] w-[500px] rounded-full bg-[#06B6D4]/10 blur-[140px]" />

      <div className="Container relative z-10">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto mb-16 max-w-[850px] text-center">

          {/* AI BADGE */}

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1976D2]/15 bg-[#1976D2]/5 px-4 py-2">

            <HiOutlineSparkles className="text-[#1976D2]" />

            <span className="font-Rajdhani text-[12px] font-bold uppercase tracking-[0.3em] text-[#1976D2]">
              Our Direction
            </span>

          </div>

          {/* TITLE */}

          <h2 className="font-Rajdhani text-[40px] font-bold leading-[1.05] text-[#0D2A4A] sm:text-[50px] md:text-[60px]">

            Intelligence with

            <span className="block bg-gradient-to-r from-[#0D47A1] via-[#1976D2] to-[#06A6D6] bg-clip-text text-transparent">
              purpose and vision.
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-[680px] font-Nunito text-[15px] leading-7 text-slate-600 md:text-[17px]">
            We combine human creativity, artificial intelligence and
            engineering excellence to create technology that moves businesses
            forward.
          </p>

        </div>

        {/* =====================================================
            MISSION / VISION
        ====================================================== */}

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">

          {/* =====================================================
              MISSION
          ====================================================== */}

          <div className="group relative overflow-hidden rounded-[30px] border border-[#dbeafe] bg-white/80 p-[1px] shadow-[0_15px_50px_rgba(13,71,161,0.07)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(13,71,161,0.12)]">

            <div className="relative h-full overflow-hidden rounded-[29px] bg-white p-8 md:p-10">

              {/* Glow */}

              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#1976D2]/10 blur-[70px] transition-all duration-500 group-hover:bg-[#1976D2]/20" />

              {/* Top */}

              <div className="relative flex items-start justify-between">

                {/* Icon */}

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#1976D2]/10 bg-[#1976D2]/5">

                  <FiTarget className="text-[30px] text-[#1976D2]" />

                </div>

                {/* Number */}

                <span className="font-Rajdhani text-[13px] font-bold tracking-[0.25em] text-[#0D47A1]/20">
                  01
                </span>

              </div>

              {/* Label */}

              <div className="mt-7">

                <span className="font-Rajdhani text-[11px] font-bold uppercase tracking-[0.25em] text-[#1976D2]">
                  Our Mission
                </span>

                <h3 className="mt-2 font-Rajdhani text-[34px] font-bold text-[#0D2A4A]">
                  Build with purpose.
                </h3>

              </div>

              {/* Content */}

              <div className="mt-6 space-y-4">

                <p className="font-Nunito text-[15px] leading-7 text-slate-600">
                  We go deep to understand the challenges behind every
                  business problem. Then we bring the right people,
                  technologies and ideas together to create meaningful
                  solutions.
                </p>

                <p className="font-Nunito text-[15px] leading-7 text-slate-500">
                  Our goal is not simply to deliver software. We build
                  capabilities that help organizations transform, scale and
                  achieve sustainable competitive advantage.
                </p>

              </div>

              {/* Bottom */}

              <div className="mt-8 flex items-center gap-3">

                <div className="h-[2px] w-10 bg-gradient-to-r from-[#0D47A1] to-[#38BDF8] transition-all duration-500 group-hover:w-20" />

                <span className="font-Rajdhani text-[12px] font-bold uppercase tracking-widest text-[#1976D2]">
                  Purpose Driven
                </span>

              </div>

              {/* Accent */}

              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#0D47A1] to-[#38BDF8] transition-all duration-700 group-hover:w-full" />

            </div>

          </div>

          {/* =====================================================
              VISION
          ====================================================== */}

          <div className="group relative overflow-hidden rounded-[30px] border border-[#dbeafe] bg-white/80 p-[1px] shadow-[0_15px_50px_rgba(13,71,161,0.07)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(13,71,161,0.12)]">

            <div className="relative h-full overflow-hidden rounded-[29px] bg-white p-8 md:p-10">

              {/* Glow */}

              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#06B6D4]/10 blur-[70px] transition-all duration-500 group-hover:bg-[#06B6D4]/20" />

              {/* Top */}

              <div className="relative flex items-start justify-between">

                {/* Icon */}

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#06B6D4]/10 bg-[#06B6D4]/5">

                  <FiEye className="text-[30px] text-[#06A6D6]" />

                </div>

                {/* Number */}

                <span className="font-Rajdhani text-[13px] font-bold tracking-[0.25em] text-[#0D47A1]/20">
                  02
                </span>

              </div>

              {/* Label */}

              <div className="mt-7">

                <span className="font-Rajdhani text-[11px] font-bold uppercase tracking-[0.25em] text-[#06A6D6]">
                  Our Vision
                </span>

                <h3 className="mt-2 font-Rajdhani text-[34px] font-bold text-[#0D2A4A]">
                  Imagine what’s next.
                </h3>

              </div>

              {/* Content */}

              <div className="mt-6 space-y-4">

                <p className="font-Nunito text-[15px] leading-7 text-slate-600">
                  We believe innovation should continuously challenge what is
                  possible. Through AI, emerging technologies and creative
                  thinking, we aim to redefine the digital experience.
                </p>

                <p className="font-Nunito text-[15px] leading-7 text-slate-500">
                  We are building an environment where talented people can
                  experiment, learn and create solutions that help our clients
                  stay ahead of a rapidly evolving world.
                </p>

              </div>

              {/* Bottom */}

              <div className="mt-8 flex items-center gap-3">

                <div className="h-[2px] w-10 bg-gradient-to-r from-[#06A6D6] to-[#6366F1] transition-all duration-500 group-hover:w-20" />

                <span className="font-Rajdhani text-[12px] font-bold uppercase tracking-widest text-[#06A6D6]">
                  Future Focused
                </span>

              </div>

              {/* Accent */}

              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#06A6D6] to-[#6366F1] transition-all duration-700 group-hover:w-full" />

            </div>

          </div>

        </div>

        {/* =====================================================
            AI PRINCIPLES
        ====================================================== */}

        <div className="mx-auto my-16 flex max-w-[1000px] items-center justify-center gap-4">

          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#1976D2]/20" />

          <div className="flex items-center gap-3 rounded-full border border-[#1976D2]/10 bg-white/70 px-5 py-2 shadow-sm">

            <HiOutlineLightBulb className="text-[#1976D2]" />

            <span className="font-Rajdhani text-[11px] font-bold uppercase tracking-[0.2em] text-[#0D47A1]">
              Human Intelligence × AI × Innovation
            </span>

          </div>

          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#1976D2]/20" />

        </div>

        {/* =====================================================
            STATISTICS
        ====================================================== */}

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">

          {stats.map((stat, index) => {

            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-[#dbeafe] bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#93c5fd] hover:shadow-[0_20px_45px_rgba(13,71,161,0.1)]"
              >

                {/* Icon */}

                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#1976D2]/5">

                  <Icon className="text-lg text-[#1976D2]" />

                </div>

                {/* Number */}

                <h3 className="font-Rajdhani text-[42px] font-bold leading-none text-[#0D47A1]">

                  {stat.number}

                  <span className="text-[#38BDF8]">+</span>

                </h3>

                {/* Label */}

                <p className="mt-2 font-Rajdhani text-[14px] font-semibold uppercase tracking-wide text-slate-500">
                  {stat.label}
                </p>

                {/* Hover Line */}

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#0D47A1] to-[#38BDF8] transition-all duration-500 group-hover:w-full" />

              </div>
            );

          })}

        </div>

        {/* =====================================================
            FINAL STATEMENT
        ====================================================== */}

        <div className="mt-14 text-center">

          <div className="inline-flex items-center gap-3">

            <HiOutlineArrowTrendingUp className="text-xl text-[#1976D2]" />

            <span className="font-Rajdhani text-sm font-bold uppercase tracking-[0.25em] text-[#0D47A1]">
              Building the future, one intelligent solution at a time.
            </span>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MissionVisionSection;

// Avinash 333