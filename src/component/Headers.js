import React from 'react';

function Headers() {
  return (
    <header>
      <nev className='main-nav'>
        <div className='header-name'>
            <h1>Netflix</h1>
        </div>
        <div className='language-name'>
            <button>English</button>
        </div>
        <div className='user-sign-in'>
            <button>Sign In</button>
        </div>
      </nev>
    </header>
  );
}

export default Headers;