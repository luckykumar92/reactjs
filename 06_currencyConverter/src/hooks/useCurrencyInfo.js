import { useEffect, useState } from "react";

// let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      // .then((res) => console.log(res[currency]));
      .then((res) => setData(res[currency]));
    // .then((res) => console.log(res));
    // console.log(res);
  }, [currency]);
  //   return [data, setData]; //for current situation its wrong
  // console.log(data);
  return data;
}

export default useCurrencyInfo;
