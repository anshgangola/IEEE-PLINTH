import React from "react";
import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className={styles.top}>
    
      <ul className={styles.list}>
       <li><img src={logo} alt="logo" className={styles.logo}></img></li>
        <li><NavLink to="/" className={({isActive})=>(isActive ? styles.active : styles.non)}>Home</NavLink></li>
        <li><NavLink to="/about" className={({isActive})=>(isActive ? styles.active : styles.non)}>About</NavLink></li>
        <li><NavLink to="/events" className={({isActive})=>(isActive ? styles.active : styles.non)}>Events</NavLink></li>
        <li><button className={styles.reg}>Register</button></li>
      </ul>
    </div>
  );
}

export default Navbar;
