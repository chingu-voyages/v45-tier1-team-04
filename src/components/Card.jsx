import { useState, useEffect } from "react";
import "./Header";
import "./Footer";
const url = "https://data.nasa.gov/resource/gh4g-9sfh.json";
function Card() {
  const [data, setData] = useState([]);
  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };
  console.log(fetchInfo);
  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div className="App">
      <h1 style={{ color: "green" }}>using JavaScript inbuilt FETCH API</h1>
      <center>
        {data.map((dataObj) => {
          return (
            <div key={dataObj.id} className="grid-cols-3">
              <p
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {dataObj.name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {dataObj.nametype}
                  {dataObj.id}
                </p>
              </p>
            </div>
          );
        })}
      </center>
    </div>
  );
}
export default Card;
