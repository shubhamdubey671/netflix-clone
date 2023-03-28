import React from "react";
import loadingVideo from "../assets/loader.mp4";
import  '../style/loader.scss'

const Loader = () => {
    return (
        <div className="loader">
            <video
                src={loadingVideo}
                muted
                autoPlay
                loop
                controlsList="nodownload"
            ></video>
            <div className="protection"></div>
        </div>
    );
};

export default Loader;
