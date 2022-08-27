import React, { useEffect } from "react";
import {
  HomePage,
  Nav,
  News,
  Exchange,
  Cryptos,
  Footer,
  CryptoDetails,
  NewsDetails,
  Loader
} from "./exports";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetch_crypto_action } from "./actions/getCryptos";
import { newsAction } from "./actions/newsAction";
function App() {
  // dispatch function to fetch data to redux
  const dispatch = useDispatch();
  const loading = useSelector((data) => data.cryptos.cryptos_loading);
  // useEffect :)
  useEffect(() => {
    dispatch(fetch_crypto_action());
    dispatch(newsAction());
  }, []);
  if (loading) {
    return <Loader /> 
  }
  return (
    <>
      {/* empty <></> just to avoid .app style for nav (push it to the right) */}
      <Nav />
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<News />}>
            <Route path=":id" element={<NewsDetails />} />
          </Route>
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/cryptos" element={<Cryptos />} />
          <Route path="/cryptos/:coinId" element={<CryptoDetails />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;