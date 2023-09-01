import Card from "./Card";
import { useState, useEffect } from "react";

function SearchPage() {
  const url = "https://data.nasa.gov/resource/gh4g-9sfh.json";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };
  useEffect(() => {
    fetchInfo();
  }, []);

  return <Card data={data} />;
}
export default SearchPage;
