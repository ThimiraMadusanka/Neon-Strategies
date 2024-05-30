import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import ContactUs from "./components/ContactUs";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import VideoBanner from "./components/VideoBanner";
import WhatWeDo from "./components/WhatWeDo";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <VideoBanner />
      <WhatWeDo />
      <AboutUs />
      <Banner />
      <FAQ />
      <Process />
      <ContactUs />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
