import React from 'react';
import './style.css';
import { GiTicTacToe } from "react-icons/gi";
import { BsBarChartLine } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { CgNotes } from "react-icons/cg";

const Portifolio = () => {

    return ( <
        section id = "projects"
        className = "projects" >
        <
        h2 > Projects < /h2> <
        div className = "project-list" >
        <
        div className = "project-item" >
        <
        GiTicTacToe className = 'pic' / >
        <
        h3 > Tic Tac Toe Game < /h3> <
        p > Description of the project. < /p> < /
        div > <
        div className = "project-item" >
        <
        BsBarChartLine className = 'pic' / >
        <
        h3 > Sales Forecasting < /h3> <
        p > Description of the project. < /p> < /
        div > <
        div className = "project-item" >
        <
        MdOutlineMail className = 'pic' / >
        <
        h3 > Automatic Email Generator < /h3> <
        p > Description of the project. < /p> < /
        div >
        <
        div className = "project-item" >
        <
        CgNotes className = 'pic' / >
        <
        h3 > Notes Making < /h3> <
        p > Description of the project. < /p> < /
        div > <
        /div> < /
        section >
    );
}


export default Portifolio