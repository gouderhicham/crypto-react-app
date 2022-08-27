import React, { useEffect } from "react";
import { Search , AllCryptos } from "../exports";
import {useDispatch} from "react-redux"
function Cryptos() {
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch({type : "set-loading"})
  }, [])
  return <>
  <Search /> 
  <AllCryptos /> 
  </>
}

export default Cryptos;