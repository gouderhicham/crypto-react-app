// doing this to import them in one line and not stack them in App component
export { default as HomePage } from "./routes/HomePage";
export { default as News } from "./routes/News";
export { default as Exchange } from "./routes/Exchange";
export { default as Cryptos } from "./routes/Cryptos";
export { default as Nav } from "./components/Nav";
export { default as Footer } from "./components/Footer";
export { default as Search } from "./components/Search";
export { default as AllCryptos } from "./components/AllCryptos";
export { default as PopularCryptos } from "./components/PopularCryptos";
export { default as CryptoIcon } from "./components/CryptoIcon";
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
