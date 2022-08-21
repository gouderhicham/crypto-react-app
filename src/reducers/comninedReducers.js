import { combineReducers } from "redux";
import { getCryptos } from "./getCryptosreducer";
import {inputReducer} from "./inputReducer"
export const reducers = combineReducers({
  cryptos: getCryptos ,
  searchedCryps : inputReducer
});