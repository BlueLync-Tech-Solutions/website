import { NavLink } from "react-router-dom";
import Logo from "/images/white-main-logo.png";
import Logo3 from "/images/white-main-logo.png";
import { useEffect, useState } from "react";
import { FaChevronDown, FaEnvelope } from "react-icons/fa6";
import { FaPhoneAlt, FaTimes } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

const MENU = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/About-Us" },
  { label: "Microsoft", to: "/Microsoft-Service" },

  {
    label: "Our Services",
    children: [
      { label: "Gen AI", to: "/genAI" },
      { label: "Digital Marketing", to: "/digitalMarketing" },
      { label: "AWS Services", to: "/AWSService" },
      { label: "Microsoft Consulting", to: "/MicrosoftServicesConsulting" },
      { label: "SharePoint Services", to: "/MicrosoftSharepointServices" },
      { label: "Mobile Apps", to: "/Mobile_App" },
      { label: "Quality Assurance", to: "/Quality_Assurance" },
      { label: "Salesforce Admin", to: "/Salesforce_Adminstration" },
      { label: "Software Development", to: "/Software_Development" },
      { label: "UI/UX Design", to: "/UI_Design_Development" },
      { label: "Web Applications", to: "/Website_and_Web_App" },
    ],
  },

  { label: "Careers", to: "/Careers" },
  { label: "Contact Us", to: "/Contact-US" },
];

export default function Navbar() {
  const [offOpen, setOffOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState({});

  useEffect(() => {
    const header = document.querySelector(".header-sticky");
    const onScroll = () => {
      if (window.scrollY > 120) header.classList.add("is-sticky");
      else header.classList.remove("is-sticky");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        .offcanvas { transform: translateX(-100%); }
        .offcanvas.opened { transform: translateX(0); }

        .body-overlay {
          position: fixed !important;
          width: 100vw !important;
          height: 100vh !important;
          top: 0; left: 0;
          display: none;
        }
        .body-overlay.apply { display: block; }

        .is-sticky {
          position: fixed; top: 0; left: 0; width: 100%;
          animation: slideDown .3s ease;
          z-index: 50;
        }
        @keyframes slideDown {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }

        .submenu-mobile { display: none; padding-left: 14px; margin-top: 5px; }
        .submenu-mobile.open { display: block; }
        .rotate { transform: rotate(180deg); transition: .2s; }
        .no-rotate { transition: .2s; }
      `}</style>

      {/* OFFCANVAS */}
      <div className="offcanvas-area">
        <div
          className={`offcanvas mobile-view bg-white fixed z-[99999] top-0 left-0 w-72 h-full z-50 transition-all duration-300 p-5 overflow-y-auto ${
            offOpen ? "opened" : ""
          }`}
        >
          <div className="flex justify-between items-center mb-5 border-b pb-3 text-black">
            <h3 className="font-bold text-xl text-[#0D47A1]">Menu</h3>
            <FaTimes
              className="text-2xl cursor-pointer text-[#0D47A1]"
              onClick={() => setOffOpen(false)}
            />
          </div>

          {/* MOBILE MENU */}
          <ul className="text-[#0D47A1] ">
            {MENU.map((item, idx) => (
              <li key={idx} className="py-2 border-b">
                {!item.children ? (
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={() => setOffOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <>
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() =>
                        setOpenMenu((prev) => ({ ...prev, [idx]: !prev[idx] }))
                      }
                    >
                      <span>{item.label}</span>
                      <FaChevronDown
                        className={openMenu[idx] ? "rotate" : "no-rotate"}
                      />
                    </div>

                    <ul
                      className={`submenu-mobile ${
                        openMenu[idx] ? "open" : ""
                      }`}
                    >
                      {item.children.map((sub, i) => (
                        <li key={i}>
                          <NavLink
                            to={sub.to}
                            className={({ isActive }) =>
                              isActive ? "active" : ""
                            }
                            onClick={() => setOffOpen(false)}
                          >
                            {sub.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>

          {/* CONTACT */}
          <div className="mt-6 pt-4 text-[#0D47A1]">
            <h4 className="font-bold mb-2">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2 items-center">
                <MdLocationPin /> Hyderabad, India
              </li>
              <li className="flex gap-2 items-center">
                <FaEnvelope /> hr-admin@bluelync.in
              </li>
              <li className="flex gap-2 items-center">
                <FaPhoneAlt /> +91-6304925404
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      <div
        className={`body-overlay bg-black bg-opacity-40 z-40 ${
          offOpen ? "apply" : ""
        }`}
        onClick={() => setOffOpen(false)}
      ></div>

      {/* HEADER */}
      {/* Orange */}
      <header className="header-area header-sticky bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 shadow-md py-1 lg:py-2 transition-all duration-300 text-white fixed w-full top-0 left-0 z-50">
        {/* Blue */}
        {/* <header className="header-area header-sticky bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-md py-1 lg:py-2 transition-all duration-300 text-white fixed w-full top-0 left-0 z-50"> */}
        {/* Green */}
        {/* <header className="header-area header-sticky bg-gradient-to-r from-green-500 via-green-600 to-green-700 shadow-md py-1 lg:py-2 transition-all duration-300 text-white fixed w-full top-0 left-0 z-50"> */}
        {/* <header className="header-area header-sticky bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#2563EB] shadow-md py-1 lg:py-2 transition-all duration-300 text-white fixed w-full top-0 left-0 z-50"> */}

        <div className="px-4 sm:px-6 md:px-8 lg:px-4 xl:px-8 2xl:px-10">
          <div className="flex items-center justify-between lg:grid lg:grid-cols-12">
            {/* Logo */}
            <div className="col-span-2 flex items-center">
              <div className="lg:hidden flex items-center">
                <NavLink to={"/"}>
                  <img
                    src={Logo3}
                    alt="Logo"
                    className="h-10 w-auto"
                    draggable="false"
                  />
                </NavLink>
              </div>

              <div className="hidden lg:block">
                <NavLink to={"/"}>
                  <img
                    src={Logo}
                    alt="Logo"
                    className="h-15 w-auto"
                    draggable="false"
                  />
                </NavLink>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="col-span-8 hidden lg:block">
              <div className="header-main-menu text-right 2xl:text-center">
                <nav className="main-menu-content">
                  <ul className="flex items-center justify-end gap-6">
                    {MENU.map((item, idx) =>
                      !item.children ? (
                        <li key={idx}>
                          <NavLink
                            to={item.to}
                            className={({ isActive }) =>
                              isActive ? "active" : ""
                            }
                          >
                            {item.label}
                          </NavLink>
                        </li>
                      ) : (
                        <li key={idx} className="group relative">
                          <span className="flex items-center gap-1 cursor-pointer">
                            {item.label} <FaChevronDown />
                          </span>

                          <ul className="submenu absolute left-0 hidden group-hover:block top-[50px] bg-white text-black shadow-lg mt-2 w-56 rounded">
                            {item.children.map((sub, i) => (
                              <li key={i}>
                                <NavLink
                                  to={sub.to}
                                  className={({ isActive }) =>
                                    isActive
                                      ? "active block py-2 px-3"
                                      : "block py-2 px-3"
                                  }
                                >
                                  {sub.label}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ),
                    )}
                  </ul>
                </nav>
              </div>
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden flex items-center">
              <button
                className="text-2xl focus:outline-none hover:text-gray-200"
                onClick={() => setOffOpen(true)}
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
