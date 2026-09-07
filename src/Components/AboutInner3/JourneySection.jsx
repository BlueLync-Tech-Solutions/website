// import { FaUsers, FaTrophy, FaBullseye, FaShieldAlt } from "react-icons/fa";

// const JourneySection = () => {
//   return (
//     <section className="py-20" style={{'fontfamily':'Rajdhani'}}>
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         {/* Section Title */}
//         <h2 className="text-4xl md:text-5xl font-bold text-[#0D47A1] mb-4">
//           Our Journey Through Time
//         </h2>
//         <p className="text-[#0D47A1] text-[25px] mb-12">
//           Discover exceptional experiences through testimonials from our satisfied customers.
//         </p>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Card 1 */}
//           <div className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl p-8 text-left">
//             <FaUsers className="text-[#ef620f] mx-auto text-4xl mb-4" />
//             <h3 className="text-xl font-semibold text-[#0D47A1] mb-3">
//               Customer Centricity
//             </h3>
//             <p className="text-[#0D47A1] fw-[600] leading-relaxed">
//               Our clients are our priority. We listen to their needs, understand
//               their challenges, and work tirelessly to deliver IT solutions that
//               exceed expectations. Their success is our success.
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl p-8 text-left">
//             <FaTrophy className="text-[#ef620f] mx-auto text-4xl mb-4" />
//             <h3 className="text-xl font-semibold text-[#0D47A1] mb-3">
//               Quality Assurance
//             </h3>
//             <p className="text-[#0D47A1] fw-[600] leading-relaxed">
//               We have a relentless commitment to quality. We set high standards
//               and rigorously test and monitor our IT services to ensure they
//               meet those standards. Quality is non-negotiable.
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl p-8 text-left">
//             <FaBullseye className="text-[#ef620f] mx-auto text-4xl mb-4" />
//             <h3 className="text-xl font-semibold text-[#0D47A1] mb-3">
//               Client Focus
//             </h3>
//             <p className="text-[#0D47A1] fw-[600] leading-relaxed">
//               Our clients are the center of our IT universe. We listen to their
//               needs, provide tailored solutions, and stand by them every step of
//               the way. Their success is our success, excellence, and integrity.
//             </p>
//           </div>

//           {/* Card 4 */}
//           <div className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl p-8 text-left">
//             <FaShieldAlt className="text-[#ef620f] mx-auto text-4xl mb-4" />
//             <h3 className="text-xl font-semibold text-[#0D47A1] mb-3">
//               Integrity Always
//             </h3>
//             <p className="text-[#0D47A1] fw-[600] leading-relaxed">
//               Integrity is the foundation of trust. We operate with complete
//               transparency, ensuring the highest ethical standards in all our IT
//               operations. Our clients rely on us for honesty and fairness.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default JourneySection;

import {
  FaUsers,
  FaTrophy,
  FaBullseye,
  FaShieldAlt,
} from 'react-icons/fa';

import {
  HiOutlineSparkles,
  HiOutlineArrowLongRight,
} from 'react-icons/hi2';

const journeyData = [
  {
    id: '01',
    icon: FaUsers,
    title: 'Customer Centricity',
    shortTitle: 'Human First',
    description:
      'We begin with people. By understanding our clients, their challenges and their ambitions, we create intelligent solutions that deliver meaningful business outcomes.',
    accent: '#06A6D6',
  },
  {
    id: '02',
    icon: FaTrophy,
    title: 'Quality Assurance',
    shortTitle: 'Zero Compromise',
    description:
      'Every solution is engineered with precision. From architecture to deployment, we continuously test, refine and optimize to deliver dependable digital experiences.',
    accent: '#1976D2',
  },
  {
    id: '03',
    icon: FaBullseye,
    title: 'Client Focus',
    shortTitle: 'Outcome Driven',
    description:
      'Technology is valuable only when it creates results. We align our expertise with your goals to build solutions designed for measurable and sustainable growth.',
    accent: '#6366F1',
  },
  {
    id: '04',
    icon: FaShieldAlt,
    title: 'Integrity Always',
    shortTitle: 'Trust Built In',
    description:
      'Trust is part of our architecture. We operate with transparency, accountability and ethical standards at every stage of our partnership.',
    accent: '#0EA5E9',
  },
];

