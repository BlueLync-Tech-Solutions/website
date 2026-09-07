import BreadCrumb2 from '../../Shared/BreadCrumb/BreadCrumb2';
import { FaArrowRightLong } from 'react-icons/fa6';
import HelmetChanger from '../../Shared/Helmet/Helmet';
import Microsoft_S_Image1 from '/images/M_SP_1.png';
import Microsoft_S_Image2 from '/images/M_SP_2.png';
import Microsoft_S_Image3 from '/images/M_SP_3.png';
import Microsoft_S_Image4 from '/images/MS_4.png';
import Microsoft_S_Image5 from '/images/MS_1.png';
import icon from '/images/mision-icon.png';
import MisionProcess from './MisionProcess/MisionProcess';

const MicrosoftSharepointServices = () => {
  return (
    <>
      <HelmetChanger title={'Microsoft SharePoint Services'} />
      <BreadCrumb2
        breadCrumbTitle={'Microsoft SharePoint Services'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Microsoft Services'}
      />

      <section className='relative py-16 md:py-20 lg:py-28 z-10'>
        <div className='Container lg:px-0'>

          {/* Implementation Section */}
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 rounded-md mb-8'>
            <div>
              <img src={Microsoft_S_Image1} draggable={false} alt='Implementation' className='m-auto' />
            </div>
            <div className='lg:ml-[58px]'>
              <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6'>
                Implementation
              </h2>
              <div className='flex flex-row gap-4'>
                <div>
                  <img src={icon} alt='Icon' draggable={false} />
                </div>
                <p className='font-Nunito text-[#0D47A1] flex-1 -mt-1'>
                  Unlock the potential of your organization with a powerful and adaptable enterprise portal built on SharePoint. 
                  This transformative solution enhances efficiency and productivity by providing a unified platform for collaboration. 
                  With its flexible features, you can customize the portal to meet your unique business needs. 
                  Empower your teams to work seamlessly together, accessing and sharing information effortlessly. 
                  Increase communication, streamline workflows, and drive innovation across your entire organization. 
                  Say goodbye to siloed systems and hello to a centralized hub that brings everything together.
                </p>
              </div>
            </div>
          </div>

          {/* Development Section */}
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 rounded-md py-16 md:py-20 lg:py-8'>
            <div className='lg:mr-[58px]'>
              <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6'>
                Development
              </h2>
              <div className='flex flex-row gap-4'>
                <div>
                  <img src={icon} alt='Icon' draggable={false} />
                </div>
                <p className='font-Nunito text-[#0D47A1] flex-1 -mt-1'>
                  With our expertise in SharePoint, we can tailor your company portal to perfectly match your business requirements. 
                  From branding to developing custom features, we will ensure that your website stands out from the crowd. 
                  But it doesnt stop there — we also specialize in automating business processes, making your operations more efficient and streamlined. 
                  With our custom web development services, you can take your online presence to new heights and leave a lasting impression on your audience.
                </p>
              </div>
            </div>
            <div>
              <img src={Microsoft_S_Image2} draggable={false} alt='Development' className='m-auto' />
            </div>
          </div>

          {/* Integration Section */}
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 rounded-md mb-8'>
            <div>
              <img src={Microsoft_S_Image3} draggable={false} alt='Integration' className='m-auto' />
            </div>
            <div className='lg:ml-[58px]'>
              <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6'>
                Integration
              </h2>
              <div className='flex flex-row gap-4'>
                <div>
                  <img src={icon} alt='Icon' draggable={false} />
                </div>
                <p className='font-Nunito text-[#0D47A1] flex-1 -mt-1'>
                  Discover the power of integrating SharePoint with various platforms and tools. 
                  With seamless integration with Microsoft products such as AD, Office 365, Teams, Power Platform, Exchange Server, and more, 
                  you can enhance collaboration and productivity. 
                  Extend your reach by integrating non-Microsoft solutions such as SAP, Workplace by Facebook, and Dropbox. 
                  Whether you need to streamline workflows or access data from different systems, this integration will transform your IT ecosystem.
                </p>
              </div>
            </div>
          </div>

          {/* Deployment Section */}
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 rounded-md py-16 md:py-20 lg:py-8'>
            <div className='lg:mr-[58px]'>
              <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6'>
                Deployment
              </h2>
              <div className='flex flex-row gap-4'>
                <div>
                  <img src={icon} alt='Icon' draggable={false} />
                </div>
                <p className='font-Nunito text-[#0D47A1] flex-1 -mt-1'>
                  Our solutions are built on SharePoint and SharePoint Online, and we believe in staying ahead with CI/CD practices. 
                  With this approach, we ensure that our solutions are always up-to-date and ready for action. 
                  No more waiting around for manual deployments or worrying about compatibility issues. 
                  We streamline the process, making it efficient and seamless from development to production. 
                  Our CI/CD pipeline ensures a smooth journey for your SharePoint solutions.
                </p>
              </div>
            </div>
            <div>
              <img src={Microsoft_S_Image4} draggable={false} alt='Deployment' className='m-auto' />
            </div>
          </div>

          {/* Migration Section */}
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 rounded-md'>
            <div>
              <img src={Microsoft_S_Image5} draggable={false} alt='Migration' className='m-auto' />
            </div>
            <div className='lg:ml-[58px]'>
              <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6'>
                Migration
              </h2>
              <div className='flex flex-row gap-4'>
                <div>
                  <img src={icon} alt='Icon' draggable={false} />
                </div>
                <p className='font-Nunito text-[#0D47A1] flex-1 -mt-1'>
                  Discover the power of migrating to the cloud with SharePoint. 
                  Upgrade your applications, systems, data, and business logic effortlessly with our range of options. 
                  Experience the latest version of SharePoint or seamlessly transition from on-premises to SharePoint Online. 
                  Unlock the potential of cloud migration and embrace a new era of flexibility and scalability. 
                  With our expert guidance, you can navigate this transformative journey with ease and embrace the future of digital collaboration.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <MisionProcess />
    </>
  );
};

export default MicrosoftSharepointServices;
