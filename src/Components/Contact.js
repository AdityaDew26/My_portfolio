import React from "react";
import './style.css'; // Import the CSS for styling

const Contact = () => {
    return ( <
        section id = "contact"
        className = "contact-section" >
        <
        h2 > Contact Me < /h2> <
        p > Feel free to reach out
        if you have any questions or collaborations in mind! < /p>

        <
        div className = "contact-form-container" >
        <
        form className = "contact-form" >
        <
        div className = "form-group" >
        <
        label htmlFor = "name" > Name < /label> <
        input type = "text"
        id = "name"
        name = "name"
        placeholder = "Your Name"
        required / >
        <
        /div>

        <
        div className = "form-group" >
        <
        label htmlFor = "email" > Email < /label> <
        input type = "email"
        id = "email"
        name = "email"
        placeholder = "Your Email"
        required / >
        <
        /div>

        <
        div className = "form-group" >
        <
        label htmlFor = "message" > Message < /label> <
        textarea id = "message"
        name = "message"
        placeholder = "Your Message"
        required > < /textarea> < /
        div >

        <
        button type = "submit"
        className = "submit-button" > Send Message < /button> < /
        form > <
        /div> < /
        section >
    );
};

export default Contact;