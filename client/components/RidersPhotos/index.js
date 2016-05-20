import React from 'react';
import style from './style.css';
const eero = require('./eero.bmp');
const arto = require('./arto.bmp');
const fredu = require('./fredu.bmp');

export default function RidersPhotos() {
  return (
    <div className={style.photosBlock}>
      <img className={style.riderPhoto} src={eero} />
      <img className={style.riderPhoto} src={arto} />
      <img className={style.riderPhoto} src={fredu} />
    </div>
  );
}
