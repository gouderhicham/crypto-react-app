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
} from "./components";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetch_crypto_action } from "./actions/getCryptos";
import { newsAction } from "./actions/newsAction";
function App() {
  // dispatch function to fetch data to redux
  const dispatch = useDispatch();
  // useEffect :)
  useEffect(() => {
    dispatch(fetch_crypto_action());
    dispatch(newsAction());
  }, []);
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
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
