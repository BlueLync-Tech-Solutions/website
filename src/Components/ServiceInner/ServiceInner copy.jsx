// import { FaArrowRightLong } from "react-icons/fa6";
// import serviceIcon from "/images/service3-icon1.png";
// import serviceIcon2 from "/images/service3-icon2.png";
// import serviceIcon3 from "/images/service3-icon3.png";
// import serviceIcon4 from "/images/service3-icon4.png";
// import serviceIcon5 from "/images/service3-icon5.png";
// import serviceIcon6 from "/images/service3-icon6.png";
// import serviceIcon7 from '/images/service-icon7.png';
// import serviceIcon8 from '/images/service-icon8.png';
// import ServiceCard from "./ServiceCard";
// import BreadCrumb2 from "../../../Shared/BreadCrumb/BreadCrumb2";
// import { HiOutlineArrowNarrowRight } from "react-icons/hi";
// import HelmetChanger from "../../../Shared/Helmet/Helmet";
// import titleShape from '/images/sub-title-shape.png';

// const serviceData = [
//   {
//     id: 1,
//     serviceIcon: serviceIcon,
//     serviceTitle: "Cloud Services",
//     serviceDesc:
//     "Monotonectal grants to business visualize provid solution services business provid done",
//     serviceUrl: "/service_details",
//     serviceButton2: "Learn More",
//     serviceButton: <HiOutlineArrowNarrowRight />,
//   },
//   {
//     id: 2,
//     serviceIcon: serviceIcon2,
//     serviceTitle: "IT Management",
//     serviceDesc:
//     "Monotonectal grants to business visualize provid solution services business provid done",
//     serviceUrl: "/service_details",
//     serviceButton2: "Learn More",
//     serviceButton: <HiOutlineArrowNarrowRight />,
//   },
//   {
//     id: 3,
//     serviceIcon: serviceIcon4,
//     serviceTitle: "Software Renew",
//     serviceDesc:
//     "Monotonectal grants to business visualize provid solution services business provid done",
//     serviceUrl: "/service_details",
//     serviceButton2: "Learn More",
//     serviceButton: <HiOutlineArrowNarrowRight />,
//   },
//   {
//     id: 4,
//     serviceIcon: serviceIcon3,
//     serviceTitle: "Machine Learning",
//     serviceDesc:
//     "Monotonectal grants to business visualize provid solution services business provid done",
//     serviceUrl: "/service_details",
//     serviceButton2: "Learn More",
//     serviceButton: <HiOutlineArrowNarrowRight />,
//   },
//   {
//     id: 5,
//     serviceIcon: serviceIcon5,
//     serviceTitle: "Digital Marketing",
//     serviceDesc:
//     "Monotonectal grants to business visualize provid solution services business provid done",
//     serviceUrl: "/service_details",
//     serviceButton2: "Learn More",
//     serviceButton: <HiOutlineArrowNarrowRight />,
//   },
//   {
//     id: 6,
//     serviceIcon: serviceIcon6,
//     serviceTitle: "Web Development",
//     serviceDesc:
//     "Monotonectal grants to business visualize provid solution services business provid done",
//     serviceUrl: "/service_details",
//     serviceButton2: "Learn More",
//     serviceButton: <HiOutlineArrowNarrowRight />,
//   },
//   {
//     id: 7,
//     serviceIcon: serviceIcon7,
//     serviceTitle: "Cyber Security",
//     serviceDesc:
//     "Monotonectal grants to business visualize provid solution services business provid done",
//     serviceUrl: "/service_details",
//     serviceButton2: "Learn More",
//     serviceButton: <HiOutlineArrowNarrowRight />,
//   },
//   {
//     id: 8,
//     serviceIcon: serviceIcon8,
//     serviceTitle: "Data Analytic",
//     serviceDesc:
//     "Monotonectal grants to business visualize provid solution services business provid done",
//     serviceUrl: "/service_details",
//     serviceButton2: "Learn More",
//     serviceButton: <HiOutlineArrowNarrowRight />,
//   },
// ];

