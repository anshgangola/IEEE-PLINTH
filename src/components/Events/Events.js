import React from "react";
import styles from './Events.module.css';
import Navbar from "../Navbar/Navbar";
import ParticlesBackground from "../ParticlesBackground";
import EventsCard from "./EventsCard";
import Robothon from '../../assets/Robothon.png';
import Cryptic from '../../assets/Cryptic.png';
import Circuit from '../../assets/Circuit.png';
import Robowar from '../../assets/Robowar.png';
import Footer from '../Footer/Footer';

const Events = () => {
  const eventCardsData = [
    {
      title: "Robothon",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.",
      buttonLink: "/event1",
      backgroundImage: Robothon,
    },
    {
      title: "Cryptic Hunt",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.",
      buttonLink: "/event2",
      backgroundImage: Cryptic,
    },
    {
      title: "Circuit Solve",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.",
      buttonLink: "/event2",
      backgroundImage: Circuit,
    },
    {
      title: "Robowar",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.",
      buttonLink: "/event2",
      backgroundImage: Robowar,
    },
   
  ];

  return (
    <div>
      <ParticlesBackground></ParticlesBackground>
      <Navbar></Navbar>
      <div className={styles.head}>
        <h1>Upcoming Events!</h1>
      </div>
      <div className={styles.content}>
      <p>
        Get ready for an exciting lineup of events at the upcoming Tech Fest hosted by the IEEE Student Branch of LNMIIT during Plinth! We're bringing you a diverse range of tech-centric activities. Whether you're a tech enthusiast, aspiring engineer, or just curious about the latest innovations, our events are designed to inspire and engage. Join us for a celebration of creativity, collaboration, and all things tech. See you at Plinth!
      </p>
      </div>
      <div className={styles.cards}>
      <EventsCard title={eventCardsData[0].title} body={eventCardsData[0].body} buttonLink={eventCardsData[0].buttonLink} backgroundImage={eventCardsData[0].backgroundImage}/>
      <EventsCard title={eventCardsData[1].title} body={eventCardsData[1].body} buttonLink={eventCardsData[1].buttonLink} backgroundImage={eventCardsData[1].backgroundImage}/>
      <EventsCard title={eventCardsData[2].title} body={eventCardsData[2].body} buttonLink={eventCardsData[2].buttonLink} backgroundImage={eventCardsData[2].backgroundImage}/>
      <EventsCard title={eventCardsData[3].title} body={eventCardsData[3].body} buttonLink={eventCardsData[3].buttonLink} backgroundImage={eventCardsData[3].backgroundImage}/>
      </div>
      
    </div>
  );
}

export default Events;
