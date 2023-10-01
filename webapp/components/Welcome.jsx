import React from 'react';
import * as componentClasses from '../styles/componentClasses';

export default function Welcome() {
  return (
    <div className={`${componentClasses.section} pt-40`}>
      <div className={`${componentClasses.containerLg} p-0`}>
        <div className="h-30 object-center">
          <h1 className="text-7xl object-center">Shrimp Enthusiast</h1>
        </div>
        <img className="object-scale-down w-full object-center" src="/assets/main.png">
        </img>
      </div>
    </div>
  );
}
