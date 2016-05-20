import React from 'react';
import RidersPhotos from '../RidersPhotos';
import style from './style.css';

export default function MoreInfo() {
  return (
    <div className={style.moreInfo}>
      <h3>Příběh tří přátel</h3>
      <RidersPhotos />
      <div className={style.text}>
        <p>
        Firma Black Eye byla v roce 2012 založena třemi kamarády, kteří měli společné zájmy v
        adrenalinových sportech a fotografování. Skateboardový fotograf Arto Ekman a profesionální
        snowboardeři Fredu Sirviö a Eero Ettala chtěli umožnit všem majitelům smartphonů jednodušeji a
        lépe fotografovat a natáčet se svým telefonem.
        </p>

        <p>
        V čase rychlého rozvoje sociálních sítí, kdy chce každý okamžitě sdílet se svými přáteli fotografie
        a videa, je natáčení a focení na různé přístroje a následné nahrávání do počítačů velmi zdlouhavé.
        Zakladatelé Black Eye chtěli lidem přinést nějaké lepší řešení a odpověď se nacházela v jejich
        kapsách. Kamery na mobilních telefonech začínaly být tak kvalitní, že se mohly měřit s klasickými
        zrcadlovkami a videokamerami.
        </p>

        <p>
        První objektiv Black Eye s názvem "The Original" byl představen v roce 2013 a zaznamenal ve
        Skandinávii raketový nástup na trh. Zakladatelé se proto vrhli do projektu všemi silami a během
        několika měsíců začali produkty distribuovat pro celý svět.
        </p>

        <blockquote className={style.blockquote}>
        <p className={style.blockquoteText}>
        Začala revoluce. Třetí generace našich výrobků představuje na trhu nejširší nabídku kvalitních
        objektivů pro mobilní telefony. Svět se neustále vyvíjí a my přinášíme změny.
        </p>
        </blockquote>
        <p className={style.quoteAuthor}>Arto Ekman, <br />
        zakladatel/CEO</p>

        <blockquote className={style.blockquote}>
        <p className={style.blockquoteText}>
        Zatímco ostatní značky se soustředí na produkty určené pro jednotlivé modely smartphonů, naším
        cílem je vytvořit univerzální portfolio. Chceme, aby si opravdu každý mohl užít naše výrobky.
        </p>
        </blockquote>
        <p className={style.quoteAuthor}>
          Fredu Sirviö,<br />
          zakladatel/Brand manager
        </p>
      </div>
    </div>
  );
}
