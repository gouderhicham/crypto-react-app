import React, { useEffect } from "react";
import { HomePage, Nav, News, Exchange, Cryptos, Footer } from "./components";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetch_crypto_action } from "./actions/getCryptos";
function App() {
  // dispatch function to fetch data to redux
  const dispatch = useDispatch();
  // useEffect :)
  useEffect(() => {
    dispatch(fetch_crypto_action());
  }, []);
  return (
    <>
      {/* empty <></> just to avoid .app style for nav (push it to the right) */}
      <Nav />
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<News />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/cryptos" element={<Cryptos />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
