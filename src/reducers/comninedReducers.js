import { combineReducers } from "redux";
import { getCryptos } from "./getCryptosreducer";
import {inputReducer} from "./inputReducer"
import {newsReducer} from "./newsReducer"
export const reducers = combineReducers({
  cryptos: getCryptos ,
  searchedCryps : inputReducer, 
  news : newsReducer
});