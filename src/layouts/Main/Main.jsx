import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import './Main.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Main = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Main;