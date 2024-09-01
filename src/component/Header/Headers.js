import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import style from "./Headers.module.css";
import logo from "../../assets/netflix_logo.png";

function Headers() {
  const isConditionMet = true; // Replace with your actual condition

  const selectStyle = {
    backgroundColor: isConditionMet ? "#f0f0f0" : "#ffffff", // Conditional background color
  };

  return (
    <div className={style.container}>
      <nav className={style.main}>
        <div className={style.header}>
          <img src={logo} className={style.header_logo}></img>
        </div>
        <select className={style.lang_name} style={selectStyle}>
          <option>English</option>
          <option>Hindi</option>
        </select>
        <NavLink to='/login' className={style.user}>
          <button className={style.user}>Sign In</button>
        </NavLink>
        <NavLink to='/movie' className={style.Movie}>
          <button className={style.Movie}>Movie</button>
        </NavLink>
      </nav>
      <main>
        <Outlet /> {/* This is where child routes will be rendered */}
      </main>
    </div>
  );
}

export default Headers;
