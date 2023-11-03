import React, { useEffect, useState } from "react";
import LottiePlayer from "react-lottie-player";
import "./Diwali.css";

const Diwali = () => {
  const [animationData, setAnimationData] = useState();
  const [animationData1, setAnimationData1] = useState();
  useEffect(() => {
    import("../Assests/happy_diwali3.json").then(setAnimationData);
    import("../Assests/diya.json").then(setAnimationData1);
  }, []);
  return (
    <React.Fragment>
      <div className="diwali">
        <LottiePlayer
          animationData={animationData}
          play
          loop
          style={{ height: "58vh" }}
          speed={1}
        />
      </div>
      <div className="diya1">
        <LottiePlayer
          animationData={animationData1}
          play
          loop
          style={{ height: "10vh" }}
        />
      </div>
      <div className="diya2">
        <LottiePlayer
          animationData={animationData1}
          play
          loop
          style={{ height: "10vh" }}
        />
      </div>
    </React.Fragment>
  );
};
export default Diwali;
