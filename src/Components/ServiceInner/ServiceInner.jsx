// import { useState } from "react";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

// // IMAGES & ICONS
// import office365 from "/images/office365.png";
// import office365_icon from "/images/office365_icon.png";
// import mscloud from "/images/microsoft-cloud.png";
// import mscloud_icon from "/images/cloud-computing_icon.png";
// import mssecurity from "/images/ms-security.png";
// import mobility_icon from "/images/mobility_icon.png";
// import powerbi from "/images/power-bi.png";
// import powerbi_icon from "/images/power-bi_icon.png";
// import powerapps from "/images/power-apps.png";
// import smartphone_icon from "/images/smartphone_icon.png";
// import powerautomate from "/images/power-automate.png";
// import powerautomate_icon from "/images/power_automate_icon.png";
// import powervirtual from "/images/power-virtual.png";
// import virutal_agent_icon from "/images/virutal-agent-icon.png";
// import powerpages from "/images/power-pages.png";
// import power_pages_icon from "/images/power_pages_icon.png";
// import vivaintegration from "/images/viva.png";
// import vivaintegrationicon from "/images/viva_integration_icon.png";

// import HelmetChanger from "../../Shared/Helmet/Helmet";
// import BreadCrumb2 from "../../Shared/BreadCrumb/BreadCrumb2";

// // ⭐ SERVICE DATA
// const serviceData = [
//   {
//     id: 1,
//     icon: office365_icon,
//     image: office365,
//     title: "Office 365",
//     desc: "Office 365 provides cloud-powered productivity tools for businesses.",
//     points: [
//       "Online versions of Word, Excel, PowerPoint",
//       "Cloud-based email and collaboration",
//       "Secure file storage with OneDrive",
//       "Integrated communication via Teams",
//     ],
//   },
//   {
//     id: 2,
//     icon: mscloud_icon,
//     image: mscloud,
//     title: "Run It In The Microsoft Cloud",
//     desc: "Migrate your workloads seamlessly to Microsoft Azure.",
//     points: [
//       "Highly scalable cloud infrastructure",
//       "Advanced AI + analytics support",
//       "Improved operational efficiency",
//       "Pay-as-you-go pricing model",
//     ],
//   },
//   {
//     id: 3,
//     icon: mobility_icon,
//     image: mssecurity,
//     title: "Microsoft Enterprise Mobility + Security",
//     desc: "Protect your business with unified security tools.",
//     points: [
//       "Identity and access management",
//       "Mobile device management",
//       "Threat analytics",
//       "Data loss prevention",
//     ],
//   },
//   {
//     id: 4,
//     icon: powerbi_icon,
//     image: powerbi,
//     title: "Power BI",
//     desc: "Power BI helps analyze and visualize data to make business decisions.",
//     points: [
//       "Interactive real-time dashboards",
//       "AI-powered insights",
//       "Data modelling",
//       "Cross-platform sharing",
//     ],
//   },
//   {
//     id: 5,
//     icon: smartphone_icon,
//     image: powerapps,
//     title: "Power Apps",
//     desc: "Build powerful business apps with low-code tools.",
//     points: [
//       "Drag-and-drop app builder",
//       "Connect with 500+ data sources",
//       "Low-code automation",
//       "Faster deployment",
//     ],
//   },
//   {
//     id: 6,
//     icon: powerautomate_icon,
//     image: powerautomate,
//     title: "Power Automate",
//     desc: "Automate workflows and streamline business processes.",
//     points: [
//       "Trigger-based automation",
//       "Connect multiple workflows",
//       "AI automation support",
//       "Improved productivity",
//     ],
//   },
//   {
//     id: 7,
//     icon: virutal_agent_icon,
//     image: powervirtual,
//     title: "Power Virtual Agents",
//     desc: "Create intelligent chatbots without coding.",
//     points: [
//       "AI-driven conversations",
//       "Drag-and-drop interface",
//       "Integrated automation",
//       "24/7 support bots",
//     ],
//   },
//   {
//     id: 8,
//     icon: power_pages_icon,
//     image: powerpages,
//     title: "Power Pages",
//     desc: "Build secure business websites easily.",
//     points: [
//       "Low-code website builder",
//       "Secure authentication",
//       "Prebuilt templates",
//       "Microsoft Dataverse integration",
//     ],
//   },
//   {
//     id: 9,
//     icon: vivaintegrationicon,
//     image: vivaintegration,
//     title: "Microsoft Viva Integrations",
//     desc: "Enhance employee engagement and productivity.",
//     points: [
//       "Learning & skills development",
//       "Employee insights",
//       "Centralized knowledge hub",
//       "Integrated with Microsoft 365",
//     ],
//   },
// ];

