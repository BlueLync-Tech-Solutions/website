import BreadCrumb2 from '../../Shared/BreadCrumb/BreadCrumb2';
import { FaArrowRightLong } from 'react-icons/fa6';
import HelmetChanger from '../../Shared/Helmet/Helmet';
import Mobile_Image_1 from '/images/mobile-service-1.jpg';
import Mobile_Image_2 from '/images/mobile-service-2.jpg';
import Mobile_Image_3 from '/images/mobile-service-3.jpg';
import Mobile_Image_4 from '/images/mobile-service-4.jpg';
import icon from '/images/mision-icon.png';

const Mobile_App = () => {
  return (
    <>
      <HelmetChanger title={'Mobile Applications'} />
      <BreadCrumb2
        breadCrumbTitle={'Mobile Applications'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Gen AI Services'}
      />

      <section className='relative py-16 md:py-10 lg:py-8 z-10'>
        <div className='Container lg:px-0'>
          {/* SMB & Large Corporates */}
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 rounded-md mb-8 lg:mb-0'>
            <div>
              <img src={Mobile_Image_1} draggable={false} alt='Image' className='m-auto' />
            </div>
            <div className='lg:ml-[58px]'>
              <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6'>
                SMB & Large Corporates
              </h2>
              <div className='flex flex-row gap-4 mb-6'>
                <div> <img src={icon} alt='Icon' draggable={false} /></div>
                <p className='font-Nunito text-[#0D47A1] flex-1 max-w-[484px]'>
                  Bluelync specializes in developing mobile applications for small-medium to large enterprises/corporates that seamlessly integrate with your existing IT infrastructure and databases. Our team of experts creates customized guides, planners, and team management apps that enhance the efficiency of large company management.
                </p>
              </div>
              <div className='flex flex-row gap-4'>
                <div> <img src={icon} alt='Icon' draggable={false} /></div>
                <p className='font-Nunito text-[#0D47A1] flex-1 max-w-[488px]'>
                  In addition, we design and build complex enterprise workspaces, including applications specifically tailored for field workers who are constantly on the move. With our expertise in enterprise mobility, we help businesses optimize operations and improve productivity through the power of mobile technology.
                </p>
              </div>
            </div>
          </div>

          {/* Healthcare Applications */}
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 py-16 md:py-20 lg:py-28'>
            <div className='lg:mr-[58px]'>
              <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6'>
                Healthcare Applications
              </h2>
              <div className='flex flex-row gap-4 mb-6'>
                <div> <img src={icon} alt='Icon' draggable={false} /></div>
                <p className='font-Nunito text-[#0D47A1] flex-1'>
                  Mobile applications have revolutionized healthcare and life sciences by orchestrating complex processes and data where urgent and timely services are critical. These apps redefine user experience by giving patients easy access to their personal data and medical histories.
                </p>
              </div>
              <div className='flex flex-row gap-4'>
                <div> <img src={icon} alt='Icon' draggable={false} /></div>
                <p className='font-Nunito text-[#0D47A1] flex-1'>
                  Doctors benefit from enhanced tools for appointment management, treatment tracking, and better decision-making. The result — streamlined processes, empowered patients, and improved healthcare delivery outcomes.
                </p>
              </div>
            </div>
            <div>
              <img src={Mobile_Image_2} draggable={false} alt='Image' className='m-auto'/>
            </div>
          </div>

          {/* Banking Applications */}
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0'>
            <div>
              <img src={Mobile_Image_3} draggable={false} alt='Image' className='m-auto' />
            </div>
            <div className='lg:ml-[58px]'>
              <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6'>
                Banking Applications
              </h2>
              <div className='flex flex-row gap-4 mb-6'>
                <div> <img src={icon} alt='Icon' draggable={false} /></div>
                <p className='font-Nunito text-[#0D47A1] flex-1'>
                  In the fast-evolving world of banking and finance, Bluelync builds secure, compliant mobile banking apps that connect users and financial institutions seamlessly. Our omni-component eBanking apps feature high-grade security, intuitive interfaces, and powerful functionality.
                </p>
              </div>
              <div className='flex flex-row gap-4'>
                <div> <img src={icon} alt='Icon' draggable={false} /></div>
                <p className='font-Nunito text-[#0D47A1] flex-1'>
                  We integrate contactless NFC payment systems, multi-layer mobile security, and real-time financial management tools. Bluelync’s mobile banking solutions redefine user convenience, trust, and engagement.
                </p>
              </div>
            </div>
          </div>

          {/* Transportation & Logistics */}
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 py-16 md:py-20 lg:py-28'>
            <div className='lg:mr-[58px]'>
              <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6'>
                Transportation & Logistics
              </h2>
              <div className='flex flex-row gap-4 mb-6'>
                <div> <img src={icon} alt='Icon' draggable={false} /></div>
                <p className='font-Nunito text-[#0D47A1] flex-1'>
                  Bluelync develops innovative mobile apps that streamline freight forwarding, vehicle tracking, and route optimization. Our logistics apps help businesses reduce delivery times and costs while improving dispatch efficiency.
                </p>
              </div>
              <div className='flex flex-row gap-4'>
                <div> <img src={icon} alt='Icon' draggable={false} /></div>
                <p className='font-Nunito text-[#0D47A1] flex-1'>
                  We also design rent-a-vehicle and on-demand transport apps, empowering logistics providers to stay agile and responsive in today’s fast-paced supply chain ecosystem.
                </p>
              </div>
            </div>
            <div>
              <img src={Mobile_Image_4} draggable={false} alt='Image' className='m-auto' />
            </div>
          </div>

          {/* Media & Entertainment */}
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0'>
            <div>
              <img src={Mobile_Image_1} draggable={false} alt='Image' className='m-auto' />
            </div>
            <div className='lg:ml-[58px]'>
              <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6'>
                Media & Entertainment
              </h2>
              <div className='flex flex-row gap-4 mb-6'>
                <div> <img src={icon} alt='Icon' draggable={false} /></div>
                <p className='font-Nunito text-[#0D47A1] flex-1'>
                  Bluelync helps media companies innovate with social networking, AR/VR native apps, and sports engagement platforms. We utilize behavioral analytics and AI to improve engagement and grow active user bases.
                </p>
              </div>
              <div className='flex flex-row gap-4'>
                <div> <img src={icon} alt='Icon' draggable={false} /></div>
                <p className='font-Nunito text-[#0D47A1] flex-1'>
                  From live event experiences to content personalization, we help entertainment brands leverage technology to captivate audiences.
                </p>
              </div>
            </div>
          </div>

          {/* Smart Tech */}
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 py-16 md:py-20 lg:py-28'>
            <div className='lg:mr-[58px]'>
              <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6'>
                Smart Tech
              </h2>
              <div className='flex flex-row gap-4 mb-6'>
                <div> <img src={icon} alt='Icon' draggable={false} /></div>
                <p className='font-Nunito text-[#0D47A1] flex-1'>
                  Bluelync offers complete design and development solutions for smart technology — from fitness trackers and entertainment devices to health monitoring systems.
                </p>
              </div>
              <div className='flex flex-row gap-4'>
                <div> <img src={icon} alt='Icon' draggable={false} /></div>
                <p className='font-Nunito text-[#0D47A1] flex-1'>
                  Partnering with SMBs to large corporations, we’re driving enterprise-level IoT and smart tech innovation with uncompromising quality and scalability.
                </p>
              </div>
            </div>
            <div>
              <img src={Mobile_Image_2} draggable={false} alt='Image' className='m-auto' />
            </div>
          </div>
        </div>
      </section>

      {/* <MisionProcess /> */}
    </>
  );
};

export default Mobile_App;
