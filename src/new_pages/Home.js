import Navbar from "../components/navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/HowItWorks";
import StatSection from "../components/StatsCards";


const Home = () => {

    
    return (
      <div>
        <Navbar />
        <div style={{height:"45px"}}></div>
        <HeroSection/>
        <AboutSection/>
        <StatSection/>
       
      </div>
    );
  };
  
  export default Home;