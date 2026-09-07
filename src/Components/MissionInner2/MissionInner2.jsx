import BreadCrumb2 from '../../Shared/BreadCrumb/BreadCrumb2';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import HelmetChanger from '../../Shared/Helmet/Helmet';
import missionImg from '/images/mision-image1.png';
import missionImg2 from '/images/mision-image2.png';
import missionImg3 from '/images/mision-image3.png';
import icon from '/images/mision-icon.png';
import MisionProcess from './MisionProcess/MisionProcess';

const MissionInner2 = () => {
  return (
    <>
      <HelmetChanger title={'Gen AI Inner Page Style Two'} />
      <BreadCrumb2
        breadCrumbTitle={'Gen AI Services'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Gen AI Services'}
      />
      <section className='relative py-16 md:py-20 lg:py-28 z-10'>
        <div className='Container lg:px-0'>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 rounded-md mb-8 lg:mb-0'>
            <div>
              <img
                src={missionImg}
                draggable={false}
                alt='Image'
              />
            </div>
            <div className='lg:ml-[58px]'>
              <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6'>
                Discover our story, our mission, and our passion for creativity and innovation
              </h2>
              <div className='flex flex-row gap-4'>
                <div className=''>
                  <img
                    src={icon}
                    draggable={false}
                    alt='Icon'
                  />
                </div>
                <p className='font-Nunito text-[#0D47A1] flex-1 -mt-1 max-w-[484px] w-full'>
                  Collaborate with Bluelync to unlock the full power of cloud computing for your business.
                </p>
              </div>
              <div className='flex flex-row gap-4 my-6'>
                <div className=''>
                  <img
                    src={icon}
                    draggable={false}
                    alt='Icon'
                  />
                </div>
                <p className='font-Nunito text-[#0D47A1] flex-1 -mt-1 max-w-[484px] w-full'>
                  AI Integration Services.
                </p>
              </div>
              <div className='flex flex-row gap-4 mb-12'>
                <div className=''>
                  <img
                    src={icon}
                    draggable={false}
                    alt='Icon'
                  />
                </div>
                <p className='font-Nunito text-[#0D47A1] flex-1 -mt-1 max-w-[488px] w-full'>
                  ColSeamlessly integrate AI into your existing systems with our AI Integration Services. We help you enhance your current workflows by incorporating intelligent algorithms, automation, and data analysis capabilities. Our experts ensure smooth integration, enabling improved decision-making, efficiency, and scalability without disrupting your operations. Transform your business by leveraging AI to enhance both existing and new processes.
                </p>
              </div>
              <Link
                to={'/contact2'}
                className='inline-block'
              >
                <button className='primary-btn'>
                  {`Get In Touch`}
                  <span className='icon-style'>
                    <svg
                      className='qodef-svg--custom-arrow qodef-m-arrow inline-block h-[10px] w-auto transition-all duration-500'
                      xmlns='http://www.w3.org/2000/svg'
                      stroke='CurrentColor'
                      width='14.2'
                      height='14.2'
                      viewBox='0 0 14.2 14.2'
                    >
                      <g>
                        <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                        <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                      </g>
                      <g>
                        <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                        <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                      </g>
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 rounded-md mb-8 lg:mb-0 py-16 md:py-20 lg:py-28'>
            <div className='lg:mr-[58px]'>
              <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6'>
                Custom AI Model Development
              </h2>
              <div className='flex flex-row gap-4'>
                <div className=''>
                  <img
                    src={icon}
                    draggable={false}
                    alt='Icon'
                  />
                </div>
                <p className='font-Nunito text-[#0D47A1] flex-1 -mt-1 max-w-[484px] w-full'>
                 Our Custom AI Model Development service delivers tailor-made AI solutions to address your unique business challenges. From predictive analytics to personalized user experiences, we design models that enhance efficiency, drive innovation, and provide a competitive edge in your industry..
                </p>
              </div>
              <div className='flex flex-row gap-4 my-6'>
                <div className=''>
                  <img
                    src={icon}
                    draggable={false}
                    alt='Icon'
                  />
                </div>
                <p className='font-Nunito text-[#0D47A1] flex-1 -mt-1 max-w-[484px] w-full'>
                  Data Analysis & Insights
                </p>
              </div>
              <div className='flex flex-row gap-4 mb-12'>
                <div className=''>
                  <img
                    src={icon}
                    draggable={false}
                    alt='Icon'
                  />
                </div>
                <p className='font-Nunito text-[#0D47A1] flex-1 -mt-1 max-w-[488px] w-full'>
                  {/* Unlock the full potential of your data with our Data Analysis & Insights services. We leverage advanced AI algorithms to process and analyze large datasets, providing actionable insights that drive informed decision-making. Whether it's predictive analytics, market trends, or customer behavior analysis, our solutions help you uncover valuable information to optimize strategies and fuel business growth. */}
                </p>
              </div>
              <Link
                to={'/contact2'}
                className='inline-block'
              >
                <button className='primary-btn'>
                  {`Get In Touch`}
                  <span className='icon-style'>
                    <svg
                      className='qodef-svg--custom-arrow qodef-m-arrow inline-block h-[10px] w-auto transition-all duration-500'
                      xmlns='http://www.w3.org/2000/svg'
                      stroke='CurrentColor'
                      width='14.2'
                      height='14.2'
                      viewBox='0 0 14.2 14.2'
                    >
                      <g>
                        <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                        <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                      </g>
                      <g>
                        <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                        <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                      </g>
                    </svg>
                  </span>
                </button>
              </Link>
            </div>{' '}
            <div>
              <img
                src={missionImg2}
                draggable={false}
                alt='Image'
              />
            </div>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 rounded-md mb-8 lg:mb-0'>
            <div>
              <img
                src={missionImg3}
                draggable={false}
                alt='Image'
              />
            </div>
            <div className='lg:ml-[58px]'>
              <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6'>
                Natural Language Processing (NLP)
              </h2>
              <div className='flex flex-row gap-4'>
                <div className=''>
                  <img
                    src={icon}
                    draggable={false}
                    alt='Icon'
                  />
                </div>
                <p className='font-Nunito text-[#0D47A1] flex-1 -mt-1 max-w-[484px] w-full'>
                  Harness the power of Natural Language Processing (NLP) to enhance communication and understanding. Our solutions enable sentiment analysis, chatbots, language translation, and more, helping your business engage effectively, automate processes, and deliver personalized experiences to your customers.
                </p>
              </div>
              <div className='flex flex-row gap-4 my-6'>
                <div className=''>
                  <img
                    src={icon}
                    draggable={false}
                    alt='Icon'
                  />
                </div>
                <p className='font-Nunito text-[#0D47A1] flex-1 -mt-1 max-w-[484px] w-full'>
                  AI-Powered Automation
                </p>
              </div>
              <div className='flex flex-row gap-4 mb-12'>
                <div className=''>
                  <img
                    src={icon}
                    draggable={false}
                    alt='Icon'
                  />
                </div>
                <p className='font-Nunito text-[#0D47A1] flex-1 -mt-1 max-w-[488px] w-full'>
                 Transform your operations with AI-Powered Automation, streamlining workflows, reducing manual effort, and boosting efficiency. Our solutions automate repetitive tasks, optimize resource allocation, and enhance decision-making processes. From intelligent document processing to automated customer support, we empower your business to focus on strategic goals while minimizing costs and maximizing productivity. Experience the future of efficiency with our cutting-edge AI-driven automation services. 
                </p>
              </div>
              <Link
                to={'/contact2'}
                className='inline-block'
              >
                <button className='primary-btn'>
                  {`Get In Touch`}
                  <span className='icon-style'>
                    <svg
                      className='qodef-svg--custom-arrow qodef-m-arrow inline-block h-[10px] w-auto transition-all duration-500'
                      xmlns='http://www.w3.org/2000/svg'
                      stroke='CurrentColor'
                      width='14.2'
                      height='14.2'
                      viewBox='0 0 14.2 14.2'
                    >
                      <g>
                        <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                        <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                      </g>
                      <g>
                        <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                        <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                      </g>
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <MisionProcess />
    </>
  );
};

export default MissionInner2;
