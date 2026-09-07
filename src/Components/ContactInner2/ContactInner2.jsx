import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb2 from "../../Shared/BreadCrumb/BreadCrumb2";
import Appointment from './Appointment';
import HelmetChanger from "../../Shared/Helmet/Helmet";
import CallDoAction from "./CallDoAction";

const ContactInner2 = () => {
  return (
    <>
      <HelmetChanger title={'Contact Inner Page'} />
      <BreadCrumb2
        breadCrumbTitle={'Contact Us'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Contact Us'}
      />
      <div  style={{'background': 'linear-gradient(rgb(224, 247, 250) 0%, rgb(128, 216, 255) 100%)'}}>
      <Appointment />
      <CallDoAction />
      </div>
    </>
  );
};

export default ContactInner2;
