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
    <div className="flex justify-between	 ">
      <div>
        <p>Search</p>
        <p>NASA Blogs</p>
        <p>NASA Gallery</p>
        <p>Meteorite Landings</p>
      </div>
      <div>&#169; 2023 V45-Team04 | All Rights Reserved</div>
      <div>
        <p>
          biroue
          <FontAwesomeIcon icon={faGithub} />
        </p>
        <p>
          Drazen
          <FontAwesomeIcon icon={faGithub} />
        </p>
        <p>
          Uche
          <FontAwesomeIcon icon={faGithub} />
        </p>
        <p>
          Milica
          <FontAwesomeIcon icon={faGithub} />
        </p>
        <p>
          David
          <FontAwesomeIcon icon={faGithub} />
        </p>
      </div>
    </div>
  );
}
