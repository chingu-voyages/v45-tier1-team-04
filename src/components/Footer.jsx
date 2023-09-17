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
      className="bg-gradient-to-t from-black from-50% to-black-950 flex flex-col md:flex-row justify-center md:justify-between w-full z-20 fixed bottom-0 px-6 py-3 md:px-14 bg-[#00000060] text-white font-thin"
    >
      <ul className="hidden md:block cursor-pointer ">
        <li className="transition hover:scale-110">
          <Link to="/search">Search</Link>
        </li>
        <li className="transition hover:scale-110">
          <a href="https://blogs.nasa.gov/" target="_blank">
            NASA Blogs
          </a>
        </li>
        <li className="transition hover:scale-110">
          <a
            href="https://www.nasa.gov/multimedia/imagegallery/index.html"
            target="_blank"
          >
            NASA Gallery
          </a>
        </li>
        <li className="transition hover:scale-110">
          <a
            href="https://data.nasa.gov/Space-Science/Meteorite-Landings/ak9y-cwf9"
            target="_blank"
          >
            Meteorite Landings
          </a>
        </li>
        <hr className="my-1" />
        <li className="transition hover:scale-110">
          <a
            href="https://github.com/chingu-voyages/v45-tier1-team-04/tree/development-branch"
            target="_blank"
          >
            Project GitHub repo
          </a>
        </li>
      </ul>
      <div className="order-last md:order-none mt-4 text-xs md:text-l flex justify-center items-end">
        &#169; 2023 V45-Team04 | All Rights Reserved
      </div>
      <ul className="w-[13em] text-sm md:text-l p-2 mx-auto md:mx-0">
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
        <span className=" cursor-pointer transition hover:scale-125">
          <FontAwesomeIcon icon={faGithub} />
        </span>
      </a>
    </li>
  );
}
