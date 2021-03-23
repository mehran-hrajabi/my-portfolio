import React from 'react';
import Record from '../Record/Record';
import './_homeEducation.scss';

const HomeEducation = () => {
    return (
        <div className="homeEducation" id="education">
            <h1>Education</h1>
            <Record link="http://www.en.sharif.edu/" title="SHARIF UNIVERSITY OF TECHNOLOGY, TEHRAN, IRAN" date="Sep. 2016 - Feb. 2021">
                <p>Bachelor of Science / Computer Engineering, Software</p>
            </Record>

            <Record link="http://www.azinamjad.com/" title="AZIN AMJAD HIGH SCHOOL, TEHRAN, IRAN" date="2012 - 2016">
                <p>High School Diploma / Physics and Mathematics</p>
            </Record>        
        </div>
    );
}

export default HomeEducation;