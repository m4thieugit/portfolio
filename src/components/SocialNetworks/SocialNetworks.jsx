import React from 'react';

import './SocialNetworks.css';

const SocialNetworks = () => {
    return (
        <div className="min-w-full col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 backdrop-blur-md rounded-3xl bg-gray-100 shadow-sm flex flex-col p-8 gap-10">
            <div className="item-title">
                <h2 className="md:text-4xl text-3xl text-gray-700">Mes réseaux-sociaux</h2>
            </div>
            <div className="flex flex-row gap-4">
                <a href="https://www.github.com/m4thieugit" alt="GitHub" target="_blank">
                    <i className="fa-brands fa-github text-[62px] text-gray-600"></i>
                </a>
                <a href="https://www.linkedin.com/in/mathieu-gallais-de-chateaucroc" alt="LinkedIn" target="_blank">
                    <i className="fa-brands fa-linkedin text-[62px] text-gray-600"></i>
                </a>
            </div>
        </div>
    );
}

export default SocialNetworks;
