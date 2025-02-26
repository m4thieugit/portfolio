import React from 'react';

import './Navbar.css';

const Navbar = () => {
    return;
    return (
        <>
            <nav className="navbar my-8 z-50 flex justify-center">
                <ul className="bg-gray-100 max-w-fit rounded-full p-1 shadow-sm flex items-center justify-center gap-2">
                    <li className="bg-white rounded-full py-2 px-4"><a href="#">Accueil</a></li>
                    <li className="rounded-full py-2 px-4"><a href="#">Projets</a></li>
                    <li className="rounded-full py-2 px-4"><a href="#">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;