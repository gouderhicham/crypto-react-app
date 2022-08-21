import React from "react";
import { HomePage, Nav, News, Exchange, Cryptos } from "./components";
import { Routes, Route } from "react-router-dom";
function App() {
  
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
      </div>
    </>
  );
}

export default App;
