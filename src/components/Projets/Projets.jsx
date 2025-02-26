import React from 'react';

import './Projets.css';

import ProjectCard from '../ProjectCard';

import img_argentbank from '../../assets/projets/argentbank.png';
import img_kasa from '../../assets/projets/kasa.png';
import img_ohmyfood from '../../assets/projets/ohmyfood.png';

const Projets = () => {
  const projects = [
    {
      image: img_argentbank,
      altText: 'Illustration Argentbank',
      title: 'Argentbank - Implémentation du front-end d\'une application bancaire avec React',
      description: 'Transition d\'un site statique HTML5/CSS3 vers React.\n- Création d\'un système d\'authentification\n- Mise en place d\'un store avec Redux',
      skills: ['Maitriser le framework React', 'Reproduire une maquette', 'Maitriser Redux'],
      link: 'https://github.com/m4thieugit/argentbank.openclassrooms'
    },
    {
      image: img_kasa,
      altText: 'Illustration Kasa',
      title: 'Kasa - Création d\'une application web de location immobilière avec React',
      description: 'Création d\'une application web React en partant d\'une maquette figma.\n- Création d\'une application web en utilisant React',
      skills: ['Maitriser le framework React', 'Reproduire une maquette'],
      link: 'https://github.com/m4thieugit/kasa.openclassrooms'
    },
    {
      image: img_ohmyfood,
      altText: 'Illustration ohmyfood',
      title: 'Ohmyfood - Amélioration de l\'interface d\'un site mobile avec des animations CSS',
      description: 'Reproduction d\'un site en partant d\'une maquette figma.\n- Amélioration de l\'interface d\'un site avec des animations en partant sur du mobile-first.',
      skills: ['Maitriser le framework React', 'Reproduire une maquette'],
      link: 'https://github.com/m4thieugit/ohmyfood.openclassrooms'
    }
  ];

  return (
    <div className="row-span-2 col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 backdrop-blur-md rounded-3xl bg-gray-100 shadow-sm flex flex-col p-8 gap-6">
      <div className="item-title">
        <h2 className="md:text-4xl text-3xl text-gray-700">Mes projets</h2>
        <p className="text-lg text-gray-500">Les projets sur lesquels j'ai travaillé.</p>
      </div>
      <div className="flex flex-col flex-wrap lg:flex-row justify-center items-center lg:justify-start lg:items-start gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projets;