import Card from "./Card";
import { useState, useEffect } from "react";
import SearchAndFilter from "./SearchAndFilter";

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

  // formData state holds all the form data in one object
  const [formData, setformData] = useState({
    search: "",
    startYear: 1900,
    endYear: new Date().getFullYear(),
    minMass: undefined,
    maxMass: undefined,
  });

  function meteoriteFilter() {
    let tempData = data;

    if (
      Number.isInteger(formData.startYear) &&
      Number.isInteger(formData.endYear)
    ) {
      tempData = tempData.filter(
        (dataObj) =>
          new Date(dataObj.year).getFullYear() >= formData.startYear &&
          new Date(dataObj.year).getFullYear() <= formData.endYear
      );
    }

    if (
      Number.isInteger(formData.minMass) &&
      Number.isInteger(formData.maxMass)
    ) {
      tempData = tempData.filter(
        (dataObj) =>
          dataObj.mass >= formData.minMass && dataObj.mass <= formData.maxMass
      );
    }

    tempData = tempData.filter((dataObj) =>
      dataObj.name.toLowerCase().includes(formData.search.toLowerCase())
    );

    return tempData;
  }

  return (
    <>
      <div className="App">
        <h1 className="text-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          Fireball{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            {" "}
            FETCH API
          </span>
        </h1>
        {/*Search & Filter*/}
        <SearchAndFilter formData={formData} setformData={setformData} />

        {/*Mapping all Cards*/}
        <center className="grid grid-cols-3 gap-y-12	">
          {meteoriteFilter().map((dataObj) => {
            return <Card key={dataObj.id} dataObj={dataObj} />;
          })}
        </center>
      </div>
    </>
  );
}
export default SearchPage;
