import React, { useState } from "react";
import { FaCog } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";

import { themes } from "../data";
import ThemeItem from "./ThemeItem";
import "./themes.scss";

const Themes = () => {
  const [showSwitcher, setShowSwitcher] = useState(false);
  return (
    <div>
      <div className={`${showSwitcher ? "show-switcher" : ""} style__switcher`}>
        <div className="style__switcher-toggler">
          <FaCog />
        </div>
        <div className="theme__toggler">
          <BsMoon />
        </div>
        <h3 className="style__switcher-tittle">Style Switcher</h3>
        <div className="style__switcher-items">
          {themes.map((theme) => (
            <ThemeItem key={theme.id} {...theme} />
          ))}
        </div>
        <div
          className="style__switcher-close"
          onClick={() => setShowSwitcher(!showSwitcher)}
        >
          &times;
        </div>
      </div>
    </div>
  );
};

export default Themes;
