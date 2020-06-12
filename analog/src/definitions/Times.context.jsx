import React, { createContext, useState } from "react";


export const TimesContext = createContext();

export const TimesProvider = ({ children }) => {
  const [analog, setAnalog] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [contextCounter, setContextCounter] = useState();
  const [counterValue, setCounterValue] = useState("");

  const fetchData = React.useCallback(() => {
    fetch("/times")
      .then((res) => res.json())
      .then((data) => {
        setAnalog(data.result);
        setLoading(false);
      })
      .then(console.log(analog));
  }, []);


  const value = {
    analog,
    contextCounter, setContextCounter,
    counterValue, setCounterValue,
    loading,
    fetchData
  };

  return (
    <TimesContext.Provider value={value}>{children}</TimesContext.Provider>
  );
};
