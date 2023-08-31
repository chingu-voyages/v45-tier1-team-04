import { useState, useEffect } from "react";
const url = "https://data.nasa.gov/resource/gh4g-9sfh.json";
function Card() {
  const [data, setData] = useState([]);
  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };
  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <>
      <div className="App">
        <h1 className="text-center	">using JavaScript inbuilt FETCH API</h1>
        <center className="grid grid-cols-3 gap-y-12	">
          {data.map((dataObj) => {
            return (
              <div key={dataObj.id}>
                <p
                  href="#"
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {dataObj.name}
                  </div>
                  <div className="font-normal text-gray-700 dark:text-gray-400">
                    {dataObj.nametype}
                  </div>
                  <div className="font-normal text-gray-700 dark:text-gray-400">
                    {dataObj.recclass}
                  </div>
                  <div className="font-normal text-gray-700 dark:text-gray-400">
                    {dataObj.mass}
                  </div>
                  <div className="font-normal text-gray-700 dark:text-gray-400">
                    {dataObj.fall}
                  </div>
                  <div className="font-normal text-gray-700 dark:text-gray-400">
                    {dataObj.year}
                  </div>
                  <div className="font-normal text-gray-700 dark:text-gray-400">
                    {dataObj.reclat}
                  </div>
                  <div className="font-normal text-gray-700 dark:text-gray-400">
                    {dataObj.reclong}
                  </div>
                </p>
              </div>
            );
          })}
        </center>
      </div>
    </>
  );
}
export default Card;
