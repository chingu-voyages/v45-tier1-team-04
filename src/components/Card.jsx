function Card({ dataObj }) {
  return (
    <div className="w-64 px-2 py-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <ul>
        <li>
          <h2 className="text-2xl font-bold">{dataObj.name}</h2>
        </li>
        <li>
          Name Type: <span className="font-bold">{dataObj.nametype}</span>
        </li>
        <li>
          Class: <span className="font-bold">{dataObj.recclass}</span>
        </li>
        <li>
          Mass:{" "}
          <span className="font-bold">
            {dataObj.mass > 1000
              ? dataObj.mass / 1000 + "kg"
              : dataObj.mass + "g"}
          </span>
        </li>
        <li>
          Fell/Found: <span className="font-bold">{dataObj.fall}</span>
        </li>
        <li>
          Year:{" "}
          <span className="font-bold">
            {new Date(dataObj.year).getFullYear()}
          </span>
        </li>
        <li>
          Latitude: <span className="font-bold">{dataObj.reclat}</span>
        </li>
        <li>
          Longitude: <span className="font-bold">{dataObj.reclong}</span>
        </li>
      </ul>

      <button
        className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => {
          window.open(
            "http://maps.google.com/maps?t=k&q=loc:" +
              dataObj.reclat +
              "," +
              dataObj.reclong +
              "&ll=" +
              dataObj.reclat +
              "," +
              dataObj.reclong +
              "&z=15"
          );
        }}
      >
        Show on Map
      </button>
    </div>
  );
}
export default Card;
