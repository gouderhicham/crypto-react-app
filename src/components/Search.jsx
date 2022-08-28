import React, { useEffect } from "react";
import { getSearchText } from "../actions/getSearchText";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
function Search() {
  const [texto, setTexto] = useSearchParams({ search: "" });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSearchText(texto.get("search")));
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
        value={texto.get("search")}
        onChange={(e) => setTexto({ search: e.target.value })}
      />
    </div>
  );
}

export default Search;
