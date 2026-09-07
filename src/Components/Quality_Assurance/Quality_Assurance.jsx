import BreadCrumb2 from '../../Shared/BreadCrumb/BreadCrumb2';
import { FaArrowRightLong } from 'react-icons/fa6';
import HelmetChanger from '../../Shared/Helmet/Helmet';
import Testing_Iamge1 from '/images/software-testing_1.png';
import Testing_Iamge2 from '/images/software-testing_2.png';
import Testing_Iamge3 from '/images/software-testing_3.png';
// import icon from '/images/mision-icon.png';

const QualityAssurance = () => {
  return (
    <>
      <HelmetChanger title={'Quality Assurance Services'} />
      <BreadCrumb2
        breadCrumbTitle={'Quality Assurance'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Services'}
      />

      <section className='relative py-16 md:py-20 lg:py-28 z-10'>
        <div className='Container lg:px-0'>

          {/* Accessibility Testing */}
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 mb-12'>
            <div>
              <img src={Testing_Iamge1} draggable={false} alt='Accessibility Testing' className='m-auto' />
            </div>
            <div className='lg:ml-[58px]'>
              <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl mb-6'>
                Accessibility Testing
              </h2>
              <p className='font-Nunito text-[#0D47A1]'>
                Accessibility testing ensures web and mobile apps are usable by people with disabilities. It assesses compatibility with assistive technologies like screen readers, speech recognition, and magnifiers. Developers test color contrast, keyboard navigation, and image alt text to create inclusive experiences. This process helps meet accessibility standards and ensures all users can interact effectively with your app.
              </p>
            </div>
          </div>

          {/* Compatibility Testing */}
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 mb-12'>
            <div className='lg:mr-[58px]'>
              <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl mb-6'>
                Compatibility Testing
              </h2>
              <p className='font-Nunito text-[#0D47A1]'>
                Compatibility testing validates your software, hardware, OS, network, and browser combinations to ensure smooth functionality. It includes cross-browser and cross-platform testing to identify inconsistencies and deliver a seamless user experience. Investing in compatibility testing ensures your IT systems are reliable and accessible to all users.
              </p>
            </div>
            <div>
              <img src={Testing_Iamge2} draggable={false} alt='Compatibility Testing' className='m-auto' />
            </div>
          </div>

          {/* Performance Testing */}
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 mb-12'>
            <div>
              <img src={Testing_Iamge3} draggable={false} alt='Performance Testing' />
            </div>
            <div className='lg:ml-[58px]'>
              <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl mb-6'>
                Performance Testing
              </h2>
              <p className='font-Nunito text-[#0D47A1]'>
                Performance testing evaluates an application’s responsiveness, throughput, and scalability. By simulating real-world scenarios, it measures metrics such as response time and resource usage to detect bottlenecks. This ensures systems perform optimally under load and can scale efficiently as demand grows.
              </p>
            </div>
          </div>

          {/* Manual Testing */}
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 mb-12'>
            <div className='lg:mr-[58px]'>
              <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl mb-6'>
                Manual Testing
              </h2>
              <p className='font-Nunito text-[#0D47A1]'>
                Manual testing involves exploring software manually to identify bugs and usability issues. Testers create cases based on requirements, analyze user behavior, and ensure the system meets expectations. This process allows deep, human-level evaluation of the software experience and functionality.
              </p>
            </div>
            <div>
              <img src={Testing_Iamge1} draggable={false} alt='Manual Testing' className='m-auto' />
            </div>
          </div>

          {/* Automated Testing */}
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 mb-12'>
            <div>
              <img src={Testing_Iamge2} draggable={false} alt='Automated Testing' className='m-auto' />
            </div>
            <div className='lg:ml-[58px]'>
              <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl mb-6'>
                Automated Testing
              </h2>
              <p className='font-Nunito text-[#0D47A1]'>
                Automated testing defines the scope of automation, builds reusable scripts, and executes test cases efficiently. It reduces manual effort, accelerates testing cycles, and enhances accuracy. Automation helps testers focus on complex scenarios, improving software quality and reducing costs.
              </p>
            </div>
          </div>

          {/* Usability Testing */}
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 mb-12'>
            <div className='lg:mr-[58px]'>
              <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl mb-6'>
                Usability Testing
              </h2>
              <p className='font-Nunito text-[#0D47A1]'>
                Usability testing ensures a product meets end-user needs effectively. By observing real users interacting with your product, you can identify pain points and improve user experience. Insights from usability tests drive design decisions that enhance satisfaction and engagement.
              </p>
            </div>
            <div>
              <img src={Testing_Iamge3} draggable={false} alt='Usability Testing' className='m-auto' />
            </div>
          </div>

          {/* Web & Mobile Testing */}
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 mb-12'>
            <div>
              <img src={Testing_Iamge1} draggable={false} alt='Web & Mobile Testing' className='m-auto' />
            </div>
            <div className='lg:ml-[58px]'>
              <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl mb-6'>
                Web & Mobile Testing
              </h2>
              <p className='font-Nunito text-[#0D47A1]'>
                Web and mobile testing ensures apps meet platform-specific guidelines for iOS and Android. It validates device compatibility, functionality, and performance, while assessing security to protect user data. Thorough testing guarantees your app’s quality and readiness for public release.
              </p>
            </div>
          </div>

          {/* Security Testing */}
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10'>
            <div className='lg:mr-[58px]'>
              <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl mb-6'>
                Security Testing
              </h2>
              <p className='font-Nunito text-[#0D47A1]'>
                Security testing identifies vulnerabilities through code reviews and penetration testing. Following standards like OWASP and CWE, it ensures compliance and protects sensitive data. By detecting weaknesses early, you can safeguard systems from breaches and build customer trust.
              </p>
            </div>
            <div>
              <img src={Testing_Iamge2} draggable={false} alt='Security Testing' className='m-auto' />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}; 

export default QualityAssurance;
