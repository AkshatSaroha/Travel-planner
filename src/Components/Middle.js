import React, { useState, useEffect } from "react";
import "../Styles/middle.css";
import { Link } from "react-router-dom";
import Header from "./Header";

function Middle() {
    // List of video sources
    const videoSources = [
        "../Assets/video1.mp4",
        "../Assets/video2.mp4",
        "../Assets/video3.mp4",
        "../Assets/video4.mp4",
    ];

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="video-container" id="videoss">
             <Header/>
            {videoSources.map((src, index) => (
                <div
                    key={index}
                    className="video-wrapper"
                    style={{
                        display: index === currentVideoIndex ? "block" : "none",
                    }}
                >
                    <video
                        src={src}
                        id="video-slider"
                        loop
                        autoPlay
                        playsInline
                        muted
                    >
                        Your browser does not support the video tag.
                    </video>
                    <div className="text-overlay">
                        <h1>Travel Ease</h1>
                        Build, organize, and map your itineraries in a free travel app designed for vacations & road trips
                        <br/>
                        <Link to={"/planning"}><button className="btn" >Start Planning</button></Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Middle;
