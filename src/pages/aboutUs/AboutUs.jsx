import "./AboutUs.css";
import Stats from "./components/Stats";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    document.getElementById("Nosotros").classList.add('active');
  });
  return (
    <main className="px-4 py-14 relative min-h-screen">
      <img
        className="absolute top-0 left-0 h-full object-cover w-full"
        src="assets/images/blue-background.jpg"
        alt=""
      />
      <Stats />
    </main>
  );
};

export default AboutUs;
