import React, { useContext } from "react";
import Selection from "../components/Select";
import Slider from "../components/Slider";
import "./Times.scss";
import Card from "../components/Card";
import { TimesContext } from "../definitions/Times.context";

const Times = () => {
  const { analog, loading, fetchData, err } = React.useContext(TimesContext);

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <>
        {/*   <Slider /> */}
        <h2>Add your recipe or browse </h2>
          <Selection />
       {/*    <Table /> */}
         <div className="cardContainer"> <Card /></div>
        </>
      )}
    </>
  );
};

export default Times;
