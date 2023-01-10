import {React,useEffect} from "react";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Background from '../assets/Hero-background.svg';
import ReactGA from "react-ga";
import luca from "../assets/luka-line.png";
import mazen from "../assets/mazen-line.png";
import topline from "../assets/topline.png";
import vector145 from "../assets/vector145.png";
import lucaPic from "../assets/lucapic.png";
import mazePic from "../assets/mazepic.png";
import bottomLine from "../assets/bottom-line.png";
import "../styles/ourstory.css";

const Contactus = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  },[]);
  
    return (
      <div>
        <Navbar/>
        <div>
      <div
        className="d-flex justify-content-end row"
        style={{
          height: "100vh",
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundRepeat: "repeat-y",
        }}
      >
        <div className="d-flex w-full">
          <div style={{ width: "50%" }} id="TwntyNntnStory">
            <div className="tr">
              <img src={luca} alt="" />
            </div>
            <p id="name" className="">
              Luka
            </p>
            <div className="tc">
              <div className="year">2019</div>
              <div className="yearDescription">
                Luka and Mazen have been business partners for many years,
                having met in high school and bonded over our shared mentality
                and entrepreneurial spirit. We have always been driven to find
                ways to improve upon existing ideas and create new solutions to
                problems.
              </div>
            </div>
            <div className="tr">
              <img src={mazen} alt="mazen" />
            </div>
            <p id="name">mazen</p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="tr">
          <img src={topline} alt="topline" />
          <img src={vector145} id="vector145" />
        </div>

        <div id="topRect">
          <div className="v1">
            <div id="percRectangle">
              %97
              <br />
              Co-Founder
              <br />
              Match
            </div>

            <div id="matchRectangle">
              <img src={lucaPic} id="pic" />
              <span className="flex justify-center">
                <div id="barone"></div>
                <div id="bartwo"></div>
              </span>
              <img src={mazePic} id="pic" />
            </div>
          </div>
        </div>

        <img src={bottomLine} id="bottomLine" />

        <div className="" id="Twenty22">
          <div className="year" id="year22">2022</div>
          <div className="yearDescription">
            Luka and Mazen have been business partners for many years, having
            met in high school and bonded over our shared mentality and
            entrepreneurial spirit. We have always been driven to find ways to
            improve upon existing ideas and create new solutions to problems.
          </div>
        </div>

        <div></div>
        {/* right section area */}
        <div className="tr" id="rightSec">
          <div id="yearTwenty21">
              2020&2021
          </div>
          <div id="yearTwenty21Desc">
          Luka and I started our journey as e-commerce partners, building and growing our online business. This allowed us to gain valuable experience and insights into the world of entrepreneurship and e-commerce.
          </div>

          <div id="rectangle21">
              <div id="v4">
              </div>
          </div>
        </div>
      </div>
    </div>
        <Footer/>
      </div>
    );
  };
   
  export default Contactus;