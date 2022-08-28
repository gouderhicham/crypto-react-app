import React, { useEffect, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetch_crypto_action } from "./actions/getCryptos";
import { newsAction } from "./actions/newsAction";
const HomePage = React.lazy(() => import("./routes/HomePage"));
const Nav = React.lazy(() => import("./components/main_components/Nav"));
const News = React.lazy(() => import("./routes/News"));
const Cryptos = React.lazy(() => import("./routes/Cryptos"));
const Footer = React.lazy(() => import("./components/main_components/Footer"));
const CryptoDetails = React.lazy(() => import("./routes/CryptoDetails"));
const NewsDetails = React.lazy(() => import("./components/NewsDetails"));
const Loader = React.lazy(() => import("./components/main_components/Loader"));
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
    return <Loader />;
  }
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <Nav />
        </Suspense>
        <div className="app">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <HomePage />
                </Suspense>
              }
            />

            <Route
              path="/news"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <News />
                </Suspense>
              }
            >
              <Route
                path=":id"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <NewsDetails />
                  </Suspense>
                }
              />
            </Route>
            <Route
              path="/cryptos"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Cryptos />
                </Suspense>
              }
            />

            <Route
              path="/cryptos/:coinId"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <CryptoDetails />{" "}
                </Suspense>
              }
            />
          </Routes>
          <Footer />
        </div>
      </Suspense>
      {/* empty <></> just to avoid .app style for nav (push it to the right) */}
    </>
  );
}

export default App;