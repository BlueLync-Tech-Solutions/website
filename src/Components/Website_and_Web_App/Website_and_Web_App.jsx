import BreadCrumb2 from '../../Shared/BreadCrumb/BreadCrumb2';
import { FaArrowRightLong } from 'react-icons/fa6';
import HelmetChanger from '../../Shared/Helmet/Helmet';
import missionImg from '/images/ui-ux_1.png';
import missionImg2 from '/images/SD_2.png';
import missionImg3 from '/images/SD_3.png';
import missionImg4 from '/images/SD_4.png';
import missionImg5 from '/images/SD_6.png';
import icon from '/images/mision-icon.png';

const Website_and_Web_App = () => {
  return (
    <>
      <HelmetChanger title={'Web Application Services'} />
      <BreadCrumb2
        breadCrumbTitle={'Web Application Services'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Gen AI Services'}
      />

      <section className="relative py-16 md:py-20 lg:py-28 z-10">
        <div className="Container lg:px-0">

          {/* ---------- UI/UX ---------- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 rounded-md mb-8 lg:mb-0">
            <div>
              <img src={missionImg} draggable={false} alt="UI/UX Design" className='m-auto' />
            </div>
            <div className="lg:ml-[58px]">
              <h2 className="font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6">
                UI/UX
              </h2>
              <div className="flex flex-row gap-4">
                <div>
                  <img src={icon} draggable={false} alt="Icon" />
                </div>
                <p className="font-Nunito text-[#0D47A1] flex-1 -mt-1">
                  Bluelync specializes in UX/UI design, offering top-notch services to create high-end websites & web applications that resonate with end-users. Our team takes the time to study the specific needs of your target audience and thoroughly research your niche in order to build an appealing web app that meets your goals. We understand the importance of standing out from the competition, which is why our designers add a personal touch to every project, ensuring that your web app is unique and captures the attention of users. With our expertise, we can create an engaging product that not only meets your requirements but also exceeds user expectations, resulting in higher user satisfaction and an exceptional digital experience.
                </p>
              </div>
            </div>
          </div>

          {/* ---------- Proof of Concept ---------- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 py-16 md:py-20 lg:py-28">
            <div className="lg:mr-[58px]">
              <h2 className="font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6">
                Proof of Concept
              </h2>
              <div className="flex flex-row gap-4">
                <div>
                  <img src={icon} draggable={false} alt="Icon" />
                </div>
                <p className="font-Nunito text-[#0D47A1] flex-1 -mt-1">
                  Bluelync offers a range of services to assist in the development of websites and web-based applications. If youre looking to test the viability of your idea, we can help you build a Proof of Concept (PoC) or create a Minimum Viable Product (MVP) to validate its potential. Our team is experienced in conducting comprehensive custom application discovery, allowing us to identify the benefits and drawbacks of your app and test its core functionality. Additionally, we provide scope and vision documentation to equip you with a clear roadmap for your project. With our expertise, you can confidently navigate the process of building your web-based application and ensure its success.
                </p>
              </div>
            </div>
            <div>
              <img src={missionImg2} draggable={false} alt="Proof of Concept" className='m-auto'  />
            </div>
          </div>

          {/* ---------- Development ---------- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 mb-8 lg:mb-0">
            <div>
              <img src={missionImg3} draggable={false} alt="Development" className='m-auto' />
            </div>
            <div className="lg:ml-[58px]">
              <h2 className="font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6">
                Development
              </h2>
              <div className="flex flex-row gap-4">
                <div>
                  <img src={icon} draggable={false} alt="Icon" />
                </div>
                <p className="font-Nunito text-[#0D47A1] flex-1 -mt-1">
                  Bluelync offers comprehensive web app and website development services, ensuring that clients benefit from a seamless and efficient development process. From the initial idea to the final launch of a full-featured app, Bluelync provides 24/7 support and maintenance to ensure the success of each project. With expertise in various technologies and frameworks, their team of engineers can handle projects of any complexity. Whether its microservices, serverless architecture, headless applications, cloud-native solutions, or progressive web apps and websites, Bluelync is equipped to deliver high-quality results.
                </p>
              </div>
            </div>
          </div>

          {/* ---------- Modernization ---------- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 py-16 md:py-20 lg:py-28">
            <div className="lg:mr-[58px]">
              <h2 className="font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6">
                Modernization
              </h2>
              <div className="flex flex-row gap-4">
                <div>
                  <img src={icon} draggable={false} alt="Icon" />
                </div>
                <p className="font-Nunito text-[#0D47A1] flex-1 -mt-1">
                  Our team of design experts and application modernization engineers can help breathe new life into your software interfaces and enhance the end-user experience. With our UX/UI reimagining services, we offer a fresh and improved look for your legacy app, transforming user journeys and ultimately increasing revenues. Utilizing a mobile-first approach, we focus on creating intuitive designs that prioritize productivity, security compliance, and ease of use.
                </p>
              </div>
            </div>
            <div>
              <img src={missionImg4} draggable={false} alt="Modernization" className='m-auto'/>
            </div>
          </div>

          {/* ---------- Re-engineering ---------- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0">
            <div>
              <img src={missionImg5} draggable={false} alt="Re-engineering" className='m-auto' />
            </div>
            <div className="lg:ml-[58px]">
              <h2 className="font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6">
                Re-engineering
              </h2>
              <div className="flex flex-row gap-4">
                <div>
                  <img src={icon} draggable={false} alt="Icon" />
                </div>
                <p className="font-Nunito text-[#0D47A1] flex-1 -mt-1">
                  Bluelync specializes in website and web application re-engineering, offering businesses the opportunity to rebuild their legacy websites & web applications for improved efficiency and increased business value. By working with Bluelync, companies can lower operating costs, accelerate innovation, and unlock the benefits of modernized IT infrastructure. With a deep understanding of software modernization and a wealth of knowledge across various business domains, Bluelync creates tailored solutions that allow for future scalability and success.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Website_and_Web_App;
