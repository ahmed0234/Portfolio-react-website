import React from "react";
import "./navbar.css";
import { useState } from 'react';

const Navbar = () => {

  
    const [menuVisible, setMenuVisible]=useState(false);

    const toggleMenu=()=>{
      setMenuVisible(!menuVisible);
      }

      const hidemenu=()=>{
        setMenuVisible(false);
      }

    


    
  


  return (
    
    <div className="navbar container" id="Home">
      <div className="logo">
        <h1>Ahmed Hassan</h1>
      </div>

      <nav>
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Whatido">What I Do</a>
          </li>
          <li>
            <a href="#Resume">Resume</a>
          </li>
          <li>
            <a href="https://ahmedhassan.vercel.app/">Portfolio</a>
          </li>
          <li>
            <a href="#Home">Client</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="icons">
        <div className="wrapper">
          <a href="#">
            <i class="fa-brands fa-x-twitter icon"></i>
          </a>
        </div>

        <div className="wrapper">
          <a href="#">
            <i class="fa-brands fa-facebook icon"></i>
          </a>
        </div>

        <div className="wrapper">
          <a href="#">
            <i class="fa-brands fa-dribbble icon"></i>
          </a>
        </div>
      </div>

      {/* -------------------------------------------------------------------------------------- */}

      <div className="bars" onClick={toggleMenu}>
        <button onClick={toggleMenu}>
           <i class="fa-solid fa-bars"></i>

        </button>
      </div>
    {menuVisible ? (
          <div className="mobile__menu">
          <div className="mobile__wrapper">
            <ul>
              <li>
                <a href="#Home" onClick={hidemenu}>Home</a>
              </li>
              <li>
                <a href="#About" onClick={hidemenu}>About</a>
              </li>
              <li>
                <a href="#Whatido"  onClick={hidemenu}>What I Do</a>
              </li>
              <li>
                <a href="#Resume"  onClick={hidemenu}>Resume</a>
              </li>
              <li>
                <a href="https://ahmedhassan.vercel.app/" onClick={hidemenu} >Portfolio</a>
              </li>
              <li>
                <a href="#Home"  onClick={hidemenu}>Client</a>
              </li>
              <li>
                <a href="#Contact"  onClick={hidemenu}>Contact</a>
              </li>
            </ul>
          </div>
  
          <div className="mobile__icons">
            <a href="#">
              <i class="fa-brands fa-x-twitter icon"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-facebook icon"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-dribbble icon"></i>
            </a>
          </div>
        </div>

    ): null}
      
    </div>
  );
};

export default Navbar;
