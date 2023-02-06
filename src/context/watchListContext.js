import React, { createContext, useState, useEffect } from "react";
import dataD from "../context/dataD";
export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
  //console.log();
  let dataP=[];
  
  const [watchList, setWatchList] = useState(
    localStorage.getItem("watchList")?.split(",") || dataD
  );
  const [watchListP, setWatchListP] = useState(
    localStorage.getItem("watchListP")?.split(",")||dataP
  );
  useEffect(() => {
    localStorage.setItem("watchList", watchList);
    localStorage.setItem("watchListP", watchListP);
  }, [watchList,watchListP]);
 
  return (
    <WatchListContext.Provider value={{ watchList}}>
      {props.children}
    </WatchListContext.Provider>
  );
};
