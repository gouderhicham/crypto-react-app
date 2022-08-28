import React, { useEffect } from "react";
import Search from "../components/Search"
import AllCryptos from "../components/AllCryptos"
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