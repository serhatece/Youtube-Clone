import React from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import youtube_logo from "../../assets/youtube_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <MenuIcon
          className="menu-icon"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
        />
        <Link to={"/"}>
          <img className="logo" src={youtube_logo} alt="" />
        </Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <SearchIcon />
        </div>
        <MicIcon />
      </div>

      <div className="nav-right flex-div">
        <VideoCallIcon className="icon" />
        <NotificationsIcon className="icon" />
        <AccountCircleIcon className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
