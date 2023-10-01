import React from 'react';
import * as componentClasses from '../styles/componentClasses';

export default function About() {
  return (
    <div id="about" className={`${componentClasses.section}`}>
      <div className={componentClasses.containerLg}>
        <h2 className={`${componentClasses.sectionTitle}`}>About Me</h2>
        <div className={`${componentClasses.containerLg} text-xl`}>
          <p>Professional shrimp breeder</p>
          <br/>
          <h1>Shrimp enthusiast</h1>
          <h1>Keep collecting high end shrimps</h1>
        </div>
      </div>
    </div>

  );
}
