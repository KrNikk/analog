import React, { createContext, useState } from "react";


export const TimesContext = createContext();

export const TimesProvider = ({ children }) => {
  const [analog, setAnalog] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [recipesUrl, setRecipesUrl] = useState("https://filmdev.org/api/recipe/5001");
  const [loading, setLoading] = useState(true);

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
    loading,
    fetchData
  };

  return (
    <TimesContext.Provider value={value}>{children}</TimesContext.Provider>
  );
};
