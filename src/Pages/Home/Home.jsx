import React from "react";
import "./Home.css";
import SideBar from "../../Components/Navbar/SideBar/SideBar";
import Feed from "../../Components/Feed/Feed";

const Home = ({ sidebar }) => {
  return (
    <div>
      <SideBar sidebar={sidebar} />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed />
      </div>
    </div>
  );
};

export default Home;
