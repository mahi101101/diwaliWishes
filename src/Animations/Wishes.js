import React from "react";
import Rangoli from "./Decoration/Rangoli";
import CitySkyLines from "./Decoration/CitySkyLines";
import Diwali from "./Decoration/Diwali";
import Rocket from "./Decoration/Rocket";

import "./Wishes.css";

const Wishes = () => {
  return (
    <div className="main">
      <Rocket/>
      <Rangoli />
      <CitySkyLines />
      <Diwali/>
    </div>
  );
};

export default Wishes;
