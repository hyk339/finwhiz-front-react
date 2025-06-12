import "./Header.css";
import "./SideMenu.css";
import React, { useState } from "react";

const Header = ({title,leftChild,rightChild}) => {



  return (
    <header className="Header">
      <div className="header_left">{leftChild}</div>
      <div className="header_center">{title}</div>
      <div className="header_right">{rightChild}</div>
      
    </header>
  );
}

export default Header;