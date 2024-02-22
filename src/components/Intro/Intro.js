import React from "react";
import styles from './Intro.module.css';
import pic from '../../assets/IEEExPLINTH.png';
import ParticlesBackground from "../ParticlesBackground";
import Navbar from "../Navbar/Navbar";
import Card from '../Card/Card';

const Intro = () => {
  return (
    <div>
    <ParticlesBackground></ParticlesBackground>
    <Navbar></Navbar>
    <div className={styles.top}>
  
       <img src={pic} alt="home-pic" className={styles.home}></img>
       
    </div>
    <div className={styles.content}>
    <p>PRESENTS</p>
    </div>
    <div className={styles.card}>
    
    <Card></Card>
    </div>
   
        
</div>
    
  );
}

export default Intro;
