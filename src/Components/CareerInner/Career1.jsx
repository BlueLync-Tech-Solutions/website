import { Link } from "react-router-dom";

const Career1 = () => {
  return (
    <section className="bg-BodyBg-0 py-16 md:py-20 lg:py-28">
      <div className="Container">
        <div className="grid grid-cols-1 gap-8 lg:gap-0 lg:grid-cols-3 items-center mb-16 md:mb-20 lg:mb-28">
          <div className="col-span-2">
            <h4 className="font-Rajdhani text-2xl font-semibold text-[#0D47A1]">
                {/* Aviansh */}
              Inspire and Get Inspired by 22{" "}
              <span className="text-PrimaryColor-0">Professional</span> Experts
            </h4>
          </div>
          <div>
            <p className="font-Nunito text-[#0D47A1]">
              Our platform is tailor-made for developers, providing a powerful
              and <span className="text-PrimaryColor-0">easy-to-use</span>{" "}
              solution. With our tools, you can streamline your process.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8 lg:gap-0 lg:items-center border-t-2 py-16 relative before:absolute before:-top-[2px] before:left-0 before:w-8 before:h-[2px] before:bg-PrimaryColor-0 after:absolute after:-top-[2px] after:left-8 after:w-2 after:h-[2px] after:bg-white">
          <div className="col-span-4">
            <div className="flex items-center gap-5">
              <h6 className="px-[26px] py-1 rounded-full bg-PrimaryColor-0 font-Nunito font-light text-white">
                Full Time
              </h6>
              <p className="font-Nunito text-[#0D47A1]">Hyderabad</p>
            </div>
            <p className="font-Rajdhani font-semibold text-2xl mt-5">
              UI & Web Developer
            </p>
          </div>
          <div className="col-span-4">
            <p className="font-Nunito text-[#0D47A1]">
              We’re seeking a UI & Web Developer to create responsive, user-friendly websites with clean design and efficient code. You’ll collaborate with designers and developers to deliver engaging web experiences using modern front-end technologies.
            </p>
          </div>
          <div className="col-span-4 flex lg:justify-end">
            <Link to={"/contact"}>
              <button className="font-Nunito text-[#0D47A1] px-[60px] py-[14px] border border-HeadingColor-0 border-opacity-10 rounded-full transition-all duration-500 hover:border-PrimaryColor-0">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8 lg:gap-0 lg:items-center border-t-2 py-16 relative before:absolute before:-top-[2px] before:left-0 before:w-8 before:h-[2px] before:bg-PrimaryColor-0 after:absolute after:-top-[2px] after:left-8 after:w-2 after:h-[2px] after:bg-white">
          <div className="col-span-4">
            <div className="flex items-center gap-5">
              <h6 className="px-[26px] py-1 rounded-full bg-PrimaryColor-0 font-Nunito font-light text-white">
                Full Time
              </h6>
              <p className="font-Nunito text-[#0D47A1]">Hyderabad</p>
            </div>
            <p className="font-Rajdhani font-semibold text-2xl mt-5">
              App Developer
            </p>
          </div>
          <div className="col-span-4">
            <p className="font-Nunito text-[#0D47A1]">
              We’re looking for an App Developer to design and build high-performing mobile applications for Android and iOS using modern frameworks. You’ll ensure smooth performance, great UI/UX, and seamless integration with backend services.
            </p>
          </div>
          <div className="col-span-4 flex lg:justify-end">
            <Link to={"/contact"}>
              <button className="font-Nunito text-[#0D47A1] px-[60px] py-[14px] border border-HeadingColor-0 border-opacity-10 rounded-full transition-all duration-500 hover:border-PrimaryColor-0">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8 lg:gap-0 lg:items-center border-y-2 py-16 relative before:absolute before:-top-[2px] before:left-0 before:w-8 before:h-[2px] before:bg-PrimaryColor-0 after:absolute after:-top-[2px] after:left-8 after:w-2 after:h-[2px] after:bg-white">
          <div className="col-span-4">
            <div className="flex items-center gap-5">
              <h6 className="px-[26px] py-1 rounded-full bg-PrimaryColor-0 font-Nunito font-light text-white">
                Full Time
              </h6>
              <p className="font-Nunito text-[#0D47A1]">Hyderabad</p>
            </div>
            <p className="font-Rajdhani font-semibold text-2xl mt-5">
              Full Stack React Developer
            </p>
          </div>
          <div className="col-span-4">
            <p className="font-Nunito text-[#0D47A1]">
              We’re hiring a Full Stack React Developer to build and maintain web applications using React.js and Node.js. You’ll work on both frontend and backend, creating responsive, high-performance solutions with clean, efficient code.
            </p>
          </div>
          <div className="col-span-4 flex lg:justify-end">
            <Link to={"/contact"}>
              <button className="font-Nunito text-[#0D47A1] px-[60px] py-[14px] border border-HeadingColor-0 border-opacity-10 rounded-full transition-all duration-500 hover:border-PrimaryColor-0">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-16 md:mt-20 lg:mt-28">
          <h5 className="font-Rajdhani font-semibold text-[#0D47A1] text-2xl mb-7">Job Requirements</h5>
          <p className="font-Nunito text-[#0D47A1]">
            A job responsibility could be a description of your duties in a very
            explicit position. you’ll be able to use it to point your
            qualifications once applying for a replacement job day Job
            responsibility summaries embody data concerning roles, activities
            and tasks that relate to fulfilling job necessities, like writing,
            selling, decision-making and planning professions concerning roles,
            activities and tasks that relate to fulfilling job necessities, like
            writing, selling, decision-making.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Career1;
