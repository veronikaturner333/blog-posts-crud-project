import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from '../components/header/Header.js'; // Import the missing Header component
import HomeTable from '../components/table/HomeTable.js'; // Import the missing Table component

//home page will feature the header and the table
export function Home() {
    return (
            <div>
                <Header />
                <HomeTable />
            </div>
        
    )
}

export default Home;