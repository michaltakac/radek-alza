import React from 'react';
import { Icon } from 'react-fa'
import style from './style.css';

export default function MoreButton({actions, ui}) {
  const text = ui.showMore
    ? 'Méně'
    : 'Více'
  const icon = ui.showMore
    ? <Icon name="angle-up" />
    : <Icon name="angle-down" />
  return (
    <div className={ui.showMore ? style.buttonOpen : style.buttonClosed}>
      <button className={style.showMoreLink} onClick={actions.showMore}>{text} {icon}</button>
    </div>
  );
};
