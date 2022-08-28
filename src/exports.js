import Converter from "timestamp-conv";
import millify from "millify";
export function formateNumber(number) {
  return millify(number, {
    precision: 2,
    decimalSeparator: ",",
  });
}
export const converDate = (time, option) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const Date = new Converter.date(time);
  if (option === "5y") {
    return `${Date.getYear()}`;
  } else if (option === "30d" || option === "7d") {
    return `${months[Date.getMonth() - 1]} ${Date.getDay()}`;
  } else if (option === "3m" || option === "1y" || option === "3y") {
    return `${months[Date.getMonth() - 1]} ${Date.getYear()}`;
  } else if (option === "24h" || option === "3h") {
    if (Number(Date.getHour()) < 12) {
      return `${Date.getHour()}:${Date.getMinute()} AM`;
    } else {
      return `${Date.getHour()}:${Date.getMinute()} PM`;
    }
  }
};
export function returnHeight(width) {
  if (width < 840 && width > 500) {
    return 350
  }   
  else if (width < 500 && width > 380){
    return 300
  }
  else if (width < 380){
    return 270
  }
  else{
    return 450
  }
}
// check how many time actions is dispatched and how many times a component render ((page details one))