import React from 'react';
import * as componentClasses from '../styles/componentClasses';

export default function Welcome() {
  return (
    <div className={`${componentClasses.section} pt-40`}>
      <div className={`${componentClasses.containerLg} grid grid-cols-3 gap-x-8 bg-inherit`}>
        <img className="object-scale-down	h-96 w-192" src="/assets/photo.jpg">
        </img>
        <div className={`${componentClasses.rightIinner} py-10 text-6xl col-span-2`}>
          <p>Professional shrimp breeder</p>
          <br/>
          <h1>Shrimp enthusiast</h1>
          <h1>Keep collecting high end shrimps</h1>       
        </div>
      </div>
    </div>
  );
}
