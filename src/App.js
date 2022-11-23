
import OurProgramSection from './design-system/components/OurProgrmSection/OurProgramSection';
import './design-system/main.css'

import FifthSection from "./design-system/components/FifthSection";
import ThirdSection from "./design-system/components/ThirdSection";
import OurSponserSection from './design-system/components/OurSponserSection';


function App() {
  return (
    <div className="App">
    <ThirdSection/>

   <FifthSection/>
   <OurProgramSection/>
   <OurSponserSection/>

    </div>
  );
}

export default App;