// const ServiceInner = () => {
//   return (
//     <>
//       <HelmetChanger title={'Service Inner Page'} />
//       <BreadCrumb2
//         breadCrumbTitle={'Our Services'}
//         breadCrumbIcon={<FaArrowRightLong />}
//         breadCrumbLink={'Our Services'}
//       />
//       <section className='py-16 md:py-0 lg:py-28 relative z-10 bg-BodyBg-0'>
//         <div className='Container'>
//           <div className='text-center'>
//             <h5 className='flex items-center justify-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
//               <img
//                 src={titleShape}
//                 draggable={false}
//                 alt='Shape'
//               />{' '}
//               IT Support For Business{' '}
//               <img
//                 src={titleShape}
//                 draggable={false}
//                 alt='Shape'
//               />
//             </h5>
//             <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-[#0D47A1] mt-[14px] mb-4'>
//               Ensuring Your Success Trusted <br />
//               IT Services Source
//             </h1>
//           </div>
//           <div className='mt-[88px]'>
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-[68px]'>
//               {serviceData.map(
//                 ({
//                   id,
//                   serviceImg,
//                   serviceIcon,
//                   serviceUrl,
//                   serviceButton,
//                   serviceButton2,
//                   serviceTitle,
//                   serviceDesc,
//                   serviceShape,
//                 }) => {
//                   return (
//                     <>
//                       <div key={id}>
//                         <ServiceCard
//                           serviceImg={serviceImg}
//                           serviceIcon={serviceIcon}
//                           serviceUrl={serviceUrl}
//                           serviceButton={serviceButton}
//                           serviceButton2={serviceButton2}
//                           serviceTitle={serviceTitle}
//                           serviceDesc={serviceDesc}
//                           serviceShape={serviceShape}
//                         />
//                       </div>
//                     </>
//                   );
//                 }
//               )}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ServiceInner;
import React, { useState } from "react";
import { FaArrowRightLong, FaChevronDown, FaChevronUp } from "react-icons/fa6";

// Microsoft icons & images (same for both)
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

const HelmetChanger = ({ title }) => {
  document.title = title;
  return null;
};
const BreadCrumb2 = ({ breadCrumbTitle }) => (
  <div className="bg-blue-50 py-4 text-center mb-6">
    <h1 className="text-2xl font-bold text-[#0D47A1] flex items-center justify-center gap-2">
      <FaArrowRightLong className="text-blue-500" /> {breadCrumbTitle}
    </h1>
  </div>
);

const serviceData = [
  { id: 1, icon: office365_icon, image: office365, title: "Office 365" },
  { id: 2, icon: mscloud_icon, image: mscloud, title: "Run It In The Microsoft Cloud" },
  { id: 3, icon: mobility_icon, image: mssecurity, title: "Microsoft Enterprise Mobility + Security" },
  { id: 4, icon: powerbi_icon, image: powerbi, title: "Power BI" },
  { id: 5, icon: smartphone_icon, image: powerapps, title: "Power Apps" },
  { id: 6, icon: powerautomate_icon, image: powerautomate, title: "Power Automate" },
  { id: 7, icon: virutal_agent_icon, image: powervirtual, title: "Power Virtual Agents" },
  { id: 8, icon: power_pages_icon, image: powerpages, title: "Power Pages" },
  { id: 9, icon: vivaintegrationicon, image: vivaintegration, title: "Microsoft Viva Integrations" },
];

const ServiceInner = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <HelmetChanger title="Microsoft Services" />
      <BreadCrumb2 breadCrumbTitle="Microsoft Services" />

      <section className="py-20 bg-gradient-to-b from-[#f8faff] to-[#ffffff]">
        <div className="max-w-6xl mx-auto px-5">
          {/* Header Section */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D47A1]">
              Elevating Small And Mid-Sized Companies <br />
              Through Tailored IT Services
            </h2>
          </div>

          {/* Microsoft Header Block */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 bg-white shadow-lg rounded-2xl p-6 mb-14">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg font-semibold text-gray-700 uppercase mb-2">
                Microsoft
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Discover our easy, customized, and passionate creativity and innovation. cjeh
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {serviceData.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100"
              >
                {/* Image and Click Handler */}
                <div
                  className="relative cursor-pointer"
                  onClick={() => toggleExpand(service.id)}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-contain bg-[#f9fbff] p-6"
                  />
                  {/* Floating Icon */}
                  <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-md">
                    <img
                      src={service.icon}
                      alt="icon"
                      className="w-8 h-8 object-contain"
                    />
                  </div>

                  {/* Expand/Collapse Arrow */}
                  <div className="absolute bottom-4 right-4 bg-blue-100 p-2 rounded-full">
                    {expandedId === service.id ? (
                      <FaChevronUp className="text-blue-600" />
                    ) : (
                      <FaChevronDown className="text-blue-600" />
                    )}
                  </div>
                </div>

                {/* Title */}
                <div
                  className="p-5 text-center cursor-pointer"
                  onClick={() => toggleExpand(service.id)}
                >
                  <h4 className="text-lg font-semibold text-[#0D47A1]">
                    {service.title}
                  </h4>
                </div>

                {/* Expandable Content */}
                {expandedId === service.id && (
                  <div className="px-5 pb-5 text-gray-600 text-sm animate-fadeIn border-t border-gray-100">
                    <p className="mt-3">
                      <strong>{service.title}</strong> helps organizations enhance productivity and
                      collaboration with integrated tools and cloud-based solutions.
                    </p>
                    <ul className="list-disc ml-5 mt-3 space-y-1">
                      <li>Seamless integration with Microsoft ecosystem</li>
                      <li>Enhanced data security and compliance</li>
                      <li>Scalable cloud-based infrastructure</li>
                      <li>Comprehensive reporting & analytics</li>
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline CSS for fade animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default ServiceInner;
