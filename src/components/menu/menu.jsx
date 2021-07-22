import React from 'react'
import "./menu.scss"

export const menu = (props) => {
  return (
    <div className={"menu " +(props.menuOpen && " active")}>
      <ul>
        <li onClick={() => props.setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => props.setMenuOpen(false)}>
          <a href="#portofolio">Projects</a>
        </li>
        <li onClick={() => props.setMenuOpen(false)}>
          <a href="#works">Skills</a>
        </li>
        <li onClick={() => props.setMenuOpen(false)}>
          <a href="#testimonials">Resume</a>
        </li>
        <li onClick={() => props.setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default menu
