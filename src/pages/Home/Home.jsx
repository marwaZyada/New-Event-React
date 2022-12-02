import React from "react";
import OverViewSection from "../../design-system/components/OverViewSection";
import CreativeSpeakersSection from "../../design-system/components/CreativeSpeakersSection";
import OurProgramSection from "../../design-system/components/OurProgrmSection";
import OurSponserSection from "../../design-system/components/OurSponserSection";
import AboutUs from "../../design-system/components/AboutUs";
import WatchVideo from "../../design-system/components/WatchVideo";
import Register from "../../design-system/components/Register";
import Questions from "../../design-system/components/Questions";

const Home = () => {
  return (
    <div>
      <AboutUs />
      <OverViewSection />
      <WatchVideo />
      <CreativeSpeakersSection />
      <OurProgramSection />
      <Register/>
      <Questions/>
      <OurSponserSection />
    </div>
  );
};

export default Home;
