import React from 'react';
import './style.css';
import profilePic from '../Assets/Profile1.png';
import VideoBg from '../Assets/VideoBg2.mp4';
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa6";




const Hero = () => {
    return ( <
        div className = "hero" >
        <
        video autoPlay muted loop className = "hero-video" >
        <
        source src = { VideoBg }
        type = "video/mp4" / >
        Your browser does not support the video tag. <
        /video> <
        div className = "content" >
        <
        img src = { profilePic }
        alt = "Profile"
        className = "profile" /
        >
        <
        h1 > Aditya < br / > Dewangan < /h1>  <
        p > Software Developer < /p> <
        br / > < br / >
        <
        ul className = "social-media-icons" >
        <
        li > < h3 > Follow Us < /h3></li >
        <
        li > < CiFacebook className = "social-icon" / > < /li> <
        li > < FaInstagram className = "social-icon" / > < /li> <
        li > < CiLinkedin className = "social-icon" / > < /li> <
        li > < FaTwitter className = "social-icon" / > < /li> < /
        ul >

        <
        /
        div > < /
        div >
    );
}

export default Hero;