import React from "react";
import styles from './Card.module.css';
import logo from '../../assets/OriginalLogo.png';
import { useMotionValue, useTransform, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';


const Card = ({ logoSrc, title, content, learnMoreLink }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [100, -100], [-30, 30]);
  
    return (
      <div style={{ perspective: 2000 }}>
        <motion.div
          style={{ x, y, rotateX, rotateY, z: 100 }}
          whileHover={{ cursor: 'grab', scale: 1.05 }}
          drag
          dragElastic={0.18}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: 'grabbing' }}
          className={styles.box}
        >
          <div>
            <img src={logoSrc} alt="logo" className={styles.logo}></img>
          </div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.content}>{content}</p>
          <div className={styles.container}>
            <a href={learnMoreLink} target="_blank" rel="noopener noreferrer">
              <button className={styles.btn}>Learn More</button>
            </a>
          </div>
        </motion.div>
      </div>
    );
  };
  
  export default Card;