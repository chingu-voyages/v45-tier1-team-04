import SearchAndFilter from "./SearchAndFilter";

function Card({ data }) {
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
        <SearchAndFilter />

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
                  <hr className="w-48 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    More
                  </button>
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
