import React from "react";
import "./SideBar.css";
export default function SideBar() {
  const toggleSideMenu = (e) => {
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelectorAll(".side-link");
    if (burger.classList.contains("toggle")) {
      document.getElementById("side-menu").style.width = "0px";
    } else {
      document.getElementById("side-menu").style.width = "400px";
      if (window.innerWidth <= 768 && window.innerWidth >= 568) {
        document.getElementById("side-menu").style.width = "768px";
      }
      if (window.innerWidth <= 568) {
        document.getElementById("side-menu").style.width = "568px";
      }
    }
    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinksFade 0.5s ease forwards ${
          index / 7 + 0.8
        }s`;
      }
    });
    burger.classList.toggle("toggle");
    document.getElementById("side-menu").classList.toggle("open");
  };
  return (
    <div>
      <nav id="navbar">
        <div
          className="burger"
          onClick={(e) => {
            toggleSideMenu(e);
          }}
        >
          <div className="line1"> </div>
          <div className="line2"> </div>
          <div className="line3"> </div>
        </div>
      </nav>
      <div id="side-menu" className="side-nav">
        <a className="side-link" href="/">
          Home
        </a>
        <a className="side-link" href="/about-us">
          About Us
        </a>
        <a className="side-link" href="/contributors">
          Contributors
        </a>
        <a
          className="side-link"
          target="_blank"
          href="https://editor.p5js.org/rt1301/sketches/D4LziJb9-"
        >
          Sample Template
        </a>
      </div>
    </div>
  );
}
