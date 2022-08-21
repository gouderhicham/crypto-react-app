import React, { useEffect, useState } from "react";
import { getSearchText } from "../actions/getSearchText";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
function Search() {
  const [texto, setTexto] = useSearchParams({ mytext: "" });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSearchText(texto.get("mytext")));
  }, [texto]);
  return (
    <div
      style={{ display: "flex", justifyContent: "center", width: "100%" }}
      className="input"
    >
      <input
        style={{
          padding: "0.5rem",
          width: "60%",
          fontSize: "1.5rem",
          marginTop: "7.5rem",
        }}
        type="text"
        placeholder="Search cryptos..."
        value={texto.get("mytext")}
        onChange={(e) => setTexto({ mytext: e.target.value })}
      />
    </div>
  );
}

export default Search;
