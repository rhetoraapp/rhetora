import { React } from "react";
import Navbar from '../components/navbar';
import Background from "../assets/Hero.png";
import "../styles/ourstory.css";
import LukaLine from "../components/ourstory/lukaLine";
import MazeLine from "../components/ourstory/mazeLine";
import TopLine from "../components/ourstory/Topline";
import Vector145 from "../components/ourstory/Vector145";
import V1 from "../components/ourstory/V1";
import BottomLine from "../components/ourstory/BottomLine";
import Text3 from "../components/ourstory/Text3";
import V4 from "../components/ourstory/V4";
import Text2021 from "../components/ourstory/Text2021";
const Ourstory = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          position: "relative",
          top: "0px",
          maxWidth: "1512px",
          height: "3203px",
          background: `url(${Background})`,
        }}
      >
        <LukaLine id="lucaLine" />
        <div>
          <div id="heading1">2019</div>
          <div id="description1">
            Luka and Mazen have been business partners for many years, having
            met in high school and bonded over our shared mentality and
            entrepreneurial spirit. We have always been driven to find ways to
            improve upon existing ideas and create new solutions to problems.
          </div>
        </div>
        <MazeLine id="mazeLine" />

        <TopLine id="topline" />
        <Vector145 id="vector145" />
        <V1 id="v1" />
        <BottomLine id="bottomline" />

        <div>
          <div id="heading3">2023</div>
          <div id="description3">
            During the growth of our e-commerce business and working in sales,
            we experienced the challenges of cold calling and decided to create
            Rhetora, an AI-powered platform that helps salespeople improve their
            cold calling skills and increase their chances of success in a
            stress-free environment.
          </div>
        </div>

        <Text3 id="text3" />

        <V4 id="v4" />

        <Text2021 id="textRight" />
      </div>
    </div>
  );
};

export default Ourstory;
