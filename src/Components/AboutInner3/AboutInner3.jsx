import { FaArrowRightLong } from "react-icons/fa6";
// import BreadCrumb2 from "../../../Shared/BreadCrumb/BreadCrumb2";
import BreadCrumb2 from "../../Shared/BreadCrumb/BreadCrumb2";
import About from "./About";
import HelmetChanger from "../../Shared/Helmet/Helmet";
import TeamMember from "./TeamMember/TeamMember";
import CallDoAction from "./CallDoAction";
// import Counter from "./Counter/Counter";
import Service from "./Service/Service";
import JourneySection from "./JourneySection";
import MissionVisionSection from "./MissionVisionSection";

import Consultation from '../../Shared/Consultation';

const AboutInner3 = () => {
  return (
    <>
      <HelmetChanger title={'About Inner Page Three'} />
      <BreadCrumb2
        breadCrumbTitle={'About BlueLync'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'About BlueLync'}
      />
      <About />      
      <div style={{'background': '#80d8ff'}}>
        <MissionVisionSection/>     
      </div>
        
      <div style={{'background': ' #80d8ff'}}>
        <JourneySection/> 
        <Service />
      </div>
      <div className="bg-[#ffc27f] ">
        <TeamMember />
      <Consultation />
      </div>
    </>
  );
};

export default AboutInner3;
