import HeroSection from "../components/sections/HeroSection";
import WelcomeSection from "../components/sections/WelcomeSection";
import ServicesGrid from "../components/sections/ServicesGrid";
import DoctorSection from "../components/sections/DoctorSection";
import FacilitySlider from "../components/sections/FacilitySlider";
import MeetOurTeam from "../components/sections/MeetOurTeam";
import StayInTouch from "../components/sections/StayInTouch";
import Contact from "../components/layout/Contact";
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <ServicesGrid />
      <DoctorSection />
      <FacilitySlider />
      <MeetOurTeam />
      <Contact />
      <StayInTouch />
    </>
  );
}
