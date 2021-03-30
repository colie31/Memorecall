import React from "react";
import { Link } from "react-router-dom"
import github from "./../pics/github.png"
import linkedIn from "./../pics/linkedIn.png"

const Footer = () => {
    return (
      <footer className="footer">
        <h1>Nichole O'Brien</h1>
        <a href="https://github.com/colie31" alt="">
          <img src={github} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/nichole-o-brien-38124a1a3/" alt="">
          <img style={{ height: 32 }} src={linkedIn} alt="" />
        </a>
      </footer>
    );
}

export default Footer;