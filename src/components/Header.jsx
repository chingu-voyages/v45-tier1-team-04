const Header = () => {
  return (
    <nav className="flex justify-between w-full fixed z-20 top-0 font-extrabold xl:text-[1.2rem] lg:text-[1rem] sm:text-[.8rem] text-white border-b-2  px-14 py-6">
      <h1 className="tracking-wide lg:text-[1.3rem] text-[1rem] cursor-pointer">
        Fireball
      </h1>
      <ul className="flex justify-center items-center gap-[1.5em] text-[.7rem] uppercase font-bold">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Search</li>
        <li className="cursor-pointer">Blogs</li>
      </ul>
    </nav>
  );
};

export default Header;
