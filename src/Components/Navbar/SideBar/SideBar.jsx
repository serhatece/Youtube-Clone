import React from "react";
import "./SideBar.css";
import HomeIcon from "@mui/icons-material/Home";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import BookIcon from "@mui/icons-material/Book";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import jack from "../../../assets/jack.png";
import simon from "../../../assets/simon.png";
import tom from "../../../assets/tom.png";
import megan from "../../../assets/megan.png";
import cameron from "../../../assets/cameron.png";

const SideBar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="sortcut-links">
        <div
          className={`side-link ${category === 0 ? "active" : ""}`}
          onClick={() => setCategory(0)}
        >
          <HomeIcon className="side-icons" />
          <p>Home</p>
        </div>
        <div
          className={`side-link ${category === 20 ? "active" : ""}`}
          onClick={() => setCategory(20)}
        >
          <SportsEsportsIcon className="side-icons" />
          <p>Gaming</p>
        </div>
        <div
          className={`side-link ${category === 2 ? "active" : ""}`}
          onClick={() => setCategory(2)}
        >
          <TimeToLeaveIcon className="side-icons" />
          <p>Automobiles</p>
        </div>
        <div
          className={`side-link ${category === 17 ? "active" : ""}`}
          onClick={() => setCategory(17)}
        >
          <SportsSoccerIcon className="side-icons" />
          <p>Sports</p>
        </div>
        <div
          className={`side-link ${category === 24 ? "active" : ""}`}
          onClick={() => setCategory(24)}
        >
          <OndemandVideoIcon className="side-icons" />
          <p>Entertainment</p>
        </div>
        <div
          className={`side-link ${category === 28 ? "active" : ""}`}
          onClick={() => setCategory(28)}
        >
          <ElectricBoltIcon className="side-icons" />
          <p>Tecnology</p>
        </div>
        <div
          className={`side-link ${category === 10 ? "active" : ""}`}
          onClick={() => setCategory(10)}
        >
          <LibraryMusicIcon className="side-icons" />
          <p>Music</p>
        </div>
        <div
          className={`side-link ${category === 22 ? "active" : ""}`}
          onClick={() => setCategory(22)}
        >
          <BookIcon className="side-icons" />
          <p>Blogs</p>
        </div>
        <div
          className={`side-link ${category === 25 ? "active" : ""}`}
          onClick={() => setCategory(25)}
        >
          <NewspaperIcon className="side-icons" />
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={jack} alt="" />
          <p>Channel 1</p>
        </div>
        <div className="side-link">
          <img src={simon} alt="" />
          <p>Channel 2</p>
        </div>
        <div className="side-link">
          <img src={tom} alt="" />
          <p>Channel 3</p>
        </div>
        <div className="side-link">
          <img src={megan} alt="" />
          <p>Channel 4</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="" />
          <p>Channel 1</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
