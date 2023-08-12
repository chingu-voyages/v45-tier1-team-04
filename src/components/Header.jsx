const Header = () => {
    return ( 

        <nav className="flex justify-between w-full absolute left-0 right-0 top-0 font-extrabold text-[.8rem] text-white border-b-2 z-10 px-[4em] py-[.5em]">
            <h1 className="tracking-wide text-[1rem] cursor-pointer">Fireball</h1>
            <ul className="flex justify-center items-center gap-[1.5em] text-[.7rem] uppercase font-bold">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Search</li>
                <li className="cursor-pointer">Blogs</li>
            </ul>
        </nav>
     );
}
 
export default Header;