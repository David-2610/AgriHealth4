// src/BackgroundSection.tsx
import React from 'react';
import './BackgroundSection.css';

interface BackgroundSectionProps {
  title: string;
  description: string;
  imageUrl: string;
}

const BackgroundSection: React.FC<BackgroundSectionProps> = ({ title, description, imageUrl }) => {
  return (
    <section
      className="background-section"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="background-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default BackgroundSection;
