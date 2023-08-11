import "./AboutUs.css";
import Stats from "./components/Stats";
import { useEffect } from "react";
import WhyChooseUs from "./components/WhyChooseUs";
import MissionVission from "./components/Mission";
import MainContainer from "../../components/MainContainer";

const AboutUs = () => {
  useEffect(() => {
    document.getElementById("Nosotros").classList.add("active");
  });
  return (
    <MainContainer blue>
      <Stats />
      <div className="w-full px-4 xl:px-8 2xl:px-40">
        <WhyChooseUs />
      </div>
      <MissionVission />
    </MainContainer>
  );
};

export default AboutUs;
