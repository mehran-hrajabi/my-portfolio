import React from 'react';
import './_homeEducation.scss';

const HomeEducation = () => {
    return (
        <div className="homeEducation" id="education">
            <h1>Education</h1>
            <div className="homeEducation-item">
                <h2>SHARIF UNIVERSITY OF TECHNOLOGY, TEHRAN, IRAN</h2>
                <span>Sep. 2016 - Jan. 2021</span>
                <p>Bachelor of Science / Computer Engineering, Software</p>
            </div>
            <div className="homeEducation-item">
                <h2>AZIN AMJAD HIGH SCHOOL, TEHRAN, IRAN</h2>
                <span>2012 - 2016</span>
                <p>High School Diploma / Physics and Mathematics</p>
            </div>            
        </div>
    );
}

export default HomeEducation;