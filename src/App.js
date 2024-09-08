import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Portifolio from './Components/Portifolio';
import Clients from './Components/Clients';
import Contact from './Components/Contact';
import Loading from './Components/Loading';

function App() {
    const [loadingComplete, setLoadingComplete] = useState(false);

    return ( <
        div className = { `app-container ${loadingComplete ? 'content-visible' : ''}` } > {!loadingComplete && < Loading onLoadingComplete = {
                () => setLoadingComplete(true)
            }
            />} {
            loadingComplete && ( <
                >
                <
                Navbar / >
                <
                Hero / >
                <
                About / >
                <
                Skills / >
                <
                Portifolio / >
                <
                Clients / >
                <
                Contact / >
                <
                />
            )
        } <
        /div>
    );
}

export default App;