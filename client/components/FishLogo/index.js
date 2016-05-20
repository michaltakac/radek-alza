import React from 'react';
import style from './style.css';
const img = require('./fish-logo-black.png');

function FishLogo() {
  return (
    <div>
      <img className={style.img} src={img} />
    </div>
  );
}

export default FishLogo;
