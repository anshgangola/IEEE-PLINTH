import React from "react";
import style from './EventsCard.module.css';

const EventsCard = ({ title, body, buttonLink, backgroundImage }) => (
    <div className={style.card} style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className={style.cardContent}>
      <h2 className={style.cardTitle}>{title}</h2>
      <p className={style.cardBody}>{body}</p>
      <a href={buttonLink} className={style.button}>
        Learn More
      </a>
    </div>
  </div>
);

export default EventsCard;
