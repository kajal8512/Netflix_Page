import React, { useState } from "react";
import style from "./Headers.module.css";

function Headers() {
  return (
    <div className={style.container}>
      <nav className={style.main}>
        <div className={style.header}>
          <h1>Netflix</h1>
        </div>
        <select className={style.lang_name}>
          <option>English</option>
          <option>Hindi</option>
        </select>
        <button className={style.user}>Sign In</button>
      </nav>
    </div>
  );
}

export default Headers;
