import React from 'react';
import Marquee from 'react-fast-marquee';

import './Technologies.css';

import img_html5 from '../../assets/technologies/html5.png';
import img_css3 from '../../assets/technologies/css3.png';
import img_javascript from '../../assets/technologies/javascript.png';
import img_react from '../../assets/technologies/react.png';
import img_redux from '../../assets/technologies/redux.png';
import img_nodejs from '../../assets/technologies/nodejs.png';
import img_tailwindcss from '../../assets/technologies/tailwindcss.png';


const Technologies = () => {
    return (
        <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 backdrop-blur-md rounded-3xl bg-gray-100 shadow-sm flex flex-col p-8 gap-6">
            <div className="item-title">
                <h2 className="md:text-4xl text-3xl text-gray-700">Mes compétences</h2>
                <p className="text-lg text-gray-500">Voici la liste des technologies que je maitrise.</p>
            </div>
            <Marquee gradient="true" className="h-full" gradientColor='var(--color-gray-100)'>
                <img src={img_html5} alt="HTML 5" className="h-32 w-32 object-contain mx-4"></img>
                <img src={img_css3} alt="CSS 3" className="h-32 w-32 object-contain mx-4"></img>
                <img src={img_javascript} alt="JavaScript" className="h-32 w-32 object-contain mx-4"></img>
                <img src={img_react} alt="React" className="h-32 w-32 object-contain mx-4"></img>
                <img src={img_redux} alt="Redux" className="h-32 w-32 object-contain mx-4"></img>
                <img src={img_nodejs} alt="Node.js" className="h-32 w-32 object-contain mx-4"></img>
                <img src={img_tailwindcss} alt="Tailwind CSS" className="h-32 w-32 object-contain mx-4"></img>
            </Marquee>
        </div>
    )
}

export default Technologies;