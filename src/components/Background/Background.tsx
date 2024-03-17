"use client";

import React from "react";
import styles from './Background.module.css'
const Background = () => {
  return (
    <div className={styles.ocean} style={{zIndex:'0', width:'100%', height:'100vh', top:'0',left:'0'}}>
      <div className={styles.wave}></div>
      <div className={styles.secondwave}></div>
    </div>
  );
};

export default Background;
