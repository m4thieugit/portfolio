import React from 'react';

import './Formations.css';

import img_openclassrooms from '../../assets/formations/openclassrooms.png';
import img_etna from '../../assets/formations/etna.png';

const Formations = () => {
    return (
        <div className="min-w-full col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 backdrop-blur-md rounded-3xl bg-gray-100 shadow-sm flex flex-col p-8 gap-10">
            <div className="item-title">
                <h2 className="md:text-4xl text-3xl text-gray-700">Mes formations</h2>
                <p className="text-lg text-gray-500">Les formations que j'ai effectuée dans le développement informatique.</p>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 bg-gray-200 rounded-md px-2">
                    <img src={img_openclassrooms} alt="OpenClassrooms" className="w-5 object-contain" />
                    <p>Alternance : Développeur Intégrateur Web<br />1 an et 6 mois</p>
                </div>
                <div className="flex items-center gap-4 bg-gray-200 rounded-md px-2">
                    <img src={img_etna} alt="ETNA" className="w-5 object-contain" />
                    <p>Architecte logiciel, développeur d'applications<br />1 an</p>
                </div>
            </div>
        </div>
    );
}

export default Formations;
