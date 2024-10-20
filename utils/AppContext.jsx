import { createContext, useState } from "react";
import { vorschauArr } from "../src/Data/vorschau.js";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [movieArr, setMovieArr] = useState(vorschauArr);
  const [movieArrThump, setMovieArrThump] = useState(firstToLast(movieArr));

  function firstToLast(movieArrToTurn) {
    const thumpMovieArr = [...movieArrToTurn];
    thumpMovieArr.push(thumpMovieArr.shift());
    return thumpMovieArr;
  }
  function lastToFirst(movieArrToTurn) {
    const thumpMovieArr = [...movieArrToTurn];
    thumpMovieArr.unshift(thumpMovieArr.pop());
    return thumpMovieArr;
  }

  return (
    <AppContext.Provider value={{ movieArr, setMovieArr, movieArrThump, setMovieArrThump, firstToLast, lastToFirst }}>
      {children}
    </AppContext.Provider>
  );
}
