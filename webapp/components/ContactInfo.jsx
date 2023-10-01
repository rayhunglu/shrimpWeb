import React from 'react';
import * as componentClasses from '../styles/componentClasses';

export default function ContactInfo() {
  return (
    <div id="contactInfo" className={`${componentClasses.section}`}>
      <div className={componentClasses.containerLg}>
        <h2 className={`${componentClasses.sectionTitle}`}>Contact Me</h2>
        <div className={`${componentClasses.containerLg} text-xl`}>
          <ul>
            <li>
              <a className="bg-transparent" href="https://www.instagram.com/shrimp_insanity">
                <img className="bg-transparent" src="/assets/logo-icon-instagram.png" alt="Logo" class="w-8 h-8" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

  );
}
