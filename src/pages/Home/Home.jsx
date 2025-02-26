import React from 'react';
import './Home.css';

import Presentation from '../../components/Presentation';
import Contact from '../../components/Contact';
import SocialNetworks from '../../components/SocialNetworks';
import Description from '../../components/Description';
import Location from '../../components/Location';
import Technologies from '../../components/Technologies';
import Formations from '../../components/Formations';
import Projets from '../../components/Projets';

const Home = () => {
    return (
        <div className="h-full w-full flex items-center justify-center">
            <div className="grid h-full w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 p-8 xl:p-16">

                {/* Première ligne */}
                <Presentation />

                {/* Deuxième ligne */}
                <Technologies />
                <Contact />

                <SocialNetworks />
                <Description />
                <Projets />

                <Location />
                <Formations />



                {/* Troisième ligne */}
            </div>
        </div>
    );
};

export default Home;
