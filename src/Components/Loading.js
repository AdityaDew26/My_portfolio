import React, { useEffect, useState } from 'react';
import './style.css'; // Import the CSS file for the animation

const Loading = ({ onLoadingComplete }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a 5-6 second loading time
        const timer = setTimeout(() => {
            setLoading(false);
            onLoadingComplete(); // Notify when loading is complete
        }, 1000); // Adjust time as needed

        return () => clearTimeout(timer); // Clean up timer on unmount
    }, [onLoadingComplete]);

    if (!loading) return null;

    return ( <
        div className = "loading-container" >
        <
        div className = "loading-spinner" > < /div> < /
        div >
    );
};

export default Loading;