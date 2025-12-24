import Seo from "../seo/Seo";
import Hero from "../components/Hero/Hero";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import HelpBusiness from "../components/HelpBusiness/HelpBusiness";
import BigClients from "../components/BigClients/BigClients";
import OurFleet from "../components/OurFleet/OurFleet";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import NemtServices from "../components/NemtServices/NemtServices";
import BookRideCTA from "../components/BookRideCTA/BookRideCTA";
export default function Home() {
  return (
    <>
      <Seo
        title="Elegant Care Transportation | Medical Transport"
        description="Fast, secure and reliable medical transportation services available 24/7."
      />

      <Hero />
            <WhatWeDo />
<HelpBusiness/>
<BigClients/>
  <OurFleet/>
  <WhyChooseUs/>
  <NemtServices/>
  <BookRideCTA/>
     </>
  );
}
