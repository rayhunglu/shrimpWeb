import React from 'react';
import * as componentClasses from '../styles/componentClasses';

const skills = {
  'Shrimp1' : [
    'Red', 'Kind', 'Size'
  ],
  'Shrimp2' : [
    'Black', 'Kind', 'Size'
  ],
  'Shrimp3' : [
    'Yellow', 'Kind', 'Size'
  ],
  'Shrimp4' : [
    'Blue', 'Kind', 'Size'
  ]
}
export default function Products() {
  return (
    <div id="products" className={componentClasses.section}>
      <div className={componentClasses.containerLg}>
        <h2 className={componentClasses.sectionTitle}>Products</h2>
        <ol className={`${componentClasses.containerLg}`}>
          <li className={`${componentClasses.container} w-full`}>
            <div className={`${componentClasses.leftIinner} `}>
              <div className="m-2 text-xl">
                <h2>Shrimp 1</h2>
              </div>
              <div className={componentClasses.skillWraper}>
                {skills.Shrimp1.map(skill => {
                  return (<li className={componentClasses.skillContainer}>
                    <div className={componentClasses.skill}>{skill}</div>
                  </li>)
                })}
              </div>
            </div>
            
            <div className={componentClasses.rightIinner}>
              <div className="m-2 text-l">
                <p className={componentClasses.titleFont}>Shrimp 1 Name</p>
                <p className={componentClasses.subtitleFont}>California</p>
                <div className={componentClasses.listDetailFont}>
                  <li>Shrimp 1 Description</li>
                </div>
                <br/>
              </div>
            </div>
          </li>
          <li className={`${componentClasses.container}`}>
            <img className="object-scale-down	h-32 w-192" src="/assets/shrimp/shrimp1/1.png" />
            <img className="object-scale-down	h-32 w-192" src="/assets/shrimp/shrimp1/2.png" />
          </li>
          <li className={`${componentClasses.container} w-full`}>
            <div className={`${componentClasses.leftIinner} `}>
              <div className="m-2 text-xl">
                <h2>Shrimp 2</h2>
              </div>
              <div className={componentClasses.skillWraper}>
                {skills.Shrimp2.map(skill => {
                  return (<li className={componentClasses.skillContainer}>
                    <div className={componentClasses.skill}>{skill}</div>
                  </li>)
                })}
              </div>
            </div>
            <div className={componentClasses.rightIinner}>
              <div className="m-2 text-l">
                <p className={componentClasses.titleFont}>Shrimp 2 Name</p>
                <p className={componentClasses.subtitleFont}>California</p>
                <div className={componentClasses.listDetailFont}>
                  <li>Shrimp 2 Description</li>
                </div>
                <br/>
              </div>
            </div>
          </li>
          <li className={`${componentClasses.container}`}>
            <img className="object-scale-down	h-32 w-192" src="/assets/shrimp/shrimp2/1.png" />
          </li>
          <li className={`${componentClasses.container} w-full`}>
            <div className={`${componentClasses.leftIinner} `}>
              <div className="m-2 text-xl">
                <h2>Shrimp 3</h2>
              </div>
              <div className={componentClasses.skillWraper}>
                {skills.Shrimp3.map(skill => {
                  return (<li className={componentClasses.skillContainer}>
                    <div className={componentClasses.skill}>{skill}</div>
                  </li>)
                })}
              </div>
            </div>
            <div className={componentClasses.rightIinner}>
              <div className="m-2 text-l">
                <p className={componentClasses.titleFont}>Shrimp 3 Name</p>
                <p className={componentClasses.subtitleFont}>California</p>
                <div className={componentClasses.listDetailFont}>
                  <li>Shrimp 3 Description</li>
                </div>
                <br/>
              </div>
            </div>
          </li>
          <li className={`${componentClasses.container}`}>
            <img className="object-scale-down	h-32 w-192" src="/assets/shrimp/shrimp3/1.png" />
          </li>
          <li className={`${componentClasses.container} w-full`}>
            <div className={`${componentClasses.leftIinner} `}>
              <div className="m-2 text-xl">
                <h2>Shrimp 4</h2>
              </div>
              <div className={componentClasses.skillWraper}>
                {skills.Shrimp4.map(skill => {
                  return (<li className={componentClasses.skillContainer}>
                    <div className={componentClasses.skill}>{skill}</div>
                  </li>)
                })}
              </div>
            </div>
            <div className={componentClasses.rightIinner}>
              <div className="m-2 text-l">
                <p className={componentClasses.titleFont}>Shrimp 4 Name</p>
                <p className={componentClasses.subtitleFont}>California</p>
                <div className={componentClasses.listDetailFont}>
                  <li>Shrimp 4 Description</li>
                </div>
                <br/>
              </div>
            </div>
          </li>
          <li className={`${componentClasses.container}`}>
            <img className="object-scale-down	h-32 w-192" src="/assets/shrimp/shrimp4/1.png" />
          </li>
        </ol>  
      </div>
    </div>
  );
}
