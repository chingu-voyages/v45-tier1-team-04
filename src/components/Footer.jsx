import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <div>
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
