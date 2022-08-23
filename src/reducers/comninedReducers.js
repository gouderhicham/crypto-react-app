import { combineReducers } from "redux";
import { getCryptos } from "./getCryptosreducer";
import { inputReducer } from "./inputReducer";
import { newsReducer } from "./newsReducer";
import { cryptoDetailsReducer } from "./cryptoDetailsReducer";
export const reducers = combineReducers({
  cryptos: getCryptos,
  searchedCryps: inputReducer,
  news: newsReducer,
  cryptoDetails: cryptoDetailsReducer,
});