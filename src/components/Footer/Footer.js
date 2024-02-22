import React from "react";
import styles from './Footer.module.css';
import logo from '../../assets/logo.png';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Footer= () => {
    return (
        <div className={styles.footer}>
        <div className={styles.foot}>
        <img src={logo} alt="logo" className={styles.logo}></img>
        <div>
        <h1>Locate us</h1>
        <p> Rupa ki Nangal, Post-Sumel,
        Via, Jamdoli, Jaipur,
        Rajasthan, India-302031</p>
        </div>
        <div>
        <h1>Useful Links</h1>
        <div className={styles.links}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/events">Events</NavLink>
        </div>
        
        </div>
        </div>
        <div className={styles.icons}>
    
        <a href="https://www.instagram.com/ieee_lnmiit/"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
        <a href="https://www.linkedin.com/company/ieee-sb-lnmiit/mycompany/"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
        </div>


        </div>

    );
  }
  
  export default Footer;