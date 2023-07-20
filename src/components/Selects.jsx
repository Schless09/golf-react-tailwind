import React from "react";

import golfPic9 from "../assets/golfPic9.jpg";
import golfPic8 from "../assets/golfPic8.jpg";
import golfPic7 from "../assets/golfPic7.jpg";
import golfPic4 from "../assets/golfPic4.jpg";
import golfPic5 from "../assets/golfPic5.jpg";
import golfPic6 from "../assets/golfPic6.jpg";
import SelectsCard from "./SelectsCard";

const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SelectsCard bg={golfPic9} text="Scottsdale" />
      <SelectsCard bg={golfPic8} text="Colorado" />
      <SelectsCard bg={golfPic7} text="Northern California" />
      <SelectsCard bg={golfPic6} text="South Carolina" />
      <SelectsCard bg={golfPic5} text="Florida" />
      <SelectsCard bg={golfPic4} text="Sothern California" />
    </div>
  );
};

export default Selects;
