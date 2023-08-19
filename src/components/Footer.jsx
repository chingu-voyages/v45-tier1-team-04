import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <div className="footer">
      <div className="first">
        <p>Search</p>
        <p>NASA Blogs</p>
        <p>NASA Gallery</p>
        <p>Meteorite Landings</p>
      </div>
      <div className="second">&#169; 2023 V45-Team04 | All Rights Reserved</div>
      <div className="three">
        <p>
          biroue<span className="space"></span>
          <FontAwesomeIcon icon={faGithub} />
        </p>
        <p>
          Drazen<span className="space"></span>
          <FontAwesomeIcon icon={faGithub} />
        </p>
        <p>
          Uche <span className="space"></span>
          <FontAwesomeIcon icon={faGithub} />
        </p>
        <p>
          Milica <span className="space"></span>
          <FontAwesomeIcon icon={faGithub} />
        </p>
        <p>
          David<span className="space"></span>
          <FontAwesomeIcon icon={faGithub} />
        </p>
      </div>
    </div>
  );
}