import { createContext, useState } from "react";
import { vorschauArr } from "../src/Data/vorschau.js";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [movieArr, setMovieArr] = useState(vorschauArr);
  const [movieArrThump, setMovieArrThump] = useState(firstToLast(movieArr));

  function firstToLast(movieArrToTurn) {
    const thumpMovieArr = [...movieArrToTurn];
    const movieToBack = thumpMovieArr.shift();
    thumpMovieArr.push(movieToBack);
    return thumpMovieArr;
  }
  function lastToFirst(movieArrToTurn) {
    const thumpMovieArr = [...movieArrToTurn];
    const movieToBack = thumpMovieArr.pop();
    thumpMovieArr.unshift(movieToBack);
    return thumpMovieArr;
  }

  return (
    <AppContext.Provider value={{ movieArr, setMovieArr, movieArrThump, setMovieArrThump, firstToLast, lastToFirst }}>
      {children}
    </AppContext.Provider>
  );
}
