import React, { useContext } from "react";
import Selection from "../components/Select";
import Slider from "../components/Slider";
import Table from "../components/Table";
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
          <Slider />
          <Selection />
          <Table />
        </>
      )}
    </>
  );
};

export default Times;