const JourneySection = () => {
  return (
    <section className="relative overflow-hidden bg-[#061426] py-20 md:py-24 lg:py-28">

      {/* =====================================================
          BACKGROUND AI GRID
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* =====================================================
          AI GLOW ORBS
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#1976D2]/15 blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#06A6D6]/10 blur-[150px]" />

      <div className="pointer-events-none absolute left-1/2 top-[35%] h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-[#6366F1]/5 blur-[130px]" />

      <div className="Container relative z-10">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto mb-16 max-w-[900px] text-center">

          {/* AI LABEL */}

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#38BDF8]/20 bg-[#38BDF8]/5 px-4 py-2 backdrop-blur-md">

            <HiOutlineSparkles className="text-[#38BDF8]" />

            <span className="font-Rajdhani text-[12px] font-bold uppercase tracking-[0.25em] text-[#7DD3FC]">
              Our DNA
            </span>

          </div>

          {/* TITLE */}

          <h2 className="font-Rajdhani text-[40px] font-bold leading-[1.05] text-white sm:text-[50px] md:text-[60px] lg:text-[68px]">

            Built on principles.

            <span className="block bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#818CF8] bg-clip-text text-transparent">
              Driven by intelligence.
            </span>

          </h2>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-6 max-w-[700px] font-Nunito text-[15px] leading-7 text-slate-400 md:text-[17px]">
            Our journey is shaped by a simple philosophy — combine human
            thinking, technology and integrity to create digital solutions
            that make a lasting impact.
          </p>

        </div>

        {/* =====================================================
            AI CORE
        ====================================================== */}

        <div className="relative mx-auto mb-16 flex h-[180px] w-[180px] items-center justify-center">

          {/* Outer Ring */}

          <div className="absolute inset-0 animate-[spin_20s_linear_infinite] rounded-full border border-dashed border-[#38BDF8]/20" />

          {/* Middle Ring */}

          <div className="absolute inset-5 rounded-full border border-[#1976D2]/20" />

          {/* Glow */}

          <div className="absolute h-24 w-24 rounded-full bg-[#38BDF8]/20 blur-2xl" />

          {/* Core */}

          <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#38BDF8]/40 bg-gradient-to-br from-[#0D47A1] to-[#0B1F3A] shadow-[0_0_60px_rgba(56,189,248,0.2)]">

            <HiOutlineSparkles className="text-4xl text-[#7DD3FC]" />

          </div>

          {/* Orbit Nodes */}

          <span className="absolute left-1 top-1 h-2 w-2 rounded-full bg-[#38BDF8] shadow-[0_0_15px_#38BDF8]" />

          <span className="absolute right-2 top-10 h-1.5 w-1.5 rounded-full bg-[#818CF8] shadow-[0_0_15px_#818CF8]" />

          <span className="absolute bottom-3 left-8 h-2 w-2 rounded-full bg-[#06B6D4] shadow-[0_0_15px_#06B6D4]" />

          <span className="absolute bottom-8 right-1 h-1.5 w-1.5 rounded-full bg-[#60A5FA] shadow-[0_0_15px_#60A5FA]" />

        </div>

        {/* =====================================================
            CONNECTING LINE
        ====================================================== */}

        <div className="relative mb-10 hidden lg:block">

          <div className="absolute left-[12%] right-[12%] top-1/2 h-px bg-gradient-to-r from-transparent via-[#38BDF8]/30 to-transparent" />

          <div className="relative grid grid-cols-4">

            {journeyData.map((item) => (

              <div key={item.id} className="flex justify-center">

                <span className="h-3 w-3 rounded-full border-2 border-[#38BDF8] bg-[#061426] shadow-[0_0_15px_rgba(56,189,248,0.5)]" />

              </div>

            ))}

          </div>

        </div>

        {/* =====================================================
            PRINCIPLE CARDS
        ====================================================== */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">

          {journeyData.map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-[26px] border border-white/[0.08] bg-white/[0.04] p-[1px] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3"
              >

                {/* Card */}

                <div className="relative h-full overflow-hidden rounded-[25px] bg-[#0A1B30] p-7">

                  {/* Hover Glow */}

                  <div
                    className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                    style={{
                      backgroundColor: item.accent,
                    }}
                  />

                  {/* Number */}

                  <div className="absolute right-6 top-5">

                    <span className="font-Rajdhani text-[12px] font-bold tracking-[0.2em] text-white/20">
                      {item.id}
                    </span>

                  </div>

                  {/* Icon */}

                  <div
                    className="relative mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border bg-white/[0.04] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      borderColor: `${item.accent}30`,
                      boxShadow: `0 0 30px ${item.accent}10`,
                    }}
                  >

                    <Icon
                      className="text-[27px] transition-transform duration-500"
                      style={{
                        color: item.accent,
                      }}
                    />

                  </div>

                  {/* Small Label */}

                  <span
                    className="font-Rajdhani text-[11px] font-bold uppercase tracking-[0.2em]"
                    style={{
                      color: item.accent,
                    }}
                  >
                    {item.shortTitle}
                  </span>

                  {/* Title */}

                  <h3 className="mt-2 font-Rajdhani text-[24px] font-bold text-white transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-4 font-Nunito text-[14px] leading-7 text-slate-400">
                    {item.description}
                  </p>

                  {/* Bottom Arrow */}

                  <div className="mt-6 flex items-center gap-2">

                    <span
                      className="h-[1px] w-8 transition-all duration-500 group-hover:w-14"
                      style={{
                        backgroundColor: item.accent,
                      }}
                    />

                    <HiOutlineArrowLongRight
                      className="text-lg"
                      style={{
                        color: item.accent,
                      }}
                    />

                  </div>

                  {/* Bottom Accent */}

                  <div
                    className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-700 group-hover:w-full"
                    style={{
                      background: `linear-gradient(90deg, ${item.accent}, transparent)`,
                    }}
                  />

                </div>

              </div>
            );
          })}

        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <div className="mt-16 text-center">

          <div className="mx-auto flex max-w-[700px] items-center justify-center gap-4">

            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />

            <span className="font-Rajdhani text-[12px] font-semibold uppercase tracking-[0.25em] text-slate-500">
              Human Intelligence × Artificial Intelligence
            </span>

            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />

          </div>

        </div>

      </div>
    </section>
  );
};

export default JourneySection;

// Avinash 111
