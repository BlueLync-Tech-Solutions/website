import About from "../About/About";
import Banner from "../Banner/Banner";
import Feature from "../Feature/Feature";
import Integrations from "../Integrations/Integrations";
import LatestWork from "../LatestWork/LatestWork";
import Provide from "../Provide/Provide";
import Testimonial from "../Testimonial/Testimonial";
import WhyChoose from "../Whychoose/WhyChoose";
import Consultation from '../../Shared/Consultation';
import Tech from "../AboutInner3/Tech";

const Home1 = () => {
  return (
    <>
      <Banner />      
      <Feature />     
      <About />
       <div style={{'background': ' #80d8ff'}}>
      <Tech />
      </div>
      <Provide />
      <WhyChoose />
      
      <LatestWork />
      <div style={{'background': ' #80d8ff'}}>
      <Integrations />
      </div>
      <div >
      <Testimonial />
      <Consultation />
      </div>
    </>
  );
};

export default Home1;
