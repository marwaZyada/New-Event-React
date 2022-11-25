import React from "react";
import OverViewSection from "../../design-system/components/OverViewSection";
import CreativeSpeakersSection from "../../design-system/components/CreativeSpeakersSection";
import OurProgramSection from "../../design-system/components/OurProgrmSection";
import OurSponserSection from "../../design-system/components/OurSponserSection";
import AboutUs from "../../design-system/components/AboutUs";
import WatchVideo from "../../design-system/components/WatchVideo";

const Home = () => {
  return (
    <div>
      <AboutUs />
      <OverViewSection />
      <WatchVideo />
      <CreativeSpeakersSection />
      <OurProgramSection />
      <OurSponserSection />
    </div>
  );
};

export default Home;
