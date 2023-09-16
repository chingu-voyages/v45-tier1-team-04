import Card from "./Card";
import { useState, useEffect } from "react";
import SearchAndFilter from "./SearchAndFilter";
import data45k from "../assets/Meteorite_Landings_16.09.2023.json";

function SearchPage() {
  // Fetch data starts here
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
  console.log(data);
  // Fetch data ends here

  // Start test data JSON with 45000+ meteorite landings
  // const [data, setData] = useState(data45k);
  // console.log(data);
  // End test data JSON with 45000+ meteorite landings

  // formData state holds all the form data in one object
  const [formData, setformData] = useState({
    search: "",
    startYear: 1400,
    endYear: new Date().getFullYear(),
    minMass: 0,
    maxMass: Infinity,
  });

  function meteoriteFilter() {
    // Giving data to the filter
    let tempData = data;

    if (
      Number.isInteger(formData.startYear) ||
      Number.isInteger(formData.endYear)
    ) {
      tempData = tempData.filter(
        (dataObj) =>
          new Date(dataObj.year).getFullYear() >= formData.startYear &&
          new Date(dataObj.year).getFullYear() <= formData.endYear
      );
    }

    if (
      Number.isInteger(formData.minMass) ||
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
      <div className=" relative mt-4 z-10 flex flex-col justify-center w-full">
        {/* <h1 className="text-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          Fireball{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            {" "}
            FETCH API
          </span>
        </h1> */}
        {/*Search & Filter*/}
        <SearchAndFilter formData={formData} setformData={setformData} />

        {/*Mapping all Cards*/}
        <center className="flex flex-wrap justify-evenly mt-5 mx-6 gap-6 ">
          {meteoriteFilter().length > 0 ? (
            meteoriteFilter().map((dataObj) => {
              return <Card key={dataObj.id} dataObj={dataObj} />;
            })
          ) : (
            <h1 className="text-white">NO meteorites with selected criteria</h1>
          )}
        </center>
      </div>
    </>
  );
}
export default SearchPage;
