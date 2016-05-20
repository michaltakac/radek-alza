import React from 'react';
import FishLogo from '../FishLogo';
import style from './style.css';

function MainInfo() {
    return (
      <div>
        <FishLogo />
        <p className={style.mainInfo}>
          Mladá finská značka Black Eye působí na trhu objektivů
          pro mobilní telefony několik let. Založil
          jí finský fotograf Arto Eekman a finští profesionální
          sportovci Eero Eetala a Fredu Sirviö. Hlavní
          myšlenka byla a je ­ umožnit všem majitelům smartphonů
          jednodušeji a lépe fotografovat a natáčet
          se svým telefonem. Black Eye na trh dodává širokou
          škálu kvalitních přídavných objektivů s
          univerzálním systémem uchycení, které lze použít na
          většinu mobilních telefonů.
        </p>
      </div>
    );
}

export default MainInfo;
