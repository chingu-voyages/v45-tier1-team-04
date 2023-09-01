import { useState } from "react";

function SearchAndFilter() {
  // formData state holds all the form data in one object
  const [formData, setformData] = useState({
    search: "",
    startYear: 1900,
    endYear: new Date().getFullYear(),
    minMass: null,
    maxMass: null,
  });

  // Keep an eye on the formData properties and values
  console.log(formData);

  // handleFormChange function handles the changes in all form inputs
  function handleFormChange(event) {
    setformData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]:
          event.target.name === "search"
            ? event.target.value
            : parseInt(event.target.value),
      };
    });
  }

  // handleFormFix function updates properties when the value has been fixed
  function handleFormFix(event, fixValue) {
    setformData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: fixValue,
      };
    });
  }

  //   const [search, setSearch] = useState("");
  //   const [startYear, setStartYear] = useState(1900);
  //   const [endYear, setEndYear] = useState(new Date().getFullYear());
  //   const [minMass, setMinMass] = useState();
  //   const [maxMass, setMaxMass] = useState();

  //   function handleSearchChange(event) {
  //     setSearch(event.target.value);
  //   }
  // Handle Start Year
  //   function handleStartYearChange(event) {
  //     setStartYear(parseInt(event.target.value));
  //   }

  // fixStartYear funtion fixes non logical values inside startYear property
  function fixStartYear(event) {
    let tempStartYear;
    if (parseInt(event.target.value) < 1900) {
      tempStartYear = 1900;
    } else if (parseInt(event.target.value) > formData.endYear) {
      tempStartYear = formData.endYear;
    } else {
      tempStartYear = parseInt(event.target.value);
    }
    handleFormFix(event, tempStartYear);
  }
  // Handle End Year
  //   function handleEndYearChange(event) {
  //     setEndYear(parseInt(event.target.value));
  //   }
  // Handle End Year wrong value

  // fixEndYear funtion fixes non logical values inside endYear property
  function fixEndYear(event) {
    let tempEndYear;
    if (parseInt(event.target.value) > new Date().getFullYear()) {
      tempEndYear = new Date().getFullYear();
    } else if (parseInt(event.target.value) < formData.startYear) {
      tempEndYear = formData.startYear;
    } else {
      tempEndYear = parseInt(event.target.value);
    }
    handleFormFix(event, tempEndYear);
  }

  //   function handleMinMassChange(event) {
  //     setMinMass(parseInt(event.target.value));
  //   }

  // fixMinMass funtion fixes non logical values inside minMass property
  function fixMinMass(event) {
    let tempMinMass;
    if (parseInt(event.target.value) < 0) {
      tempMinMass = 0;
    } else if (parseInt(event.target.value) > formData.maxMass) {
      tempMinMass = formData.maxMass;
    } else {
      tempMinMass = parseInt(event.target.value);
    }
    handleFormFix(event, tempMinMass);
  }
  //   function handleMaxMassChange(event) {
  //     setMaxMass(parseInt(event.target.value));
  //   }

  // fixMaxMass funtion fixes non logical values inside maxMass property
  function fixMaxMass(event) {
    let tempMaxMass;
    if (parseInt(event.target.value) < formData.minMass) {
      tempMaxMass = formData.minMass;
    } else {
      tempMaxMass = parseInt(event.target.value);
    }
    handleFormFix(event, tempMaxMass);
  }

  return (
    <form>
      <input
        className="border-2"
        name="search"
        type="text"
        placeholder="Your Search"
        onChange={handleFormChange}
        value={formData.search}
      />
      ***
      <input
        className="border-2"
        name="startYear"
        type="text"
        placeholder="Type start year"
        onChange={handleFormChange}
        onBlur={fixStartYear}
        value={formData.startYear}
      />
      -
      <input
        className="border-2"
        name="endYear"
        type="text"
        placeholder="Type end year"
        onChange={handleFormChange}
        onBlur={fixEndYear}
        value={formData.endYear}
      />
      ***
      <input
        className="border-2"
        name="minMass"
        type="text"
        placeholder="Type min mass in grams"
        onChange={handleFormChange}
        onBlur={fixMinMass}
        value={formData.minMass}
      />
      -
      <input
        className="border-2"
        name="maxMass"
        type="text"
        placeholder="Type max mass in grams"
        onChange={handleFormChange}
        onBlur={fixMaxMass}
        value={formData.maxMass}
      />
    </form>
  );
}

export default SearchAndFilter;
