import BreadCrumb2 from '../../Shared/BreadCrumb/BreadCrumb2';
import { FaArrowRightLong } from 'react-icons/fa6';
import HelmetChanger from '../../Shared/Helmet/Helmet';
import missionImg from '/images/ui-ux_1.png';
import missionImg2 from '/images/software-testing_2.png';
import missionImg3 from '/images/SD_1.png';
import icon from '/images/mision-icon.png';

const UI_Design_Development = () => {
  return (
    <>
      <HelmetChanger title={'Gen AI Inner Page Style Two'} />
      <BreadCrumb2
        breadCrumbTitle={'UI Design'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Gen AI Services'}
      />

      <section className="relative py-16 md:py-20 lg:py-28 z-10">
        <div className="Container lg:px-0">
          {/* Assessment Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 rounded-md mb-8 lg:mb-0">
            <div>
              <img src={missionImg} draggable={false} alt="Image" className='m-auto' />
            </div>
            <div className="lg:ml-[58px]">
              <h2 className="font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6">
                Assessment
              </h2>
              <div className="flex flex-row gap-4 mb-6">
                <div> <img src={icon} alt='Icon' draggable={false} /></div>
                <p className="font-Nunito text-[#0D47A1] flex-1 -mt-1 max-w-[488px] w-full">
                  At Bluelync, we understand the importance of a seamless user experience (UX) and intuitive user interface (UI). Thats why we offer a comprehensive UX/UI assessment to evaluate the usability of your existing solutions. Our team of experts conducts a thorough review, analyzing your products against industry best practices, heuristics, and agreed-upon metrics. This holistic assessment allows us to identify and prioritize any usability issues that may be hindering the effectiveness of your solutions.
                </p>
              </div>
              <div className="flex flex-row gap-4">
                <div> <img src={icon} alt='Icon' draggable={false} /></div>
                <p className="font-Nunito text-[#0D47A1] flex-1 -mt-1 max-w-[488px] w-full">
                  Once the assessment is complete, our team provides a detailed report outlining findings and recommendations for improving usability. We also present an implementation roadmap guiding you through the improvement process. With our UX/UI assessment, your products become not only visually appealing but also deliver exceptional user experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Collaboration Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 rounded-md mb-8 lg:mb-0 py-16 md:py-8 lg:py-10">
            <div className="lg:mr-[58px]">
              <h2 className="font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6">
                Collaboration
              </h2>
              <div className="flex flex-row gap-4 mb-6">
                <div> <img src={icon} alt='Icon' draggable={false} /></div>
                <p className="font-Nunito text-[#0D47A1] flex-1 -mt-1 max-w-[488px] w-full">
                  Our team collaborates with you to elicit key requirements, analyze user needs, and brainstorm essential features of your solution. We believe in a transparent, collaborative approach to ensure your vision is fully realized in a remarkable user experience.
                </p>
              </div>
              <div className="flex flex-row gap-4">
                <div> <img src={icon} alt='Icon' draggable={false} /></div>
                <p className="font-Nunito text-[#0D47A1] flex-1 -mt-1 max-w-[488px] w-full">
                  After analyzing the outcomes of our collaboration, Bluelync delivers a comprehensive UX/UI concept that aligns with your goals and exceeds your expectations. Through professional expertise and teamwork, we guarantee exceptional results for your project.
                </p>
              </div>
            </div>
            <div>
              <img src={missionImg2} draggable={false} alt="Image" />
            </div>
          </div>

          {/* Innovation Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 rounded-md mb-8 lg:mb-0">
            <div>
              <img src={missionImg3} draggable={false} alt="Image" className='m-auto' />
            </div>
            <div className="lg:ml-[58px]">
              <h2 className="font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6">
                Innovation
              </h2>
              <div className="flex flex-row gap-4 mb-6">
                <div> <img src={icon} alt='Icon' draggable={false} /></div>
                <p className="font-Nunito text-[#0D47A1] flex-1 -mt-1 max-w-[488px] w-full">
                  Our UX/UI lab specializes in prototyping, providing services to transform your ideas into interactive experiences. From mockups and wireframes to advanced navigation and information architecture, our team crafts every detail meticulously to ensure an engaging and seamless user experience.
                </p>
              </div>
              <div className="flex flex-row gap-4">
                <div> <img src={icon} alt='Icon' draggable={false} /></div>
                <p className="font-Nunito text-[#0D47A1] flex-1 -mt-1 max-w-[488px] w-full">
                  By connecting user flows, adding intuitive interactions, and visualizing data, we deliver high-fidelity prototypes that accurately represent your solution. With Bluelync’s innovation-driven design, your project is set up for success from the start.
                </p>
              </div>
            </div>
          </div>

          {/* Quality Assurance Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 py-16 md:py-20 lg:py-28">
            <div className="lg:mr-[58px]">
              <h2 className="font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6">
                Quality Assurance
              </h2>
              <div className="flex flex-row gap-4 mb-6">
                <div> <img src={icon} alt='Icon' draggable={false} /></div>
                <p className="font-Nunito text-[#0D47A1] flex-1 -mt-1 max-w-[488px] w-full">
                  At Bluelync, quality is at the heart of everything we create. Our UX/UI testing process includes usability testing, A/B testing, and emotional response testing to ensure flawless design and function. We also prioritize accessibility, ensuring inclusivity for all users.
                </p>
              </div>
              <div className="flex flex-row gap-4">
                <div> <img src={icon} alt='Icon' draggable={false} /></div>
                <p className="font-Nunito text-[#0D47A1] flex-1 -mt-1 max-w-[488px] w-full">
                  We collect valuable user insights through surveys and data-driven evaluations, iteratively refining designs until perfection. With Bluelync, you receive a thoroughly tested and refined product that delivers a truly outstanding user experience.
                </p>
              </div>
            </div>
            <div>
              <img src={missionImg} draggable={false} alt="Image"  className='m-auto'/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UI_Design_Development;
