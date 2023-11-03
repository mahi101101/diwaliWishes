import React, { useEffect, useState } from "react";
import LottiePlayer from "react-lottie-player";
import './Rocket.css'

const Rocket = ()=>{
    const [animationData, setAnimationData] = useState();
    useEffect(()=>{
        import("../Assests/rocket2.json").then(setAnimationData);
    },[]);
    return <div className="rocket">
        <LottiePlayer animationData={animationData} play loop style={{height:'24vh'}}/>
    </div>;
}

export default Rocket;