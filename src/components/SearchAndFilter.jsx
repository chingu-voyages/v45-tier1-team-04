import { useState } from "react";

function SearchAndFilter() {
  const [search, setSearch] = useState("");
  const [startYear, setStartYear] = useState(1900);
  const [endYear, setEndYear] = useState(new Date().getFullYear());
  const [minMass, setMinMass] = useState();
  const [maxMass, setMaxMass] = useState();

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }
  // Handle Start Year
  function handleStartYearChange(event) {
    setStartYear(parseInt(event.target.value));
  }
  // Handle Start Year wrong value
  function fixStartYear(event) {
    let tempStartYear;
    if (parseInt(event.target.value) < 1900) {
      tempStartYear = 1900;
    } else if (parseInt(event.target.value) > endYear) {
      tempStartYear = endYear;
    } else {
      tempStartYear = parseInt(event.target.value);
    }

    setStartYear(tempStartYear);
  }
  // Handle End Year
  function handleEndYearChange(event) {
    setEndYear(parseInt(event.target.value));
  }
  // Handle End Year wrong value
  function fixEndYear(event) {
    let tempEndYear;
    if (parseInt(event.target.value) > new Date().getFullYear()) {
      tempEndYear = new Date().getFullYear();
    } else if (parseInt(event.target.value) < startYear) {
      tempEndYear = startYear;
    } else {
      tempEndYear = parseInt(event.target.value);
    }
    setEndYear(tempEndYear);
  }

  function handleMinMassChange(event) {
    setMinMass(parseInt(event.target.value));
  }
  function fixMinMass(event) {
    let tempMinMass;
    if (parseInt(event.target.value) < 0) {
      tempMinMass = 0;
    } else if (parseInt(event.target.value) > maxMass) {
      tempMinMass = maxMass;
    } else {
      tempMinMass = parseInt(event.target.value);
    }
    setMinMass(tempMinMass);
  }
  function handleMaxMassChange(event) {
    setMaxMass(parseInt(event.target.value));
  }
  function fixMaxMass(event) {
    let tempMaxMass;
    if (parseInt(event.target.value) < minMass) {
      tempMaxMass = minMass;
    } else {
      tempMaxMass = parseInt(event.target.value);
    }
    setMaxMass(tempMaxMass);
  }

  return (
    <form>
      <input
        className="border-2"
        name="search"
        type="text"
        placeholder="Your Search"
        onChange={handleSearchChange}
        value={search}
      />
      ***
      <input
        className="border-2"
        name="startYear"
        type="text"
        placeholder="Type start year"
        onChange={handleStartYearChange}
        onBlur={fixStartYear}
        value={startYear}
      />
      -
      <input
        className="border-2"
        name="endYear"
        type="text"
        placeholder="Type end year"
        onChange={handleEndYearChange}
        onBlur={fixEndYear}
        value={endYear}
      />
      ***
      <input
        className="border-2"
        name="minMass"
        type="text"
        placeholder="Type min mass in grams"
        onChange={handleMinMassChange}
        onBlur={fixMinMass}
        value={minMass}
      />
      -
      <input
        className="border-2"
        name="maxMass"
        type="text"
        placeholder="Type max mass in grams"
        onChange={handleMaxMassChange}
        onBlur={fixMaxMass}
        value={maxMass}
      />
    </form>
  );
}

export default SearchAndFilter;
