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
export { default as DetailsSection } from "./components/main_components/DetailsSection";
export { default as AllCryptos } from "./components/AllCryptos";
export { default as PopularCryptos } from "./components/PopularCryptos";
export { default as CryptoIcon } from "./components/CryptoIcon";
export { default as price } from "./images/price.png";
export { default as high } from "./images/high.png";
export { default as markets } from "./images/markets.png";
export { default as rank } from "./images/rank.png";
export { default as thunder } from "./images/thunder.png";
export { default as ex } from "./images/ex.png";
import millify from "millify";
export function formateNumber(number) {
  return millify(number, {
    precision: 2,
    decimalSeparator: ",",
  });
}
const converDate = (time, option) => {
  const Date = new Converter.date(time);
  if (option === "5y" || option === "3y" || option === "1y") {
    return `${months[Date.getMonth() - 1]} ${Date.getYear()}`;
  } else if (option === "30d" || option === "7d") {
    return `${Date.getDay()}.${Date.getMonth()},${Date.getHour()}`;
  } else if (option === "24h" || option === "3h") {
    return `${Date.getHour()}:${Date.getMinute()}`;
  }
};