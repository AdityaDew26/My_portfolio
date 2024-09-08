import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // Adjust the scroll position as needed
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return ( <
        div className = { `container ${scrolling ? 'scrolled' : ''}` } >
        <
        div className = "logo" >
        <
        h1 > AD. < /h1> < /
        div > <
        div className = "item" >
        <
        ul >
        <
        li > < Link to = "/"
        className = 'Link' > Home < /Link></li >
        <
        li > < Link to = "/About"
        className = 'Link' > About me < /Link></li >
        <
        li > < Link to = "/Portfolio"
        className = 'Link' > Portfolio < /Link></li >
        <
        li > < Link to = "/contact"
        className = 'Link' > Contact us < /Link></li >
        <
        /ul> < /
        div > <
        /div>
    );
}

export default Navbar;