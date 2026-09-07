import BreadCrumb2 from '../../Shared/BreadCrumb/BreadCrumb2';
import { FaArrowRightLong } from 'react-icons/fa6';
import HelmetChanger from '../../Shared/Helmet/Helmet';
import Digitalmag1 from '/images/mision-image1.png';
import Digitalmag2 from '/images/mision-image2.png';
import Digitalmag3 from '/images/mision-image3.png';
import Digitalmag4 from '/images/mision-image1.png';
import Digitalmag5 from '/images/mision-image2.png';
import Digitalmag6 from '/images/mision-image3.png';
import icon from '/images/mision-icon.png';

const DigitalMarketing = () => {
  return (
    <>
      <HelmetChanger title={'Digital Marketing Services'} />
      <BreadCrumb2
        breadCrumbTitle={'Digital Marketing Services'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Our Services'}
      />

      <section className='relative py-16 md:py-20 lg:py-28 z-10'>
        <div className='Container lg:px-0'>
          {/* SEO Section */}
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 rounded-md mb-12'>
            <div>
              <img src={Digitalmag1} draggable={false} alt='SEO Services' className='m-auto' />
            </div>
            <div className='lg:ml-[58px]'>
              <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6'>
                Search Engine Optimization (SEO)
              </h2>
              <div className='flex flex-row gap-4'>
                <div> <img src={icon} alt='Icon' draggable={false} /></div>
                <p className='font-Nunito text-[#0D47A1] flex-1 -mt-1'>
                  Search Engine Optimization (SEO) improves your website’s visibility on search engines like Google. By targeting relevant keywords, optimizing on-page elements, and building quality backlinks, SEO drives organic traffic, enhances user experience, and increases your site’s ranking, boosting long-term growth.
                </p>
              </div>
            </div>
          </div>

          {/* PPC Section */}
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 rounded-md mb-12 py-10'>
            <div className='lg:mr-[58px]'>
              <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6'>
                Pay-Per-Click (PPC) Advertising
              </h2>
              <div className='flex flex-row gap-4'>
                <div> <img src={icon} alt='Icon' draggable={false} /></div>
                <p className='font-Nunito text-[#0D47A1] flex-1 -mt-1'>
                  Pay-Per-Click (PPC) Advertising is a cost-effective way to drive targeted traffic to your website. With precisely crafted ads and strategic bidding, PPC ensures immediate visibility, reaching your audience at the right time and maximizing your return on investment.
                </p>
              </div>
            </div>
            <div>
              <img src={Digitalmag2} draggable={false} alt='PPC Advertising' className='m-auto' />
            </div>
          </div>

          {/* Content Marketing Section */}
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 rounded-md mb-12'>
            <div>
              <img src={Digitalmag3} draggable={false} alt='Content Marketing' className='m-auto' />
            </div>
            <div className='lg:ml-[58px]'>
              <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6'>
                Content Marketing
              </h2>
              <div className='flex flex-row gap-4'>
                <div> <img src={icon} alt='Icon' draggable={false} /></div>
                <p className='font-Nunito text-[#0D47A1] flex-1 -mt-1'>
                  Content Marketing focuses on creating and sharing valuable, relevant content to attract and engage your target audience. From blogs and videos to infographics and eBooks, it builds trust, drives organic traffic, and fosters long-term relationships with your customers.
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Marketing Section */}
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 rounded-md mb-12 py-10'>
            <div className='lg:mr-[58px]'>
              <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6'>
                Social Media Marketing
              </h2>
              <div className='flex flex-row gap-4'>
                <div> <img src={icon} alt='Icon' draggable={false} /></div>
                <p className='font-Nunito text-[#0D47A1] flex-1 -mt-1'>
                  Social Media Marketing leverages platforms like Facebook, Instagram, LinkedIn, and Twitter to boost brand awareness and engagement. By creating tailored content, running targeted ads, and fostering interactions, it connects businesses with audiences, driving traffic, leads, and customer loyalty effectively.
                </p>
              </div>
            </div>
            <div>
              <img src={Digitalmag4} draggable={false} alt='Social Media Marketing' className='m-auto' />
            </div>
          </div>

          {/* Email Marketing Section */}
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 rounded-md mb-12'>
            <div>
              <img src={Digitalmag5} draggable={false} alt='Email Marketing' className='m-auto' />
            </div>
            <div className='lg:ml-[58px]'>
              <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6'>
                Email Marketing
              </h2>
              <div className='flex flex-row gap-4'>
                <div> <img src={icon} alt='Icon' draggable={false} /></div>
                <p className='font-Nunito text-[#0D47A1] flex-1 -mt-1'>
                  Email Marketing delivers personalized messages directly to your audience’s inbox, nurturing relationships and driving conversions. From promotional campaigns to newsletters, it keeps your brand top-of-mind, engages subscribers, and provides measurable results for customer retention and business growth.
                </p>
              </div>
            </div>
          </div>

          {/* Analytics & Reporting Section */}
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 rounded-md'>
            <div className='lg:mr-[58px]'>
              <h2 className='font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6'>
                Analytics and Reporting
              </h2>
              <div className='flex flex-row gap-4'>
               <div> <img src={icon} alt='Icon' draggable={false} /></div>
                <p className='font-Nunito text-[#0D47A1] flex-1 -mt-1'>
                  Analytics and Reporting provide valuable insights into your digital marketing performance. By tracking key metrics, analyzing user behavior, and identifying trends, these tools help refine strategies, optimize campaigns, and ensure data-driven decisions to achieve your business goals effectively.
                </p>
              </div>
            </div>
            <div>
              <img src={Digitalmag6} draggable={false} alt='Analytics and Reporting' className='m-auto' />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketing;
