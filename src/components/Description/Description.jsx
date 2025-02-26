import React from 'react';

import './Description.css';
const Description = () => {
    return (
        <div className="min-w-full col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 backdrop-blur-md rounded-3xl bg-gray-100 shadow-sm flex flex-col p-8 gap-10">
            <div className="item-title">
                <h2 className="md:text-4xl text-3xl text-gray-700 mb-4">A propos</h2>
                <p className="text-lg text-gray-500">A l'âge de 12ans et passionné par les jeux vidéo, j'ai commencé à coder mes propres mods pour améliorer l'expérience des jeux auxquels je jouais. Mon objectif était : apporter du nouveau contenu et rendre le gameplay plus amusant pour la communauté.
                    <br />
                    <br />
                    Par la suite, j'ai codé plusieurs APIs, sites web et applications en autodidacte, en utilisant Node.js pour le backend. Cette passion m'a amené à poursuivre des études dans le développement web afin de perfectionner mes compétences.
                    <br />
                    <br />
                    Pendant mon alternance chez PVP SAS, j'ai consolidé mes acquis tout en développant de nouvelles compétences. J'ai réalisé plusieurs projets en autonomie, notamment :
                    <br />
                    <br />
                    - La création et la réalisation de sites internet avec WordPress (sites vitrines et e-commerce)
                    - Le développement de solutions SaaS (logiciel permettant la personnalisation, programmation et envoi de newsletters)
                    - La mise en place d'un ERP (toujours en cours)
                    <br />
                    <br />
                    Ces expériences m'ont permis de gagner en polyvalence et de renforcer mon expertise dans le domaine.</p>
            </div>
        </div>
    );
}

export default Description;
