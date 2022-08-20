import { combineReducers } from "redux";
import { getCryptos } from "./getCryptosreducer";
export const reducers = combineReducers({
  cryptos: getCryptos ,
});