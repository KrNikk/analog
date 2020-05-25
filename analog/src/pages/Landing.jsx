import React from "react";
import { MenuButton } from "../components/Button";
import "./Landing.scss";

const Landing = () => {
  return (
    <>
      <div className="container">
        <div
          style={{
            display: "inline-flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <MenuButton
            className={"startButton"}
            name={"Developing process"}
            to={"/"}
          ></MenuButton>
          <MenuButton
            className={"startButton"}
            name={"Developing times"}
            to={"/times"}
          ></MenuButton>
          <MenuButton
            className={"startButton"}
            name={"Recipes"}
            to={"/"}
          ></MenuButton>
          <MenuButton
            className={"startButton"}
            name={"Timer"}
            to={"/"}
          ></MenuButton>
        </div>
      </div>
    </>
  );
};

export default Landing;
