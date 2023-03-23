import { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();
export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selecteCategory, setSelecteCategory] = useState("new");
  const [mobilMenu, setMobilMenu] = useState(false);

  useEffect(() => {
    fetchSelectedCategoryData(selecteCategory);
  }, [selecteCategory]);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
      // console.log(contents);
      setSearchResults(contents);
      setLoading(false);
    });
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        selecteCategory,
        setSelecteCategory,
        mobilMenu,
        setMobilMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
