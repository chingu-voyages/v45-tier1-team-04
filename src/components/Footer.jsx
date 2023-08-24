import "../App.css";
//you imported just App.css
//you shouldn't create sepatate folder for Footer (footer.css), you should write all in App.css just use unique id or className for footer component
//and footer shoud be positioned absolute or fixed like navbar
//because we should have it on every page in our app
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
//better way is to install react-icons so you can use any icons library, fontawesome as well
//then you can import the same way {name of icon} from 'react-icons/fa -if it's fontawesome' and than use in project
//like <nameOfIcon />
export default function Footer() {
  return (
    <div id="footer" className="flex justify-between xl:text-[1rem] md:text-[.8rem] sm:text-[.5rem] absolute left-0 right-0 bottom-0 w-full overflow-hidden md:px-[.5em] md:py-[.2em] bg-[#00000060] text-white font-thin">
      <div>
        <p>Search</p>
        <p>NASA Blogs</p>
        <p>NASA Gallery</p>
        <p>Meteorite Landings</p>
      </div>
      <div className="flex justify-center items-end">&#169; 2023 V45-Team04 | All Rights Reserved</div>
      <div className="w-[6em]">
        {/* this should be in a div so we can position it better */}
        <div className="flex justify-between">
        <p className="w-[80%]">
          biroue
        </p>
        <span><FontAwesomeIcon icon={faGithub} /></span>
        </div>
      
        {/* this should be in a div so we can position it better */}
        <div className="flex justify-between">
        <p className="w-[80%]">
          Drazen
        </p>
        <span><FontAwesomeIcon icon={faGithub} /></span>
        </div>

        <div className="flex justify-between">
        <p className="w-[80%]">
          Uche
        </p>
        <span><FontAwesomeIcon icon={faGithub} /></span>
        </div>
        <div className="flex justify-between">
        <p className="w-[80%]">
         Milica
        </p>
        <span><FontAwesomeIcon icon={faGithub} /></span>
        </div>
        <div className="flex justify-between">
        <p className="w-[80%]">
         David
        </p>
        <span><FontAwesomeIcon icon={faGithub} /></span>
        </div>
        
      </div>
    </div>
  );
}
