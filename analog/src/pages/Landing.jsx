import React from "react";
import { MenuButton } from "../components/Button";
import "./Landing.scss";
import Cameras from "../images/cameras.jpg";
import Flip from "react-reveal/Flip";

const Landing = () => {
  return (
    <><div  style={
      {backgroundImage: `url(${Cameras})`,
      width:"90%", 
      minHeight: "45rem",
      borderRadius: "1rem", 
      backgroundSize: "100%", 
      display: "inline-flex",
      alignContent: "center",
      justifyContent:"center"
  }}>
      <div className="container">
        <Flip right> 
          <MenuButton
            className={"startButton"}
            name={"Developing process"}
            to={"/process"}
          ></MenuButton>
          </Flip>
          <Flip right delay={600}> 
          <MenuButton
            className={"startButton"}
            name={"Developing times"}
            to={"/times"}
          ></MenuButton>
            </Flip>
            <Flip right delay={1200}> 
         </Flip>
         <Flip right delay={1200}>
          <MenuButton
            className={"startButton"}
            name={"Timer"}
            to={"/timer"}
          ></MenuButton>
          </Flip>
      </div>
      </div>
    </>
  );
};

export default Landing;
