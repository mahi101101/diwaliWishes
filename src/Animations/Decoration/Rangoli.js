import React, { useEffect, useState } from "react";
import LottiePlayer from "react-lottie-player";

import "./Rangoli.css";

const Rangoli = () => {
  const [animationData, setAnimationData] = useState();
  useEffect(() => {
    import("../Assests/Rangoli.json").then(setAnimationData);
  }, []);
  if (!animationData) return <div>Loading...</div>;
  return (
    <React.Fragment>
      <div className="rangoli-side-left">
        <LottiePlayer
          animationData={animationData}
          play
          loop
          style={{ height: "80vh" }}
          speed={1.2}
        />
      </div>
      <div className="rangoli-side-right">
        <LottiePlayer
          animationData={animationData}
          play
          loop
          style={{ height: "80vh" }}
          direction={-1}
          speed={1.2}
        />
      </div>
    </React.Fragment>
  );
};

export default Rangoli;