// const ServiceInner = () => {
//   const [expandedId, setExpandedId] = useState(null);

//   // ⭐ SINGLE CLICK HANDLER THAT FIXES YOUR PROBLEM
//   const toggleCard = (id) => {
//     setExpandedId(expandedId === id ? null : id);
//   };

//   return (
//     <>
//       <HelmetChanger title="Microsoft Services" />
//       <BreadCrumb2 breadCrumbTitle="Microsoft Services" />

//       <section className="py-20 mb-[25px]" style={{ background: "rgb(128, 216, 255)" }}>
//         <div className="max-w-6xl mx-auto px-5">

//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-[#0D47A1]">
//               Elevating Small And Mid-Sized Companies <br />
//               Through Tailored IT Services
//             </h2>
//           </div>

//           {/* ⭐ 3 CARDS PER ROW GRID */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
//             {serviceData.map((service) => (
//               <div
//                 key={service.id}
//                 onClick={() => toggleCard(service.id)}
//                 className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-200 cursor-pointer"
//               >
//                 {/* IMAGE */}
//                 <div className="relative">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-48 object-contain bg-[#f5f9ff] p-6"
//                   />

//                   <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-md">
//                     <img src={service.icon} className="w-8 h-8" />
//                   </div>

//                   {/* ARROW */}
//                   <div className="absolute bottom-4 right-4 bg-blue-100 p-2 rounded-full">
//                     {expandedId === service.id ? (
//                       <FaChevronUp className="text-blue-600" />
//                     ) : (
//                       <FaChevronDown className="text-blue-600" />
//                     )}
//                   </div>
//                 </div>

//                 {/* TITLE */}
//                 <div className="p-5 text-center">
//                   <h4 className="text-lg font-semibold text-[#0D47A1]">
//                     {service.title}
//                   </h4>
//                 </div>

//                 {/* ⭐ EXPANDED CONTENT */}
//                 {expandedId === service.id && (
//                   <div className="px-5 pb-5 text-[#0D47A1] text-sm animate-fadeIn border-t border-gray-200">
//                     <p className="mt-3">
//                       <strong>{service.title}</strong> — {service.desc}
//                     </p>

//                     <ul className="list-disc ml-5 mt-3 space-y-1">
//                       {service.points.map((point, i) => (
//                         <li key={i}>{point}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ANIMATION */}
//       <style>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(-6px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease-in-out;
//         }
//       `}</style>
//     </>
//   );
// };

// export default ServiceInner;

import { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa6";

import {
  HiOutlineSparkles,
  HiOutlineCpuChip,
  HiOutlineCloud,
  HiOutlineShieldCheck,
  HiOutlineChartBarSquare,
  HiOutlineBolt,
  HiOutlineGlobeAlt,
  HiOutlineUserGroup,
} from "react-icons/hi2";

// ============================================================
// IMAGES
// ============================================================

import office365 from "/images/office365.png";
import office365_icon from "/images/office365_icon.png";

import mscloud from "/images/microsoft-cloud.png";
import mscloud_icon from "/images/cloud-computing_icon.png";

import mssecurity from "/images/ms-security.png";
import mobility_icon from "/images/mobility_icon.png";

import powerbi from "/images/power-bi.png";
import powerbi_icon from "/images/power-bi_icon.png";

import powerapps from "/images/power-apps.png";
import smartphone_icon from "/images/smartphone_icon.png";

import powerautomate from "/images/power-automate.png";
import powerautomate_icon from "/images/power_automate_icon.png";

import powervirtual from "/images/power-virtual.png";
import virutal_agent_icon from "/images/virutal-agent-icon.png";

import powerpages from "/images/power-pages.png";
import power_pages_icon from "/images/power_pages_icon.png";

import vivaintegration from "/images/viva.png";
import vivaintegrationicon from "/images/viva_integration_icon.png";

import HelmetChanger from "../../Shared/Helmet/Helmet";
import BreadCrumb2 from "../../Shared/BreadCrumb/BreadCrumb2";

// ============================================================
// SERVICE DATA
// ============================================================

const serviceData = [
  {
    id: 1,
    icon: office365_icon,
    image: office365,
    title: "Office 365",
    desc: "Office 365 provides cloud-powered productivity tools for businesses.",
    points: [
      "Online versions of Word, Excel, PowerPoint",
      "Cloud-based email and collaboration",
      "Secure file storage with OneDrive",
      "Integrated communication via Teams",
    ],
    category: "PRODUCTIVITY",
    ai: "Workplace Intelligence",
    iconType: "sparkle",
  },

  {
    id: 2,
    icon: mscloud_icon,
    image: mscloud,
    title: "Run It In The Microsoft Cloud",
    desc: "Migrate your workloads seamlessly to Microsoft Azure.",
    points: [
      "Highly scalable cloud infrastructure",
      "Advanced AI + analytics support",
      "Improved operational efficiency",
      "Pay-as-you-go pricing model",
    ],
    category: "CLOUD",
    ai: "Cloud Intelligence",
    iconType: "cloud",
  },

  {
    id: 3,
    icon: mobility_icon,
    image: mssecurity,
    title: "Microsoft Enterprise Mobility + Security",
    desc: "Protect your business with unified security tools.",
    points: [
      "Identity and access management",
      "Mobile device management",
      "Threat analytics",
      "Data loss prevention",
    ],
    category: "SECURITY",
    ai: "Cyber Intelligence",
    iconType: "security",
  },

  {
    id: 4,
    icon: powerbi_icon,
    image: powerbi,
    title: "Power BI",
    desc: "Power BI helps analyze and visualize data to make business decisions.",
    points: [
      "Interactive real-time dashboards",
      "AI-powered insights",
      "Data modelling",
      "Cross-platform sharing",
    ],
    category: "ANALYTICS",
    ai: "Decision Intelligence",
    iconType: "analytics",
  },

  {
    id: 5,
    icon: smartphone_icon,
    image: powerapps,
    title: "Power Apps",
    desc: "Build powerful business apps with low-code tools.",
    points: [
      "Drag-and-drop app builder",
      "Connect with 500+ data sources",
      "Low-code automation",
      "Faster deployment",
    ],
    category: "APPLICATIONS",
    ai: "Application Intelligence",
    iconType: "cpu",
  },

  {
    id: 6,
    icon: powerautomate_icon,
    image: powerautomate,
    title: "Power Automate",
    desc: "Automate workflows and streamline business processes.",
    points: [
      "Trigger-based automation",
      "Connect multiple workflows",
      "AI automation support",
      "Improved productivity",
    ],
    category: "AUTOMATION",
    ai: "Process Intelligence",
    iconType: "bolt",
  },

  {
    id: 7,
    icon: virutal_agent_icon,
    image: powervirtual,
    title: "Power Virtual Agents",
    desc: "Create intelligent chatbots without coding.",
    points: [
      "AI-driven conversations",
      "Drag-and-drop interface",
      "Integrated automation",
      "24/7 support bots",
    ],
    category: "GENERATIVE AI",
    ai: "Conversational Intelligence",
    iconType: "sparkle",
  },

  {
    id: 8,
    icon: power_pages_icon,
    image: powerpages,
    title: "Power Pages",
    desc: "Build secure business websites easily.",
    points: [
      "Low-code website builder",
      "Secure authentication",
      "Prebuilt templates",
      "Microsoft Dataverse integration",
    ],
    category: "DIGITAL",
    ai: "Digital Experience",
    iconType: "globe",
  },

  {
    id: 9,
    icon: vivaintegrationicon,
    image: vivaintegration,
    title: "Microsoft Viva Integrations",
    desc: "Enhance employee engagement and productivity.",
    points: [
      "Learning & skills development",
      "Employee insights",
      "Centralized knowledge hub",
      "Integrated with Microsoft 365",
    ],
    category: "EMPLOYEE EXPERIENCE",
    ai: "People Intelligence",
    iconType: "users",
  },
];

// ============================================================
// AI ICON
// ============================================================

const AIIcon = ({ type }) => {
  const className =
    "text-[22px] transition-transform duration-500 group-hover:scale-110";

  switch (type) {
    case "cloud":
      return <HiOutlineCloud className={className} />;

    case "security":
      return <HiOutlineShieldCheck className={className} />;

    case "analytics":
      return <HiOutlineChartBarSquare className={className} />;

    case "bolt":
      return <HiOutlineBolt className={className} />;

    case "cpu":
      return <HiOutlineCpuChip className={className} />;

    case "globe":
      return <HiOutlineGlobeAlt className={className} />;

    case "users":
      return <HiOutlineUserGroup className={className} />;

    default:
      return <HiOutlineSparkles className={className} />;
  }
};

// ============================================================
// MAIN COMPONENT
// ============================================================

const ServiceInner = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleCard = (id) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <>
      <HelmetChanger title="Microsoft Services" />

      <BreadCrumb2 breadCrumbTitle="Microsoft Services" />

      {/* ======================================================
          MAIN SECTION
          YOUR ORIGINAL BACKGROUND IS PRESERVED
      ======================================================= */}

      <section
        className="relative overflow-hidden py-20 md:py-24 lg:py-28"
        style={{
          background: "rgb(128, 216, 255)",
        }}
      >
        {/* ====================================================
            VERY SUBTLE BACKGROUND PATTERN
            Does NOT change your background color
        ===================================================== */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, #0D47A1 1px, transparent 0)
            `,
            backgroundSize: "28px 28px",
          }}
        />

        {/* ====================================================
            SOFT AI GLOW
        ===================================================== */}

        <div className="pointer-events-none absolute -left-32 top-20 h-[350px] w-[350px] rounded-full bg-white/40 blur-[100px]" />

        <div className="pointer-events-none absolute -right-32 bottom-10 h-[400px] w-[400px] rounded-full bg-[#1976D2]/10 blur-[100px]" />

        <div className="Container relative z-10">

          {/* ==================================================
              HERO
          =================================================== */}

          <div className="mx-auto mb-16 max-w-[900px] text-center">

            {/* AI LABEL */}

            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#0D47A1]/10 bg-white/40 px-5 py-2.5 shadow-sm backdrop-blur-md">

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0D47A1] text-white">

                <HiOutlineSparkles className="text-sm" />

              </span>

              <span className="font-Rajdhani text-[11px] font-bold uppercase tracking-[0.25em] text-[#0D47A1]">
                Microsoft AI & Digital Solutions
              </span>

              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />

            </div>

            {/* TITLE */}

            <h2 className="font-Rajdhani text-[38px] font-bold leading-[1.08] text-[#082B55] sm:text-[46px] md:text-[56px]">

              Elevating businesses with

              <span className="block bg-gradient-to-r from-[#0D47A1] via-[#1976D2] to-[#00695C] bg-clip-text text-transparent">
                intelligent Microsoft technology
              </span>

            </h2>

            <p className="mx-auto mt-6 max-w-[750px] font-Nunito text-[16px] leading-7 text-[#0D47A1]/70 md:text-[18px]">

              Transform the way your organization works with Microsoft
              cloud, AI, automation, analytics and productivity solutions
              designed around your business.

            </p>

          </div>

          {/* ==================================================
              AI STATS
          =================================================== */}

          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">

            {[
              {
                number: "09",
                label: "Microsoft Services",
              },
              {
                number: "AI",
                label: "Powered Solutions",
              },
              {
                number: "365",
                label: "Cloud Ecosystem",
              },
              {
                number: "24/7",
                label: "Digital Automation",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="group rounded-2xl border border-white/70 bg-white/30 p-5 text-center shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/50"
              >

                <div className="font-Rajdhani text-[27px] font-bold text-[#0D47A1] md:text-[32px]">
                  {item.number}
                </div>

                <div className="mt-1 font-Rajdhani text-[10px] font-bold uppercase tracking-[0.16em] text-[#0D47A1]/55">
                  {item.label}
                </div>

              </div>

            ))}

          </div>

          {/* ==================================================
              SECTION HEADER
          =================================================== */}

          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">

            <div>

              <div className="mb-2 flex items-center gap-3">

                <span className="h-[2px] w-8 bg-[#0D47A1]" />

                <span className="font-Rajdhani text-[10px] font-bold uppercase tracking-[0.25em] text-[#0D47A1]">
                  Intelligent Service Stack
                </span>

              </div>

              <h3 className="font-Rajdhani text-[30px] font-bold text-[#082B55] md:text-[38px]">
                Technology that works for you.
              </h3>

            </div>

            <div className="flex items-center gap-2 rounded-full border border-[#0D47A1]/10 bg-white/30 px-4 py-2 backdrop-blur-md">

              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />

              <span className="font-Rajdhani text-[10px] font-bold uppercase tracking-widest text-[#0D47A1]">
                AI Ready Platform
              </span>

            </div>

          </div>

          {/* ==================================================
              SERVICE GRID
          =================================================== */}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

            {serviceData.map((service) => {

              const isExpanded = expandedId === service.id;

              return (

                <div
                  key={service.id}
                  onClick={() => toggleCard(service.id)}
                  className={`group relative cursor-pointer overflow-hidden rounded-[26px] border transition-all duration-500 ${
                    isExpanded
                      ? "border-[#0D47A1]/30 bg-white shadow-[0_25px_60px_rgba(13,71,161,0.18)]"
                      : "border-white/70 bg-white/65 shadow-[0_8px_30px_rgba(13,71,161,0.08)] hover:-translate-y-2 hover:bg-white/85 hover:shadow-[0_20px_45px_rgba(13,71,161,0.15)]"
                  }`}
                >

                  {/* =================================================
                      IMAGE AREA
                  ================================================== */}

                  <div className="relative h-[215px] overflow-hidden bg-gradient-to-br from-white via-[#f4fbff] to-[#dff5ff]">

                    {/* AI GRID */}

                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.07]"
                      style={{
                        backgroundImage: `
                          linear-gradient(#0D47A1 1px, transparent 1px),
                          linear-gradient(90deg, #0D47A1 1px, transparent 1px)
                        `,
                        backgroundSize: "32px 32px",
                      }}
                    />

                    {/* GLOW */}

                    <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#38BDF8]/15 blur-3xl transition-all duration-500 group-hover:h-44 group-hover:w-44" />

                    {/* SERVICE IMAGE */}

                    <img
                      src={service.image}
                      alt={service.title}
                      className="relative z-10 h-full w-full object-contain p-7 transition-transform duration-700 group-hover:scale-[1.08]"
                    />

                    {/* NUMBER */}

                    <div className="absolute left-5 top-5 z-20">

                      <span className="font-Rajdhani text-[11px] font-bold tracking-[0.2em] text-[#0D47A1]/50">
                        0{service.id}
                      </span>

                    </div>

                    {/* ICON */}

                    <div className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-xl border border-white/80 bg-white/80 p-2 shadow-md backdrop-blur-md transition-all duration-300 group-hover:scale-110">

                      <img
                        src={service.icon}
                        alt=""
                        className="h-full w-full object-contain"
                      />

                    </div>

                    {/* CATEGORY */}

                    <div className="absolute bottom-4 left-5 z-20">

                      <span className="rounded-full border border-[#0D47A1]/10 bg-white/80 px-3 py-1.5 font-Rajdhani text-[9px] font-bold uppercase tracking-[0.15em] text-[#0D47A1] shadow-sm backdrop-blur-md">
                        {service.category}
                      </span>

                    </div>

                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================== */}

                  <div className="p-6">

                    {/* TITLE + ARROW */}

                    <div className="flex items-start justify-between gap-4">

                      <div>

                        <h4 className="font-Rajdhani text-[23px] font-bold leading-tight text-[#0D47A1] transition-colors duration-300 group-hover:text-[#1565C0]">
                          {service.title}
                        </h4>

                        {/* AI CAPABILITY */}

                        <div className="mt-2 flex items-center gap-2">

                          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#0D47A1]/5 text-[#0D47A1]">

                            <AIIcon type={service.iconType} />

                          </span>

                          <span className="font-Rajdhani text-[9px] font-bold uppercase tracking-[0.15em] text-[#0D47A1]/60">
                            {service.ai}
                          </span>

                        </div>

                      </div>

                      {/* EXPAND BUTTON */}

                      <div
                        className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isExpanded
                            ? "bg-[#0D47A1] text-white shadow-lg"
                            : "bg-[#0D47A1]/5 text-[#0D47A1] group-hover:bg-[#0D47A1] group-hover:text-white"
                        }`}
                      >

                        {isExpanded ? (
                          <FaChevronUp className="text-xs" />
                        ) : (
                          <FaChevronDown className="text-xs" />
                        )}

                      </div>

                    </div>

                    {/* DESCRIPTION */}

                    <p className="mt-4 font-Nunito text-[13px] leading-6 text-[#0D47A1]/65">
                      {service.desc}
                    </p>

                    {/* =================================================
                        EXPANDED AREA
                    ================================================== */}

                    <div
                      className={`grid transition-all duration-500 ${
                        isExpanded
                          ? "mt-5 grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >

                      <div className="overflow-hidden">

                        <div className="border-t border-[#0D47A1]/10 pt-5">

                          <div className="mb-4 flex items-center gap-2">

                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0D47A1] text-white">

                              <HiOutlineSparkles className="text-xs" />

                            </div>

                            <span className="font-Rajdhani text-[10px] font-bold uppercase tracking-[0.2em] text-[#0D47A1]">
                              Intelligent Capabilities
                            </span>

                          </div>

                          <div className="space-y-3">

                            {service.points.map((point, index) => (

                              <div
                                key={index}
                                className="flex items-start gap-3"
                              >

                                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-50">

                                  <FaCheck className="text-[8px] text-green-600" />

                                </span>

                                <span className="font-Nunito text-[12px] leading-5 text-[#0D47A1]/70">
                                  {point}
                                </span>

                              </div>

                            ))}

                          </div>

                          {/* EXPLORE */}

                          <div className="mt-5 flex items-center justify-between border-t border-[#0D47A1]/10 pt-4">

                            <span className="font-Rajdhani text-[9px] font-bold uppercase tracking-widest text-[#0D47A1]/40">
                              Microsoft Technology
                            </span>

                            <span className="flex items-center gap-2 font-Rajdhani text-[10px] font-bold uppercase tracking-widest text-[#0D47A1]">

                              Explore

                              <FaArrowRight className="text-[8px] transition-transform group-hover:translate-x-1" />

                            </span>

                          </div>

                        </div>

                      </div>

                    </div>

                    {/* =================================================
                        BOTTOM STATUS
                    ================================================== */}

                    {!isExpanded && (

                      <div className="mt-5 flex items-center justify-between border-t border-[#0D47A1]/5 pt-4">

                        <div className="flex items-center gap-2">

                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />

                          <span className="font-Rajdhani text-[9px] font-bold uppercase tracking-[0.16em] text-[#0D47A1]/45">
                            AI Enabled
                          </span>

                        </div>

                        <span className="font-Rajdhani text-[9px] font-bold uppercase tracking-[0.16em] text-[#0D47A1]/40">
                          Click to explore
                        </span>

                      </div>

                    )}

                  </div>

                  {/* =================================================
                      HOVER LINE
                  ================================================== */}

                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#0D47A1] via-[#1976D2] to-[#38BDF8] transition-all duration-700 group-hover:w-full" />

                </div>

              );
            })}

          </div>

          {/* ==================================================
              BOTTOM AI CTA
          =================================================== */}

          <div className="relative mt-14 overflow-hidden rounded-[28px] border border-white/70 bg-white/40 p-7 shadow-[0_15px_45px_rgba(13,71,161,0.08)] backdrop-blur-xl md:p-9">

            {/* GLOW */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#38BDF8]/20 blur-[80px]" />

            <div className="relative flex flex-col items-center justify-between gap-6 md:flex-row">

              <div>

                <div className="mb-2 flex items-center gap-2">

                  <HiOutlineSparkles className="text-[#0D47A1]" />

                  <span className="font-Rajdhani text-[10px] font-bold uppercase tracking-[0.2em] text-[#0D47A1]">
                    Next Generation IT
                  </span>

                </div>

                <h3 className="font-Rajdhani text-[28px] font-bold text-[#082B55] md:text-[34px]">

                  Ready to transform your business?

                </h3>

                <p className="mt-2 max-w-[650px] font-Nunito text-sm leading-6 text-[#0D47A1]/60">

                  Connect Microsoft Cloud, AI, automation and analytics
                  to create a smarter digital organization.

                </p>

              </div>

              <button
                type="button"
                className="group flex flex-shrink-0 items-center gap-3 rounded-full bg-[#0D47A1] px-6 py-3.5 font-Rajdhani text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#1565C0] hover:shadow-xl"
              >

                Start Your Transformation

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">

                  <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />

                </span>

              </button>

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default ServiceInner;

// Aviansh 777