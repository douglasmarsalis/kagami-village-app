import React from 'react';
import '../styles/Home.css'; // Import the CSS file for styling

export default function Home() {
    return (
        <div className="home-container">
            <video className="background-video" autoPlay loop muted>
                <source src="/riceField.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="video-overlay"></div>
            <div className="home-content text-center">
                <h1 className="display-4">Welcome to Kagami Village</h1>
                <h3 className="lead">
                    Experience the beauty of nature and the rich culture of Japan. Whether you are interested in fishing, camping, or relaxing in a traditional Japanese onsen, Kagami Village has something for everyone.
                </h3>
                <button className="btn btn-primary mt-4">Learn More</button>
            </div>
        </div>
    );
}