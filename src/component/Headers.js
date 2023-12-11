import React from 'react';
import style from './Headers.module.css';

function Headers() {
  return (
    <header>
      <nav className={style.main}>
        <div className={style.header}>
            <h1>Netflix</h1>
        </div>
        <div className={style.language}>
            <button>English</button>
        </div>
        <div className={style.user}>
            <button>Sign In</button>
        </div>
      </nav>
    </header>
  );
}

export default Headers;