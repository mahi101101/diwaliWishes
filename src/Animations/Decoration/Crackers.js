import React, { useEffect, useState } from "react";
import "./Crackers.css";
import LottiePlayer from "react-lottie-player";

const Crackers = () => {
  const [animationData, setAnimationData] = useState();
  const [animationData1, setAnimationData1] = useState();
  const [animationData2, setAnimationData2] = useState();

  useEffect(() => {
    import("../Assests/crackers.json").then(setAnimationData);
    import("../Assests/fireworks.json").then(setAnimationData1);
    import("../Assests/fireworks2.json").then(setAnimationData2);
  }, []);

  return (
    <div className="pop">
      <div className="item1">
        <LottiePlayer
          animationData={animationData1}
          play
          loop
          style={{ height: "30vh" }}
          speed={1.2}
        />
      </div>
      <div className="item2">
        <LottiePlayer
          animationData={animationData1}
          play
          loop
          style={{ height: "30vh" }}
        />
      </div>
      <div className="item3">
        <LottiePlayer
          animationData={animationData2}
          play
          loop
          style={{ height: "30vh" }}
        />
      </div>
      <div className="item4">
        <LottiePlayer
          animationData={animationData}
          play
          loop
          style={{ height: "30vh" }}
          speed={0.7}
        />
      </div>
      <div className="item5">
        <LottiePlayer
          animationData={animationData1}
          play
          loop
          style={{ height: "30vh" }}
        />
      </div>
      <div className="item6">
        <LottiePlayer
          animationData={animationData}
          play
          loop
          style={{ height: "30vh" }}
        />
      </div>
      <div className="item7">
        <LottiePlayer
          animationData={animationData2}
          play
          loop
          style={{ height: "30vh" }}
          speed={1.2}
        />
      </div>
    </div>
  );
};

export default Crackers;
