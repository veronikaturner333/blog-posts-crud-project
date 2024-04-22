import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutMe from '../components/aboutme/AboutMe.js';

//about me page will feature an about me component
export function About() {
    return (
            <div>
                <AboutMe />
            </div>
        
    )
}

export default About;