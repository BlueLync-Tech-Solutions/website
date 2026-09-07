// // import { Link } from "react-router-dom";
// // import { FaEnvelope, FaRegCircleCheck } from "react-icons/fa6";
// import { GoArrowRight } from "react-icons/go";
// import { HiOutlineMail } from "react-icons/hi";
// import footerShape from "/images/hand.png";

// import emailjs from "@emailjs/browser"; // correct package
// import { useState, useEffect, useRef } from "react";

// const SERVICE_ID = "service_jhqofxx";
// const TEMPLATE_ID = "template_kef526d";
// const PUBLIC_KEY = "NjHBvtspLkkIRCaMb";

// const Footer = () => {
//   const [email, setEmail] = useState("");
//   const formRef = useRef(null);

//   // Initialize EmailJS once
//   useEffect(() => {
//     try {
//       emailjs.init(PUBLIC_KEY);
//       console.log("EmailJS initialized with public key:", PUBLIC_KEY);
//     } catch (err) {
//       console.error("EmailJS init error:", err);
//     }
//   }, []);

//   const sendEmail = async (e) => {
//     e.preventDefault();

//     // Must match the variables in your template exactly.
//     const templateParams = {
//       toemail: email,
//       to_name: "Subscriber",
//       message: "Thank you for subscribing to our newsletter!",
//     };

//     console.log("Sending email with params:", templateParams);

//     // Try emailjs.send and log everything we can for debugging
//     emailjs
//       .send(SERVICE_ID, TEMPLATE_ID, templateParams)
//       .then((response) => {
//         console.log("EmailJS send success:", response);
//         alert("Confirmation Email Sent Successfully!");
//         setEmail("");
//       })
//       .catch((error) => {
//         // Log all bits we can to help diagnose
//         console.error("EmailJS send FAILED - full error object:", error);

//         // Some error objects include .status / .text, others nested message - print them all
//         try {
//           console.log("error.status:", error.status);
//           console.log("error.text:", error.text);
//           console.log("error.message:", error.message);
//           console.log("error.response:", error.response);
//         } catch (e) {
//           // ignore
//         }

//         // Also check network request in browser DevTools (see checklist below)
//         alert("Failed to send email! (see console for details)");
//       });
//   };

//   // Optional: alternative using sendForm (if your template expects different names)

//   return (
//     <>
//       <div className="bg-BodyBg-0">
//         <div className="Container -mb-[70px] relative z-10"></div>
//       </div>

//       <footer className="relative bg-[url('/images/footer-bg.png')] bg-no-repeat bg-center bg-cover bg-bottom pt-28 overflow-hidden">
//         <div className="Container">
//           {/* ... other layout omitted for brevity (copy from your existing file) ... */}
//           <div className="col-span-12 md:col-span-6 lg:col-span-3">
//             <h4 className="font-Rajdhani text-[28px] text-white font-semibold mb-[30px] block lg:hidden">
//               Newsletter
//             </h4>

//             {/* Use formRef if you plan to use sendForm */}
//             <form ref={formRef} onSubmit={sendEmail}>
//               <label htmlFor="email" className="relative">
//                 <input
//                   type="email"
//                   name="to_email"            // name MUST match template variable if using sendForm
//                   id="email"
//                   placeholder="Enter Your E-Mail*"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   className="w-full h-[56px] rounded-full bg-white bg-opacity-10 px-8 py-2 text-white placeholder:text-white mb-3 outline-none"
//                 />
//                 <HiOutlineMail className="absolute top-1/2 -translate-y-1/2 right-6 text-white text-xl" />
//               </label>

//               <div>
//                 <button type="submit" className="primary-btn !w-full !py-[17px]">
//                   Discover More <GoArrowRight size={"22"} />
//                 </button>
//               </div>
//             </form>

//             <p className="font-Nunito flex gap-2 text-white font-medium mt-5">
//               <span className="relative top-[3px] text-green-600">
//                 {/* <FaRegCircleCheck /> */}
//               </span>
//               Protecting Your Service
//             </p>
//           </div>
//         </div>
//         <div className="absolute right-0 2xl:right-20 bottom-[81px] animate-dance3 hidden md:block">
//           <img src={footerShape} draggable={false} alt="Image" />
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;


