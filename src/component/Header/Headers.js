import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import style from "./Headers.module.css";
import logo from "../../assets/netflix_logo.png";

function Headers() {
  return (
    <div className={style.container}>
      <nav className={style.main}>
        <div className={style.header}>
          <img src={logo} className={style.header_logo}></img>
          {/* <h1 className={style.headerName}>NETFLIX</h1> */}
        </div>
        <select className={style.lang_name}>
          <option>English</option>
          <option>Hindi</option>
        </select>
        <button className={style.user}>Sign In</button>
      </nav>
      <main>
        <Outlet /> {/* This is where child routes will be rendered */}
      </main>
    </div>
  );
}

export default Headers;
