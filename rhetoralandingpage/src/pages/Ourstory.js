import { React } from "react";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Background from "../assets/Hero.png";
import "../styles/ourstory.css";

import LukaLine from "../components/ourstory/lukaLine";
import MazeLine from "../components/ourstory/mazeLine";
import TopLine from "../components/ourstory/Topline";
import Vector145 from "../components/ourstory/Vector145";
import V1 from "../components/ourstory/V1";
import BottomLine from "../components/ourstory/BottomLine";
import V4 from "../components/ourstory/V4";

import Text1 from '../components/ourstory/Text1';
import Text2 from "../components/ourstory/Text2";
import Text3 from '../components/ourstory/Text3';
import Text4 from "../components/ourstory/Text4";

import Form from '../components/ourstory/Form';

const Ourstory = () => {
  return (
    <div className="content-center" >
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
        <LukaLine id="lucaLine" className="bg-white" />
        <Text1 className="bg-white" />
        <MazeLine id="mazeLine" className="bg-white" />

        <TopLine id="topline" />
        <Vector145 id="vector145" />
        <V1 id="v1" />
        <BottomLine id="bottomline" />

        <Text2 />

        <Text3 />

        <V4 id="v4" />

        <Text4 id="text" />


        <Form />


      </div>
      
      <Footer/>
    </div>
  );
};

export default Ourstory;
