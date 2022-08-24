// doing this to import them in one line and not stack them in App component
export { default as HomePage } from "./routes/HomePage";
export { default as News } from "./routes/News";
export { default as Exchange } from "./routes/Exchange";
export { default as Cryptos } from "./routes/Cryptos";
export { default as Nav } from "./components/main_components/Nav";
export { default as NewsCardIcon } from "./components/NewsCardIcon";
export { default as NewsDetails } from "./components/NewsDetails";
export { default as Footer } from "./components/main_components/Footer";
export { default as Search } from "./components/Search";
export { default as CryptoDetails } from "./routes/CryptoDetails";
export { default as Loader } from "./components/main_components/Loader";
export { default as AllCryptos } from "./components/AllCryptos";
export { default as PopularCryptos } from "./components/PopularCryptos";
export { default as CryptoIcon } from "./components/CryptoIcon";
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
