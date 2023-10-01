import React from 'react';
import * as componentClasses from '../styles/componentClasses';

export default function Awards() {
  return (
    <div id="awards" className={componentClasses.section}>
      <div className={componentClasses.containerLg}>
        <h2 className={componentClasses.sectionTitle}>Awards</h2>
        <ol className={`${componentClasses.containerLg}`}>
          <li className={`${componentClasses.container}`}>
            <div className={`${componentClasses.leftIinner} `}>
              <div className="m-2">
                <p>2022/10</p>
              </div>
            </div>
            <div className={componentClasses.rightIinner}>
              <div className="m-2">
                <p>Aquashella TX 2022</p>
                <br/>
              </div>
            </div>
          </li>
          <li className={`${componentClasses.container}`}>
            <img className="object-scale-down	h-96 w-192" src="/assets/aquashellaTX22/1.jpg">
            </img>
          </li>
          <li className={`${componentClasses.container}`}>
            <div className={`${componentClasses.leftIinner} `}>
              <div className="m-2">
              <p>2023/05</p>
              </div>
            </div>
            <div className={componentClasses.rightIinner}>
              <div className="m-2">
                <p>Aquashella TX 2022</p>
                <p>● 2023 Best of Show</p>
                <br/>
              </div>
            </div>
          </li>
          <li className={`${componentClasses.container}`}>
            <img className="object-scale-down	h-48 w-192" src="/assets/aquashellaTX23/1.png"/>
            <img className="object-scale-down	h-48 w-192" src="/assets/aquashellaTX23/2.png"/>
            <img className="object-scale-down	h-48 w-192" src="/assets/aquashellaTX23/3.png"/>
            <img className="object-scale-down	h-48 w-192" src="/assets/aquashellaTX23/4.png"/>
          </li>
        </ol>  
      </div>
    </div>
  );
}
