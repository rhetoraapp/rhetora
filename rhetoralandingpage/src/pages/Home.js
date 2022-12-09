import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HubspotForm from "react-hubspot-form";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import FooterSubscriber from "../components/FooterSubscriber";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* Hero Section */}
      <HowItWorks />
      <FooterSubscriber />
      <Footer />
    </div>
  );
};

export default Home;
