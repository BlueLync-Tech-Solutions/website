import BreadCrumb2 from '../../Shared/BreadCrumb/BreadCrumb2';
import { FaArrowRightLong } from 'react-icons/fa6';
import HelmetChanger from '../../Shared/Helmet/Helmet';
import AWS1 from '/images/AWS_1.png';
import AWS2 from '/images/AWS_2.png';
import AWS3 from '/images/AWS_1.png';
import AWS4 from '/images/AWS_2.png';
import AWS5 from '/images/AWS_1.png';
import AWS6 from '/images/AWS_2.png';
import icon from '/images/mision-icon.png';

const AWSService = () => (<>
  <HelmetChanger title={'AWS Service Inner Page Style Two'} />
  <BreadCrumb2
    breadCrumbTitle={'AWS Services'}
    breadCrumbIcon={<FaArrowRightLong />}
    breadCrumbLink={'AWS Consulting & Cloud Solutions'}
  />
  <section className='relative py-16 md:py-20 lg:py-28 z-10'>
    <div className='Container lg:px-0'>

      {/* Consulting Section */}
      <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 rounded-md mb-8 lg:mb-0'>
        <div>
          <img src={AWS1} draggable={false} alt='Consulting Image' className='m-auto' />
        </div>
        <div className='lg:ml-[58px]'>
          <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6'>
            Consulting
          </h2>
          <div className='flex flex-row gap-4'>
            <div> <img src={icon} alt='Icon' draggable={false} /></div>
            <p className='font-Nunito text-[#0D47A1] flex-1 -mt-1 max-w-[484px]'>
              Our team of AWS cloud architects leverages cutting-edge technologies and industry best practices to create or enhance your AWS architecture. We meticulously gather and analyze your system requirements, designing a customized solution that meets your unique needs. With a focus on cost-effectiveness, we develop an implementation roadmap that maximizes efficiency while minimizing total cost of ownership. Trust our expertise to build or optimize your AWS infrastructure for seamless performance and scalability.
            </p>
          </div>          
        </div>
      </div>

      {/* DevOps Section */}
      <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 rounded-md py-16 md:py-20 lg:py-28'>
        <div className='lg:mr-[58px]'>
          <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6'>
            DevOps
          </h2>
          <div className='flex flex-row gap-4'>
            <div> <img src={icon} alt='Icon' draggable={false} /></div>
            <p className='font-Nunito text-[#0D47A1] flex-1 -mt-1 max-w-[484px]'> Identifying operational silos and development bottlenecks is crucial. With our DevOps Assessment, we can pinpoint these obstacles and eliminate them using cutting-edge DevOps practices. Our team of experts will implement CI/CD, IaC, automated testing and rollback, app performance monitoring, and other powerful tools in conjunction with AWS to boost your businesss agility and competitiveness.
            </p>
          </div>
          <div className='flex flex-row gap-4 my-6'>
            <div> <img src={icon} alt='Icon' draggable={false} /></div>
            <p className='font-Nunito text-[#0D47A1] flex-1 -mt-1 max-w-[484px]'>
              Say goodbye to inefficiencies and hello to enhanced productivity. Let us help you unlock your true potential in the market.
            </p>
          </div>
          
        </div>
        <div>
          <img src={AWS2} draggable={false} alt='DevOps Image' className='m-auto' />
        </div>
      </div>

      {/* Security Section */}
      <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 mb-16'>
        <div>
          <img src={AWS3} draggable={false} alt='Security Image' className='m-auto'/>
        </div>
        <div className='lg:ml-[58px]'>
          <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6'>
            Security
          </h2>
          <div className='flex flex-row gap-4'>
            <div> <img src={icon} alt='Icon' draggable={false} /></div>
            <p className='font-Nunito text-[#0D47A1] flex-1 -mt-1'>
              Discover the power of our AWS Security Assessment, where we analyze your infrastructure to uncover vulnerabilities and offer solutions. Our managed services provide expert guidance on establishing a strong identity foundation, protecting all layers of your AWS environment, encrypting sensitive data, and swiftly responding to security incidents.
            </p>
          </div>
          <div className='flex flex-row gap-4 mt-3'>
            <div> <img src={icon} alt='Icon' draggable={false} /></div>
            <p className='font-Nunito text-[#0D47A1] flex-1 -mt-1'>
              With our comprehensive approach, you can ensure the utmost security for your AWS resources. Trust us to safeguard your business and keep you one step ahead in todays rapidly evolving digital landscape.
            </p>
          </div>          
        </div>
      </div>

      {/* Advisory Section */}
      <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 mb-16'>
        <div className='lg:mr-[58px]'>
          <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6'>
            Advisory
          </h2>
          <div className='flex flex-row gap-4'>
            <div> <img src={icon} alt='Icon' draggable={false} /></div>
            <p className='font-Nunito text-[#0D47A1] flex-1 -mt-1'>
              Our AWS project Advisory services help businesses achieve ultimate cost-efficiency on the AWS platform. Using the AWS Well-Architected Framework, Bluelync analyzes your infrastructure to identify underutilized instances that can be turned off or downsized, optimizing resource allocation and reducing unnecessary costs.
            </p>
          </div>
          <div className='flex flex-row gap-4 mt-3'>
            <div> <img src={icon} alt='Icon' draggable={false} /></div>
            <p className='font-Nunito text-[#0D47A1] flex-1 -mt-1'>
              We also enhance storage tiers, improve elasticity, and guide you in selecting the best pricing model. Our advisory ensures AWS cost optimization without sacrificing performance or reliability.
            </p>
          </div>
          
        </div>
        <div>
          <img src={AWS4} draggable={false} alt='Advisory Image' className='m-auto'/>
        </div>
      </div>

      {/* Managed Services Section */}
      <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 mb-16'>
        <div>
          <img src={AWS5} draggable={false} alt='Managed Services Image' className='m-auto' />
        </div>
        <div className='lg:ml-[58px]'>
          <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6'>
            Managed Services
          </h2>
          <div className='flex flex-row gap-4'>
            <div> <img src={icon} alt='Icon' draggable={false} /></div>
            <p className='font-Nunito text-[#0D47A1] flex-1 -mt-1'>
              Bluelync provides comprehensive 24/7 managed AWS services to ensure seamless business operations. Our engineers maintain 99.9% infrastructure availability, offering proactive incident response and robust security to protect your data and systems.
            </p>
          </div>
          <div className='flex flex-row gap-4 mt-3'>
            <div> <img src={icon} alt='Icon' draggable={false} /></div>
            <p className='font-Nunito text-[#0D47A1] flex-1 -mt-1'>
              By delegating AWS operations to our experts, you can focus on driving innovation, achieving business goals, and accelerating growth.
            </p>
          </div>
          
        </div>
      </div>

      {/* Delivery-as-a-Service Section */}
      <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0'>
        <div className='lg:mr-[58px]'>
          <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6'>
            Delivery-as-a-Service
          </h2>
          <div className='flex flex-row gap-4'>
            <div> <img src={icon} alt='Icon' draggable={false} /></div>
            <p className='font-Nunito text-[#0D47A1] flex-1 -mt-1'>
              Bluelync offers a complete suite of SaaS, IaaS, and PaaS services tailored for modern digital enterprises. Our IaaS ensures robust and scalable infrastructure management, PaaS accelerates software development, and SaaS simplifies operations so you can focus on innovation.
            </p>
          </div>
          <div className='flex flex-row gap-4 mt-3'>
            <div> <img src={icon} alt='Icon' draggable={false} /></div>
            <p className='font-Nunito text-[#0D47A1] flex-1 -mt-1'>
            Partner with Bluelync to harness the full potential of AWS cloud and achieve greater flexibility, productivity, and business success.
          </p>
          </div>         
          
        </div>
        <div>
          <img src={AWS6} draggable={false} alt='Delivery Image' className='m-auto'/>
        </div>
      </div>

    </div>
  </section>
  {/* <MisionProcess /> */}
</>);

export default AWSService;
