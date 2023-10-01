import React from 'react';
import * as componentClasses from '../styles/componentClasses';

const skills = {
  'HPE' : [
    'NodeJS', 'JavaScript', 'React', 'NextJS', 'Tailwind', 'AWS', 'MongoDB', 'MySql', 'Docker Swarm', 'K8S', 'Sumo Logic'
  ],
  'CBT' : [
    'NodeJS', 'JavaScript', 'TypeScript', 'React', 'AWS', 'MongoDB', 'MySql', 'DataDog'
  ],
  'GCOM' : [
    'HTML', 'JavaScript', 'MySQL',  'PHP'
  ]
}
export default function Experience() {
  return (
    <div id="experience" className={componentClasses.section}>
      <div className={componentClasses.containerMd}>
        <h2 className={componentClasses.sectionTitle}>Experience</h2>
        <ol className={`${componentClasses.containerLg}`}>
          <li className={`${componentClasses.container} w-full`}>
            <div className={`${componentClasses.leftIinner} `}>
              <div className="m-2 text-xl">
                <h2>2021/5 - Present</h2>
              </div>
            </div>
            <div className={componentClasses.rightIinner}>
              <div className="m-2 text-l">
                <p className={componentClasses.titleFont}>Software Development Engineer</p>
                <p className={componentClasses.subtitleFont}>Hewlett Packard Enterprise, California</p>
                <div className={componentClasses.listDetailFont}>
                  <li>Designed automatic tenant restore for users by using AWS RDS and Docker Swarm in NodeJS, reducing 95% of manual jobs from the DevOps team.</li>
                  <li>Redesigned cloud portal service from resource usage control, architecture with Load balance and Target Groups, and reporting system by using AWS Lambda to optimize portal service load and performance.</li>
                  <li>Improved web security from XSS, content security, and website access control to protect customers’ data.</li>
                </div>
                <br/>
              </div>
              <div className={componentClasses.skillWraper}>
                {skills.HPE.map(skill => {
                  return (<li className={componentClasses.skillContainer}>
                    <div className={componentClasses.skill}>{skill}</div>
                  </li>)
                })}
              </div>
            </div>
          </li>
          <li className={`${componentClasses.container} w-full`}>
            <div className={`${componentClasses.leftIinner} `}>
              <div className="m-2">
                <h2>2020/2 - 2021/5</h2>
              </div>
            </div>
            <div className={componentClasses.rightIinner}>
              <div className="m-2">
                <p className={componentClasses.titleFont}>Software Development Engineer</p>
                <p className={componentClasses.subtitleFont}>CBT Nuggets, Oregon, United States</p>
                <div className={componentClasses.listDetailFont}>
                  <li>User Management Service Development</li>
                  <li>Service Testing Development.</li>
                  <li>User Platform Development</li>
                </div>
                <br/>
                <br/>
              </div>
              <div className={componentClasses.skillWraper}>
                {skills.CBT.map(skill => {
                  return (<li className={componentClasses.skillContainer}>
                    <div className={componentClasses.skill}>{skill}</div>
                  </li>)
                })}
              </div>
            </div>
          </li>
          <li className={`${componentClasses.container} w-full`}>
            <div className={`${componentClasses.leftIinner} `}>
              <div className="m-2">
                <h2>2017/2 - 2017/6</h2>
              </div>
            </div>
            <div className={componentClasses.rightIinner}>
              <div className="m-2">
                <p className={componentClasses.titleFont}>Application Engineer</p>
                <p className={componentClasses.subtitleFont}>GCOM TECHNOLOGIES CO., Taiwan</p>
                <div className={componentClasses.listDetailFont}>
                  <li>Developed a custom web service for a job board system with PHP, HTML, CSS, MySQL, and JavaScript.</li>
                </div>
                <br/>
              </div>
              <div className={componentClasses.skillWraper}>
                {skills.GCOM.map(skill => {
                  return (<li className={componentClasses.skillContainer}>
                    <div className={componentClasses.skill}>{skill}</div>
                  </li>)
                })}
              </div>
            </div>
          </li>
        </ol>  
      </div>
    </div>
  );
}
