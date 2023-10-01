import React from 'react';
import * as componentClasses from '../styles/componentClasses';

export default function Education() {
  return (
    <div id="education" className={componentClasses.section}>
      <div className={componentClasses.containerMd}>
        <h2 className={componentClasses.sectionTitle}>Education</h2>
        <ol className={`${componentClasses.containerLg}`}>
          <li className={`${componentClasses.container}`}>
            <div className={`${componentClasses.leftIinner} `}>
              <div className="m-2">
                <p>Oregon State University</p>
              </div>
            </div>
            <div className={componentClasses.rightIinner}>
              <div className="m-2">
                <p>Master of Engineer, Computer Science</p>
                <h2>2017 - 2019</h2>
                <p>Oregon, US</p>
                <br/>
              </div>
            </div>
          </li>
          <li className={`${componentClasses.container}`}>
            <div className={`${componentClasses.leftIinner} `}>
              <div className="m-2">
                <p>National Central Unversity</p>
              </div>
            </div>
            <div className={componentClasses.rightIinner}>
              <div className="m-2">
                <p>Bachelor of Science, Communication Engineering</p>
                <h2>2012 - 2016</h2>
                <p>Taiwan</p>
                <br/>
              </div>
            </div>
          </li>
        </ol>  
      </div>
    </div>
  );
}
