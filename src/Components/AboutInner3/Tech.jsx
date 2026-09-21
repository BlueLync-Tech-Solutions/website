// import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="w-full flex justify-center px-4 ">
      {/* <div className="bg-gradient-to-r from-[#4b4b5a] to-[#7a6d77] text-white rounded-2xl shadow-lg max-w-7xl w-full p-8 md:p-12"> */}
        {/* <div className=" text-white rounded-2xl shadow-lg max-w-7xl w-full p-8 md:p-12" style={{'background': 'linear-gradient(135deg, rgb(232, 244, 253) 0%, rgb(197, 227, 252) 40%, rgb(144, 202, 249) 100%)'}}> */}
        <div className=" text-white rounded-2xl  max-w-7xl w-full p-8 md:p-12" style={{'fontfamily':'Rajdhani'}}>
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-md mb-4 uppercase">
              More About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug text-[#0d47a1]">
              We Solve Technology <br /> Challenges.
            </h2>
          </div>
          <div>
            <p className=" mb-3 leading-relaxed text-[#0d47a1] font-bold text-1xl">
              We are an interactive technology firm Connecting the industry's most experienced professionals with our clients' most challenging business and technical problems.
            </p>
            <Link
              to="/Careers"
              className="underline text-[#0d47a1] font-semibold hover:text-red-400 transition-all"
            >
              Join us today!
            </Link>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-black/20 my-8"></div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-4xl text-[#0d47a1] font-bold mb-2">5</h3>
            <p className="text-[#0d47a1] text-sm">Years experiences</p>
          </div>
          <div>
            <h3 className="text-4xl text-[#0d47a1] font-bold mb-2">11</h3>
            <p className="text-[#0d47a1] text-sm">Happy customers</p>
          </div>
          <div>
            <h3 className="text-4xl text-[#0d47a1] font-bold mb-2">53</h3>
            <p className="text-[#0d47a1] text-sm">Project completed</p>
          </div>
          <div>
            <h3 className="text-4xl text-[#0d47a1] font-bold mb-2">2</h3>
            <p className="text-[#0d47a1] text-sm">Awards achievement</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
