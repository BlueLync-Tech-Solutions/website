import BreadCrumb2 from '../../Shared/BreadCrumb/BreadCrumb2';
import { FaArrowRightLong } from 'react-icons/fa6';
import HelmetChanger from '../../Shared/Helmet/Helmet';
import MicrosoftImage1 from '/images/MS_1.png';
import MicrosoftImage2 from '/images/MS_2.png';
import MicrosoftImage3 from '/images/MS_4.png';
import MicrosoftImage4 from '/images/MS_5.png';
import MicrosoftImage5 from '/images/MS_3.png';
import icon from '/images/mision-icon.png';

const MicrosoftServicesConsulting = () => {
  return (
    <>
      <HelmetChanger title={'Microsoft Services Consulting'} />
      <BreadCrumb2
        breadCrumbTitle={'Microsoft Consulting Services'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Microsoft Azure Services'}
      />

      <section className='relative py-16 md:py-20 lg:py-28 z-10'>
        <div className='Container lg:px-0'>
          {/* Consulting */}
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 rounded-md mb-8 lg:mb-0'>
            <div>
              <img src={MicrosoftImage1} draggable={false} alt='Consulting' className='m-auto' />
            </div>
            <div className='lg:ml-[58px]'>
              <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6'>
                Consulting
              </h2>
              <div className='flex flex-row gap-4 mb-12'>
                <div>
                  <img src={icon} draggable={false} alt='Icon' />
                </div>
                <p className='font-Nunito text-[#0D47A1] flex-1 max-w-[488px]'>
                  Consulting Services offers a comprehensive range of solutions to optimize cloud infrastructure. From cloud solution architecture and DevOps assessment to cloud security analysis, they provide expert guidance on cost optimization and deployment of private or hybrid cloud environments. With a focus on business demand and existing infrastructure analysis, they specialize in implementing various IaaS, PaaS, and SaaS services in public clouds. Their expertise helps businesses leverage the power of Azure to drive efficiency and achieve their goals.
                </p>
              </div>
              
            </div>
          </div>

          {/* Migration */}
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 py-16 md:py-20 lg:py-28'>
            <div className='lg:mr-[58px]'>
              <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6'>
                Migration
              </h2>
              <div className='flex flex-row gap-4 mb-12'>
                <div>
                  <img src={icon} draggable={false} alt='Icon' />
                </div>
                <p className='font-Nunito text-[#0D47A1] flex-1 max-w-[488px]'>
                  Provide a comprehensive solution for businesses looking to transition to the cloud. 
                  With a focus on business demand analysis and cloud migration readiness assessment, 
                  this service helps companies create a roadmap for successful transition and transformation. 
                  The team also designs cloud solution architecture, conducts cost and risk assessments,
                   and ensures seamless integration with applications in both public and private clouds. Additionally, 
                   the service offers web application cloudification to enhance performance and scalability.
                </p>
              </div>
              
            </div>
            <div>
              <img src={MicrosoftImage2} draggable={false} alt='Migration' className='m-auto' />
            </div>
          </div>

          {/* Implementation */}
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 mb-8 lg:mb-0'>
            <div>
              <img src={MicrosoftImage3} draggable={false} alt='Implementation' className='m-auto' />
            </div>
            <div className='lg:ml-[58px]'>
              <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6'>
                Implementation
              </h2>
              <div className='flex flex-row gap-4 mb-12'>
                <div>
                  <img src={icon} draggable={false} alt='Icon' />
                </div>
                <p className='font-Nunito text-[#0D47A1] flex-1 max-w-[488px]'>
                  Bluelync Azure implementation focuses specifically on the integration of private, public, and hybrid
                   cloud solutions using Microsoft and VMware technology. The goal is to create a seamless infrastructure
                    that combines the benefits of both private and public clouds while leveraging the power of Microsoft 
                    Azure services. With this approach, businesses can optimize their operations, enhance scalability, and 
                    drive innovation. By harnessing the potential of Azure, organizations can unlock new possibilities in 
                    their cloud strategy and stay ahead in todays competitive landscape.
                </p>
              </div>
              
            </div>
          </div>

          {/* Transformation */}
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 py-16 md:py-20 lg:py-28'>
            <div className='lg:mr-[58px]'>
              <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6'>
                Transformation
              </h2>
              <div className='flex flex-row gap-4 mb-12'>
                <div>
                  <img src={icon} draggable={false} alt='Icon' />
                </div>
                <p className='font-Nunito text-[#0D47A1] flex-1 max-w-[488px]'>
                  Businesses need to adapt their infrastructure to stay ahead. Our team specializes in creating seamless 
                  transitions and transformation roadmaps for your infrastructure. We meticulously plan and design cloud 
                  solutions tailored to your specific needs. With our expertise, we ensure a smooth execution of your infrastructure 
                  transformation, minimizing disruptions and maximizing efficiency. Trust us to guide you through this crucial 
                  process, enabling you to leverage the power of modern technology and stay competitive in todays fast-paced business
                   landscape. Let us be your partner in building a strong foundation for future success.
                </p>
              </div>
              
            </div>
            <div>
              <img src={MicrosoftImage5} draggable={false} alt='Transformation' className='m-auto' />
            </div>
          </div>

          {/* Managed Services */}
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 mb-8 lg:mb-0'>
            <div>
              <img src={MicrosoftImage4} draggable={false} alt='Managed Services' className='m-auto' />
            </div>
            <div className='lg:ml-[58px]'>
              <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6'>
                Managed Services
              </h2>
              <div className='flex flex-row gap-4 mb-12'>
                <div>
                  <img src={icon} draggable={false} alt='Icon' />
                </div>
                <p className='font-Nunito text-[#0D47A1] flex-1 max-w-[488px]'>
                  Discover the power of Bluelync Azure DevOps Managed Services, where we specialize in designing and implementing seamless CI/CD processes. Our expert team also develops supporting scripts for Infrastructure as Code (IaC), ensuring smooth integration at every stage of product delivery. With our DevOps Managed Services, we take care of migrating your existing Dev/Test/QA environments to the Azure compute platform, unlocking new levels of efficiency and scalability. Trust us to handle all your Azure DevOps needs, allowing you to focus on what you do best - building exceptional products.
                </p>
              </div>
              
            </div>
          </div>

          {/* Security */}
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 py-16 md:py-5 lg:py-8'>
            <div className='lg:mr-[58px]'>
              <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6'>
                Security
              </h2>
              <div className='flex flex-row gap-4 mb-12'>
                <div>
                  <img src={icon} draggable={false} alt='Icon' />
                </div>
                <p className='font-Nunito text-[#0D47A1] flex-1 max-w-[488px]'>
                  Bluelync provides a comprehensive solution that covers all aspects of protecting your information. From identity and access management to threat protection, our experts secure your infrastructure. With advanced tools and technologies, Bluelync offers robust security management and even operates a dedicated Security Operations Center (SOC) to monitor and respond to any potential threats. Engage with Bluelync Cloud Security consultants to safeguard your data in an increasingly insecure digital world.
                </p>
              </div>
              
            </div>
            <div>
              <img src={MicrosoftImage1} draggable={false} alt='Security' className='m-auto' />
            </div>
          </div>
        </div>
      </section>
      {/* <MisionProcess /> */}
    </>
  );
};

export default MicrosoftServicesConsulting;
