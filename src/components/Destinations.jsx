// rafce is shortcute //

import React from "react";

import golfPic1 from "../assets/golfPic1.jpg";
import golfPic2 from "../assets/golfPic2.jpg";
import golfPic3 from "../assets/golfPic3.jpg";
import golfPic4 from "../assets/golfPic4.jpg";
import golfPic5 from "../assets/golfPic5.jpg";
import golfPic6 from "../assets/golfPic6.jpg";

const Destinations = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 text-center">
      <h1>All-Inclusive Golf Packages</h1>
      <p className="py-4">Across the US, Caribbean, and Europe</p>
      <div className="grid grid-rows-none md:grid-cols-5 gap-2 md:gap-4 py-4">
        <img
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src={golfPic1}
          alt=""
        />
        <img
          className="w-full h-full object-cover col-span-2"
          src={golfPic2}
          alt=""
        />
        <img
          className="w-full h-full object-cover col-span-2"
          src={golfPic3}
          alt=""
        />
        <img
          className="w-full h-full object-cover col-span-2"
          src={golfPic4}
          alt=""
        />
        <img
          className="w-full h-full object-cover col-span-2"
          src={golfPic5}
          alt=""
        />
        <img
          className="w-full h-full object-cover col-span-2"
          src={golfPic6}
          alt=""
        />
      </div>
    </div>
  );
};

export default Destinations;