import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { FaEnvelope, FaRegCircleCheck } from "react-icons/fa6";
import footerShape from "/images/hand.png";

import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";

const SERVICE_ID = "service_jhqofxx";
const TEMPLATE_ID = "template_kef526d";
const PUBLIC_KEY = "NjHBvtspLkkIRCaMb";

const Footer = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      toemail: email,
      to_name: "Subscriber",
      message: "Thank you for subscribing to our newsletter!",
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams)
      .then(() => {
        alert("Confirmation Email Sent Successfully!");
        setEmail("");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send email!");
      });
  };

  return (
    <footer className="relative bg-[url('/images/footer-bg.png')] bg-cover bg-center pt-28 pb-10 overflow-hidden">

      <div className="Container grid grid-cols-12 gap-10">

        {/* About */}
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <h4 className="text-white text-[28px] font-semibold mb-6">
            About BlueLync
          </h4>

          <p className="text-white/80 mb-4">
            Globally expedite enterprise-wide action items rather than
            distinctive architectures. Globally engage market positioning.
          </p>

          <div className="flex items-center gap-2 text-white">
            <FaEnvelope />
            operations@bluelync.in
          </div>
        </div>

        {/* Company */}
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <h4 className="text-white text-[28px] font-semibold mb-6">
            Company
          </h4>

          <ul className="space-y-3 text-white/90">
            <li><Link to="/About-Us">About Us</Link></li>
            <li><Link to="/Microsoft-Service">Microsoft</Link></li>
            <li><Link to="/Careers">Careers</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <h4 className="text-white text-[28px] font-semibold mb-6">
            Our Services
          </h4>

          {/* <ul className="space-y-3 text-white/90">
            <li>AWS Service</li>
            <li>Mobile APPS</li>
            <li>Digital Marketing</li>
            <li>Quality Assurance</li>
            <li>UI/UX Design</li>
          </ul> */}

          <ul className="space-y-3 text-white/90">
              <li><a href="/AWSService" className="hover:underline">AWS Service</a></li>
              <li><a href="/Mobile_App" className="hover:underline">Mobile APPS</a></li>
              <li><a href="/digitalMarketing" className="hover:underline">Digital Marketing</a></li>
              <li><a href="/Quality_Assurance" className="hover:underline">Quality Assurance</a></li>
              <li><a href="/UI_Design_Development" className="hover:underline">UI/UX Design</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="col-span-12 md:col-span-6 lg:col-span-3">

          <h4 className="text-white text-[28px] font-semibold mb-6">
            Newsletter
          </h4>

          <form onSubmit={sendEmail} className="flex flex-col gap-4">

            <div className="relative">
              <input
                type="email"
                placeholder="Enter Your E-Mail*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-[56px] rounded-full bg-white/10 px-8 text-white placeholder:text-white outline-none"
              />

              <HiOutlineMail className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-xl" />
            </div>

            <button
              type="submit"
              className="h-[56px] rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex items-center justify-center gap-2"
            >
              DISCOVER MORE
              <GoArrowRight size={20} />
            </button>

          </form>

          <p className="flex items-center gap-2 text-white mt-5">
            <FaRegCircleCheck className="text-green-500" />
            Protecting Your Service
          </p>
        </div>
      </div>

      {/* Hand Image */}
      <div className="absolute right-10 bottom-24 hidden md:block animate-bounce">
        <img src={footerShape} draggable={false} alt="Image" />
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-16 pt-6">
        <div className="Container flex flex-col md:flex-row justify-between text-white text-sm">

          <p>
            ©2025 BlueLync. Designed By BlueLync Tech Solutions
          </p>

          {/* <div className="flex gap-6">
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div> */}
          <div className="flex gap-6">
            <span className="text-white hover:underline cursor-default">
              Terms & Conditions
            </span>
            <span className="text-white hover:underline cursor-default">
              Privacy Policy
            </span>
          </div>
            {/* <div className="flex gap-6 text-sm text-gray-600">
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
            </div> */}
        </div>
      </div>

    </footer>
  );
};

export default Footer;