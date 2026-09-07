// import bannerImg from '/images/single-seo.png';
// import bannerShape from '/images/banner-arrow.png';
// import bannerShape2 from '/images/shape-3.png';
// import subTilteShape from '/images/hero-title-shape1.png';
// import titleShape from '/images/horen.png';
// import bannerReview from '/images/google.png';
// import { GoGlobe } from 'react-icons/go';
// import { TbBoxMargin } from 'react-icons/tb';

const Banner = () => {
  return (
//     <section
//   className="bg-[url('/images/about-bg-1-1.png')] bg-cover bg-center bg-no-repeat 
//   h-[320px] sm:h-[500px] md:h-[550px] lg:h-[420px] xl:h-[480px]
//   flex items-center relative z-10 overflow-hidden py-6 sm:py-8 lg:py-10"
// >
<section
  className="relative bg-[url('/images/about-bg-1-1.png')] bg-cover bg-center bg-no-repeat 
  h-[400px] sm:h-[500px] md:h-[550px] lg:h-[420px] xl:h-[500px]
  flex items-center relative z-20 overflow-hidden py-5 md:py-5"
>
  <div className="absolute inset-0 bg-black/10"></div>
  <div className="Container">
    <div className="">
        <h1
          className="font-Rajdhani font-extrabold tracking-tight text-white 
          text-[20px] leading-[26px] sm:text-[32px] sm:leading-[40px] 
          md:text-[36px] md:leading-[44px] lg:text-[34px] xl:text-[42px] xl:leading-[50px]"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3">
            We Create Fully Connected Systems <br/> So You Can Focus On Your Business
          </div>
        </h1>
      </div>
  </div>
</section> 


  );
};

export default Banner;
