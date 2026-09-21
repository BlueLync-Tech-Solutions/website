import { createHashRouter } from "react-router-dom";

import Home1 from "../Components/Home1/Home1";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import AboutInner3 from "../Components/AboutInner3/AboutInner3";
import ServiceInner from "../Components/ServiceInner/ServiceInner";
import CareerInner from "../Components/CareerInner/CareerInner";
import ContactInner2 from "../Components/ContactInner2/ContactInner2";
import GenAI from "../Components/GenAI/GenAI";
import TechnologyIntro from "../Components/TechnologyIntro/TechnologyIntro";
import DigitalMarketing from "../Components/DigitalMarketing/DigitalMarketing";
import AWSService from "../Components/AWSService/AWSService";
import MicrosoftServicesConsulting from "../Components/MicrosoftServicesConsulting/MicrosoftServicesConsulting";
import MicrosoftSharepointServices from "../Components/MicrosoftSharepointServices/MicrosoftSharepointServices";
import Website_and_Web_App from "../Components/Website_and_Web_App/Website_and_Web_App";
import UI_Design_Development from "../Components/UI_Design_Development/UI_Design_Development";
import Software_Development from "../Components/Software_Development/Software_Development";
import Salesforce_Adminstration from "../Components/Salesforce_Adminstration/Salesforce_Adminstration";
import Quality_Assurance from "../Components/Quality_Assurance/Quality_Assurance";
import Mobile_App from "../Components/Mobile_App/Mobile_App";
import MissionInner2 from "../Components/MissionInner2/MissionInner2";
import PrivacyPolicy from "../Components/PrivacyPolicy/PrivacyPolicy";
import Main from "../Main/Main";

const router = createHashRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home1 />,
      },
      {
        path: "/About-Us",
        element: <AboutInner3 />,
      },
      {
        path: "/mission_inner2",
        element: <MissionInner2 />,
      },
      {
        path: "/genAI",
        element: <GenAI />,
      },
      {
        path: "/technologyIntro",
        element: <TechnologyIntro />,
      },
      {
        path: "/digitalMarketing",
        element: <DigitalMarketing />,
      },
      {
        path: "/AWSService",
        element: <AWSService />,
      },
      {
        path: "/MicrosoftSharepointServices",
        element: <MicrosoftSharepointServices />,
      },
      {
        path: "/MicrosoftServicesConsulting",
        element: <MicrosoftServicesConsulting />,
      },
      {
        path: "/Mobile_App",
        element: <Mobile_App />,
      },
      {
        path: "/Quality_Assurance",
        element: <Quality_Assurance />,
      },
      {
        path: "/Salesforce_Adminstration",
        element: <Salesforce_Adminstration />,
      },
      {
        path: "/Software_Development",
        element: <Software_Development />,
      },
      {
        path: "/UI_Design_Development",
        element: <UI_Design_Development />,
      },
      {
        path: "/Website_and_Web_App",
        element: <Website_and_Web_App />,
      },
      {
        path: "/Microsoft-Service",
        element: <ServiceInner />,
      },
      {
        path: "/Careers",
        element: <CareerInner />,
      },
      {
        path: "/Contact-US",
        element: <ContactInner2 />,
      },
      {
        path: "/Privacy-Policy",
        element: <PrivacyPolicy />,
      },
    ],
  },
]);

export default router;
