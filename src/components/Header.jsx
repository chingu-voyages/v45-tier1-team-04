import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-gradient-to-b from-black from-60% to-black-950 flex justify-between w-full sticky z-20 top-0 font-extrabold xl:text-[1.2rem] lg:text-[1rem] md:text-[.8rem] text-white p-6 md:px-14">
      <h1 className="tracking-wide lg:text-[1.3rem] text-[1rem] cursor-pointer">
        <Link to="/">Fireball</Link>
      </h1>
      <ul className="flex justify-center items-center gap-[1.5em] text-[.7rem] uppercase font-bold">
        <li className="cursor-pointer transition hover:scale-105">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer transition hover:scale-105">
          <Link to="/search">Search</Link>
        </li>
        <li className="cursor-pointer transition hover:scale-105">
          {" "}
          <a href="https://blogs.nasa.gov/" target="_blank">
            Blogs
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
