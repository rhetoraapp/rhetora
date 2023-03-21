import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import FooterSubscriber from "../components/FooterSubscriber";
import ReactGA from "react-ga";
import { PopupButton } from "react-calendly";

const Home = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* Hero Section */}
      <HowItWorks />
      <FooterSubscriber title="If you made it this far, we must be striking a chord." />
      <Footer />

    </div>
  );
};

export default Home;
