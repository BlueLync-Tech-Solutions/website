import BreadCrumb2 from '../../Shared/BreadCrumb/BreadCrumb2';
import { FaArrowRightLong } from 'react-icons/fa6';
// import { Link } from 'react-router-dom';
import HelmetChanger from '../../Shared/Helmet/Helmet';
import AIIMAGE1 from '/images/AI_1.png';
import AIIMAGE2 from '/images/AI_2.png';
import AIIMAGE3 from '/images/AI_3.png';
import icon from '/images/mision-icon.png';
// import MisionProcess from './MisionProcess/MisionProcess';


const GenAI = () => {
  return (
    <>
      <HelmetChanger title={'Gen AI Inner Page Style Two'} />
      <BreadCrumb2
        breadCrumbTitle={'AI Services'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Gen AI Services'}
      />

      <section className="relative py-16 md:py-20 lg:py-28 z-10">
        <div className="Container lg:px-0">

          {/* ===================== AI Integration Services ===================== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 mb-12">
            <div>
              <img src={AIIMAGE1} draggable={false} alt="AI Integration" className='m-auto' />
            </div>
            <div className="lg:ml-[58px]">
              <h2 className="font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6">
                AI Integration Services
              </h2>
              <div className="flex items-start gap-4">
                <img
                  src={icon}
                  alt="Icon"
                  draggable={false}
                  className="w-8 h-8 flex-shrink-0 mt-1"
                />
                <p className="font-Nunito text-[#0D47A1] leading-relaxed max-w-none lg:max-w-3xl">
                  Seamlessly integrate AI into your existing systems with our AI Integration Services.
                  We help you enhance your current workflows by incorporating intelligent algorithms,
                  automation, and data analysis capabilities. Our experts ensure smooth integration,
                  enabling improved decision-making, efficiency, and scalability without disrupting
                  your operations. Transform your business by leveraging AI to enhance both existing
                  and new processes.
                </p>
              </div>
              
            </div>
          </div>

          {/* ===================== Custom AI Model Development ===================== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 py-16">
            <div className="lg:mr-[58px]">
              <h2 className="font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6">
                Custom AI Model Development
              </h2>
              <div className="flex items-start gap-4">
                <img
                  src={icon}
                  alt="Icon"
                  draggable={false}
                  className="w-8 h-8 flex-shrink-0 mt-1"
                />
                <p className="font-Nunito text-[#0D47A1] leading-relaxed max-w-none lg:max-w-3xl">
                  Our Custom AI Model Development service delivers tailor-made AI solutions to
                  address your unique business challenges. From predictive analytics to personalized
                  user experiences, we design models that enhance efficiency, drive innovation, and
                  provide a competitive edge in your industry.
                </p>
              </div>

              <div className="flex items-start gap-4 my-6">
                <img
                  src={icon}
                  alt="Icon"
                  draggable={false}
                  className="w-8 h-8 flex-shrink-0 mt-1"
                />
                <p className="font-Nunito text-[#0D47A1] leading-relaxed max-w-none lg:max-w-3xl">
                  Data Analysis & Insights
                </p>
              </div>

              <div className="flex items-start gap-4 mb-12">
                <img
                  src={icon}
                  alt="Icon"
                  draggable={false}
                  className="w-8 h-8 flex-shrink-0 mt-1"
                />
                <p className="font-Nunito text-[#0D47A1] leading-relaxed max-w-none lg:max-w-3xl">
                  Unlock the full potential of your data with our Data Analysis & Insights services.
                  We leverage advanced AI algorithms to process and analyze large datasets,
                  providing actionable insights that drive informed decision-making. Whether it’s
                  predictive analytics, market trends, or customer behavior analysis, our solutions
                  help you uncover valuable information to optimize strategies and fuel business
                  growth.
                </p>
              </div>

              
            </div>

            <div>
              <img src={AIIMAGE2} draggable={false} alt="Custom AI Development" />
            </div>
          </div>

          {/* ===================== Natural Language Processing (NLP) ===================== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 mb-12">
            <div>
              <img src={AIIMAGE3} draggable={false} alt="NLP" />
            </div>
            <div className="lg:ml-[58px]">
              <h2 className="font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6">
                Natural Language Processing (NLP)
              </h2>
              <div className="flex items-start gap-4">
                <img
                  src={icon}
                  alt="Icon"
                  draggable={false}
                  className="w-8 h-8 flex-shrink-0 mt-1"
                />
                <p className="font-Nunito text-[#0D47A1] leading-relaxed max-w-none lg:max-w-3xl">
                  Harness the power of Natural Language Processing (NLP) to enhance communication
                  and understanding. Our solutions enable sentiment analysis, chatbots, language
                  translation, and more, helping your business engage effectively, automate
                  processes, and deliver personalized experiences to your customers.
                </p>
              </div>

              <div className="flex items-start gap-4 my-6">
                <img
                  src={icon}
                  alt="Icon"
                  draggable={false}
                  className="w-8 h-8 flex-shrink-0 mt-1"
                />
                <p className="font-Nunito text-[#0D47A1] leading-relaxed max-w-none lg:max-w-3xl">
                  AI-Powered Automation
                </p>
              </div>

              <div className="flex items-start gap-4 mb-12">
                <img
                  src={icon}
                  alt="Icon"
                  draggable={false}
                  className="w-8 h-8 flex-shrink-0 mt-1"
                />
                <p className="font-Nunito text-[#0D47A1] leading-relaxed max-w-none lg:max-w-3xl">
                  Transform your operations with AI-Powered Automation, streamlining workflows,
                  reducing manual effort, and boosting efficiency. Our solutions automate repetitive
                  tasks, optimize resource allocation, and enhance decision-making processes. From
                  intelligent document processing to automated customer support, we empower your
                  business to focus on strategic goals while minimizing costs and maximizing
                  productivity. Experience the future of efficiency with our cutting-edge AI-driven
                  automation services.
                </p>
              </div>

              
            </div>
          </div>
        </div>
      </section>

      {/* <MisionProcess /> */}
    </>
  );
};

export default GenAI;
