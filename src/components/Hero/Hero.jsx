import React from "react";

import styles from "./Hero.module.css";
import profileImage from "../Hero/profile.jpg";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 style={{fontSize:"60px",marginBottom:"15px"}}>Hi, I'm NAMAN</h1>
        <p className={styles.description}>
          I'm a full-stack developer with experience of creating multiple projects using MERN stack. I also love solving DSA problems using C++.
          <br/>Reach out if you'd like to learn more!
        </p>
        <a href="mailto:namanjhanwar953@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src={profileImage} className={styles.image} alt="Hero image of me" />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
