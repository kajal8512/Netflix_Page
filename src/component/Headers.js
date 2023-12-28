import React, { useState } from 'react';
import style from './Headers.module.css';

function Headers() {
  const langList = ['English', 'Hindi'];
  const [lang, setLang] = useState(langList[0]);

  const langChange = (language) => {
    setLang(language);
  };

  return (
    <div className={style.container}>
      <nav className={style.main}>
        <div className={style.header}>
          <h1>Netflix</h1>
        </div>
        <button className={style.lang_name} onClick={() => langChange(langList[1 - langList.indexOf(lang)])}>
          {lang}
        </button>
        <button className={style.user}>Sign In</button>
      </nav>
      <div>
        <h1 className={style.heading}>The biggest Indian hits. Ready to watch here from ₹149.</h1>
        <h4 className={style.heading4}>Join today. Cancel anytime.</h4>
        <h5 className={style.heading5}>Ready to watch? Enter your favorite movie name.</h5>
        <div className={style.subContainer}>
          <input className={style.input} placeholder="Enter your favorite movie" />
          <button className={style.buttonStart}>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Headers;