import React from "react";
import styles from './About.module.css';
import Navbar from "../Navbar/Navbar";
import ParticlesBackground from "../ParticlesBackground";
import Card from '../InfoCard/Card';
import WIE from '../../assets/WIE.png';
import OriginalLogo from '../../assets/OriginalLogo.png';
import Footer from '../Footer/Footer';

const About= () => {
    return (
      <div>
      <ParticlesBackground></ParticlesBackground>
      <Navbar></Navbar>
      <div className={styles.title}>
      <p className={styles.head}>IEEE Student Chapter</p>
      <p className={styles.college}>The LNMIIT,Jaipur</p>
      </div>
      <div className={styles.content}>
      <p>We are a dynamic and collaborative association comprising esteemed faculty members and enthusiastic students from  <span style={{ color: "#f18701" }}>The LNM Institute of Information Technology (LNMIIT) </span> in Jaipur. At the heart of our mission is the relentless pursuit of technological innovation with a dual focus: <span style={{ color: "#f18701" }}>creating technology for the people and nurturing individuals who are passionate about technology.</span></p>
      <p>Our unique collaboration brings together the wealth of experience and knowledge from our dedicated faculty members and the boundless energy and creativity of our student community. Together, we form a vibrant ecosystem dedicated to pushing the boundaries of technological possibilities.</p>
      </div>
      <div className={styles.info}>
      <Card
          logoSrc={OriginalLogo}
          title="About IEEE"
          content="IEEE is the world’s largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity. IEEE and its members inspire a global community through its highly cited publications, conferences, technology standards, and professional and educational activities. IEEE is a leading developer of international standards that underpin many of today's telecommunications, IT and power generation products and services."
          learnMoreLink="https://www.ieee.org"
        />
        <Card
          logoSrc={WIE}
          title="About WIE"
          content="IEEE WIE is the largest international professional organization dedicated to promoting women engineers and scientists and inspiring girls around the world to follow their academic interests to a career in engineering. India viewed as a potential powerhouse of innovations, is no exception. The fact, that, institutes of scientific learning are open to all the citizens of a country,but potential females still do not come up and hesitate at the thresholds of labs. "
          learnMoreLink="https://wie.ieee.org"
        />
      </div>
      <div className={styles.ques}>
      <div className={styles.first}>
      <h1>
      Who we are?
      </h1>
      <p>We are a combined association of faculty members along with the enthusiastic students of our college, The LNMIIT Jaipur. We strive for creating technology for the people and people for technology.</p>
      </div>
      <div className={styles.second}>
      <h1>
      What we do?
      </h1>
      <p>We at LNMIIT believe in building technology for people and people for technology. The branch activities offer numerous educational, technical, and professional opportunities through various events.</p>
      </div>
      <div className={styles.third}>
      <h1>What we have done?</h1>
      <p>Workshops in popular areas, distinguished lectures, student competitions and challenging developers sprints are few regular events which this branch pursues with highest order of energy and expected outcomes.</p>
      </div>
      </div>
      
      </div>
    );
  }
  
  export default About;