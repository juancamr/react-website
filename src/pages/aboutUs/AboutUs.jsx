import { useEffect } from "react";
import MainContainer from "../../components/MainContainer";
import TopContainer from "./components/TopContainer";
import WhatWeDo from "./components/WhatWeDo";
import MiddleContainer from "./components/MiddleContainer";
import OurEspecialization from "./components/OurEspecialization";
import MissionVission from "./components/MissionVission";
import OwnerComments from "./components/OwnerComments";
import { image } from "@nextui-org/react";

const AboutUs = () => {
  useEffect(() => {
    document.getElementById("Nosotros").classList.add("active");
  });
  return (
    <MainContainer beige>
      <TopContainer />
      <WhatWeDo />
      <MiddleContainer />
      <OurEspecialization />
      <MissionVission />
      <OwnerComments />
    </MainContainer>
  );
};

export default AboutUs;
