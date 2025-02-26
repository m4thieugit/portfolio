import React from 'react';

import './Presentation.css';

import img_profile from '../../assets/profile.jpg';

const Presentation = () => {
    return (
        <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-4 backdrop-blur-md rounded-3xl bg-gray-100 shadow-sm p-8 gap-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div>
                    <img src={img_profile} alt="Photo de profil" className="rounded-full min-w-10 w-50 object-contain" />
                </div>
                <div className="item-title flex flex-col justify-center md:justify-left text-center md:text-left">
                    <h1 className="md:text-4xl text-3xl text-gray-700">Mathieu GALLAIS DE CHATEAUCROC</h1>
                    <p className="text-lg text-gray-500">Bienvenue sur mon portfolio.</p>
                </div>
            </div>
        </div>
    )
}

export default Presentation;