import { Menu } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaBehance } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-900 text-white pt-3 px-4 md:px-14 pb-3">
      <div className="flex flex-row  justify-between md:justify-evenly items-center">
        <div className="hidden md:flex flex-row gap-8 lg:space-x-24">
          <Link to={"/"}>Home</Link>
          <Link to={"/casestudies"}>Case studies</Link>
          <Link to={"/testmonies"}>Testmonials</Link>
          <Link to={"/recentwork"}>Recent Work</Link>
          <Link to={"/getinTouch"}>Get In Touch</Link>
        </div>
        <div className="md:hidden">
            <Menu/>
        </div>
        <div className="flex flex-row gap-5">
          <a href="https://www.linkedin.com/in/comfotha-mwansasule-5b877942a/"
          target="_blank"
          rel="noopenner noreferrer">
            <FaLinkedin  size={25}/>
          </a>
          
          <a href="https://github.com/comfothamwansasule"
          target="_blank"
          rel="noopenner noreferrer">
            <FaGithub size={25}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
