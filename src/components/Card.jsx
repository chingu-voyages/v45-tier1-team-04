function Card({ dataObj }) {
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <p href="#">
        <span className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {dataObj.name}
        </span>
        <span className="block font-normal text-gray-700 dark:text-gray-400">
          {dataObj.nametype}
        </span>
        <span className="block font-normal text-gray-700 dark:text-gray-400">
          {dataObj.recclass}
        </span>
        <span className="block font-normal text-gray-700 dark:text-gray-400">
          {dataObj.mass}
        </span>
        <span className="block font-normal text-gray-700 dark:text-gray-400">
          {dataObj.fall}
        </span>
        <span className="block font-normal text-gray-700 dark:text-gray-400">
          {dataObj.year}
        </span>
        <span className="block font-normal text-gray-700 dark:text-gray-400">
          {dataObj.reclat}
        </span>
        <span className="block font-normal text-gray-700 dark:text-gray-400">
          {dataObj.reclong}
        </span>
      </p>
      <hr className="w-48 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        More
      </button>
    </div>
  );
}
export default Card;
