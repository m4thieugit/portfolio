import React from 'react';

import './ProjectCard.css';

const ProjectCard = ({ image, altText, title, description, skills, link }) => {
  return (
    <div className="flex flex-col bg-white rounded-3xl lg:w-100 shadow-sm">
      <img
        src={image}
        alt={altText}
        className="w-full lg:w-100 object-contain bg-gray-100 shadow-sm rounded-t-3xl lg:min-h-50 lg:max-h-50"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">{description}</p>
        {skills && (
          <div className="text-sm text-gray-500 mb-4">
            <strong>Compétences acquises :</strong>
            <ul className="list-disc px-6">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          Voir le code sur GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
