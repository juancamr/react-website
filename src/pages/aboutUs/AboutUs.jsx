import "./AboutUs.css";
import Stats from "./components/Stats";
import { useEffect } from "react";
import WhyChooseUs from "./components/WhyChooseUs";
import MissionVission from "./components/Mission";

const AboutUs = () => {
  useEffect(() => {
    document.getElementById("Nosotros").classList.add("active");
  });
  return (
    <main
      id="main-about-us"
      className="px-4 py-24 relative min-h-screen space-y-16 md:space-y-20"
    >
      <Stats />
      <MissionVission />
      <div className="w-full px-4 xl:px-8 2xl:px-40">
        <WhyChooseUs />
      </div>
    </main>
  );
};

export default AboutUs;
