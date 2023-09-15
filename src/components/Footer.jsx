import "../App.css";
import contributors from "../assets/contributors";
//you imported just App.css
//you shouldn't create sepatate folder for Footer (footer.css), you should write all in App.css just use unique id or className for footer component
//and footer shoud be positioned absolute or fixed like navbar
//because we should have it on every page in our app
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
//better way is to install react-icons so you can use any icons library, fontawesome as well
//then you can import the same way {name of icon} from 'react-icons/fa -if it's fontawesome' and than use in project
//like <nameOfIcon />
function Footer() {
  // Sort contributors by gitHub name
  const sortedContributors = contributors.sort((a, b) =>
    a.gitHubName.localeCompare(b.gitHubName)
  );

  return (
    <div
      id="footer"
      className="bg-gradient-to-t from-black from-50% to-black-950 flex flex-wrap justify-center sm:justify-between w-full z-20 fixed bottom-0 px-6 py-3 bg-[#00000060] text-white font-thin"
    >
      <ul className="hidden sm:block ">
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <a href="https://blogs.nasa.gov/" target="_blank">
            NASA Blogs
          </a>
        </li>
        <li>
          <a
            href="https://www.nasa.gov/multimedia/imagegallery/index.html"
            target="_blank"
          >
            NASA Gallery
          </a>
        </li>
        <li>
          <a
            href="https://data.nasa.gov/Space-Science/Meteorite-Landings/gh4g-9sfh"
            target="_blank"
          >
            Meteorite Landings
          </a>
        </li>
      </ul>
      <div className="order-last sm:order-none pt-4 text-xs flex justify-center items-end">
        &#169; 2023 V45-Team04 | All Rights Reserved
      </div>
      <ul className="w-[13em] text-sm">
        {/* List all contributors */}
        {sortedContributors.map((contributor) => (
          <ContributorList
            key={contributor.gitHubName}
            contributor={contributor}
          />
        ))}
      </ul>
    </div>
  );
}

export default Footer;

function ContributorList({ contributor }) {
  return (
    <li>
      <a
        className="flex justify-between"
        href={contributor.gitHubLink}
        target="_blank"
      >
        <span className="w-[90%]">{contributor.gitHubName}</span>
        <span>
          <FontAwesomeIcon icon={faGithub} />
        </span>
      </a>
    </li>
  );
}
