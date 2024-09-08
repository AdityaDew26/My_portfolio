import React from 'react';
import './style.css';

const Skills = () => {
    return ( <
        section id = "skills"
        className = "skills-section" >
        <
        h2 > My Skills < /h2> <
        div className = "skills-list" >
        <
        div className = "skill-item" >
        <
        h3 > HTML < /h3> <
        div className = "progress-bar" >
        <
        div className = "progress"
        style = {
            { width: '90%' } } > < /div> <
        /div> <
        /div> <
        div className = "skill-item" >
        <
        h3 > CSS < /h3> <
        div className = "progress-bar" >
        <
        div className = "progress"
        style = {
            { width: '85%' } } > < /div> <
        /div> <
        /div> <
        div className = "skill-item" >
        <
        h3 > JavaScript < /h3> <
        div className = "progress-bar" >
        <
        div className = "progress"
        style = {
            { width: '80%' } } > < /div> <
        /div> <
        /div> <
        div className = "skill-item" >
        <
        h3 > React < /h3> <
        div className = "progress-bar" >
        <
        div className = "progress"
        style = {
            { width: '75%' } } > < /div> <
        /div> <
        /div> <
        div className = "skill-item" >
        <
        h3 > Node.js < /h3> <
        div className = "progress-bar" >
        <
        div className = "progress"
        style = {
            { width: '70%' } } > < /div> <
        /div> <
        /div> <
        /div> <
        /section>
    );
};

export default Skills;