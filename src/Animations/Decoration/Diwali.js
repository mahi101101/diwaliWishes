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
      <div className="wish">
        <LottiePlayer
          animationData={animationData1}
          play
          loop
          style={{ height: "10vh" }}
          className="diya1"
        />

        <LottiePlayer
          animationData={animationData}
          play
          loop
          style={{ height: "58vh" }}
          speed={1}
          className="diwali"
        />

        <LottiePlayer
          animationData={animationData1}
          play
          loop
          style={{ height: "10vh" }}
          className="diya2"
        />
      </div>
    </React.Fragment>
  );
};
export default Diwali;
